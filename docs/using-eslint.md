# Using ESLint in the Project

## Overview

ESLint is configured in this project to ensure consistent code quality and enforce coding standards. It is integrated
with Prettier for code formatting.

## Installation

All necessary dependencies are installed automatically when you run:

```bash
npm install
```

## Running ESLint

To check for linting issues, run the following command:

```bash
npm run lint
```

## Fixing Linting Issues

To automatically fix linting issues, use:

```bash
npm run lint -- --fix
```

## Pre-commit Hook

ESLint is configured to run automatically on staged files during pre-commit. This ensures that all committed code
adheres to the project's coding standards.

## Configuration

The ESLint configuration file is located at `.eslintrc.json`. It extends the recommended ESLint rules and integrates
Prettier.

## Additional Resources

- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Prettier Documentation](https://prettier.io/docs/en/)
