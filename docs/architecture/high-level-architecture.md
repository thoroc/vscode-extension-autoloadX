# High Level Architecture

## Technical Summary

AutoLoadX will be a client-side, monolithic VSCode extension built entirely in TypeScript. It will run within the VSCode
extension host, requiring no external backend services. The architecture prioritizes performance and user trust by
activating only when necessary, performing a quick, localized scan of the workspace, and presenting all proposed changes
for user approval. This design directly supports the PRD's goals of creating a seamless, "just works" experience that
improves developer workflow without adding noticeable overhead.

## Platform and Infrastructure Choice

**Platform:** VSCode Extension API **Key Services:**

- `vscode.extensions.all`: To inspect all installed extensions.
- `vscode.workspace.findFiles`: To scan the project for context.
- `vscode.window.showInformationMessage`: To display the approval prompt.
- `vscode.ConfigurationTarget.Global`: To programmatically enable/disable extensions.
- `vscode.window.createOutputChannel`: To log all actions for transparency. **Deployment Host and Regions:** N/A
  (Published to VSCode Marketplace)

## Repository Structure

**Structure:** Monorepo **Monorepo Tool:** npm Workspaces **Package Organization:** A single application package
(`apps/extension`) will be used for the MVP to keep the structure simple. This can be expanded later to include shared
packages if needed.

## High Level Architecture Diagram

```mermaid
graph TD
    subgraph User's Machine
        subgraph VSCode
            A[User Opens Workspace] --> B{AutoLoadX Extension};
            B -- Scans --> C[Project Files (.ts, package.json, etc.)];
            B -- Inspects --> D[Installed VSCode Extensions];
            C --> E{Recommendation Engine};
            D --> E;
            E --> F[Approval Prompt];
            F -- User Approves --> G[Apply Changes];
            F -- User Cancels --> H[End];
            G -- Enables/Disables --> D;
            G --> I[Output Channel Log];
        end
    end
```

## Architectural Patterns

- **Monolith (Client-Side):** The entire extension will be a single, self-contained unit running on the user's machine.
  _Rationale:_ This is the standard and most efficient architecture for a VSCode extension, requiring no network
  dependencies and simplifying development and deployment.
- **Observer Pattern:** The extension will use the VSCode API's activation events to "observe" when a new workspace is
  opened. _Rationale:_ This is a core performance best practice, ensuring the extension only runs when it's needed,
  minimizing its resource footprint.
- **Command Pattern:** The core logic of enabling/disabling extensions will be encapsulated in a command that is
  executed upon user approval. _Rationale:_ This decouples the user interface from the action, making the code cleaner
  and easier to test.
