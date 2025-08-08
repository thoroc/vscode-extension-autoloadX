import * as vscode from 'vscode';

export class AutoLoadXLogger {
  private channel: vscode.OutputChannel;
  constructor() {
    this.channel = vscode.window.createOutputChannel('AutoLoadX');
  }
  log(message: string) {
    this.channel.appendLine(message);
  }
}

export async function enableExtensions(extensions: { id: string; displayName: string }[], logger: AutoLoadXLogger) {
  for (const extInfo of extensions) {
    const ext = vscode.extensions.getExtension(extInfo.id);
    if (ext && !ext.isActive) {
      try {
        await ext.activate();
        logger.log(`Enabled: ${extInfo.displayName}`);
      } catch (err: any) {
        logger.log(`Failed to enable ${extInfo.displayName}: ${err.message}`);
      }
    }
  }
}

export async function disableExtensions(extensions: { id: string; displayName: string }[], logger: AutoLoadXLogger) {
  for (const extInfo of extensions) {
    try {
      await vscode.commands.executeCommand('workbench.extensions.action.disableExtension', extInfo.id);
      logger.log(`Disabled: ${extInfo.displayName}`);
    } catch (err: any) {
      logger.log(`Failed to disable ${extInfo.displayName}: ${err.message}`);
    }
  }
}

export function dismissDialog() {
  // VSCode modal dialogs are dismissed automatically after button click
}
