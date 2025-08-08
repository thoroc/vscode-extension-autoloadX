# Secret Management for VS Code Extension Deployment

## Storing Secrets

- Store the VSCE Personal Access Token (PAT) as a GitHub repository secret named `VSCE_PAT`.
- Never commit secrets or sensitive credentials to the repository.
- Only maintainers with admin access should manage repository secrets.

## Referencing Secrets in Workflows

- In workflow YAML files, reference secrets using `${{ secrets.SECRET_NAME }}`.
- Example (from `.github/workflows/deploy.yml`):

  ```yaml
  env:
    VSCE_PAT: ${{ secrets.VSCE_PAT }}
  run: npx vsce publish -p "$VSCE_PAT"
  ```

## Rotating and Auditing Secrets

- Rotate secrets regularly and after any suspected compromise.
- Remove unused or obsolete secrets from the repository settings.
- Document secret rotation events in a secure internal log.

## Additional Notes

- For more information, see GitHub's documentation on [encrypted secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets).
