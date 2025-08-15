# Repository Contributor Onboarding Guide

## Purpose

This task provides a structured guide for onboarding new contributors to the repository. It ensures that contributors
understand and follow best practices, including creating branches, using `git rebase`, respecting Git hooks, and
adhering to team conventions.

---

## Instructions

### 1. Initial Setup

- [ ] **Clone the Repository**: Provide the repository URL and guide contributors to clone it using `git clone`.
- [ ] **Install Dependencies**: Run `npm install` or the equivalent command to install project dependencies.
- [ ] **Set Up Pre-Commit Hooks**: Ensure contributors install and configure Git hooks (e.g., using `lefthook install`
      if `lefthook.yml` is present).
- [ ] **Review Repository Documentation**:
  - [ ] Read the `README.md` for an overview of the project.
  - [ ] Review `CONTRIBUTING.md` for contribution guidelines.
  - [ ] Familiarize yourself with the `LICENSE` file.

---

### 2. Branching Strategy

- [ ] **Create a New Branch**:
  - Use a descriptive branch name that follows the team’s naming conventions (e.g., `feature/short-description`,
    `bugfix/issue-id`).
  - Example: `git checkout -b feature/add-new-component`.
- [ ] **Keep Branches Focused**:
  - Ensure each branch addresses a single feature, bug, or task.

---

### 3. Commit Best Practices

- [ ] **Write Clear Commit Messages**:
  - Use the format: `type(scope): description`.
  - Example: `feat(ui): add new button component`.
  - Use imperative mood: "Add feature" not "Added feature".
  - Keep the subject line under 50 characters.
  - Use types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`.
  - Include scope when relevant (e.g., `api`, `ui`, `auth`).
  - Reference issue numbers with `#` prefix (e.g., `#123`).
- [ ] **Commit Frequently**:
  - Make small, incremental commits to track progress.

---

### 4. Rebasing and Merging

- [ ] **Use `git rebase` for Updates**:
  - Regularly rebase your branch with the main branch to stay up-to-date:

    ```bash
    git fetch origin
    git rebase origin/main
    ```

- [ ] **Resolve Conflicts**:
  - Address any merge conflicts during the rebase process.
- [ ] **Avoid `git merge` in Feature Branches**:
  - Use `git rebase` instead to maintain a clean commit history.

---

### 5. Respect Git Hooks

- [ ] **Run Pre-Commit Hooks**:
  - Ensure all pre-commit hooks (e.g., linting, formatting) pass before committing changes.
- [ ] **Address Hook Failures**:
  - Fix any issues flagged by hooks before proceeding.

---

### 6. Adhere to Team Conventions

- [ ] **Follow Coding Standards**:
  - Adhere to the coding standards outlined in the repository (e.g., `eslint.config.js`, `.prettierrc.json`).
- [ ] **Write Tests**:
  - Add or update unit tests for any new functionality or bug fixes.
  - Ensure all tests pass before pushing changes.
- [ ] **Document Changes**:
  - Update relevant documentation (e.g., `README.md`, `docs/`) to reflect your changes.

---

### 7. Push and Create a Pull Request

- [ ] **Push Your Branch**:
  - Push your branch to the remote repository:

    ```bash
    git push -u origin <branch-name>
    ```

- [ ] **Create a Pull Request (PR)**:
  - Use a clear and concise title and description for the PR.
  - Link to any relevant issues or tasks.
  - Request reviews from appropriate team members.

---

### 8. Review and Feedback

- [ ] **Address Review Comments**:
  - Make necessary changes based on feedback from reviewers.
- [ ] **Rebase and Update PR**:
  - Rebase your branch with the main branch before merging:

    ```bash
    git fetch origin
    git rebase origin/main
    git push --force-with-lease
    ```

---

### 9. Merge and Cleanup

- [ ] **Merge the PR**:
  - Use the team’s preferred merge strategy (e.g., squash and merge).
- [ ] **Delete the Branch**:
  - Delete the feature branch after merging to keep the repository clean.

---

### 10. Continuous Improvement

- [ ] **Participate in Retrospectives**:
  - Share feedback on the contribution process to improve team workflows.
- [ ] **Stay Updated**:
  - Regularly review updates to the repository’s guidelines and tools.

---

## Success Criteria

The onboarding process is successful when:

1. Contributors can set up their environment and start contributing without issues.
2. All steps in the instructions are followed and validated.
3. Contributors adhere to the repository’s best practices and conventions.

---

## Notes

- Encourage contributors to ask questions and seek help when needed.
- Provide links to additional resources, such as Git tutorials or team-specific guides.

---
