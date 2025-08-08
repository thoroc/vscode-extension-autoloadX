# VSCode Extension Auto-loader Product Requirements Document (PRD)

## 1. Goals and Background Context

### Goals

- **User-Facing Goals:**
  - Streamline the development workflow by automatically managing VSCode extensions based on project context.
  - Improve VSCode performance (startup time, responsiveness) by disabling irrelevant extensions.
  - Provide a "just works" experience that is intuitive for both new and experienced developers.
  - Guide new users toward best-practice extensions for their projects.
- **Project Goals:**
  - Achieve 10,000+ installs and 5,000+ active users within 6 months.
  - Maintain a 4.5+ star rating on the VSCode Marketplace.
  - Become a recognized and respected tool within the developer community.

### Background Context

Developers working in polyglot environments waste significant time manually enabling and disabling VSCode extensions to
match the needs of their current project. This friction not only hampers productivity but also leads to editor
performance degradation when too many extensions are active simultaneously. Existing solutions lack intelligent,
automatic context-switching capabilities.

This PRD outlines the requirements for "AutoLoadX," a VSCode extension that solves this problem by detecting a project's
technical stack and recommending the appropriate extensions to activate or deactivate. By offering an automated yet
user-supervised workflow, the extension will provide a seamless, efficient, and tailored development experience,
allowing developers to focus on coding rather than editor configuration.

### Change Log

| Date       | Version | Description   | Author    |
| :--------- | :------ | :------------ | :-------- |
| 2025-08-08 | 0.1     | Initial draft | John (PM) |

## 2. Requirements

### Functional Requirements

1. **FR1: Project Context Detection:** The extension MUST scan the active workspace upon opening to detect project
    context. This includes identifying:
    - File extensions (e.g., `.py`, `.ts`, `.go`, `.java`).
    - Key dependency management files (e.g., `package.json`, `requirements.txt`, `pom.xml`, `go.mod`).
    - Specific configuration filenames (e.g., `Dockerfile`, `terraform.tf`).
2. **FR2: Extension State Inspection:** The extension MUST be able to inspect the user's installed extensions and
    identify their current activation state (enabled or disabled).
3. **FR3: Recommendation Generation:** Based on the detected project context, the extension MUST generate a set of
    recommendations for enabling or disabling specific extensions. This logic will be based on a predefined,
    configurable mapping.
4. **FR4: Interactive Approval Prompt:** The extension MUST display a single, clear, modal dialog to the user that
    lists all recommended changes (enables and disables).
5. **FR5: User-Controlled Execution:** From the approval prompt, the user MUST have the option to approve or reject the
    entire set of recommendations.
6. **FR6: Extension State Modification:** Upon user approval, the extension MUST programmatically enable and disable
    the recommended extensions.
7. **FR7: Action Logging:** All actions taken by the extension (e.g., "Enabled Python extension," "Disabled Go
    extension") MUST be logged to a dedicated "Output" channel within VSCode for transparency and debugging.
8. **FR8: Configuration via `settings.json`:** Users MUST be able to configure the extension's behavior via VSCode's
    `settings.json` file. This includes:
    - Whitelisting extensions that should never be disabled.
    - Blacklisting extensions that should never be managed.
    - Overriding or extending the default context-to-extension mappings.

### Non-Functional Requirements

1. **NFR1: Performance:** The extension's own performance overhead MUST be minimal. The initial project scan should
    complete quickly (e.g., within 2-3 seconds for a typical project), and the extension should not noticeably increase
    VSCode's startup time or memory consumption.
2. **NFR2: Transparency:** The extension's actions must be completely transparent to the user. All changes must be
    explicitly approved and logged. There should be no "magic" or unexpected behavior.
3. **NFR3: Reliability:** The extension must reliably detect project contexts and manage extensions without errors. It
    should gracefully handle edge cases, such as workspaces with no recognizable project type.
4. **NFR4: User Trust:** The extension's design and workflow must prioritize building user trust. It should be
    conservative in its recommendations and always give the user final control. It must never perform a destructive or
    irreversible action.
5. **NFR5: Security:** The extension must not collect any user data or telemetry. All configuration and logs will be
    stored locally on the user's machine. It will only interact with the VSCode Extension API and the local file system
    for configuration.

## 3. User Interface Design Goals (Revised)

### Overall UX Vision

The user experience should be **effortless and trustworthy**. The extension should feel like a natural, intelligent part
of VSCode, not a noisy or disruptive add-on. The primary goal is to save the user time and mental overhead with a
"fire-and-forget" interaction model.

### Key Interaction Paradigms

- **Single, Actionable Prompt:** The core interaction is a single modal dialog that appears upon opening a workspace.
  This prompt is the central point of control and must be clear, concise, and self-explanatory.
- **Conservative by Default:** The extension should err on the side of caution. It's better to miss a recommendation
  than to incorrectly disable a critical extension.
- **Configuration via Code:** All deep configuration will be handled in `settings.json`. This respects the user's
  existing workflow and avoids the need for a complex settings UI in the MVP.

### Core Screens and Views (MVP)

1. **Recommendation Prompt Dialog (Must-Have):** This is the main UI component. It will be a modal window that lists:
    - A clear title (e.g., "AutoLoadX: Project Setup").
    - A list of extensions to be **enabled**.
    - A list of extensions to be **disabled**.
    - Two primary action buttons: "Apply" and "Cancel".
2. **Output Channel Log (Must-Have):** A dedicated view in the VSCode "Output" panel where all actions are logged for
    transparency and debugging.

### Post-MVP UI Enhancements

- **Improved Prompt (Should-Have):** Add a "Don't ask again for this workspace" option to the prompt.
- **Status Bar Icon (Should-Have):** Implement a simple icon for at-a-glance status.
- **Granular Controls (Could-Have):** Allow users to select/deselect individual recommendations within the prompt.
- **Settings UI (Won't-Have in MVP):** A dedicated UI for configuration is a long-term goal.

### Accessibility: WCAG AA

All UI components will adhere to WCAG 2.1 Level AA guidelines.

### Branding

No specific branding requirements. The tone will be professional and helpful.

### Target Device and Platforms: Desktop Only

The extension is designed exclusively for VSCode Desktop on Windows, macOS, and Linux.

## 4. Technical Assumptions (Revised)

### Repository Structure: Monorepo

A Monorepo structure is chosen to facilitate future expansion. While the MVP will be a single package, this structure
will simplify adding related tools (like a CLI or shared libraries) later without needing to manage multiple
repositories.

### Service Architecture: Monolith (Client-Side)

The application will be a self-contained, client-side monolith running entirely within the VSCode extension host. No
external backend services are required.

### Testing Requirements: Unit + Integration

The project will require a comprehensive testing strategy including both **Unit Tests** (for isolated logic) and
**Integration Tests** (for interaction with VSCode APIs) using a framework like Jest or Mocha.

### Additional Technical Assumptions and Requests

- **Language & Frameworks:**
  - The extension will be developed exclusively in **TypeScript**.
  - The core logic is critically dependent on the **VSCode Extension API**. A technical spike must validate that this
    API can programmatically manage extensions without requiring a window reload.
- **Configuration & Data:**
  - The default language-to-extension mappings will be stored in a **separate, bundled JSON file** for easy updates.
  - Configuration in `settings.json` should use a **nested object structure** under the `autoLoadX` key for better
    organization.
- **Core Logic Behavior:**
  - **Conflict Resolution:** If multiple project types are detected in a single workspace, the extension will recommend
    enabling the extensions for **all** detected types.
  - **Performance:** The MVP will prioritize correct logic over performance optimization. Caching scan results is a
    post-MVP feature.
- **Key Risks for Investigation:**
  - **VSCode Profiles Conflict:** There is a risk of conflicting behavior with VSCode's built-in "Profiles" feature. The
    interaction between AutoLoadX and Profiles must be investigated during the initial technical spike.

## 5. Epic List

1. **Epic 1: Core Engine & MVP Workflow:** Establish the foundational capabilities of the extension. This includes
    implementing the project scanning engine, the recommendation logic, and the core user workflow of prompting for and
    applying changes. The goal is to deliver a fully functional, end-to-end MVP that successfully manages extensions for
    a single workspace.
2. **Epic 2: Enhanced Configuration & User Control:** Build upon the MVP by providing users with robust configuration
    options. This includes implementing whitelists, blacklists, and the ability for users to define their own custom
    context-to-extension mappings directly in `settings.json`. The goal is to give power users full control over the
    extension's behavior.

## 6. Epic 1: Core Engine & MVP Workflow

**Goal:** Establish the foundational capabilities of the extension. This includes implementing the project scanning
engine, the recommendation logic, and the core user workflow of prompting for and applying changes. The goal is to
deliver a fully functional, end-to-end MVP that successfully manages extensions for a single workspace.

### Story 1.1: Technical Spike: Validate Extension Management API

**As a** Developer, **I want** to create a proof-of-concept that programmatically enables and disables a test extension,
**so that** I can validate the core technical assumption of the project before committing to the full build.

#### Acceptance Criteria

1. The spike project can successfully identify a specific, pre-defined VSCode extension.
2. The spike can programmatically enable the target extension if it is disabled.
3. The spike can programmatically disable the target extension if it is enabled.
4. The enable/disable actions do NOT require a full VSCode window reload to take effect.
5. The results and any limitations of the VSCode API are documented and shared with the team.

### Story 1.2: Implement Project Context Scanner

**As a** Developer, **I want** to implement a scanner that detects file extensions and key filenames within a workspace,
**so that** the extension can identify the technologies present in the project.

#### Acceptance Criteria

1. The scanner is triggered when a new VSCode workspace is opened.
2. The scanner recursively searches the workspace directory for files..
3. The scanner correctly identifies the presence of files with common language extensions (e.g., `.py`, `.ts`, `.go`).
4. The scanner correctly identifies the presence of key dependency files (e.g., `package.json`, `requirements.txt`).
5. The scanner returns a list of unique project contexts (e.g., `['typescript', 'python']`).
6. The scanner ignores files and directories listed in the `.gitignore` file.

### Story 1.3: Create Recommendation Engine from Default Mappings

**As a** Developer, **I want** to create a recommendation engine that compares the detected project contexts to a list
of installed extensions, **so that** I can generate a list of proposed changes (enables/disables).

#### Acceptance Criteria

1. The engine loads a default mapping of project contexts to recommended extension IDs from a bundled JSON file.
2. The engine retrieves the list of all extensions currently installed by the user.
3. Given a list of detected project contexts, the engine correctly identifies which installed extensions should be
    enabled.
4. The engine identifies all other managed extensions that are currently enabled but are not relevant to the detected
    contexts, marking them for disabling.
5. The engine produces a clear data structure containing two lists: `extensionsToEnable` and `extensionsToDisable`.

### Story 1.4: Build and Display the Approval Prompt

**As a** Developer, **I want** to build a modal dialog that clearly presents the recommended changes to the user, **so
that** they can make an informed decision to approve or reject them.

#### Acceptance Criteria

1. After the recommendation engine runs, a VSCode modal dialog is displayed to the user.
2. The dialog has a clear title, such as "AutoLoadX: Recommended Changes".
3. The dialog contains a section listing the friendly names of all extensions recommended for enabling.
4. The dialog contains a section listing the friendly names of all extensions recommended for disabling.
5. The dialog presents two clear action buttons: "Apply" and "Cancel".
6. The dialog adheres to basic accessibility standards (keyboard navigable).

### Story 1.5: Implement Extension State Change and Logging

**As a** Developer, **I want** to implement the logic that applies the approved changes and logs all actions, **so
that** the extension can fulfill its core purpose and be transparent about its actions.

#### Acceptance Criteria

1. When the user clicks "Apply" on the prompt, the extension programmatically enables all extensions in the
    `extensionsToEnable` list.
2. When the user clicks "Apply", the extension programmatically disables all extensions in the `extensionsToDisable`
    list.
3. When the user clicks "Cancel", no changes are made.
4. In both cases, the dialog is dismissed.
5. Every enable and disable action is logged with the extension's friendly name to a dedicated "AutoLoadX" output
    channel.

## 7. Epic 2: Enhanced Configuration & User Control

**Goal:** Build upon the MVP by providing users with robust configuration options. This includes implementing
whitelists, blacklists, and the ability for users to define their own custom context-to-extension mappings directly in
`settings.json`. The goal is to give power users full control over the extension's behavior.

### Story 2.1: Implement Whitelist and Blacklist Functionality

**As a** Power User, **I want** to define lists of extensions that should always be left alone, **so that** I can
protect critical tools (like themes or settings sync) from being managed by the extension.

#### Acceptance Criteria

1. The recommendation engine reads two new configuration arrays from `settings.json` under the `autoLoadX` key:
    `whitelist` and `blacklist`.
2. Any extension ID present in the `whitelist` array is completely ignored by the engine and never included in a
    recommendation to be disabled.
3. Any extension ID present in the `blacklist` array is completely ignored by the engine and never included in any
    recommendation.
4. The logic correctly handles empty or undefined whitelist/blacklist arrays.
5. The documentation is updated to explain how to use these new settings.

### Story 2.2: Allow User-Defined Custom Mappings

**As a** Power User, **I want** to define my own mappings of project contexts to extensions in `settings.json`, **so
that** I can override the defaults and tailor the extension's behavior to my specific toolset.

#### Acceptance Criteria

1. The recommendation engine reads a new configuration object from `settings.json` under the `autoLoadX` key:
    `customMappings`.
2. The `customMappings` object allows users to define new project contexts and associate them with a list of extension
    IDs.
3. User-defined mappings are merged with the default mappings, with user mappings taking precedence in case of a
    conflict.
4. The engine can use these custom mappings to generate recommendations just like it does with the default mappings.
5. The documentation is updated with clear examples of how to structure the `customMappings` object.

## 8. Checklist Results Report

### Final Decision: READY FOR ARCHITECT

The PRD and epics are comprehensive, properly structured, and ready for architectural design.

### Summary

- **Overall PRD Completeness:** 95%
- **MVP Scope Appropriateness:** Just Right
- **Readiness for Architecture Phase:** Ready
- **Critical Gaps:** One minor gap was identified and is noted below. It does not block architectural design.

### Key Findings

- **PASS:** The PRD excels in defining the problem, MVP scope, user experience, functional requirements, and technical
  guidance. The epics and stories are well-structured and logical.
- **PARTIAL:** The "Cross-Functional Requirements" section was not explicitly present. While the client-side nature of
  the project makes these minimal, explicitly stating their absence improves clarity.

### Recommendation

- **Action:** For future PRDs of this nature, add a "Cross-Functional Requirements" section that explicitly states the
  absence of server-side data, integration, or operational needs for the MVP. This is a minor clarification and is not
  required for this document to proceed.

## 9. Next Steps

This document is now complete and ready for the next phase.

### UX Expert Prompt

- **Command:** `*ux-expert create-front-end-spec @docs/prd.md`
- **Instructions:** "Sally, please review the attached PRD, specifically the 'User Interface Design Goals' section.
  Based on the requirements, create a front-end specification document. Focus on wireframing the 'Recommendation Prompt
  Dialog' and defining the user flow for the core interaction."

### Architect Prompt

- **Command:** `*architect create-full-stack-architecture @docs/prd.md`
- **Instructions:** "Winston, please take this completed PRD and create the full systems architecture document. Pay
  close attention to the 'Technical Assumptions' and the stories in Epic 1 to ensure your design covers the core engine,
  scanning, and recommendation logic. Your first priority is designing the technical spike outlined in Story 1.1."
