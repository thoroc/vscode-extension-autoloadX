# Epic 6: Quality-of-Life Improvements for Contributors

## Overview

This epic focuses on enhancing the development experience for contributors by implementing quality-of-life improvements.
The primary goal is to enforce good practices through githooks using
[lefthook](https://github.com/evilmartians/lefthook) for linting and formatting various files in the project.

## Functional Requirements

1. **Pre-commit Hook for Linting**

   - Implement a pre-commit hook using `lefthook` to automatically run linting checks on staged files.
   - Use `eslint` for linting `.ts` and `.js` files.
   - Use `markdownlint-cli2` for linting `.md` files.
   - Use `lockfile-lint` for linting lockfiles.
   - Provide clear error messages and instructions for resolving linting issues.

2. **Pre-commit Hook for Formatting**

   - Implement a pre-commit hook using `lefthook` to automatically format staged files.
   - Use `Prettier` for formatting `.ts`, `.js`, `.json`, `.yaml`, and `.md` files.
   - Use `pkg` for formatting `package.json` files.
   - Allow contributors to skip formatting checks with a specific flag (e.g., `--no-verify`).

3. **Pre-push Hook for Tests**

   - Implement a pre-push hook using `lefthook` to run unit tests before pushing changes.
   - Ensure the hook runs only the tests relevant to the changes (e.g., using `jest --changedSince`).

4. **Configuration File for Lefthook**

   - Create a centralized `lefthook.yml` configuration file to manage all hooks.
   - Ensure the configuration is modular and easy to extend for future hooks.

5. **Documentation for Contributors**

   - Update the `CONTRIBUTING.md` file to include instructions for setting up `lefthook`.
   - Provide troubleshooting steps for common issues with hooks.

6. **Cross-Platform Compatibility**

   - Ensure all hooks work seamlessly on macOS, Linux, and Windows environments.
   - Test hooks in different shell environments (e.g., Bash, Zsh, PowerShell).

7. **Performance Optimization**

   - Ensure hooks execute within a reasonable time frame (e.g., under 5 seconds for linting/formatting).
   - Use caching mechanisms where applicable to speed up repeated operations.

8. **Error Reporting**
   - Provide detailed error logs when hooks fail, including file names and line numbers.
   - Suggest actionable steps to resolve errors (e.g., "Run `npm run lint:fix` to fix linting issues").
   - Include a stage to use [Knip](https://knip.dev/) for detecting unused files and exports.

## Non-Functional Requirements

1. **Scalability**

   - The `lefthook` configuration should support adding new hooks without significant rework.

2. **Maintainability**

   - Ensure the `lefthook.yml` file is well-documented and follows a consistent structure.
   - Use comments to explain the purpose of each hook.

3. **Usability**

   - Hooks should provide clear and concise output to contributors.
   - Avoid overwhelming contributors with verbose logs unless explicitly requested (e.g., with a `--verbose` flag).

4. **Reliability**

   - Hooks must execute consistently across different environments and setups.
   - Include automated tests to verify the functionality of hooks.

5. **Security**
   - Ensure hooks do not expose sensitive information (e.g., environment variables, credentials).
   - Validate inputs to prevent malicious code execution.

## User Stories

### Story 6.1: Pre-commit Hook for Linting

- **Goal**: Ensure code quality by running linting checks before committing changes.
- **User Role**: Contributor
- **Acceptance Criteria**:
  1. The pre-commit hook runs linting checks on all staged files.
  2. If linting issues are found, the commit is blocked, and a detailed error message is displayed.
  3. Contributors can resolve linting issues and retry the commit.
- **Tasks**:
  1. Configure `lefthook` to run `eslint` on staged files.
  2. Test the hook with various file types (e.g., `.ts`, `.js`).
  3. Update `CONTRIBUTING.md` with instructions for resolving linting issues.

### Story 6.2: Pre-commit Hook for Formatting

- **Goal**: Ensure consistent code formatting by running Prettier before committing changes.
- **User Role**: Contributor
- **Acceptance Criteria**:
  1. The pre-commit hook runs Prettier on all staged files.
  2. If formatting issues are found, the commit is blocked, and contributors are prompted to fix them.
  3. Contributors can skip the hook using a `--no-verify` flag.
- **Tasks**:
  1. Configure `lefthook` to run `prettier --check` on staged files.
  2. Test the hook with various file types (e.g., `.ts`, `.js`, `.json`, `.md`).
  3. Update `CONTRIBUTING.md` with instructions for resolving formatting issues.

### Story 6.3: Pre-push Hook for Tests

- **Goal**: Prevent broken code from being pushed by running tests before pushing changes.
- **User Role**: Contributor
- **Acceptance Criteria**:
  1. The pre-push hook runs unit tests relevant to the changes.
  2. If tests fail, the push is blocked, and a detailed error message is displayed.
  3. Contributors can skip the hook using a `--no-verify` flag.
- **Tasks**:
  1. Configure `lefthook` to run `jest --changedSince` on relevant files.
  2. Test the hook with various scenarios (e.g., passing tests, failing tests).
  3. Update `CONTRIBUTING.md` with instructions for troubleshooting test failures.

### Story 6.4: Centralized Lefthook Configuration

- **Goal**: Provide a single source of truth for managing hooks.
- **User Role**: Contributor
- **Acceptance Criteria**:
  1. A `lefthook.yml` file is created to manage all hooks.
  2. The configuration is modular and easy to extend.
  3. The file is well-documented with comments explaining each hook.
- **Tasks**:
  1. Create a `lefthook.yml` file with configurations for linting, formatting, and testing hooks.
  2. Test the configuration on macOS, Linux, and Windows environments.
  3. Add comments to explain the purpose of each hook.

### Story 6.5: Documentation for Contributors

- **Goal**: Ensure contributors can easily set up and use `lefthook`.
- **User Role**: Contributor
- **Acceptance Criteria**:
  1. The `CONTRIBUTING.md` file includes detailed instructions for setting up `lefthook`.
  2. Common troubleshooting steps are documented.
  3. The documentation is clear and easy to follow.
- **Tasks**:
  1. Update `CONTRIBUTING.md` with setup instructions for `lefthook`.
  2. Add a troubleshooting section for common issues (e.g., hook failures, skipping hooks).
  3. Review the documentation for clarity and completeness.

### Story 6.6: Cross-Platform Compatibility

- **Goal**: Ensure hooks work seamlessly across different operating systems.
- **User Role**: Contributor
- **Acceptance Criteria**:
  1. Hooks are tested on macOS, Linux, and Windows environments.
  2. Any platform-specific issues are resolved.
  3. Contributors can use hooks regardless of their shell environment (e.g., Bash, Zsh, PowerShell).
- **Tasks**:
  1. Test hooks on macOS, Linux, and Windows environments.
  2. Resolve any platform-specific issues (e.g., path handling, shell compatibility).
  3. Update `CONTRIBUTING.md` with any platform-specific setup instructions.

### Story 6.7: Performance Optimization

- **Goal**: Ensure hooks execute quickly to avoid disrupting contributor workflows.
- **User Role**: Contributor
- **Acceptance Criteria**:
  1. Hooks execute within a reasonable time frame (e.g., under 5 seconds for linting/formatting).
  2. Caching mechanisms are used to speed up repeated operations.
  3. Performance is consistent across different environments.
- **Tasks**:
  1. Optimize hook configurations for performance (e.g., run checks only on staged files).
  2. Implement caching mechanisms where applicable.
  3. Test hook performance in different environments.
