jest.mock('vscode');
import * as vscode from 'vscode';
import { handleExtensionActions, notifySummary } from './extensionErrorHandler';
import { AutoLoadXLogger } from './extensionManager';

describe('extensionErrorHandler', () => {
  let logger: AutoLoadXLogger;
  beforeEach(() => {
    logger = new AutoLoadXLogger();
    (logger as any).channel = { appendLine: jest.fn() };
    (vscode.window.showErrorMessage as jest.Mock).mockClear();
    (vscode.window.showInformationMessage as jest.Mock).mockClear();
    (vscode.extensions.getExtension as jest.Mock).mockReset();
    (vscode.commands.executeCommand as jest.Mock).mockReset();
  });

  it('handles enable/disable actions and logs errors', async () => {
    (vscode.extensions.getExtension as jest.Mock).mockReturnValue({
      isActive: false,
      activate: jest.fn().mockResolvedValue(undefined),
    });
    (vscode.commands.executeCommand as jest.Mock).mockResolvedValue(undefined);
    const actions: { id: string; displayName: string; action: 'enable' | 'disable' }[] = [
      { id: 'ms-python.python', displayName: 'Python', action: 'enable' },
      { id: 'golang.go', displayName: 'Go', action: 'disable' },
    ];
    const results = await handleExtensionActions(actions, logger);
    expect(results.every((r) => r.success)).toBe(true);
  });

  it('handles errors and notifies user', async () => {
    (vscode.extensions.getExtension as jest.Mock).mockReturnValue(null);
    const actions: { id: string; displayName: string; action: 'enable' | 'disable' }[] = [
      { id: 'missing.ext', displayName: 'Missing', action: 'enable' },
    ];
    const results = await handleExtensionActions(actions, logger);
    expect(results[0].success).toBe(false);
    expect(vscode.window.showErrorMessage).toHaveBeenCalledWith(expect.stringContaining('Failed to enable Missing'));
  });

  it('notifies summary with succeeded and failed actions', () => {
    notifySummary([
      { id: 'a', displayName: 'A', action: 'enable', success: true },
      { id: 'b', displayName: 'B', action: 'disable', success: false, error: 'err' },
    ]);
    expect(vscode.window.showInformationMessage).toHaveBeenCalledWith(expect.stringContaining('Succeeded: A.'));
    expect(vscode.window.showInformationMessage).toHaveBeenCalledWith(expect.stringContaining('Failed: B (err).'));
  });
});
