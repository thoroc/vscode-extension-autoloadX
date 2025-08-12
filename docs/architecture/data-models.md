# Data Models

## ProjectContext

**Purpose:** Represents a detected technology or language within the user's workspace. This is the primary input for the
recommendation engine.

**Key Attributes:**

- `name`: `string` - The unique name of the context (e.g., 'typescript', 'python').
- `extensions`: `string[]` - A list of file extensions associated with this context (e.g., `['.ts', '.tsx']`).
- `filenames`: `string[]` - A list of specific filenames associated with this context (e.g.,
  `['package.json', 'tsconfig.json']`).

### TypeScript Interface

```typescript
interface ProjectContext {
  name: string;
  extensions: string[];
  filenames: string[];
}
```

### Relationships

- A workspace can have one or more `ProjectContext`s.

## ExtensionRecommendation

**Purpose:** Represents a recommendation to either enable or disable a specific VSCode extension. This is the primary
output of the recommendation engine.

**Key Attributes:**

- `id`: `string` - The unique identifier of the extension (e.g., 'dbaeumer.vscode-eslint').
- `friendlyName`: `string` - The human-readable name of the extension (e.g., 'ESLint').
- `action`: `'enable' | 'disable'` - The recommended action to take.

### TypeScript Interface

```typescript
interface ExtensionRecommendation {
  id: string;
  friendlyName: string;
  action: \"enable\" | \"disable\";
}
```

### Relationships

- The recommendation engine will produce a list of `ExtensionRecommendation` objects.

## ExtensionMapping

**Purpose:** Defines the mapping between a project context and the VSCode extensions that should be enabled for it. This
mapping is now hardcoded in the codebase but can be extended or overridden by user configuration in `settings.json`.

**Key Attributes:**

- `context`: `string` - The name of the `ProjectContext` this mapping applies to.
- `extensionIds`: `string[]` - A list of extension IDs that are recommended for this context.

### TypeScript Interface

```typescript
interface ExtensionMapping {
  context: string;
  extensionIds: string[];
}
```

### Relationships

- There will be a list of `ExtensionMapping`s that the recommendation engine uses as its knowledge base.
