# Deployment Architecture

## Deployment Strategy

The extension is not deployed to a server but is instead published to the
[Visual Studio Code Marketplace](https://marketplace.visualstudio.com/vscode).

- **Platform:** VSCode Marketplace
- **Build Command:** `npm run package`
- **Output:** A `.vsix` file (e.g., `autoloadx-0.0.1.vsix`)
- **Deployment Method:** The `.vsix` file is uploaded to the marketplace using the `vsce` (Visual Studio Code
  Extensions) command-line tool.

## CI/CD Pipeline

The CI/CD pipeline will be managed by GitHub Actions. The workflow will be defined in `.github/workflows/ci.yaml`.

**Trigger:** On every push to the `main` branch or on pull requests targeting `main`.

**Jobs:**

1. **`test`**:
    - Checks out the code.
    - Installs Node.js and dependencies (`npm ci`).
    - Runs the linter (`npm run lint`).
    - Runs the automated tests (`npm test`).
2. **`release`** (Manual Trigger):
    - Requires the `test` job to pass.
    - Checks out the code.
    - Installs dependencies.
    - Packages the extension (`npm run package`).
    - Publishes the `.vsix` file to the VSCode Marketplace using a personal access token stored in GitHub secrets.

### CI/CD Pipeline Configuration (`.github/workflows/ci.yaml`)

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run lint
      - run: npm test

  release:
    needs: test
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run package
      - name: Publish to VSCode Marketplace
        uses: HaaLeo/publish-vscode-extension@v1
        with:
          pat: ${{ secrets.VSCE_PAT }}
          packagePath: "*.vsix"
```

## Environments

There are no traditional "environments" like staging or production. The environments are:

1. **Local Development:** The developer's machine using the Extension Development Host.
2. **Marketplace:** The published version that users install.
