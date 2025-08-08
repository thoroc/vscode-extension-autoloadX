import * as vscode from 'vscode';
import { AutoLoadXLogger } from './extensionManager';

export interface ExtensionActionResult {
  id: string;
  displayName: string;
  action: 'enable' | 'disable';
  success: boolean;
  error?: string;
}

export async function handleExtensionActions(
  actions: { id: string; displayName: string; action: 'enable' | 'disable' }[],
  logger: AutoLoadXLogger,
): Promise<ExtensionActionResult[]> {
  const results: ExtensionActionResult[] = [];
  for (const act of actions) {
    try {
      if (act.action === 'enable') {
        const ext = vscode.extensions.getExtension(act.id);
        if (!ext) throw new Error('Extension not found');
        if (!ext.isActive) await ext.activate();
        results.push({ ...act, success: true });
        logger.log(`Enabled: ${act.displayName}`);
      } else {
        await vscode.commands.executeCommand('workbench.extensions.action.disableExtension', act.id);
        results.push({ ...act, success: true });
        logger.log(`Disabled: ${act.displayName}`);
      }
    } catch (err: any) {
      results.push({ ...act, success: false, error: err.message });
      logger.log(`Error (${act.action}): ${act.displayName} - ${err.message}`);
      vscode.window.showErrorMessage(`AutoLoadX: Failed to ${act.action} ${act.displayName}: ${err.message}`);
    }
  }
  return results;
}

export function notifySummary(results: ExtensionActionResult[]) {
  const succeeded = results.filter((r) => r.success).map((r) => r.displayName);
  const failed = results.filter((r) => !r.success).map((r) => `${r.displayName} (${r.error})`);
  let message = '';
  if (succeeded.length) message += `Succeeded: ${succeeded.join(', ')}. `;
  if (failed.length) message += `Failed: ${failed.join(', ')}.`;
  vscode.window.showInformationMessage(`AutoLoadX: Extension actions summary. ${message.trim()}`);
}
