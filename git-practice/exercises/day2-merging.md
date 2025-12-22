# Day 2: Merging & Conflict Resolution

## Morning: Merge Strategies (2 hours)

### Exercise 2.1: Fast-Forward Merge

**Objective:** Understand fast-forward merges (when branches haven't diverged).

**Steps:**

1. **Start from clean main:**
   ```bash
   git checkout main
   git pull origin main  # Make sure you're up to date
   ```

2. **Create a feature branch:**
   ```bash
   git checkout -b feature/simple-feature
   ```

3. **Make a simple change:**
   - Edit `practice-files/app.js`
   - Add: `console.log('Simple feature added');`
   - Commit:
     ```bash
     git add practice-files/app.js
     git commit -m "Add simple feature"
     ```

4. **Merge back to main (fast-forward):**
   ```bash
   git checkout main
   git merge feature/simple-feature
   ```

5. **Check the merge:**
   ```bash
   git log --oneline --graph
   ```
   Notice it's a straight line (fast-forward merge)

6. **Clean up:**
   ```bash
   git branch -d feature/simple-feature
   ```

### Exercise 2.2: Three-Way Merge

**Objective:** Create a merge commit when branches have diverged.

**Steps:**

1. **Create two branches from main:**
   ```bash
   git checkout main
   git checkout -b feature/header
   ```

2. **Make changes on feature/header:**
   - Edit `practice-files/app.js`
   - Add: `// Header component`
   - Commit:
     ```bash
     git add practice-files/app.js
     git commit -m "Add header component"
     ```

3. **Switch to main and make a different change:**
   ```bash
   git checkout main
   ```
   - Edit `practice-files/app.js`
   - Add: `// Main app logic`
   - Commit:
     ```bash
     git add practice-files/app.js
     git commit -m "Add main app logic"
     ```

4. **Merge feature/header (creates merge commit):**
   ```bash
   git merge feature/header
   ```

5. **View the merge:**
   ```bash
   git log --oneline --graph --all
   ```
   Notice the merge commit connecting the two branches

### Exercise 2.3: Merge with --no-ff

**Objective:** Force a merge commit even when fast-forward is possible.

**Steps:**

1. **Create a new feature branch:**
   ```bash
   git checkout -b feature/footer
   ```

2. **Make a commit:**
   - Edit `practice-files/app.js`
   - Add: `// Footer component`
   - Commit:
     ```bash
     git add practice-files/app.js
     git commit -m "Add footer component"
     ```

3. **Merge with --no-ff:**
   ```bash
   git checkout main
   git merge --no-ff feature/footer
   ```

4. **Compare with fast-forward:**
   ```bash
   git log --oneline --graph
   ```
   Notice the merge commit even though fast-forward was possible

### Exercise 2.4: Abort a Merge

**Objective:** Learn to cancel a merge in progress.

**Steps:**

1. **Create conflicting branches:**
   ```bash
   git checkout -b feature/conflict-test
   ```

2. **Make a change:**
   - Edit `practice-files/app.js`
   - Change a line to: `const version = '2.0';`
   - Commit:
     ```bash
     git add practice-files/app.js
     git commit -m "Update version to 2.0"
     ```

3. **Switch to main and make conflicting change:**
   ```bash
   git checkout main
   ```
   - Edit `practice-files/app.js`
   - Change the same line to: `const version = '1.5';`
   - Commit:
     ```bash
     git add practice-files/app.js
     git commit -m "Update version to 1.5"
     ```

4. **Start merge (will conflict):**
   ```bash
   git merge feature/conflict-test
   ```
   You'll see a conflict message

5. **Abort the merge:**
   ```bash
   git merge --abort
   ```

6. **Verify you're back to clean state:**
   ```bash
   git status
   ```

## Afternoon: Conflict Resolution (2-3 hours)

### Exercise 2.5: Create and Resolve Merge Conflict

**Objective:** Practice resolving merge conflicts manually.

**Steps:**

1. **Set up conflicting branches:**
   ```bash
   git checkout main
   git checkout -b feature/user-profile
   ```

2. **Add a function to app.js:**
   - Edit `practice-files/app.js`
   - Add:
     ```javascript
     function getUserProfile(userId) {
       return {
         id: userId,
         name: 'John Doe',
         email: 'john@example.com'
       };
     }
     ```
   - Commit:
     ```bash
     git add practice-files/app.js
     git commit -m "Add getUserProfile function"
     ```

3. **Switch to main and add conflicting function:**
   ```bash
   git checkout main
   ```
   - Edit `practice-files/app.js`
   - Add the same function but with different implementation:
     ```javascript
     function getUserProfile(userId) {
       return {
         id: userId,
         name: 'Jane Smith',
         email: 'jane@example.com',
         role: 'admin'
       };
     }
     ```
   - Commit:
     ```bash
     git add practice-files/app.js
     git commit -m "Add getUserProfile with role"
     ```

4. **Merge and see conflict:**
   ```bash
   git merge feature/user-profile
   ```
   Git will show conflict markers

5. **Open the conflicted file:**
   - Look for conflict markers:
     ```
     <<<<<<< HEAD
     (current branch - main)
     =======
     (incoming branch - feature/user-profile)
     >>>>>>> feature/user-profile
     ```

6. **Resolve the conflict:**
   - Edit `practice-files/app.js`
   - Remove conflict markers
   - Keep the best version or combine both:
     ```javascript
     function getUserProfile(userId) {
       return {
         id: userId,
         name: 'John Doe',
         email: 'john@example.com',
         role: 'user'
       };
     }
     ```

7. **Mark conflict as resolved:**
   ```bash
   git add practice-files/app.js
   git status  # Should show "All conflicts fixed"
   ```

8. **Complete the merge:**
   ```bash
   git commit
   ```
   Git will open an editor with a default merge message. Save and close.

9. **Verify merge is complete:**
   ```bash
   git log --oneline --graph
   git status  # Should be clean
   ```

### Exercise 2.6: Multiple File Conflicts

**Objective:** Resolve conflicts in multiple files.

**Steps:**

1. **Create a branch with multiple file changes:**
   ```bash
   git checkout -b feature/multi-file
   ```

2. **Edit multiple files:**
   - Edit `practice-files/app.js` - add a comment
   - Edit `practice-files/config.json` - add a property
   - Edit `practice-files/utils.js` - add a function
   - Commit:
     ```bash
     git add .
     git commit -m "Update multiple files"
     ```

3. **Switch to main and make conflicting changes:**
   ```bash
   git checkout main
   ```
   - Edit the same files with different changes
   - Commit:
     ```bash
     git add .
     git commit -m "Update files differently"
     ```

4. **Merge and resolve all conflicts:**
   ```bash
   git merge feature/multi-file
   ```

5. **Check which files have conflicts:**
   ```bash
   git status
   ```

6. **Resolve each file:**
   - Open each conflicted file
   - Resolve conflicts
   - Stage each file: `git add <filename>`

7. **Complete merge:**
   ```bash
   git commit
   ```

### Exercise 2.7: Using Merge Tools

**Objective:** Learn to use visual merge tools.

**Steps:**

1. **Configure a merge tool (VS Code example):**
   ```bash
   git config --global merge.tool vscode
   git config --global mergetool.vscode.cmd 'code --wait $MERGED'
   ```

2. **Create a conflict:**
   ```bash
   git checkout -b feature/merge-tool-test
   # Make changes and commit
   git checkout main
   # Make conflicting changes and commit
   git merge feature/merge-tool-test
   ```

3. **Open merge tool:**
   ```bash
   git mergetool
   ```
   VS Code will open with conflict resolution UI

4. **Resolve using the tool:**
   - Use VS Code's "Accept Current Change", "Accept Incoming Change", or "Accept Both Changes"
   - Save and close

5. **Complete merge:**
   ```bash
   git add .
   git commit
   ```

### Exercise 2.8: Understanding Conflict Markers

**Objective:** Deep dive into conflict resolution.

**Practice reading conflicts:**

```
<<<<<<< HEAD
This is what's in your current branch (main)
const x = 1;
=======
This is what's in the branch you're merging (feature)
const x = 2;
>>>>>>> feature
```

**Resolution options:**
1. Keep HEAD (current): Remove everything except `const x = 1;`
2. Keep incoming: Remove everything except `const x = 2;`
3. Keep both: Combine or choose a third option
4. Keep neither: Write something completely different

## Practice Checklist

- [ ] Performed a fast-forward merge
- [ ] Created a three-way merge commit
- [ ] Used `--no-ff` to force merge commit
- [ ] Aborted a merge with `git merge --abort`
- [ ] Resolved a merge conflict manually
- [ ] Resolved conflicts in multiple files
- [ ] Used a merge tool (VS Code or other)
- [ ] Understood conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)

## Common Commands Reference

```bash
# Merging
git merge <branch>            # Merge branch into current
git merge --no-ff <branch>    # Force merge commit
git merge --abort             # Cancel merge in progress
git merge --continue          # Continue after resolving conflicts

# Conflict Resolution
git status                     # Check conflict status
git diff                      # See differences
git mergetool                 # Open merge tool
git add <file>                # Mark conflict resolved
git commit                    # Complete merge

# Visualization
git log --oneline --graph --all  # Visualize branch history
```

## Reflection Questions

1. What's the difference between fast-forward and three-way merge?
2. When would you use `--no-ff`?
3. How do you know which files have conflicts?
4. What do the conflict markers mean?
5. When should you use a merge tool vs manual resolution?

## Troubleshooting

**Problem:** Merge conflict seems too complex
- **Solution:** Use `git mergetool` for visual help

**Problem:** Accidentally committed during conflict resolution
- **Solution:** Use `git reset HEAD~1` to undo the commit

**Problem:** Want to start over with merge
- **Solution:** `git merge --abort` to cancel

## Next Steps

Once you've completed all exercises, mark Day 2 as complete and move to Day 3: Pull Requests & Code Review.

