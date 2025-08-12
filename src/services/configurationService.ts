import * as vscode from 'vscode';

interface AutoLoadXConfig {
  whitelist?: string[];
  blacklist?: string[];
  customMappings?: Record<string, string[]>;
}

export function getAutoLoadXConfig(): AutoLoadXConfig {
  const config = vscode.workspace.getConfiguration('autoLoadX');
  return {
    whitelist: config.get<string[]>('whitelist'),
    blacklist: config.get<string[]>('blacklist'),
    customMappings: config.get<Record<string, string[]>>('customMappings'),
  };
}
