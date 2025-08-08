import * as vscode from 'vscode';

export interface ApprovalPromptOptions {
  extensionsToEnable: { id: string; displayName: string }[];
  extensionsToDisable: { id: string; displayName: string }[];
}

export async function showApprovalPrompt(options: ApprovalPromptOptions): Promise<'apply' | 'cancel'> {
  const enableList = options.extensionsToEnable.length
    ? options.extensionsToEnable.map((e) => `• ${e.displayName}`).join('\n')
    : 'None';
  const disableList = options.extensionsToDisable.length
    ? options.extensionsToDisable.map((e) => `• ${e.displayName}`).join('\n')
    : 'None';

  const message = `**Extensions to Enable:**\n${enableList}\n\n**Extensions to Disable:**\n${disableList}`;

  const result = await vscode.window.showInformationMessage(
    'AutoLoadX: Recommended Changes\n\n' + message,
    { modal: true },
    'Apply',
    'Cancel',
  );
  return result === 'Apply' ? 'apply' : 'cancel';
}
