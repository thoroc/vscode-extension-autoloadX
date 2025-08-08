import * as vscode from 'vscode';

const TEST_EXTENSION_ID = 'thoroc-autoloadX';

export async function enableExtension(): Promise<boolean> {
  const ext = vscode.extensions.getExtension(TEST_EXTENSION_ID);
  if (!ext) {
    vscode.window.showErrorMessage(`Extension ${TEST_EXTENSION_ID} not found.`);
    return false;
  }
  if (ext.isActive) {
    vscode.window.showInformationMessage(`Extension ${TEST_EXTENSION_ID} is already enabled.`);
    return true;
  }
  try {
    await ext.activate();
    vscode.window.showInformationMessage(`Extension ${TEST_EXTENSION_ID} enabled successfully.`);
    return true;
  } catch (err: any) {
    vscode.window.showErrorMessage(`Failed to enable extension: ${err.message}`);
    return false;
  }
}

export async function disableExtension(): Promise<boolean> {
  // VSCode API does not provide a direct way to disable an extension programmatically.
  // This is a known limitation. We can prompt the user to disable via command palette as a workaround.
  try {
    await vscode.commands.executeCommand('workbench.extensions.action.disableExtension', TEST_EXTENSION_ID);
    vscode.window.showInformationMessage(`Requested to disable extension ${TEST_EXTENSION_ID}.`);
    return true;
  } catch (err: any) {
    vscode.window.showErrorMessage(`Failed to disable extension: ${err.message}`);
    return false;
  }
}

export async function testEnableDisableFlow() {
  const ext = vscode.extensions.getExtension(TEST_EXTENSION_ID);
  if (!ext) {
    vscode.window.showErrorMessage(`Extension ${TEST_EXTENSION_ID} not found.`);
    return;
  }
  if (ext.isActive) {
    await disableExtension();
  } else {
    await enableExtension();
  }
}
