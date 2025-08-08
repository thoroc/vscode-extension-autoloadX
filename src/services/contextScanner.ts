import * as fs from 'fs';
import * as path from 'path';

const LANGUAGE_EXTENSIONS: Record<string, string> = {
  '.py': 'python',
  '.ts': 'typescript',
  '.js': 'javascript',
  '.go': 'go',
  '.java': 'java',
  '.rb': 'ruby',
  '.cs': 'csharp',
  '.cpp': 'cpp',
  '.c': 'c',
  '.rs': 'rust',
  '.php': 'php',
  '.swift': 'swift',
  '.kt': 'kotlin',
  '.m': 'objective-c',
  '.scala': 'scala',
  '.dart': 'dart',
  '.sh': 'shell',
};

const DEPENDENCY_FILES: Record<string, string> = {
  'package.json': 'node',
  'requirements.txt': 'python',
  'go.mod': 'go',
  'pom.xml': 'java',
  Gemfile: 'ruby',
  'composer.json': 'php',
  'Cargo.toml': 'rust',
  'build.gradle': 'kotlin',
  'pubspec.yaml': 'dart',
};

function readGitignore(workspacePath: string): string[] {
  const gitignorePath = path.join(workspacePath, '.gitignore');
  if (!fs.existsSync(gitignorePath)) return [];
  const lines = fs.readFileSync(gitignorePath, 'utf-8').split('\n');
  return lines.map((line) => line.trim()).filter((line) => line && !line.startsWith('#'));
}

function isIgnored(filePath: string, ignorePatterns: string[], workspacePath: string): boolean {
  // Simple pattern match; for full .gitignore support, use 'ignore' npm package in production
  return ignorePatterns.some((pattern) => {
    const absPattern = path.join(workspacePath, pattern);
    return filePath.startsWith(absPattern);
  });
}

export async function scanProjectContexts(workspacePath: string): Promise<string[]> {
  const foundContexts = new Set<string>();
  const ignorePatterns = readGitignore(workspacePath);

  function walk(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (isIgnored(fullPath, ignorePatterns, workspacePath)) continue;
      if (entry.isDirectory()) {
        walk(fullPath);
      } else {
        const ext = path.extname(entry.name);
        if (LANGUAGE_EXTENSIONS[ext]) {
          foundContexts.add(LANGUAGE_EXTENSIONS[ext]);
        }
        if (DEPENDENCY_FILES[entry.name]) {
          foundContexts.add(DEPENDENCY_FILES[entry.name]);
        }
      }
    }
  }

  walk(workspacePath);
  return Array.from(foundContexts);
}

// Example usage: (to be called when a workspace is opened)
// const workspaceFolders = vscode.workspace.workspaceFolders;
// if (workspaceFolders && workspaceFolders.length > 0) {
//   scanProjectContexts(workspaceFolders[0].uri.fsPath).then(console.log);
// }
