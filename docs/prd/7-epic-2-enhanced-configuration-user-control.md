# 7. Epic 2: Enhanced Configuration & User Control

**Goal:** Build upon the MVP by providing users with robust configuration options. This includes implementing
whitelists, blacklists, and the ability for users to define their own custom context-to-extension mappings directly in
`settings.json`. The goal is to give power users full control over the extension's behavior.

## Story 2.1: Implement Whitelist and Blacklist Functionality

**As a** Power User, **I want** to define lists of extensions that should always be left alone, **so that** I can
protect critical tools (like themes or settings sync) from being managed by the extension.

### Acceptance Criteria

1. The recommendation engine reads two new configuration arrays from `settings.json` under the `autoLoadX` key:
   `whitelist` and `blacklist`.
2. Any extension ID present in the `whitelist` array is completely ignored by the engine and never included in a
   recommendation to be disabled.
3. Any extension ID present in the `blacklist` array is completely ignored by the engine and never included in any
   recommendation.
4. The logic correctly handles empty or undefined whitelist/blacklist arrays.
5. The documentation is updated to explain how to use these new settings.

## Story 2.2: Allow User-Defined Custom Mappings

**As a** Power User, **I want** to define my own mappings of project contexts to extensions in `settings.json`, **so
that** I can override the defaults and tailor the extension's behavior to my specific toolset.

### Acceptance Criteria

1. The recommendation engine reads a new configuration object from `settings.json` under the `autoLoadX` key:
   `customMappings`.
2. The `customMappings` object allows users to define new project contexts and associate them with a list of extension
   IDs.
3. User-defined mappings are merged with the default mappings, with user mappings taking precedence in case of a
   conflict.
4. The engine can use these custom mappings to generate recommendations just like it does with the default mappings.
5. The documentation is updated with clear examples of how to structure the `customMappings` object.

## Story 2.3: Update Extension Settings Storage Location

**As a** Developer, **I want** the extension settings to be saved in a prioritized order of locations, **so that** I can
ensure the most relevant settings are applied based on the project context.

### Acceptance Criteria

1. The extension settings are saved in one of the following locations, in order of priority:
   - **Local Repository**: Either in the `.vscode` directory within the project or the extension's own configuration
     file in the repository.
   - **Global Settings**: The `settings.json` file for VSCode.
   - **Extension Installation Directory**: As a fallback option.
2. The local repository settings always take the highest priority.
3. Existing settings are migrated seamlessly to the new location without data loss.
4. Users are notified of the change in settings storage location.
5. The new storage location adheres to the project's security and performance guidelines.
6. Unit and integration tests are updated to reflect the new storage location and priority order.
