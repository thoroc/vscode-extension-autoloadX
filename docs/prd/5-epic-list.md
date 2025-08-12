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
4. **Epic 4: Release to Github:** Automate the release process to GitHub to enable potential users to test the MVP. This
    includes creating a new release when a Git tag is detected, packaging the VSCode extension in the correct format, and
    ensuring the extension is downloadable and installable from the release file.