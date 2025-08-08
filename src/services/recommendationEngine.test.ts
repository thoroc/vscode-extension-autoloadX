import * as path from 'path';
import { loadDefaultMappings, recommendExtensions } from './recommendationEngine';

jest.mock('vscode');

describe('recommendationEngine', () => {
  const mappingsPath = path.join(__dirname, '../../data/defaultMappings.json');
  const defaultMappings = loadDefaultMappings(mappingsPath);
  const installed = [
    'ms-python.python',
    'ms-vscode.vscode-typescript-next',
    'dbaeumer.vscode-eslint',
    'golang.go',
    'some.other-extension',
  ];
  const managed = ['ms-python.python', 'ms-vscode.vscode-typescript-next', 'dbaeumer.vscode-eslint', 'golang.go'];

  it('should recommend correct extensions to enable and disable', () => {
    const detected = ['python', 'typescript'];
    const result = recommendExtensions(detected, defaultMappings, installed, managed);
    expect(result.extensionsToEnable).toEqual(
      expect.arrayContaining(['ms-python.python', 'ms-vscode.vscode-typescript-next']),
    );
    expect(result.extensionsToDisable).toEqual(expect.arrayContaining(['golang.go', 'dbaeumer.vscode-eslint']));
  });

  it('should never disable whitelisted extensions', () => {
    const detected = ['python'];
    const whitelist = ['golang.go'];
    const result = recommendExtensions(detected, defaultMappings, installed, managed, whitelist);
    expect(result.extensionsToDisable).not.toContain('golang.go');
  });

  it('should never recommend blacklisted extensions', () => {
    const detected = ['python'];
    const blacklist = ['ms-python.python'];
    const result = recommendExtensions(detected, defaultMappings, installed, managed, [], blacklist);
    expect(result.extensionsToEnable).not.toContain('ms-python.python');
    expect(result.extensionsToDisable).toContain('ms-python.python');
  });

  it('should handle empty or undefined whitelist/blacklist', () => {
    const detected = ['python'];
    const result = recommendExtensions(detected, defaultMappings, installed, managed);
    expect(result.extensionsToEnable).toContain('ms-python.python');
  });

  it('should merge customMappings and use user-defined mappings', () => {
    const detected = ['python'];
    const customMappings = { python: ['custom.ext'] };
    const result = recommendExtensions(detected, defaultMappings, installed, managed, [], [], customMappings);
    expect(result.extensionsToEnable).toContain('custom.ext');
    expect(result.extensionsToEnable).not.toContain('ms-python.python');
  });
});
