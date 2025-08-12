# Settings Priority for AutoLoadX

AutoLoadX uses a prioritized approach to determine which settings to apply. This ensures that the most relevant and
context-specific settings are used, while providing fallback options for flexibility. Below is an explanation of the
settings storage hierarchy and how it works.

## Settings Storage Locations

1. **Local Repository** (Highest Priority):

   - Settings stored in the `.vscode` directory within the project.
   - Alternatively, the extension's own configuration file within the repository.
   - These settings are specific to the project and take precedence over all others.

2. **Global Settings**:

   - The `settings.json` file for VSCode.
   - These settings apply across all projects and serve as a fallback if no local repository settings are found.

3. **Extension Installation Directory** (Lowest Priority):
   - Settings stored in the directory where the extension is installed.
   - These are used only if neither local repository nor global settings are available.

## How It Works

1. **Initialization**:

   - When the extension is activated, it immediately checks for settings in the prioritized order.
   - The first available settings file is read and applied.

2. **Priority Order**:

   - The extension first looks for settings in the local repository.
   - If no local settings are found, it checks the global settings.
   - If neither local nor global settings are available, it falls back to the extension installation directory.

3. **Conflict Resolution**:

   - If settings are found in multiple locations, the local repository settings always override global and extension
     directory settings.

4. **Migration**:
   - Existing settings are seamlessly migrated to the new prioritized structure without data loss.

## Benefits

- **Project-Specific Customization**: Developers can define settings specific to a project, ensuring the extension
  behaves as expected in different contexts.
- **Global Consistency**: Default settings can be applied globally, reducing the need for repetitive configuration.
- **Fallback Safety**: The extension installation directory provides a safety net, ensuring the extension always has a
  valid configuration.

## Example

### Local Repository Settings

```json
{
  "autoLoadX": {
    "whitelist": ["extension1", "extension2"],
    "blacklist": ["extension3"],
    "customMappings": {
      "python": ["ms-python.python"]
    }
  }
}
```

### Global Settings

```json
{
  "autoLoadX": {
    "whitelist": ["extension4"],
    "blacklist": [],
    "customMappings": {}
  }
}
```

In this example, the local repository settings will take precedence over the global settings, ensuring project-specific
configurations are applied first.

---

For more details, refer to the [Core Workflows](core-workflows.md) documentation.
