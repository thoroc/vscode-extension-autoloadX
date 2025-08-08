# 3. User Interface Design Goals (Revised)

## Overall UX Vision

The user experience should be **effortless and trustworthy**. The extension should feel like a natural, intelligent part
of VSCode, not a noisy or disruptive add-on. The primary goal is to save the user time and mental overhead with a
"fire-and-forget" interaction model.

## Key Interaction Paradigms

- **Single, Actionable Prompt:** The core interaction is a single modal dialog that appears upon opening a workspace.
  This prompt is the central point of control and must be clear, concise, and self-explanatory.
- **Conservative by Default:** The extension should err on the side of caution. It's better to miss a recommendation
  than to incorrectly disable a critical extension.
- **Configuration via Code:** All deep configuration will be handled in `settings.json`. This respects the user's
  existing workflow and avoids the need for a complex settings UI in the MVP.

## Core Screens and Views (MVP)

1. **Recommendation Prompt Dialog (Must-Have):** This is the main UI component. It will be a modal window that lists:
    - A clear title (e.g., "AutoLoadX: Project Setup").
    - A list of extensions to be **enabled**.
    - A list of extensions to be **disabled**.
    - Two primary action buttons: "Apply" and "Cancel".
2. **Output Channel Log (Must-Have):** A dedicated view in the VSCode "Output" panel where all actions are logged for
    transparency and debugging.

## Post-MVP UI Enhancements

- **Improved Prompt (Should-Have):** Add a "Don't ask again for this workspace" option to the prompt.
- **Status Bar Icon (Should-Have):** Implement a simple icon for at-a-glance status.
- **Granular Controls (Could-Have):** Allow users to select/deselect individual recommendations within the prompt.
- **Settings UI (Won't-Have in MVP):** A dedicated UI for configuration is a long-term goal.

## Accessibility: WCAG AA

All UI components will adhere to WCAG 2.1 Level AA guidelines.

## Branding

No specific branding requirements. The tone will be professional and helpful.

## Target Device and Platforms: Desktop Only

The extension is designed exclusively for VSCode Desktop on Windows, macOS, and Linux.
