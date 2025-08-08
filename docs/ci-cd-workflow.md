# CI/CD Workflow Documentation

## Overview

This project uses GitHub Actions for CI/CD. There are two main workflows:

- **CI Workflow** (`.github/workflows/ci.yml`): Runs on push and pull request to `main`. Installs dependencies, builds the extension, runs tests, and uploads coverage and VSIX artifacts.
- **Deploy Workflow** (`.github/workflows/deploy.yml`): Runs on release or tag. Packages the extension and publishes it to the VS Code Marketplace and GitHub Releases using repository secrets.

## Updating Workflows

- Edit the workflow YAML files in `.github/workflows/`.
- For new steps, follow the structure and indentation of existing steps.
- Test changes in a feature branch before merging to `main`.

## Secrets Management

- Store sensitive values (e.g., `VSCE_PAT`) in GitHub repository secrets.
- Reference secrets in workflows using `${{ secrets.SECRET_NAME }}`.
- See `docs/secret-management.md` for more details.

## Troubleshooting

- **Workflow Fails to Trigger:**
  - Ensure the event type (push, pull_request, release, tag) matches the workflow trigger.
- **VSCE Publish Fails:**
  - Check that `VSCE_PAT` is set and valid in repository secrets.
- **Artifact Not Uploaded:**
  - Confirm the artifact path matches the output file (e.g., `*.vsix`).
- **Permission Issues:**
  - Ensure required permissions are set for GitHub Actions and secrets.

## Contributor Access

- Documentation is in `docs/ci-cd-workflow.md` and accessible to all contributors.
- For questions, open an issue or contact a maintainer.
