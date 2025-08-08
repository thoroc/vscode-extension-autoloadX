import * as fs from 'fs';
import * as vscode from 'vscode';

export interface RecommendationResult {
  extensionsToEnable: string[];
  extensionsToDisable: string[];
}

export function loadDefaultMappings(mappingsPath: string): Record<string, string[]> {
  const raw = fs.readFileSync(mappingsPath, 'utf-8');
  return JSON.parse(raw);
}

export function getInstalledExtensions(): string[] {
  return vscode.extensions.all.map((ext) => ext.id);
}

export function mergeMappings(
  defaultMappings: Record<string, string[]>,
  customMappings?: Record<string, string[]>,
): Record<string, string[]> {
  if (!customMappings) return { ...defaultMappings };
  // For each key in customMappings, replace the default mapping for that key
  const merged = { ...defaultMappings };
  for (const key of Object.keys(customMappings)) {
    merged[key] = customMappings[key];
  }
  return merged;
}

export function recommendExtensions(
  detectedContexts: string[],
  defaultMappings: Record<string, string[]>,
  installedExtensions: string[],
  managedExtensions: string[],
  whitelist: string[] = [],
  blacklist: string[] = [],
  customMappings?: Record<string, string[]>,
): RecommendationResult {
  const mappings = mergeMappings(defaultMappings, customMappings);
  const recommended = new Set<string>();
  for (const context of detectedContexts) {
    const extIds = mappings[context] || [];
    extIds.forEach((id) => {
      if (!blacklist.includes(id)) recommended.add(id);
    });
  }
  // Recommend all extensions from the mapping, not just installed ones
  const extensionsToEnable = Array.from(recommended).filter((id) => !blacklist.includes(id));
  const extensionsToDisable = managedExtensions.filter(
    (id) => !recommended.has(id) && !whitelist.includes(id) && installedExtensions.includes(id),
  );
  return { extensionsToEnable, extensionsToDisable };
}
