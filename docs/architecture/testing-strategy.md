# Testing Strategy

Our testing strategy follows the principles of the testing pyramid to ensure a fast, reliable, and maintainable codebase.

## Testing Pyramid

```text
      Manual E2E Testing
     /        \\
Automated E2E Tests (Workflow)
   /            \\
Integration Tests (Services + VSCode API)
 /                 \\
Unit Tests (Core Logic)
```

## Test Organization

All test files will be co-located with the source files they are testing (e.g., `recommendationEngine.test.ts` will be next to `recommendationEngine.ts`).

### Unit Tests

- **Framework:** Jest
- **Focus:** Testing individual services and functions in isolation, with their dependencies mocked. The primary focus will be on the business logic within the `RecommendationEngine` and the prioritized settings logic.
- **Example (`recommendationEngine.test.ts`):**

  ```typescript
  it(\"should recommend enabling the Python extension for a Python project\", () => {
    // Mock the ConfigurationService to return Python mappings
    // Mock the ExtensionManager to return a list of installed extensions
    const engine = new RecommendationEngine(mockConfigService, mockExtensionManager);
    const recommendations = await engine.generateRecommendations([\"python\"]);
    expect(recommendations).toContainEqual({
      id: \"ms-python.python\",
      friendlyName: \"Python\",
      action: \"enable\",
    });
  });

  it(\"should merge hardcoded default mappings with user-defined mappings\", () => {
    // Mock ConfigurationService to return default and user-defined mappings
    const mockConfigService = new MockConfigurationService({
      defaultMappings: { python: [\"ms-python.python\"] },
      userMappings: { python: [\"custom-python.extension\"] },
    });
    const mappings = mockConfigService.getMappings();
    expect(mappings).toEqual({
      python: [\"custom-python.extension\"], // User-defined mappings take precedence
    });
  });
  ```

### Integration Tests

- **Framework:** `vscode-test` + Jest
- **Focus:** Testing the services that interact directly with the VSCode API to ensure they behave correctly. These tests run inside a real VSCode instance.
- **Example (`configurationService.test.ts`):**

  ```typescript
  it(\"should correctly read the whitelist from the settings.json file\", async () => {
    // Programmatically write to the settings.json of the test VSCode instance
    await setTestSetting(\"autoLoadX.whitelist\", [\"some.extension\"]);
    const configService = new ConfigurationService();
    const whitelist = configService.getWhitelist();
    expect(whitelist).toEqual([\"some.extension\"]);
  });

  it(\"should apply settings in the correct priority order\", async () => {
    // Mock settings in local repository, global, and extension directory
    await setTestSetting(\"autoLoadX.whitelist\", [\"local.extension\"], \"local\");
    await setTestSetting(\"autoLoadX.whitelist\", [\"global.extension\"], \"global\");
    const configService = new ConfigurationService();
    const whitelist = configService.getWhitelist();
    expect(whitelist).toEqual([\"local.extension\"]);
  });

  it(\"should merge hardcoded default mappings with user-defined mappings\", async () => {
    // Mock default and user-defined mappings
    const defaultMappings = { python: [\"ms-python.python\"] };
    const userMappings = { python: [\"custom-python.extension\"] };
    const configService = new ConfigurationService(defaultMappings, userMappings);
    const mappings = await configService.getMappings();
    expect(mappings).toEqual({
      python: [\"custom-python.extension\"], // User-defined mappings take precedence
    });
  });
  ```

### E2E Tests

- **Framework:** `vscode-test` + Jest
- **Focus:** Testing the entire workflow from start to finish, bypassing the UI prompt. These tests verify that the correct side effects (enabling/disabling extensions) occur.
- **Example (`e2e.test.ts`):**

  ```typescript
  it(\"should enable the ESLint extension when a Node.js project is detected\", async () => {
    // 1. Set up a mock workspace with a package.json file
    // 2. Run the core logic (scan, generate recommendations, apply changes)
    // 3. Assert that the 'dbaeumer.vscode-eslint' extension is now enabled
    const eslintExtension = vscode.extensions.getExtension(\"dbaeumer.vscode-eslint\");
    expect(eslintExtension.isActive).toBe(true);
  });
  ```
