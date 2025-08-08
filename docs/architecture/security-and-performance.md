# Security and Performance

## Security Requirements

As a client-side extension that only interacts with the local file system and VSCode APIs, the security surface is
minimal. However, maintaining user trust is paramount.

- **Data Storage:** No user data or telemetry will be collected. All configuration is stored locally in the user's
  `settings.json` file, and logs are stored in a local VSCode output channel.
- **Dependency Management:** Dependencies will be regularly audited for vulnerabilities using `npm audit`. Dependabot
  will be configured on the GitHub repository to automatically create pull requests for security updates.
- **API Usage:** The extension will only use the official and stable VSCode Extension APIs. No private or undocumented
  APIs will be used.
- **Principle of Least Privilege:** The extension will not request any unnecessary permissions. It will only interact
  with the workspace files and the extension management API.

## Performance Optimization

Performance is a critical feature. A slow extension will be quickly uninstalled.

- **Activation Events:** The extension will use the most specific activation events possible. It will activate
  `onCommand:autoloadx.runDetection` and on workspace load (`onStartupFinished`), but the workspace load activation will
  have a built-in delay or check to ensure it doesn't run on every single window opening, respecting the user's desire
  for a non-intrusive experience.
- **Asynchronous Operations:** All file system access and API calls will be fully asynchronous (`async/await`) to
  prevent blocking the extension host and keeping the UI responsive.
- **Bundle Size Target:** The final bundled `.vsix` file size should be kept under 5MB to ensure a fast installation and
  loading experience. `esbuild` will be used for its efficient bundling.
- **Efficient Scanning:** The initial workspace scan will be optimized to be fast. It will avoid scanning large,
  irrelevant directories like `node_modules` by default and will use efficient file system traversal methods provided by
  the VSCode API.
