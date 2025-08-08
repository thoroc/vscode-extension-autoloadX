jest.mock('vscode');
import * as vscode from 'vscode';
import { getAutoLoadXConfig } from './configurationService';

describe('getAutoLoadXConfig', () => {
  it('reads whitelist, blacklist, and customMappings from settings', () => {
    (vscode.workspace.getConfiguration as jest.Mock).mockReturnValue({
      get: (key: string) => {
        if (key === 'whitelist') return ['a', 'b'];
        if (key === 'blacklist') return ['c'];
        if (key === 'customMappings') return { python: ['custom.ext'] };
        return undefined;
      },
    });
    const config = getAutoLoadXConfig();
    expect(config.whitelist).toEqual(['a', 'b']);
    expect(config.blacklist).toEqual(['c']);
    expect(config.customMappings).toEqual({ python: ['custom.ext'] });
  });

  it('handles undefined arrays and objects', () => {
    (vscode.workspace.getConfiguration as jest.Mock).mockReturnValue({
      get: () => undefined,
    });
    const config = getAutoLoadXConfig();
    expect(config.whitelist).toBeUndefined();
    expect(config.blacklist).toBeUndefined();
    expect(config.customMappings).toBeUndefined();
  });
});
