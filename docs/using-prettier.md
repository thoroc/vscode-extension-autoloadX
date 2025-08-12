# Using Prettier in the Project

## Overview

Prettier is configured in this project to ensure consistent code formatting. It is integrated with Lefthook to run automatically on staged files during pre-commit.

## Installation

All necessary dependencies are installed automatically when you run:

```bash
npm install
```

## Running Prettier

To format code manually, run the following command:

```bash
npm run format
```

## Pre-commit Hook

Prettier is configured to run automatically on staged files during pre-commit using Lefthook. This ensures that all committed code adheres to the project's formatting standards.

## Configuration

The Prettier configuration file is located at `.prettierrc.json`. It defines the formatting rules for the project.

## Additional Resources

- [Prettier Documentation](https://prettier.io/docs/en/)
