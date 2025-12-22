# Day 5: Best Practices & Real-World Scenarios

## Morning: Git Best Practices (2 hours)

### Exercise 5.1: Writing Good Commit Messages

**Objective:** Learn Conventional Commits format and best practices.

**Conventional Commits Format:**
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting (no code change)
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Practice writing commits:**

1. **Feature commit:**
   ```bash
   git commit -m "feat(auth): add user login functionality

   Implements email/password authentication with JWT tokens.
   Includes error handling and validation.

   Closes #123"
   ```

2. **Bug fix:**
   ```bash
   git commit -m "fix(api): correct user endpoint URL

   Changed from /user to /users/:id to match API spec.
   Fixes 404 errors when fetching user data.

   Fixes #456"
   ```

3. **Refactor:**
   ```bash
   git commit -m "refactor(utils): extract validation logic

   Moved validation functions to separate module for reusability.
   No functional changes."
   ```

**Practice:**
- Make changes and write proper commit messages
- Use different types (feat, fix, refactor, etc.)
- Include scope when relevant
- Write clear subject lines (50 chars or less)
- Add body for complex changes

### Exercise 5.2: Creating .gitignore

**Objective:** Learn to create comprehensive .gitignore files.

**Create .gitignore for different project types:**

1. **Node.js project:**
   ```gitignore
   # Dependencies
   node_modules/
   npm-debug.log*
   yarn-debug.log*
   yarn-error.log*

   # Build outputs
   dist/
   build/
   *.tsbuildinfo

   # Environment variables
   .env
   .env.local
   .env.*.local

   # IDE
   .vscode/
   .idea/
   *.swp
   *.swo
   *~

   # OS
   .DS_Store
   Thumbs.db

   # Logs
   logs/
   *.log
   ```

2. **Python project:**
   ```gitignore
   # Byte-compiled
   __pycache__/
   *.py[cod]
   *$py.class

   # Virtual environments
   venv/
   env/
   ENV/

   # IDE
   .vscode/
   .idea/
   *.swp

   # Testing
   .pytest_cache/
   .coverage
   htmlcov/
   ```

3. **General patterns:**
   ```gitignore
   # Ignore specific files
   config.local.json
   secrets.txt

   # Ignore file patterns
   *.tmp
   *.bak
   *~

   # Ignore directories
   temp/
   cache/
   .cache/

   # But keep some files in ignored dirs
   !temp/.gitkeep
   ```

**Practice:**
- Create .gitignore for your practice repo
- Test by creating files that should be ignored
- Verify with `git status`

### Exercise 5.3: Atomic Commits

**Objective:** Learn to make focused, atomic commits.

**Bad (not atomic):**
```bash
git add .
git commit -m "Update everything"
```
This includes multiple unrelated changes.

**Good (atomic):**
```bash
# Change 1: Fix bug
git add practice-files/app.js
git commit -m "fix: correct user validation logic"

# Change 2: Add feature
git add practice-files/utils.js
git commit -m "feat: add data formatting utility"

# Change 3: Update docs
git add README.md
git commit -m "docs: update installation instructions"
```

**Practice:**
1. Make multiple unrelated changes
2. Commit each change separately
3. Review with `git log --oneline`
4. See how each commit tells a story

### Exercise 5.4: Branch Naming Conventions

**Objective:** Learn standard branch naming patterns.

**Common conventions:**

- **Feature:** `feature/user-authentication`
- **Bug fix:** `fix/login-error` or `bugfix/login-error`
- **Hotfix:** `hotfix/security-patch`
- **Release:** `release/v1.2.0`
- **Chore:** `chore/update-dependencies`
- **Docs:** `docs/api-documentation`

**Practice:**
```bash
# Create branches following conventions
git checkout -b feature/add-search
git checkout -b fix/button-styling
git checkout -b hotfix/critical-bug
git checkout -b chore/update-packages
```

## Afternoon: Real-World Scenarios (2-3 hours)

### Scenario 1: Feature Branch Needs Latest Main

**Situation:** You're working on a feature, but main has new changes you need.

**Solution:**

```bash
# Option 1: Merge main into feature
git checkout feature/my-feature
git fetch origin
git merge origin/main
# Resolve conflicts if any
git push

# Option 2: Rebase feature on main (cleaner history)
git checkout feature/my-feature
git fetch origin
git rebase origin/main
# Resolve conflicts if any
git push --force-with-lease
```

**Practice:**
1. Create feature branch
2. Make commits on feature
3. Switch to main, make commits
4. Go back to feature
5. Rebase on main
6. Resolve any conflicts

### Scenario 2: Committed to Wrong Branch

**Situation:** You made commits on main instead of feature branch.

**Solution:**

```bash
# Method 1: Reset and cherry-pick
git checkout main
git log --oneline  # Find commit hash
git reset --hard HEAD~1  # Remove from main
git checkout -b feature/correct-branch
git cherry-pick <commit-hash>

# Method 2: Create branch from current state
git checkout -b feature/correct-branch
git checkout main
git reset --hard origin/main  # Reset to remote state
```

**Practice:**
1. Accidentally commit to main
2. Use reset to remove commit
3. Create correct branch
4. Cherry-pick the commit

### Scenario 3: Undo Pushed Commit

**Situation:** You need to undo a commit that's already pushed.

**Solution:**

```bash
# Safe method: Revert (creates new commit)
git revert <commit-hash>
git push

# Dangerous method: Reset (rewrites history)
# Only if you're sure no one else has pulled
git reset --hard HEAD~1
git push --force-with-lease
```

**Practice:**
1. Make and push a commit
2. Revert it safely
3. See how history shows both commits

### Scenario 4: Clean Up Branch Before PR

**Situation:** Your branch has messy commits that should be cleaned up.

**Solution:**

```bash
# Interactive rebase to clean up
git rebase -i HEAD~5  # Last 5 commits
# Change picks to squash/fixup
# Reword commit messages
git push --force-with-lease
```

**Practice:**
1. Create branch with messy commits
2. Use interactive rebase
3. Squash related commits
4. Reword messages
5. Push cleaned history

### Scenario 5: Lost Work Recovery

**Situation:** You lost commits or a branch.

**Solution:**

```bash
# Find lost commits
git reflog

# Recover branch
git checkout -b recovered-branch <hash-from-reflog>

# Or checkout directly
git checkout <hash>
```

**Practice:**
1. Create commits
2. Delete branch or reset
3. Use reflog to find commits
4. Recover the work

### Scenario 6: Large File Accidentally Committed

**Situation:** You committed a large file that shouldn't be in repo.

**Solution:**

```bash
# Remove from history (requires force push)
git rm --cached large-file.zip
git commit --amend
git push --force-with-lease

# Or use git filter-branch / BFG Repo-Cleaner for old commits
```

**Practice:**
1. Add large file
2. Commit it
3. Remove from Git (keep locally)
4. Amend commit
5. Force push

### Scenario 7: Merge Conflict in PR

**Situation:** Your PR has conflicts with main.

**Solution:**

```bash
# Update your branch
git checkout feature/my-feature
git fetch origin
git rebase origin/main
# Resolve conflicts
git add .
git rebase --continue
git push --force-with-lease
```

**Practice:**
1. Create PR
2. Make conflicting changes on main
3. Update your branch
4. Resolve conflicts
5. Push updates

### Scenario 8: Need to Update Old Commit Message

**Situation:** You want to fix a typo in an old commit message.

**Solution:**

```bash
git rebase -i HEAD~5  # Go back to that commit
# Change "pick" to "reword"
# Save, then edit message
git push --force-with-lease
```

**Practice:**
1. Find commit with typo
2. Use interactive rebase
3. Reword the message
4. Push update

## Practice Checklist

- [ ] Wrote commits using Conventional Commits format
- [ ] Created comprehensive .gitignore file
- [ ] Made atomic commits (one logical change each)
- [ ] Used proper branch naming conventions
- [ ] Handled "feature needs latest main" scenario
- [ ] Recovered from "wrong branch" mistake
- [ ] Safely reverted a pushed commit
- [ ] Cleaned up branch history before PR
- [ ] Recovered lost work using reflog
- [ ] Resolved merge conflicts in PR
- [ ] Updated old commit messages

## Git Workflow Best Practices Summary

### Daily Workflow:
1. **Start of day:**
   ```bash
   git fetch origin
   git checkout main
   git pull origin main
   ```

2. **Starting new feature:**
   ```bash
   git checkout -b feature/feature-name
   ```

3. **During development:**
   ```bash
   git add <specific-files>
   git commit -m "type(scope): clear message"
   ```

4. **Before pushing:**
   ```bash
   git fetch origin
   git rebase origin/main  # Update with latest
   ```

5. **Pushing:**
   ```bash
   git push -u origin feature/feature-name
   ```

6. **After PR merge:**
   ```bash
   git checkout main
   git pull origin main
   git branch -d feature/feature-name
   ```

### Commit Message Template:
```
type(scope): subject (50 chars or less)

Body explaining what and why, not how.
Can be multiple paragraphs.

Fixes #123
Closes #456
```

### Branch Protection Rules:
- Never force push to main/master
- Always pull before creating branches
- Keep feature branches short-lived
- Delete merged branches
- Use descriptive branch names

## Final Practice: Complete Workflow Simulation

**Simulate a full feature development cycle:**

1. **Setup:**
   ```bash
   git checkout main
   git pull origin main
   ```

2. **Create feature:**
   ```bash
   git checkout -b feature/user-profile
   ```

3. **Develop:**
   - Make atomic commits
   - Write good commit messages
   - Use stash when needed

4. **Update with main:**
   ```bash
   git fetch origin
   git rebase origin/main
   ```

5. **Clean up:**
   ```bash
   git rebase -i HEAD~n
   # Squash/fixup as needed
   ```

6. **Push:**
   ```bash
   git push -u origin feature/user-profile
   ```

7. **Create PR:**
   - Write clear description
   - Link issues
   - Request review

8. **Address feedback:**
   - Make changes
   - Amend or add commits
   - Push updates

9. **After merge:**
   ```bash
   git checkout main
   git pull origin main
   git branch -d feature/user-profile
   ```

## Reflection Questions

1. What makes a commit message good?
2. Why are atomic commits important?
3. When should you rebase vs merge?
4. How do you handle conflicts in a PR?
5. What's your recovery strategy for lost work?
6. How do you keep your Git history clean?

## Resources for Continued Learning

- **Pro Git Book:** https://git-scm.com/book
- **GitHub Guides:** https://guides.github.com
- **Atlassian Tutorials:** https://www.atlassian.com/git/tutorials
- **Learn Git Branching:** https://learngitbranching.js.org/
- **Conventional Commits:** https://www.conventionalcommits.org/

## Congratulations!

You've completed the 5-day Git learning plan! You now have the skills to:
- Work effectively with branches
- Resolve merge conflicts
- Create and manage Pull Requests
- Use advanced Git commands
- Follow Git best practices
- Handle real-world scenarios

**Next Steps:**
- Practice daily at work
- Observe your team's Git workflow
- Ask questions and learn from code reviews
- Share knowledge with teammates
- Keep learning and improving!

Good luck at Worldover! 🚀

