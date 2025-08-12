# Using markdownlint-cli2 in the Project

## Overview

markdownlint-cli2 is used in this project to ensure consistent formatting and quality of Markdown files. It is
integrated with Lefthook to run automatically on staged files during pre-commit.

## Installation

All necessary dependencies are installed automatically when you run:

```bash
npm install
```

## Running markdownlint-cli2

To check for Markdown linting issues manually, run the following command:

```bash
npm run lint:docs
```

## Pre-commit Hook

markdownlint-cli2 is configured to run automatically on staged Markdown files during pre-commit using Lefthook. This
ensures that all committed Markdown files adhere to the project's formatting standards.

## Configuration

The markdownlint configuration file is located at `.markdownlint.json`. It defines the rules for linting Markdown files.

## Additional Resources

- [markdownlint-cli2 Documentation](https://github.com/DavidAnson/markdownlint-cli2)
