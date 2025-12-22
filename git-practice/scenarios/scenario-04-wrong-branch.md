# Scenario 4: Wrong Branch Commit

**Difficulty:** Intermediate  
**Time:** 10 minutes

## Situation

You accidentally made commits on the `main` branch instead of creating a feature branch. You need to move these commits to the correct branch without losing your work.

## Your Task

1. You're on `main` with 2 commits that shouldn't be there
2. Remove these commits from `main`
3. Create a proper feature branch
4. Move the commits to the feature branch

## Setup

First, create the problem situation:

```bash
# Make sure you're on main
git checkout main

# Make commits directly (oops!)
echo "// Feature work" >> practice-files/app.js
git add practice-files/app.js
git commit -m "feat: add feature work"

echo "// More feature work" >> practice-files/app.js
git add practice-files/app.js
git commit -m "feat: continue feature work"

# Now you realize: these should be on a feature branch!
```

## Step-by-Step Solution

<details>
<summary>Click to reveal solution</summary>

### Method 1: Create branch, then reset main

```bash
# Step 1: Create branch from current state
git branch feature/moved-commits

# Step 2: Reset main to before your commits
git reset --hard HEAD~2

# Step 3: Switch to feature branch
git checkout feature/moved-commits

# Step 4: Verify
git log --oneline  # Should show your commits
git checkout main
git log --oneline  # Should not show your commits
```

### Method 2: Reset and cherry-pick

```bash
# Step 1: Note the commit hashes
git log --oneline  # Copy the hashes

# Step 2: Reset main
git reset --hard HEAD~2

# Step 3: Create feature branch
git checkout -b feature/moved-commits

# Step 4: Cherry-pick the commits
git cherry-pick <first-commit-hash>
git cherry-pick <second-commit-hash>
```

### Method 3: Using reflog (if you already reset)

```bash
# If you already lost the commits
git reflog

# Find the commit hashes
git checkout -b feature/recovered-commits
git cherry-pick <commit-hash>
```

</details>

## What You Learned

- ✅ Moving commits between branches
- ✅ Using `git reset` to undo commits
- ✅ Cherry-picking commits
- ✅ Using reflog for recovery

## Prevention

To avoid this in the future:
- Always check which branch you're on: `git branch`
- Create feature branch before starting work
- Configure Git to show branch in terminal prompt

## Next Challenge

Try [Scenario 5: Update Feature with Latest Main](scenario-05-update-feature.md)

