# Git Workflow Cheat Sheet

## Daily Workflow

### Starting Your Day

```bash
# 1. Update main branch
git checkout main
git pull origin main

# 2. Check what branches you have
git branch -a
```

### Starting New Feature

```bash
# 1. Make sure main is up to date
git checkout main
git pull origin main

# 2. Create feature branch
git checkout -b feature/feature-name

# 3. Start working!
```

### During Development

```bash
# 1. Check what changed
git status
git diff

# 2. Add specific files (recommended)
git add path/to/file.js
git add path/to/another.js

# Or add all (be careful!)
git add .

# 3. Commit with good message
git commit -m "feat: add user authentication"

# 4. Repeat as you work
```

### Before Pushing

```bash
# 1. Make sure main hasn't changed
git fetch origin

# 2. Update your branch (choose one)
# Option A: Merge
git merge origin/main

# Option B: Rebase (cleaner history)
git rebase origin/main

# 3. Push your branch
git push -u origin feature/feature-name
```

### Creating Pull Request

1. Go to GitHub/GitLab
2. Click "New Pull Request"
3. Write clear description
4. Link related issues
5. Request reviewers
6. Wait for review

### After Review Feedback

```bash
# 1. Make requested changes
# Edit files...

# 2. Commit changes
git add .
git commit -m "fix: address review comments"

# 3. Push updates (PR updates automatically)
git push
```

### After PR is Merged

```bash
# 1. Switch to main
git checkout main

# 2. Pull merged changes
git pull origin main

# 3. Delete local branch
git branch -d feature/feature-name

# 4. Delete remote branch (if not auto-deleted)
git push origin --delete feature/feature-name
```

## Common Scenarios

### Need to Switch Branches Mid-Work

```bash
# Stash your changes
git stash push -m "WIP: feature description"

# Switch branches
git checkout other-branch

# Do urgent work...

# Come back
git checkout original-branch
git stash pop
```

### Accidentally Committed to Wrong Branch

```bash
# On wrong branch (e.g., main)
git reset HEAD~1  # Undo commit, keep changes
git stash         # Save changes

# Switch to correct branch
git checkout -b feature/correct-branch

# Apply changes
git stash pop
git add .
git commit -m "proper message"
```

### Need Latest Main in Your Feature

```bash
# On feature branch
git fetch origin

# Option 1: Merge (preserves history)
git merge origin/main

# Option 2: Rebase (cleaner history)
git rebase origin/main

# If rebase, force push
git push --force-with-lease
```

### Merge Conflict in PR

```bash
# Update your branch
git checkout feature/my-feature
git fetch origin
git rebase origin/main

# Fix conflicts in files
# Remove <<<<<<<, =======, >>>>>>> markers

# Mark as resolved
git add .
git rebase --continue

# Push updates
git push --force-with-lease
```

### Clean Up Messy Commits

```bash
# Interactive rebase last 5 commits
git rebase -i HEAD~5

# In editor:
# - Change 'pick' to 'squash' or 'fixup' for commits to combine
# - Change 'pick' to 'reword' to edit message
# - Save and close

# Force push
git push --force-with-lease
```

## Branch Naming Conventions

```bash
feature/add-user-auth       # New features
fix/login-button            # Bug fixes
hotfix/security-patch       # Urgent fixes
chore/update-deps           # Maintenance
docs/api-documentation      # Documentation
refactor/extract-utils      # Code restructuring
```

## Commit Message Format

```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance

**Examples:**
```bash
git commit -m "feat(auth): add login form"
git commit -m "fix(api): correct endpoint URL"
git commit -m "docs: update README with setup instructions"
```

## Quick Reference

| Task | Command |
|------|---------|
| Start feature | `git checkout -b feature/name` |
| Save progress | `git add . && git commit -m "message"` |
| Update branch | `git fetch origin && git rebase origin/main` |
| Push branch | `git push -u origin feature/name` |
| Stash work | `git stash` |
| Apply stash | `git stash pop` |
| View history | `git log --oneline --graph` |
| Undo commit | `git reset --soft HEAD~1` |
| Clean up commits | `git rebase -i HEAD~n` |

## Safety Rules

1. ✅ **Never force push to main/master**
2. ✅ **Always pull before creating new branches**
3. ✅ **Use `--force-with-lease` instead of `--force`**
4. ✅ **Test before pushing**
5. ✅ **Write clear commit messages**
6. ✅ **Keep commits atomic** (one logical change)
7. ✅ **Create branches for all work** (never commit directly to main)
8. ✅ **Delete merged branches** (keep repo clean)

