# 6. Epic 1: Core Engine & MVP Workflow

**Goal:** Establish the foundational capabilities of the extension. This includes implementing the project scanning
engine, the recommendation logic, and the core user workflow of prompting for and applying changes. The goal is to
deliver a fully functional, end-to-end MVP that successfully manages extensions for a single workspace.

## Story 1.1: Technical Spike: Validate Extension Management API

**As a** Developer, **I want** to create a proof-of-concept that programmatically enables and disables a test extension,
**so that** I can validate the core technical assumption of the project before committing to the full build.

### Acceptance Criteria

1. The spike project can successfully identify a specific, pre-defined VSCode extension.
2. The spike can programmatically enable the target extension if it is disabled.
3. The spike can programmatically disable the target extension if it is enabled.
4. The enable/disable actions do NOT require a full VSCode window reload to take effect.
5. The results and any limitations of the VSCode API are documented and shared with the team.

## Story 1.2: Implement Project Context Scanner

**As a** Developer, **I want** to implement a scanner that detects file extensions and key filenames within a workspace,
**so that** the extension can identify the technologies present in the project.

### Acceptance Criteria

1. The scanner is triggered when a new VSCode workspace is opened.
2. The scanner recursively searches the workspace directory for files..
3. The scanner correctly identifies the presence of files with common language extensions (e.g., `.py`, `.ts`, `.go`).
4. The scanner correctly identifies the presence of key dependency files (e.g., `package.json`, `requirements.txt`).
5. The scanner returns a list of unique project contexts (e.g., `['typescript', 'python']`).
6. The scanner ignores files and directories listed in the `.gitignore` file.

## Story 1.3: Create Recommendation Engine from Default Mappings

**As a** Developer, **I want** to create a recommendation engine that compares the detected project contexts to a list
of installed extensions, **so that** I can generate a list of proposed changes (enables/disables).

### Acceptance Criteria

1. The engine loads a default mapping of project contexts to recommended extension IDs from a bundled JSON file.
2. The engine retrieves the list of all extensions currently installed by the user.
3. Given a list of detected project contexts, the engine correctly identifies which installed extensions should be
    enabled.
4. The engine identifies all other managed extensions that are currently enabled but are not relevant to the detected
    contexts, marking them for disabling.
5. The engine produces a clear data structure containing two lists: `extensionsToEnable` and `extensionsToDisable`.

## Story 1.4: Build and Display the Approval Prompt

**As a** Developer, **I want** to build a modal dialog that clearly presents the recommended changes to the user, **so
that** they can make an informed decision to approve or reject them.

### Acceptance Criteria

1. After the recommendation engine runs, a VSCode modal dialog is displayed to the user.
2. The dialog has a clear title, such as "AutoLoadX: Recommended Changes".
3. The dialog contains a section listing the friendly names of all extensions recommended for enabling.
4. The dialog contains a section listing the friendly names of all extensions recommended for disabling.
5. The dialog presents two clear action buttons: "Apply" and "Cancel".
6. The dialog adheres to basic accessibility standards (keyboard navigable).

## Story 1.5: Implement Extension State Change and Logging

**As a** Developer, **I want** to implement the logic that applies the approved changes and logs all actions, **so
that** the extension can fulfill its core purpose and be transparent about its actions.

### Acceptance Criteria

1. When the user clicks "Apply" on the prompt, the extension programmatically enables all extensions in the
    `extensionsToEnable` list.
2. When the user clicks "Apply", the extension programmatically disables all extensions in the `extensionsToDisable`
    list.
3. When the user clicks "Cancel", no changes are made.
4. In both cases, the dialog is dismissed.
5. Every enable and disable action is logged with the extension's friendly name to a dedicated "AutoLoadX" output
    channel.
