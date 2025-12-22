# Day 1: Branching Strategy & Remote Collaboration

## Morning: Branching Strategy (2 hours)

### Exercise 1.1: Create Feature Branches

**Objective:** Learn to create and manage feature branches effectively.

**Steps:**

1. **Check current branch:**
   ```bash
   git branch
   ```
   You should see `* main` (the asterisk shows current branch)

2. **Create your first feature branch:**
   ```bash
   git checkout -b feature/login
   ```
   This creates and switches to a new branch called `feature/login`

3. **Make a change:**
   - Edit `practice-files/app.js`
   - Add a comment: `// Login feature implementation`
   - Save the file

4. **Commit your change:**
   ```bash
   git add practice-files/app.js
   git commit -m "Add login feature placeholder"
   ```

5. **Create two more feature branches:**
   ```bash
   git checkout main
   git checkout -b feature/dashboard
   ```
   - Edit `practice-files/app.js` and add: `// Dashboard feature`
   - Commit: `git add . && git commit -m "Add dashboard feature placeholder"`
   
   ```bash
   git checkout main
   git checkout -b feature/api
   ```
   - Edit `practice-files/app.js` and add: `// API integration`
   - Commit: `git add . && git commit -m "Add API feature placeholder"`

6. **View all branches:**
   ```bash
   git branch -a
   ```
   Notice all three feature branches

7. **Switch between branches:**
   ```bash
   git checkout feature/login
   git checkout feature/dashboard
   git checkout feature/api
   git checkout main
   ```
   Use `git log --oneline` on each branch to see different commit histories

8. **View branch visualization:**
   ```bash
   git log --oneline --graph --all
   ```
   This shows all branches and their relationships

### Exercise 1.2: Modern Git Commands

**Objective:** Learn modern Git commands (`git switch` and `git restore`).

**Steps:**

1. **Use `git switch` instead of `git checkout`:**
   ```bash
   git switch feature/login
   git switch main
   git switch -c feature/new-feature  # Create and switch
   ```

2. **Delete a branch:**
   ```bash
   git branch -d feature/new-feature  # Safe delete (only if merged)
   git branch -D feature/new-feature  # Force delete (even if not merged)
   ```

### Exercise 1.3: Branch Management

**Objective:** Practice branch naming and organization.

**Steps:**

1. **List all branches:**
   ```bash
   git branch          # Local branches
   git branch -r       # Remote branches (none yet)
   git branch -a       # All branches
   ```

2. **Rename a branch:**
   ```bash
   git branch -m feature/login feature/user-authentication
   ```

3. **Check which branch you're on:**
   ```bash
   git branch --show-current
   ```

## Afternoon: Remote Collaboration (2-3 hours)

### Exercise 1.4: Understanding Remotes

**Objective:** Learn about remote repositories and how to work with them.

**Steps:**

1. **Check remote configuration:**
   ```bash
   git remote -v
   ```
   Should show your GitHub repository URL

2. **View remote details:**
   ```bash
   git remote show origin
   ```

### Exercise 1.5: Fetch vs Pull

**Objective:** Understand the difference between `fetch` and `pull`.

**Steps:**

1. **Fetch changes (without merging):**
   ```bash
   git fetch origin
   ```
   This downloads changes but doesn't merge them

2. **Check what changed:**
   ```bash
   git log HEAD..origin/main  # See commits on remote not in local
   git diff HEAD origin/main  # See differences
   ```

3. **Pull changes (fetch + merge):**
   ```bash
   git pull origin main
   ```
   This fetches AND merges in one command

**Key Difference:**
- `fetch` = download only (safe, inspect first)
- `pull` = download + merge (can cause conflicts)

### Exercise 1.6: Push Branches to Remote

**Objective:** Learn to push branches and set upstream tracking.

**Steps:**

1. **Push a feature branch:**
   ```bash
   git checkout feature/login
   git push -u origin feature/login
   ```
   The `-u` flag sets upstream tracking

2. **Push without -u (if upstream already set):**
   ```bash
   git push
   ```

3. **Push all branches:**
   ```bash
   git push --all origin
   ```

4. **Verify remote branches:**
   ```bash
   git branch -r
   ```
   You should now see `origin/feature/login`

### Exercise 1.7: Tracking Remote Branches

**Objective:** Learn to track and work with remote branches.

**Steps:**

1. **Create a branch that tracks remote:**
   ```bash
   git checkout -b feature/tracking origin/feature/login
   ```
   This creates a local branch tracking the remote

2. **Set upstream for existing branch:**
   ```bash
   git branch --set-upstream-to=origin/feature/login feature/login
   ```

3. **Check tracking status:**
   ```bash
   git branch -vv
   ```
   Shows which branches track which remotes

### Exercise 1.8: Simulate Team Collaboration

**Objective:** Practice working with remote changes.

**Steps:**

1. **On GitHub, make a change:**
   - Go to your GitHub repository
   - Edit `README.md` directly on GitHub
   - Commit the change

2. **Fetch the change locally:**
   ```bash
   git fetch origin
   git log origin/main --oneline  # See the new commit
   ```

3. **Merge the remote changes:**
   ```bash
   git checkout main
   git merge origin/main
   ```
   Or simply: `git pull origin main`

4. **Verify you have the changes:**
   ```bash
   git log --oneline
   ```

## Practice Checklist

- [ ] Created 3 feature branches (`feature/login`, `feature/dashboard`, `feature/api`)
- [ ] Made commits on each branch
- [ ] Switched between branches using `git checkout` and `git switch`
- [ ] Viewed branch history with `git log --oneline --graph --all`
- [ ] Pushed branches to remote with `git push -u`
- [ ] Fetched changes with `git fetch`
- [ ] Pulled changes with `git pull`
- [ ] Understood difference between fetch and pull
- [ ] Set upstream tracking for branches

## Common Commands Reference

```bash
# Branching
git branch                    # List branches
git branch <name>             # Create branch
git checkout -b <name>        # Create and switch
git switch -c <name>          # Modern way to create and switch
git switch <name>             # Switch branch
git branch -d <name>          # Delete branch
git branch -a                 # List all branches

# Remote
git remote -v                 # View remotes
git fetch origin              # Download changes
git pull origin main          # Fetch + merge
git push -u origin <branch>   # Push and set upstream
git branch -r                 # List remote branches
git branch -vv                # Show tracking info
```

## Reflection Questions

1. What's the difference between `git fetch` and `git pull`?
2. Why is it important to set upstream tracking when pushing?
3. When would you use `git branch -d` vs `git branch -D`?
4. How do you see which branch you're currently on?

## Next Steps

Once you've completed all exercises, mark Day 1 as complete and move to Day 2: Merging & Conflict Resolution.

