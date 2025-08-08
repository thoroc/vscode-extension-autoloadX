# API Specification

## VSCode Commands

The extension will expose the following commands to the user via the VSCode Command Palette.

### `autoloadx.runDetection`

- **Title:** `AutoLoadX: Detect Project Context and Recommend Extensions`
- **Description:** Manually triggers the detection process for the current workspace. This will scan the project files,
  generate recommendations, and display the approval prompt.
- **When:** This command will always be available.
- **Activation:** This command will be the primary activation event for the extension if it's not already active.

### `autoloadx.openLogs`

- **Title:** `AutoLoadX: Show Action Logs`
- **Description:** Opens the "AutoLoadX" output channel, displaying a history of all actions taken by the extension.
- **When:** This command will always be available.

### `autoloadx.copyDiagnosticInfo`

- **Title:** `AutoLoadX: Copy Diagnostic Information`
- **Description:** Copies pre-formatted diagnostic information to the clipboard to be pasted into a GitHub issue.
- **When:** This command will always be available.
