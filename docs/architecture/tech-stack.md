# Tech Stack

## Technology Stack Table

| Category             | Technology           | Version | Purpose                             | Rationale                                                                         |
| :------------------- | :------------------- | :------ | :---------------------------------- | :-------------------------------------------------------------------------------- |
| Frontend Language    | TypeScript           | 5.x     | Core extension language             | Standard for VSCode extensions; provides type safety and better maintainability.  |
| Frontend Framework   | None                 | N/A     | UI is built with native VSCode APIs | The UI is minimal (prompts, logs) and best handled by direct API calls.           |
| UI Component Library | VSCode UI Toolkit    | Latest  | Native UI components                | Ensures a consistent look and feel with the VSCode editor.                        |
| State Management     | None (Local)         | N/A     | State is managed within functions   | The extension's state is simple and transient, not requiring a dedicated library. |
| Backend Language     | None                 | N/A     | No backend service required         | The extension is fully client-side.                                               |
| Backend Framework    | None                 | N/A     | No backend service required         | The extension is fully client-side.                                               |
| API Style            | VSCode Extension API | Latest  | Interacting with the editor         | This is the required method for an extension to function.                         |
| Database             | None                 | N/A     | No database required                | Configuration is stored in `settings.json`.                                       |
| Cache                | None                 | N/A     | Caching is out of scope for MVP     | Performance is sufficient without it; can be added later if needed.               |
| File Storage         | `settings.json`      | N/A     | User configuration                  | Standard VSCode practice for storing user-facing settings.                        |
| Authentication       | None                 | N/A     | No authentication required          | The extension operates locally with no user accounts.                             |
| Frontend Testing     | Jest                 | Latest  | Unit & Integration testing          | A popular and robust testing framework for TypeScript projects.                   |
| Backend Testing      | None                 | N/A     | No backend service required         | The extension is fully client-side.                                               |
| E2E Testing          | `vscode-test`        | Latest  | End-to-end testing in VSCode        | The official library for running tests within a VSCode instance.                  |
| Build Tool           | npm Scripts          | Latest  | Running build/test tasks            | Simple, standard, and sufficient for this project's needs.                        |
| Bundler              | esbuild              | Latest  | Bundling extension for production   | Extremely fast and easy to configure, ideal for optimizing extension load times.  |
| IaC Tool             | None                 | N/A     | No infrastructure to manage         | The extension is published to the marketplace, not deployed.                      |
| CI/CD                | GitHub Actions       | Latest  | Automated testing and release       | Industry standard, tightly integrated with GitHub, and free for public repos.     |
| Monitoring           | None                 | N/A     | No remote monitoring needed         | The extension is local; users can report issues.                                  |
| Logging              | VSCode OutputChannel | Latest  | Logging actions for transparency    | The native VSCode API for logging, providing a seamless user experience.          |
| CSS Framework        | None                 | N/A     | No custom CSS needed                | All styling is handled by the VSCode UI Toolkit.                                  |
