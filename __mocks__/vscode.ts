export const extensions = {
  all: [
    { id: 'ms-python.python' },
    { id: 'ms-vscode.vscode-typescript-next' },
    { id: 'dbaeumer.vscode-eslint' },
    { id: 'golang.go' },
    { id: 'some.other-extension' },
  ],
  getExtension: jest.fn(),
};

export const window = {
  showInformationMessage: jest.fn(),
  showErrorMessage: jest.fn(),
  createOutputChannel: jest.fn(() => ({ appendLine: jest.fn() })),
};

export const commands = {
  executeCommand: jest.fn(),
};

export const workspace = {
  getConfiguration: jest.fn(),
};
