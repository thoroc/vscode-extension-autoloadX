# Brainstorming Session: VSCode Extension Auto-loader

## Executive Summary

- **Session Topic:** A VSCode extension to automatically manage (load/unload) language-specific extensions based on the
  current project's context.
- **Goals:** Focused ideation on creating a seamless, customizable, and maintainable extension for publication on the
  VSCode Marketplace.
- **Techniques Used:** Feature Storming, User Journey Mapping, Impact/Effort Matrix.

## Feature Storming Results

### Core Functionality

- **Detection:**
  - By file extension (`.ts`, `.py`).
  - By extension-less files (`Dockerfile`).
  - By dependency manager files (`package.json`, `pom.xml`) for tools.
- **Activation Flow:**
  - Map detections to recommended extensions.
  - If installed but disabled, enable.
  - If not installed, prompt user to install.
- **Deactivation Flow:**
  - Disable irrelevant extensions for the current workspace.
- **Multi-language Projects:**
  - Enable the union of all required extensions.

### Configuration & Customization

- Provide default extension mappings.
- Allow user overrides in `settings.json`.
- **Whitelist:** A user-defined list of extensions to always keep active.
- **Blacklist:** A user-defined list of extensions to never manage.

### User Interface & Logging

- Log all actions to a dedicated VSCode "Output" channel.
- Use native error notifications for failures.
- Maintain rotated log files for debugging.
- **Welcome Page:** On first install, show a page explaining the extension.
- **Status Bar Icon:** An icon to show current status (Scanning, Scanned, Stale, Error).

### Performance & Lifecycle

- **Caching:** Cache project scan results to speed up subsequent loads.
- **Onboarding:** Offer a choice between "sensible defaults" or a guided setup on first run.
- **Dynamic Updates:** Notify user if the official recommendation list for a language changes.
- **Manual Trigger:** Allow users to manually trigger a re-scan.

## User Journey Map

### Phase 1: Discovery & Installation

1. **Discovery:** User finds the extension in the Marketplace by searching for "extension manager", "auto enable
   extensions", etc.
2. **Installation:** User installs the extension.
3. **Onboarding:** A Welcome Page appears. A prompt asks to scan the current project.

### Phase 2: First Use & Configuration

1. **Scan:** User initiates the scan and sees progress in the Status Bar and Output panel.
2. **Prompt:** A single, comprehensive dialog appears listing all recommended extensions with their status and
   install/enable/ignore options.
3. **Confirmation:** A final notification summarizes the actions taken (e.g., "3 extensions enabled, 1 disabled").

### Phase 3: Day-to-Day Use

1. **Project Switching:** The extension checks for a local cache (`.vscode/autoloadx.json`). If the project is known but
   potentially outdated, a "Stale" icon appears.
2. **Project Modification:** Adding a new dependency file (e.g., `requirements.txt`) prompts the user to re-scan.
3. **Customization:** User can easily edit their settings via the VSCode Settings UI or `settings.json`.
4. **Troubleshooting:** An "Error" icon in the status bar, when clicked, provides detailed diagnostics.

## Impact/Effort Matrix & Prioritization

### 1. Quick Wins (High Impact, Low Effort)

- Log all actions to the VSCode Output panel.
- Use native error notifications for failures.
- Welcome Page/Notification on first install.

### 2. Major Projects (High Impact, High Effort)

- **Core Detection Engine:** The heart of the extension.
- **Extension Management Flow:** The end-to-end activation/deactivation logic.
- **Interactive Prompt Dialog:** The main UI for user interaction.
- **Customization & Overrides:** The settings system for whitelists, blacklists, and custom mappings.

### 3. Fill-ins (Low Impact, Low Effort)

- **Status Bar Icon:** For at-a-glance status updates.
- **Project-specific Cache:** For performance improvements.
- **Automatic Re-scan on Dependency File Change:** For improved UX.

### 4. Time Sinks (Low Impact, High Effort)

- **User-Facing "Profiles" Feature:** To be considered for much later versions.

## Action Plan & Next Steps

1. **Priority 1 (MVP):** Focus on the **Major Projects**.
   - Build the **Core Detection Engine**.
   - Implement the **Extension Management Flow**.
   - Develop the **Interactive Prompt Dialog**.
2. **Priority 2 (Polish):** Integrate the **Quick Wins**.
   - Add comprehensive logging and error handling.
   - Create the onboarding experience.
3. **Priority 3 (Optimization):** Add the **Fill-ins**.
   - Implement the status bar icon and caching.
4. **Future:** Re-evaluate the **Time Sinks** based on user feedback.
