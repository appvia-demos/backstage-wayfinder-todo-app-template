# JFrog Artifactory Integration

This template includes a demo npm package (`packages/todo-utils`) that publishes to JFrog Artifactory.

## GitHub Actions Workflow

The `.github/workflows/publish-utils.yml` workflow publishes the package on push to main.

## Required Secrets

- `ARTIFACTORY_URL` - JFrog Artifactory URL
- `ARTIFACTORY_NPM_REPO` - NPM repository name (default: `npm-local`)
- `ARTIFACTORY_DOMAIN` - Artifactory domain
- `ARTIFACTORY_ACCESS_TOKEN` - Access token

## Local Testing

```bash
cd packages/todo-utils
npm install
npm test
npm run build
```