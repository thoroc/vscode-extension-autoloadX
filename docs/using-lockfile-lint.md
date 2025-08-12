# Using lockfile-lint in the Project

## Overview

lockfile-lint is used in this project to ensure the integrity of the `package-lock.json` file and prevent dependency
tampering.

## Installation

All necessary dependencies are installed automatically when you run:

```bash
npm install
```

## Running lockfile-lint

To validate the lockfile locally, run the following command:

```bash
npm run lint:lockfile
```

## CI/CD Integration

lockfile-lint is integrated into the CI/CD pipeline to automatically validate the lockfile during builds. Any issues
will cause the pipeline to fail.

## Configuration

The lockfile-lint configuration is defined in the `package.json` file under the `scripts` section. It validates the
following:

- Path: `package-lock.json`
- Allowed hosts: `npmjs.com`
- Allowed schemes: `https`

## Additional Resources

- [lockfile-lint Documentation](https://github.com/lirantal/lockfile-lint)
