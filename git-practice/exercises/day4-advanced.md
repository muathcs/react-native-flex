# Day 4: Advanced Git Commands

## Morning: Stashing and Temporary Changes (2 hours)

### Exercise 4.1: Basic Stashing

**Objective:** Learn when and how to use `git stash`.

**Steps:**

1. **Start with uncommitted changes:**
   ```bash
   git checkout main
   # Make some changes to practice-files/app.js
   # Don't commit yet!
   ```

2. **Check status:**
   ```bash
   git status
   ```
   Shows modified files

3. **Stash your changes:**
   ```bash
   git stash
   ```
   Changes are saved, working directory is clean

4. **Verify stash:**
   ```bash
   git status  # Should be clean
   git stash list  # Shows your stash
   ```

5. **Switch branches:**
   ```bash
   git checkout -b feature/urgent-fix
   # Do urgent work
   git add .
   git commit -m "fix: urgent bug fix"
   ```

6. **Return to main and restore stash:**
   ```bash
   git checkout main
   git stash pop
   ```
   Your changes are back!

### Exercise 4.2: Stash with Messages

**Objective:** Learn to name stashes for better organization.

**Steps:**

1. **Make changes:**
   ```bash
   # Edit files
   ```

2. **Stash with message:**
   ```bash
   git stash push -m "WIP: navigation feature"
   ```

3. **View stash list:**
   ```bash
   git stash list
   ```
   Shows: `stash@{0}: WIP: navigation feature`

4. **Apply specific stash:**
   ```bash
   git stash apply stash@{0}
   ```

### Exercise 4.3: Stash Stack Management

**Objective:** Learn to manage multiple stashes.

**Steps:**

1. **Create multiple stashes:**
   ```bash
   # Make changes
   git stash push -m "Feature A work"
   
   # Make different changes
   git stash push -m "Feature B work"
   
   # Make more changes
   git stash push -m "Bug fix work"
   ```

2. **View stash stack:**
   ```bash
   git stash list
   ```
   Shows all stashes in reverse order (newest first)

3. **Apply stash (keeps it in stack):**
   ```bash
   git stash apply stash@{1}  # Apply second stash
   git stash list  # Still shows all stashes
   ```

4. **Pop stash (removes from stack):**
   ```bash
   git stash pop stash@{0}  # Apply and remove newest
   git stash list  # One less stash
   ```

5. **Drop a stash:**
   ```bash
   git stash drop stash@{1}  # Delete without applying
   ```

6. **Clear all stashes:**
   ```bash
   git stash clear  # Delete all stashes (careful!)
   ```

### Exercise 4.4: Stash Untracked Files

**Objective:** Learn to stash new files too.

**Steps:**

1. **Create new untracked file:**
   ```bash
   touch practice-files/new-feature.js
   # Add some content
   ```

2. **Regular stash won't include it:**
   ```bash
   git stash
   git status  # new-feature.js still shows as untracked
   ```

3. **Stash including untracked:**
   ```bash
   git stash -u  # or --include-untracked
   git status  # Now clean, including new file
   ```

4. **Restore:**
   ```bash
   git stash pop
   git status  # Everything restored
   ```

### Exercise 4.5: Stash vs Commit

**Objective:** Understand when to stash vs commit.

**When to STASH:**
- Need to switch branches urgently
- Changes are incomplete/WIP
- Not ready to commit
- Temporary experimental changes

**When to COMMIT:**
- Changes are complete and tested
- Want to save progress permanently
- Need to share with others
- Part of feature development

**Practice scenario:**
```bash
# You're working on feature A
git checkout -b feature/a
# Make some progress but not done
# Urgent bug fix needed on main

# Option 1: Stash (good for incomplete work)
git stash
git checkout main
# Fix bug, commit, push
git checkout feature/a
git stash pop

# Option 2: Commit (good for save point)
git add .
git commit -m "WIP: feature A progress"
git checkout main
# Fix bug
git checkout feature/a
# Continue work
```

## Afternoon: Advanced History Management (2-3 hours)

### Exercise 4.6: Interactive Rebase Deep Dive

**Objective:** Master interactive rebase for cleaning history.

**Steps:**

1. **Create messy commit history:**
   ```bash
   git checkout -b feature/rebase-practice
   ```
   - Make change 1, commit: `git commit -m "wip"`
   - Make change 2, commit: `git commit -m "fix"`
   - Make change 3, commit: `git commit -m "update"`
   - Make change 4, commit: `git commit -m "done"`

2. **Start interactive rebase:**
   ```bash
   git rebase -i HEAD~4
   ```

3. **Understand rebase options:**
   ```
   pick    - Use commit as-is
   reword  - Use commit but change message
   edit    - Stop to amend commit
   squash  - Combine with previous commit
   fixup   - Like squash but discard message
   drop    - Remove commit
   ```

4. **Practice squash:**
   Change to:
   ```
   pick abc1234 wip
   squash def5678 fix
   squash ghi9012 update
   squash jkl3456 done
   ```
   Save, then write combined message

5. **Practice reword:**
   ```bash
   git rebase -i HEAD~3
   ```
   Change `pick` to `reword` for a commit
   Save, then change the message

6. **Practice edit:**
   ```bash
   git rebase -i HEAD~3
   ```
   Change `pick` to `edit` for a commit
   Save, Git stops at that commit
   - Make changes
   - `git add .`
   - `git commit --amend`
   - `git rebase --continue`

### Exercise 4.7: Cherry-Picking Commits

**Objective:** Learn to copy commits between branches.

**Steps:**

1. **Create commits on feature branch:**
   ```bash
   git checkout -b feature/cherry-source
   ```
   - Make change 1, commit: `git commit -m "feat: add feature A"`
   - Make change 2, commit: `git commit -m "feat: add feature B"`
   - Make change 3, commit: `git commit -m "feat: add feature C"`

2. **Get commit hashes:**
   ```bash
   git log --oneline
   ```
   Copy a commit hash (e.g., `abc1234`)

3. **Switch to another branch:**
   ```bash
   git checkout main
   git checkout -b feature/cherry-dest
   ```

4. **Cherry-pick a commit:**
   ```bash
   git cherry-pick abc1234
   ```
   That commit is now on this branch!

5. **Cherry-pick multiple commits:**
   ```bash
   git cherry-pick abc1234 def5678
   ```
   Or range:
   ```bash
   git cherry-pick abc1234^..ghi9012
   ```

6. **Handle conflicts:**
   If cherry-pick conflicts:
   ```bash
   # Resolve conflicts
   git add .
   git cherry-pick --continue
   # Or abort:
   git cherry-pick --abort
   ```

### Exercise 4.8: Reflog for Recovery

**Objective:** Learn to recover "lost" commits using reflog.

**Steps:**

1. **Make some commits:**
   ```bash
   git checkout -b feature/reflog-practice
   ```
   - Make changes and commit
   - Make more changes and commit
   - Make even more changes and commit

2. **View reflog:**
   ```bash
   git reflog
   ```
   Shows all Git operations with hashes

3. **Accidentally reset:**
   ```bash
   git reset --hard HEAD~3
   ```
   Oops! Lost commits?

4. **Find lost commits:**
   ```bash
   git reflog
   ```
   Find the hash before the reset

5. **Recover:**
   ```bash
   git checkout <hash-from-reflog>
   ```
   Or create a branch:
   ```bash
   git branch recovered-branch <hash>
   ```

6. **Practice recovery scenarios:**
   - Lost branch: `git reflog | grep "checkout.*branch"`
   - Lost commit: `git reflog | grep "commit"`
   - Lost merge: `git reflog | grep "merge"`

### Exercise 4.9: Reset vs Revert

**Objective:** Understand when to use reset vs revert.

**Reset (rewrites history):**
```bash
# Soft: Keep changes staged
git reset --soft HEAD~1

# Mixed (default): Keep changes unstaged
git reset --mixed HEAD~1
git reset HEAD~1  # Same as mixed

# Hard: Discard all changes
git reset --hard HEAD~1
```

**Revert (creates new commit):**
```bash
# Safe for shared branches
git revert HEAD
git revert abc1234
```

**Practice:**

1. **Reset (local branch only):**
   ```bash
   git checkout -b feature/reset-test
   # Make commits
   git reset --soft HEAD~2  # Undo last 2 commits, keep changes
   git status  # Changes are staged
   ```

2. **Revert (safe for shared):**
   ```bash
   git checkout main
   git revert <commit-hash>  # Creates new commit undoing changes
   git log  # Shows revert commit
   ```

### Exercise 4.10: Advanced Scenarios

**Scenario 1: Oops, committed to wrong branch**
```bash
# You're on main but meant to be on feature
git reset HEAD~1  # Undo commit, keep changes
git stash  # Save changes
git checkout -b feature/correct-branch
git stash pop  # Apply changes
git commit -m "feat: correct commit"
```

**Scenario 2: Need to update old commit**
```bash
git rebase -i HEAD~5
# Change "pick" to "edit" for the commit
# Make changes
git add .
git commit --amend
git rebase --continue
```

**Scenario 3: Split a large commit**
```bash
git rebase -i HEAD~3
# Change "pick" to "edit"
# Reset to before the commit:
git reset HEAD~1
# Make partial changes, commit
# Make remaining changes, commit
git rebase --continue
```

## Practice Checklist

- [ ] Used `git stash` to save temporary changes
- [ ] Created multiple stashes and managed stash stack
- [ ] Stashed untracked files with `-u`
- [ ] Used interactive rebase to squash commits
- [ ] Used interactive rebase to reword commits
- [ ] Used interactive rebase to edit commits
- [ ] Cherry-picked commits between branches
- [ ] Used reflog to recover lost commits
- [ ] Used `git reset` (soft, mixed, hard)
- [ ] Used `git revert` to safely undo commits
- [ ] Recovered from "wrong branch" mistake

## Common Commands Reference

```bash
# Stashing
git stash                    # Stash changes
git stash push -m "msg"     # Stash with message
git stash list               # List stashes
git stash apply              # Apply stash (keep in stack)
git stash pop                # Apply and remove stash
git stash drop               # Delete stash
git stash clear              # Delete all stashes
git stash -u                 # Include untracked files

# Interactive Rebase
git rebase -i HEAD~n         # Rebase last n commits
# Options: pick, reword, edit, squash, fixup, drop

# Cherry-pick
git cherry-pick <hash>       # Copy commit
git cherry-pick <hash1> <hash2>  # Multiple commits
git cherry-pick <range>      # Range of commits

# Reflog
git reflog                    # View all operations
git checkout <hash>          # Checkout from reflog

# Reset
git reset --soft HEAD~1      # Undo commit, keep staged
git reset --mixed HEAD~1     # Undo commit, keep unstaged
git reset --hard HEAD~1      # Undo commit, discard changes

# Revert
git revert HEAD              # Create commit undoing HEAD
git revert <hash>            # Create commit undoing hash
```

## Reflection Questions

1. When should you stash vs commit?
2. What's the difference between `apply` and `pop`?
3. When would you use rebase vs merge?
4. What's the difference between reset and revert?
5. How do you recover a deleted branch?
6. When is cherry-pick useful?

## Safety Tips

- **Never force push to main/master**
- **Use `--force-with-lease` instead of `--force`**
- **Use `revert` on shared branches, not `reset`**
- **Test rebase/cherry-pick on feature branches first**
- **Use reflog as safety net**
- **Create backup branches before risky operations**

## Next Steps

Once you've completed all exercises, mark Day 4 as complete and move to Day 5: Best Practices & Real-World Scenarios.

