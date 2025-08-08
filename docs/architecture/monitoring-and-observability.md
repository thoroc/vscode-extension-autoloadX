# Monitoring and Observability

## Monitoring Stack

- **Error Tracking:** Errors are reported to the user via VSCode notifications. Detailed error stacks are logged to the
  "AutoLoadX" output channel.
- **Performance Monitoring:** Performance is monitored during development using VSCode's built-in "Show Running
  Extensions" command.

## Local Diagnostics

To improve our ability to diagnose issues reported by users, we will provide a command that gathers relevant,
non-sensitive diagnostic information.

- **Command:** `AutoLoadX: Copy Diagnostic Information`
- **Action:** When run, this command will copy a pre-formatted Markdown string to the user's clipboard. The user can
  then easily paste this into a GitHub issue.
- **Information Included:**
  - AutoLoadX Version
  - VSCode Version
  - Operating System
  - List of activated project contexts for the current workspace
  - Contents of the `whitelist` and `blacklist` configuration
  - The last 20 lines from the AutoLoadX output channel log

This approach maintains our "no telemetry" promise while making the process of creating a high-quality bug report almost
effortless for the user.

## Key Metrics

The key indicators of the extension's health and performance will be gathered from:

- **User Feedback:** Reviews and ratings on the VSCode Marketplace.
- **Issue Reports:** Bug reports and feature requests on GitHub, which will be enhanced by the diagnostic information
  provided by users.
- **Manual Profiling:** Periodic performance analysis by the development team using VSCode's built-in tools.
