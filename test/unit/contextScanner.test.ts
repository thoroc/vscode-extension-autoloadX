import * as path from 'path';
import { scanProjectContexts } from '../../src/services/contextScanner';

describe('scanProjectContexts', () => {
  it('should detect python and node contexts in a sample workspace', async () => {
    const workspacePath = path.join(__dirname, '../../test/fixtures/sample-python-node');
    const result = await scanProjectContexts(workspacePath);
    expect(result).toEqual(expect.arrayContaining(['python', 'node']));
  });

  it('should ignore files and folders in .gitignore', async () => {
    const workspacePath = path.join(__dirname, '../../test/fixtures/with-gitignore');
    const result = await scanProjectContexts(workspacePath);
    expect(result).not.toContain('node'); // node context is in ignored folder
  });
});
