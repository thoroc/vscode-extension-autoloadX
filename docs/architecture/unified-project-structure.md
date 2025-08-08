# Unified Project Structure

```plaintext
autoloadx/
├── .github/                    # CI/CD workflows
│   └── workflows/
│       └── ci.yaml
├── .vscode/                    # VSCode settings for the project
│   └── launch.json
├── data/                       # Static data for the extension
│   └── defaultMappings.json
├── src/                        # Source code
│   ├── services/
│   │   ├── configurationService.ts
│   │   ├── configurationService.test.ts
│   │   ├── contextScanner.ts
│   │   ├── contextScanner.test.ts
│   │   ├── extensionManager.ts
│   │   ├── extensionManager.test.ts
│   │   ├── recommendationEngine.ts
│   │   ├── recommendationEngine.test.ts
│   │   ├── userInterfaceService.ts
│   │   └── userInterfaceService.test.ts
│   ├── types/
│   │   └── index.ts
│   └── extension.ts            # Main extension entry point
├── .gitignore
├── package.json                # Project manifest and dependencies
├── tsconfig.json               # TypeScript configuration
└── README.md
```
