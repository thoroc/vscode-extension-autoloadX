# 5. Epic List

1. **Epic 1: Core Engine & MVP Workflow:** Establish the foundational capabilities of the extension. This includes
   implementing the project scanning engine, the recommendation logic, and the core user workflow of prompting for and
   applying changes. The goal is to deliver a fully functional, end-to-end MVP that successfully manages extensions for
   a single workspace.

2. **Epic 2: Enhanced Configuration & User Control:** Build upon the MVP by providing users with robust configuration
   options. This includes implementing whitelists, blacklists, and the ability for users to define their own custom
   context-to-extension mappings directly in `settings.json`. The goal is to give power users full control over the
   extension's behavior.

3. **Epic 3: Automated Build and Deployment with GitHub Actions:** Enable automatic build and deployment of the VS Code
   extension using GitHub Actions for continuous integration (CI) and continuous deployment (CD). This will improve
   reliability, speed, and developer productivity by automating manual processes.

   - **User Stories:**
     - As a developer, I want every commit to be built and tested automatically so I can catch issues early.
     - As a maintainer, I want deployments to be automated so releases are consistent and fast.
     - As a contributor, I want to see build and deploy status in PRs so I know if my changes are safe to merge.

4. **Epic 4: Release to Github:** Automate the release process to GitHub to enable potential users to test the MVP. This
   includes creating a new release when a Git tag is detected, packaging the VSCode extension in the correct format, and
   ensuring the extension is downloadable and installable from the release file.

   - **User Stories:**
     - As a developer, I want to create a new release on GitHub when a Git tag is detected so that users can download
       the latest version.
     - As a user, I want the release to include the VSCode extension in the correct format so that I can install and
       test it easily.
     - As an early adopter, I want to download and install the extension from GitHub so that I can provide feedback on
       its functionality.

5. **Epic 5: Integrate GitHub Action for Gemini:** Enhance project maintenance by automating Gemini CLI tasks within the
   CI/CD pipeline using the [Run Gemini CLI GitHub Action](https://github.com/marketplace/actions/run-gemini-cli).

   - **User Stories:**

     - As a maintainer, I want to integrate the GitHub Action for Gemini CLI so that repetitive tasks are automated and
       maintenance effort is reduced.
     - As a developer, I want the action to run automatically on relevant workflows so that I can focus on core
       development tasks.
     - As a contributor, I want clear and actionable logs from the action so that I can understand its impact on the
       project.
     - As a maintainer, I want the action to check if all tasks in an issue are completed and update the label from "in
       progress" to "completed" automatically.

   - **Acceptance Criteria:**
     - The GitHub Action for Gemini CLI is integrated into the project.
     - The action runs automatically on relevant workflows.
     - The action executes without errors and provides clear output logs.
     - Documentation is updated to include details about the new GitHub Action.
     - The integration is tested and verified.
