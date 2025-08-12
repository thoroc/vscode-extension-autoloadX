jest.mock('vscode');
import * as vscode from 'vscode';
import { AutoLoadXLogger, disableExtensions, enableExtensions } from '../../src/services/extensionManager';

describe('extensionManager', () => {
  let logger: AutoLoadXLogger;
  beforeEach(() => {
    logger = new AutoLoadXLogger();
    (logger as any).channel = { appendLine: jest.fn() };
  });

  it('enables extensions and logs actions', async () => {
    (vscode.extensions.getExtension as jest.Mock).mockReturnValue({
      isActive: false,
      activate: jest.fn().mockResolvedValue(undefined),
    });
    await enableExtensions([{ id: 'ms-python.python', displayName: 'Python' }], logger);
    expect((logger as any).channel.appendLine).toHaveBeenCalledWith('Enabled: Python');
  });

  it('disables extensions and logs actions', async () => {
    (vscode.commands.executeCommand as jest.Mock).mockResolvedValue(undefined);
    await disableExtensions([{ id: 'golang.go', displayName: 'Go' }], logger);
    expect((logger as any).channel.appendLine).toHaveBeenCalledWith('Disabled: Go');
  });
});
