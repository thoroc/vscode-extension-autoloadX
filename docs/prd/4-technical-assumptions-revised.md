# 4. Technical Assumptions (Revised)

## Repository Structure: Monorepo

A Monorepo structure is chosen to facilitate future expansion. While the MVP will be a single package, this structure
will simplify adding related tools (like a CLI or shared libraries) later without needing to manage multiple
repositories.

## Service Architecture: Monolith (Client-Side)

The application will be a self-contained, client-side monolith running entirely within the VSCode extension host. No
external backend services are required.

## Testing Requirements: Unit + Integration

The project will require a comprehensive testing strategy including both **Unit Tests** (for isolated logic) and
**Integration Tests** (for interaction with VSCode APIs) using a framework like Jest or Mocha.

## Additional Technical Assumptions and Requests

- **Language & Frameworks:**
  - The extension will be developed exclusively in **TypeScript**.
  - The core logic is critically dependent on the **VSCode Extension API**. A technical spike must validate that this
    API can programmatically manage extensions without requiring a window reload.
- **Configuration & Data:**
  - The default language-to-extension mappings will now be hardcoded in the codebase for better maintainability and
    performance. Users can still override or extend these mappings via `settings.json`.
  - Configuration in `settings.json` should use a **nested object structure** under the `autoLoadX` key for better
    organization.
- **Core Logic Behavior:**
  - **Conflict Resolution:** If multiple project types are detected in a single workspace, the extension will recommend
    enabling the extensions for **all** detected types.
  - **Performance:** The MVP will prioritize correct logic over performance optimization. Caching scan results is a
    post-MVP feature.
- **Key Risks for Investigation:**
  - **VSCode Profiles Conflict:** There is a risk of conflicting behavior with VSCode's built-in \"Profiles\" feature.
    The interaction between AutoLoadX and Profiles must be investigated and documented during the initial technical
    spike.
