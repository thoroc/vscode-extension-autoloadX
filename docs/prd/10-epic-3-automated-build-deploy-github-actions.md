# Epic: Automated Build and Deployment with GitHub Actions

## Goal

Enable automatic build and deployment of the VS Code extension using GitHub Actions for continuous integration (CI) and
continuous deployment (CD).

## Background

Currently, builds and deployments are manual, which slows down release cycles and increases the risk of human error.
Automating these processes will improve reliability, speed, and developer productivity.

## Requirements

- Configure GitHub Actions workflows to:
  - Build the extension on every push and pull request to the main branch
  - Run tests automatically
  - Package the extension for deployment
  - Deploy the extension to the appropriate marketplace or release location (e.g., GitHub Releases, VS Code Marketplace)
- Ensure secrets and credentials are securely managed
- Provide status feedback in pull requests

## Acceptance Criteria

- [ ] A `.github/workflows/` directory exists with at least one workflow YAML file
- [ ] On push or PR to `main`, the workflow builds and tests the extension
- [ ] On release or tag, the workflow packages and deploys the extension
- [ ] Build/test/deploy status is visible in GitHub PRs
- [ ] Documentation exists for maintaining and updating the workflow

## User Stories

- As a developer, I want every commit to be built and tested automatically so I can catch issues early
- As a maintainer, I want deployments to be automated so releases are consistent and fast
- As a contributor, I want to see build and deploy status in PRs so I know if my changes are safe to merge

## Technical Notes

- Use [GitHub Actions documentation](https://docs.github.com/en/actions) for workflow syntax and best practices
- Consider using existing actions for Node.js, VSCE (Visual Studio Code Extension Manager), and deployment
- Store secrets (e.g., VSCE token) in GitHub repository secrets

## Risks

- Misconfigured workflows could block releases
- Leaked secrets could compromise the extension or publisher account

## Next Steps

1. Draft initial workflow YAML for build/test
2. Add packaging and deployment steps
3. Test with a sample PR and release
4. Document the workflow in the repository
