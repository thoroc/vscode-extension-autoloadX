# Epic: Release to Github

## Context

The current project is in the middle of the development cycle for an MVP. To allow potential users to test the product,
we need to create an automated release of the VSCode extension in the appropriate format.

## Goals

- Create an automated release process to GitHub based on the Git tag.
- Ensure the release includes the VSCode extension packaged in the correct format for users to download and test.

## User Personas

- **Developers**: Individuals who will test the MVP and provide feedback.
- **Early Adopters**: Users interested in trying out the VSCode extension before its official release.

## Acceptance Criteria

- Ensure the VSIX package includes only necessary files by adding a `.vscodeignore` file or specifying the `files`
  property, and validate its effectiveness during testing. property in `package.json`.
- Review and exclude unnecessary files from the VSIX package, such as test files and non-essential configurations.
- Optimize the package size while maintaining functionality.
- Validate the optimized VSIX package to ensure it works as expected.

- Successfully create a new release on GitHub when a new Git tag is detected.
- The release includes the VSCode extension packaged in the correct format.
- Users can download the release file from GitHub.
- The downloaded extension is installable and functional in VSCode.

## Dependencies

- Depends on Epic 3: Automated Build and Deployment with GitHub Actions for foundational workflows.

## Priority

- **High**
