# Scenario 8: Recover Lost Commits

**Difficulty:** Advanced  
**Time:** 15 minutes

## Situation

You accidentally deleted a branch or reset too far back, and you think you've lost important commits. Don't panic! Git keeps a reflog of all operations, and you can recover "lost" commits.

## Your Task

1. Create some commits
2. "Lose" them (delete branch or hard reset)
3. Use reflog to find them
4. Recover the lost work

## Setup

Create the problem:

```bash
# Step 1: Create feature branch with work
git checkout -b feature/important-work

# Step 2: Make several commits
echo "// Critical feature" >> practice-files/app.js
git add practice-files/app.js
git commit -m "feat: add critical feature"

echo "// More critical work" >> practice-files/app.js
git add practice-files/app.js
git commit -m "feat: continue critical work"

echo "// Final touches" >> practice-files/app.js
git add practice-files/app.js
git commit -m "feat: finalize critical feature"

# Step 3: Accidentally delete the branch
git checkout main
git branch -D feature/important-work  # Oops! Lost it!

# Or alternatively, accidentally hard reset:
# git reset --hard HEAD~3
```

## Step-by-Step Solution

<details>
<summary>Click to reveal solution</summary>

### Step 1: Don't panic!

Git keeps a log of all operations. Your commits still exist!

### Step 2: View the reflog

```bash
git reflog
```

You'll see something like:
```
a1b2c3d HEAD@{0}: checkout: moving from feature/important-work to main
e4f5g6h HEAD@{1}: commit: feat: finalize critical feature
i7j8k9l HEAD@{2}: commit: feat: continue critical work
m0n1o2p HEAD@{3}: commit: feat: add critical feature
...
```

### Step 3: Find your lost commits

Look for the commits you made. The most recent commit on your deleted branch is usually near the top.

### Step 4: Recover by creating a new branch

```bash
# Using the hash from reflog
git checkout -b feature/recovered-work e4f5g6h

# Or using HEAD@{n} notation
git checkout -b feature/recovered-work HEAD@{1}
```

### Step 5: Verify recovery

```bash
git log --oneline
```

You should see all your "lost" commits!

### Alternative: Cherry-pick specific commits

If you only want specific commits:

```bash
git checkout main
git checkout -b feature/selective-recovery

# Cherry-pick specific commits
git cherry-pick e4f5g6h
git cherry-pick i7j8k9l
```

</details>

## Advanced: Searching Reflog

### Find commits by message

```bash
git reflog | grep "critical feature"
```

### Find commits by date

```bash
git reflog --date=relative
```

### Find commits by operation

```bash
git reflog | grep "commit"    # All commits
git reflog | grep "checkout"  # All branch switches
git reflog | grep "reset"     # All resets
```

## Practice Scenarios

Try recovering from different situations:

### Scenario A: Accidental Hard Reset

```bash
# Create commits
git checkout -b test-reset
echo "test" >> practice-files/app.js
git add . && git commit -m "test commit 1"
echo "test2" >> practice-files/app.js
git add . && git commit -m "test commit 2"

# Accidentally reset
git reset --hard HEAD~2

# Recover using reflog
git reflog
git reset --hard HEAD@{1}  # Or use commit hash
```

### Scenario B: Deleted Branch with Unmerged Work

```bash
# Create branch with work
git checkout -b experimental-feature
# Make commits...

# Delete before merging
git checkout main
git branch -D experimental-feature

# Recover
git reflog | grep experimental-feature
git checkout -b experimental-feature-recovered <hash>
```

### Scenario C: Recover After Messy Rebase

```bash
# Start rebase
git rebase -i HEAD~5
# Something goes wrong, history is messy

# Find state before rebase
git reflog
git reset --hard HEAD@{before-rebase}
```

## What You Learned

- ✅ Using `git reflog` to view operation history
- ✅ Recovering deleted branches
- ✅ Recovering from hard resets
- ✅ Cherry-picking recovered commits
- ✅ Searching reflog for specific operations

## Important Notes

### Reflog Limitations

1. **Local only**: Reflog is local to your machine
2. **Time limit**: Entries expire after 90 days by default
3. **Garbage collection**: Unreachable objects are eventually deleted

### Prevention Tips

1. **Push regularly**: Remote is safe backup
2. **Don't use `--hard` lightly**: Prefer `--soft` or `--mixed`
3. **Test risky operations**: Use `--dry-run` flags when available
4. **Create backup branches**: Before complex operations
5. **Use `--force-with-lease`**: Instead of `--force`

## Emergency Commands

```bash
# View all operations
git reflog

# View reflog for specific branch
git reflog show feature-branch

# Reset to specific reflog entry
git reset --hard HEAD@{2}

# Recover deleted branch
git checkout -b recovered-branch <hash-from-reflog>

# Find dangling commits
git fsck --lost-found
```

## Next Challenge

Try [Scenario 9: Complex Merge Conflict](scenario-09-complex-conflict.md)

