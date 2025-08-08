# Coding Standards

## Critical Fullstack Rules

- **Services are Singletons:** Each service class (e.g., `RecommendationEngine`, `ConfigurationService`) should be
  instantiated only once in the main `extension.ts` file and passed as a dependency to other services that need it. Do
  not create new instances of services within other services.
- **Abstract VSCode API Calls:** Never call the `vscode` API directly from the main `extension.ts` or from the
  `RecommendationEngine`. All interactions with the VSCode API (e.g., reading files, showing prompts, managing
  extensions) MUST be done through a dedicated service (`ContextScanner`, `UserInterfaceService`, `ExtensionManager`).
- **Configuration Comes from `ConfigurationService`:** Do not read settings directly from
  `vscode.workspace.getConfiguration`. Inject the `ConfigurationService` and get configuration from it. This ensures
  that default and user settings are merged correctly.
- **Log Actions via `UserInterfaceService`:** To ensure all user-facing logs are consistent, do not use `console.log`.
  Call the `logAction()` method on the `UserInterfaceService` for any action that should be visible to the user.
- **Define All Types:** Do not use the `any` type. All data structures, especially those passed between services, MUST
  have a corresponding `interface` or `type` defined in `src/types/index.ts`.

## Naming Conventions

| Element             | Convention                       | Example                                                        |
| :------------------ | :------------------------------- | :------------------------------------------------------------- |
| Files               | `camelCase`                      | `recommendationEngine.ts`                                      |
| Classes/Services    | `PascalCase`                     | `class RecommendationEngine { ... }`                           |
| Interfaces/Types    | `PascalCase`                     | `interface ExtensionRecommendation { ... }`                    |
| Functions/Methods   | `camelCase`                      | `function generateRecommendations() { ... }`                   |
| Variables/Constants | `camelCase` / `UPPER_SNAKE_CASE` | `const recommendations = ...` / `const DEFAULT_MAPPINGS = ...` |
