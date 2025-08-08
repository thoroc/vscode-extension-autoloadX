jest.mock('vscode');
import * as vscode from 'vscode';
import { showApprovalPrompt } from './userInterfaceService';

describe('showApprovalPrompt', () => {
  it('should show modal with correct content and return apply/cancel', async () => {
    (vscode.window.showInformationMessage as jest.Mock).mockResolvedValue('Apply');
    const result = await showApprovalPrompt({
      extensionsToEnable: [
        { id: 'ms-python.python', displayName: 'Python' },
        { id: 'dbaeumer.vscode-eslint', displayName: 'ESLint' },
      ],
      extensionsToDisable: [{ id: 'golang.go', displayName: 'Go' }],
    });
    expect(result).toBe('apply');
    expect(vscode.window.showInformationMessage).toHaveBeenCalledWith(
      expect.stringContaining('Python'),
      { modal: true },
      'Apply',
      'Cancel',
    );
  });
});
