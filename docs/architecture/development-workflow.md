# Development Workflow

## Local Development Setup

### Prerequisites

```bash
# Install Node.js (v18 or higher) and npm
# Install Visual Studio Code
```

### Initial Setup

```bash
# Clone the repository
git clone https://github.com/your-repo/autoloadx.git
cd autoloadx

# Install dependencies
npm install
```

### Manual Testing and Debugging

This is the primary way to test the extension's functionality interactively.

1. **Open the `autoloadx` project** in VSCode.
2. **Press `F5`** or go to the "Run and Debug" view and click "Start Debugging".
3. This will compile the extension and open a **new VSCode window** called the "Extension Development Host".
4. In this **new window**, open a separate project to test against (e.g., a sample Python or TypeScript project).
5. Use the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) in the new window to run the extension's commands, such as
   `AutoLoadX: Detect Project Context and Recommend Extensions`.
6. You can set breakpoints in the original `autoloadx` project window, and they will be hit when you trigger the
   functionality in the new window.

### Automated Testing and Validation

```bash
# Run all automated unit tests
npm test

# Run tests in watch mode for active development
npm run test:watch

# Lint the code to check for style issues
npm run lint
```

#### Test Directory Structure

All test-related files are now consolidated under the `test/` directory for better organization. The structure is as
follows:

```text
test/
├── fixtures/                # Test fixtures and sample data
│   ├── sample-python-node/
│   └── with-gitignore/
├── mocks/                   # Jest mocks
│   └── vscode.ts
├── unit/                    # Unit tests
│   ├── configurationService.test.ts
│   ├── contextScanner.test.ts
│   ├── extensionErrorHandler.test.ts
│   ├── extensionManager.test.ts
│   ├── recommendationEngine.test.ts
│   └── userInterfaceService.test.ts
```

### Building the Extension

```bash
# Package the extension into a .vsix file for distribution
npm run package
```

## Automated Issue Triage Workflow

### Overview

The Gemini Automated Issue Triage workflow streamlines issue management by automatically labeling and prioritizing new
issues based on predefined criteria.

### Configuration

- **Workflow File**: `.github/workflows/gemini-issue-automated-triage.yml`
- **Labels Configuration**: `.github/labels.yml`

### Key Features

1. Automatically labels issues as `kind/*` (e.g., bug, enhancement) and `priority/*` (e.g., p0, p1).
2. Removes the `status/needs-triage` label after triaging.
3. Notifies team members in case of failures.

### Testing

To test the workflow:

```bash
gh workflow run gemini-issue-automated-triage.yml --field issue_number=<number> --field issue_title='<title>' --field issue_body='<body>'
```

## Environment Configuration

There are no environment variables required for this extension. All configuration is handled through the `package.json`
and `settings.json` files.
