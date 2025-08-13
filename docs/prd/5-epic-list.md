# 5. Epic List

1. **Epic 1: Core Engine & MVP Workflow:** Establish the foundational capabilities of the extension. This includes
   implementing the project scanning engine, the recommendation logic, and the core user workflow of prompting for and
   applying changes. The goal is to deliver a fully functional, end-to-end MVP that successfully manages extensions for
   a single workspace.
   - **User Stories:**
     - **Story 1.1:** Technical Spike: Validate Extension Management API
     - **Story 1.2:** Implement Project Context Scanner
     - **Story 1.3:** Create Recommendation Engine from Default Mappings
     - **Story 1.4:** Build and Display the Approval Prompt
     - **Story 1.5:** Implement Extension State Change and Logging
     - **Story 1.6:** Error Handling and User Feedback for Extension Actions

2. **Epic 2: Enhanced Configuration & User Control:** Build upon the MVP by providing users with robust configuration
   options. This includes implementing whitelists, blacklists, and the ability for users to define their own custom
   context-to-extension mappings directly in `settings.json`. The goal is to give power users full control over the
   extension's behavior.
   - **User Stories:**
     - **Story 2.1:** Implement Whitelist and Blacklist Functionality
     - **Story 2.2:** Allow User-Defined Custom Mappings
     - **Story 2.3:** Update Extension Settings Storage Location
     - **Story 2.4:** Define Default Mappings in Code

3. **Epic 3: Automated Build and Deployment with GitHub Actions:** Enable automatic build and deployment of the VS Code
   extension using GitHub Actions for continuous integration (CI) and continuous deployment (CD). This will improve
   reliability, speed, and developer productivity by automating manual processes.
   - **User Stories:**
     - **Story 3.1:** As a developer, I want every commit to be built and tested automatically so I can catch issues
       early.
     - **Story 3.2:** As a maintainer, I want deployments to be automated so releases are consistent and fast.
     - **Story 3.3:** As a contributor, I want to see build and deploy status in PRs so I know if my changes are safe to
       merge.

4. **Epic 4: Release to Github:** Automate the release process to GitHub to enable potential users to test the MVP. This
   includes creating a new release when a Git tag is detected, packaging the VSCode extension in the correct format, and
   ensuring the extension is downloadable and installable from the release file.
   - **User Stories:**
     - **Story 4.1:** As a developer, I want to create a new release on GitHub when a Git tag is detected so that users
       can download the latest version.
     - **Story 4.2:** As a user, I want the release to include the VSCode extension in the correct format so that I can
       install and test it easily.
     - **Story 4.3:** As an early adopter, I want to download and install the extension from GitHub so that I can
       provide feedback on its functionality.

5. **Epic 5: Integrate GitHub Action for Gemini:** Enhance project maintenance by automating Gemini CLI tasks within the
   CI/CD pipeline using the [Run Gemini CLI GitHub Action](https://github.com/marketplace/actions/run-gemini-cli).
   - **User Stories:**
     - **Story 5.1:** As a maintainer, I want to integrate the GitHub Action for Gemini CLI so that repetitive tasks are
       automated and maintenance effort is reduced.
     - **Story 5.2:** As a developer, I want the action to run automatically on relevant workflows so that I can focus
       on core development tasks.
     - **Story 5.3:** As a contributor, I want clear and actionable logs from the action so that I can understand its
       impact on the project.
     - **Story 5.4:** As a maintainer, I want the action to check if all tasks in an issue are completed and update the
       label from "in progress" to "completed" automatically.

   - **Acceptance Criteria:**
     - The GitHub Action for Gemini CLI is integrated into the project.
     - The action runs automatically on relevant workflows.
     - The action executes without errors and provides clear output logs.
     - Documentation is updated to include details about the new GitHub Action.
     - The integration is tested and verified.

6. **Epic 6: Quality-of-Life Improvements for Contributors:** Enhance the development experience by implementing
   githooks using lefthook for linting and formatting, ensuring code consistency and reducing errors.
   - **User Stories:**
     - **Story 6.1:** As a contributor, I want githooks to automatically run linting and formatting checks so that I can
       ensure my code adheres to project standards.
     - **Story 6.2:** As a maintainer, I want consistent code formatting across all contributions so that the codebase
       remains clean and maintainable.
     - **Story 6.3:** As a developer, I want clear feedback from githooks when issues are detected so that I can quickly
       address them before committing.
