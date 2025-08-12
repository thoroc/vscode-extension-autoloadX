# Using Knip in the Project

## Overview

Knip is used in this project to detect and remove unused files, ensuring a clean and maintainable codebase. It is
integrated into the CI/CD pipeline and can also be run locally by contributors.

## Installation

All necessary dependencies, including Knip, are installed automatically when you run:

```bash
npm install
```

## Running Knip

To check for unused files manually, run the following command:

```bash
npm run lint:unused
```

## CI/CD Integration

Knip is configured to run automatically during the CI/CD pipeline. Any unused files detected will be reported in the
pipeline logs.

## Configuration

Knip's configuration can be customized in the `knip.json` file located in the root of the project. This file defines the
rules and paths for detecting unused files.

## Additional Resources

- [Knip Documentation](https://github.com/webpro/knip)
