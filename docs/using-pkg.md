# Using pkg in the Project

## Overview

pkg is used in this project to enforce consistent formatting of the `package.json` file. It ensures that the file
adheres to a standard structure and formatting style.

## Installation

All necessary dependencies are installed automatically when you run:

```bash
npm install
```

## Running pkg

To format the `package.json` file manually, run the following command:

```bash
npm run format:pkg
```

## CI/CD Integration

pkg is integrated into the CI/CD pipeline to automatically validate the formatting of the `package.json` file during
builds. Any issues will cause the pipeline to fail.

## Configuration

The pkg configuration is defined in the `package.json` file under the `scripts` section. It ensures that the
`package.json` file is formatted consistently.

## Additional Resources

- [pkg Documentation](https://github.com/vercel/pkg)
