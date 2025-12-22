# Day 3: Pull Requests & Code Review

## Morning: Pull Request Workflow (2 hours)

### Exercise 3.1: Create Your First Pull Request

**Objective:** Learn the complete PR workflow from branch to merge.

**Steps:**

1. **Start fresh from main:**
   ```bash
   git checkout main
   git pull origin main  # Ensure you're up to date
   ```

2. **Create a feature branch:**
   ```bash
   git checkout -b feature/add-navigation
   ```

3. **Make meaningful changes:**
   - Edit `practice-files/app.js`
   - Add a navigation component:
     ```javascript
     // Navigation component
     function Navigation() {
       return {
         home: '/',
         about: '/about',
         contact: '/contact'
       };
     }
     ```
   - Commit:
     ```bash
     git add practice-files/app.js
     git commit -m "feat: add navigation component"
     ```

4. **Make a few more commits:**
   - Add styles: Edit `practice-files/styles.css`
   - Add: `.nav { display: flex; }`
   - Commit:
     ```bash
     git add practice-files/styles.css
     git commit -m "style: add navigation styles"
     ```

5. **Push branch to remote:**
   ```bash
   git push -u origin feature/add-navigation
   ```

6. **Create PR on GitHub:**
   - Go to your GitHub repository
   - Click "Compare & pull request" button (or "New pull request")
   - Fill in PR details:
     - **Title:** `feat: Add navigation component`
     - **Description:**
       ```markdown
       ## Description
       Adds a new navigation component to the application.
       
       ## Changes
       - Added Navigation function in app.js
       - Added navigation styles in styles.css
       
       ## Testing
       - [ ] Tested navigation rendering
       - [ ] Verified styles are applied correctly
       
       ## Screenshots
       (if applicable)
       ```
   - Click "Create pull request"

### Exercise 3.2: Write Effective PR Descriptions

**Objective:** Learn to write clear, helpful PR descriptions.

**Practice writing PR descriptions for:**

1. **Bug fix:**
   ```markdown
   ## Description
   Fixes issue where user profile wasn't loading correctly.
   
   ## Problem
   User profile API call was failing due to incorrect endpoint.
   
   ## Solution
   Updated API endpoint from `/user` to `/users/:id`
   
   ## Testing
   - [x] Tested with valid user ID
   - [x] Tested error handling for invalid ID
   
   Fixes #123
   ```

2. **Feature addition:**
   ```markdown
   ## Description
   Implements user authentication system.
   
   ## Changes
   - Added login form component
   - Added authentication service
   - Added protected route wrapper
   
   ## Testing
   - [x] Tested login flow
   - [x] Tested logout
   - [x] Tested protected routes
   
   Related to #45
   ```

3. **Refactoring:**
   ```markdown
   ## Description
   Refactors user service to use async/await pattern.
   
   ## Why
   Improves code readability and error handling.
   
   ## Changes
   - Converted Promise chains to async/await
   - Updated error handling
   - Added JSDoc comments
   
   ## Testing
   - [x] All existing tests pass
   - [x] No breaking changes
   ```

### Exercise 3.3: Link Issues to PRs

**Objective:** Learn to connect PRs with GitHub issues.

**Steps:**

1. **Create an issue on GitHub:**
   - Go to Issues tab
   - Click "New issue"
   - Title: "Add user dashboard"
   - Description: "Users need a dashboard to view their data"
   - Create issue (note the issue number, e.g., #5)

2. **Create a branch for the issue:**
   ```bash
   git checkout -b feature/user-dashboard
   ```

3. **Make changes:**
   - Add dashboard code
   - Commit:
     ```bash
     git add .
     git commit -m "feat: add user dashboard"
     ```

4. **Push and create PR:**
   ```bash
   git push -u origin feature/user-dashboard
   ```

5. **In PR description, link the issue:**
   ```markdown
   ## Description
   Implements user dashboard as requested.
   
   Closes #5
   ```
   Or use: `Fixes #5`, `Resolves #5`, `Related to #5`

### Exercise 3.4: Review Your Own PR

**Objective:** Practice reviewing code in a PR.

**Steps:**

1. **View your PR on GitHub:**
   - Go to Pull Requests tab
   - Click on your PR

2. **Review the "Files changed" tab:**
   - Look at the diff
   - Check for:
     - Code quality
     - Potential bugs
     - Missing tests
     - Style consistency

3. **Add review comments:**
   - Click on a line number
   - Add a comment
   - Use suggestions:
     ```javascript
     // Suggestion: Consider using const instead of let
     ```

4. **Practice different review types:**
   - **Approve:** Code looks good
   - **Request changes:** Needs fixes
   - **Comment:** General feedback

## Afternoon: Code Review Process (2-3 hours)

### Exercise 3.5: Address Review Comments

**Objective:** Learn to update PRs based on feedback.

**Steps:**

1. **Create a PR with intentional issues:**
   ```bash
   git checkout -b feature/review-practice
   ```
   - Add code with some issues (e.g., console.logs, typos)
   - Commit and push:
     ```bash
     git add .
     git commit -m "feat: add feature with issues"
     git push -u origin feature/review-practice
     ```

2. **Create PR and review it yourself:**
   - Add review comments pointing out issues
   - Request changes

3. **Fix the issues locally:**
   ```bash
   git checkout feature/review-practice
   # Make the fixes
   git add .
   git commit -m "fix: address review comments"
   ```

4. **Push updates:**
   ```bash
   git push
   ```
   The PR will automatically update!

5. **Mark comments as resolved:**
   - On GitHub, reply to comments
   - Mark as resolved when fixed

### Exercise 3.6: Amend Commits

**Objective:** Learn to modify the last commit.

**Steps:**

1. **Make a commit:**
   ```bash
   git checkout -b feature/amend-practice
   # Make changes
   git add .
   git commit -m "feat: add feature"
   ```

2. **Realize you forgot something:**
   - Add the missing change
   - Stage it:
     ```bash
     git add .
     ```

3. **Amend the commit:**
   ```bash
     git commit --amend
     ```
   - This opens an editor
   - You can change the commit message or keep it
   - Save and close

4. **Check the commit:**
   ```bash
   git log --oneline
   ```
   Notice it's still one commit, not two

5. **If already pushed, force push (carefully!):**
   ```bash
   git push --force-with-lease
   ```
   **Warning:** Only do this on feature branches, never on main!

### Exercise 3.7: Update PR with New Commits

**Objective:** Add more commits to an existing PR.

**Steps:**

1. **You have an open PR:**
   - Branch: `feature/add-navigation`
   - PR is open and reviewed

2. **Make additional changes:**
   ```bash
   git checkout feature/add-navigation
   # Add more features or fixes
   git add .
   git commit -m "feat: add mobile navigation support"
   ```

3. **Push the new commit:**
   ```bash
   git push
   ```
   The PR automatically includes the new commit!

4. **View PR updates:**
   - Go to PR on GitHub
   - See the new commit in the timeline
   - Reviewers get notified

### Exercise 3.8: Squash Commits (Introduction)

**Objective:** Learn to clean up commit history before merging.

**Steps:**

1. **Create a branch with messy commits:**
   ```bash
   git checkout -b feature/messy-commits
   ```
   - Make a change, commit: `git commit -m "wip"`
   - Make another change, commit: `git commit -m "fix typo"`
   - Make another change, commit: `git commit -m "oops"`
   - Make another change, commit: `git commit -m "actually works now"`

2. **View messy history:**
   ```bash
   git log --oneline
   ```
   You'll see 4 commits that should be 1

3. **Interactive rebase to squash:**
   ```bash
   git rebase -i HEAD~4
   ```
   This opens an editor showing:
   ```
   pick abc1234 wip
   pick def5678 fix typo
   pick ghi9012 oops
   pick jkl3456 actually works now
   ```

4. **Change to squash:**
   Change to:
   ```
   pick abc1234 wip
   squash def5678 fix typo
   squash ghi9012 oops
   squash jkl3456 actually works now
   ```
   Save and close

5. **Write new commit message:**
   Editor opens again for the combined commit message:
   ```
   feat: add complete feature implementation
   ```
   Save and close

6. **Verify:**
   ```bash
   git log --oneline
   ```
   Should show 1 clean commit!

7. **If pushed, force push:**
   ```bash
   git push --force-with-lease
   ```

## Practice Checklist

- [ ] Created a Pull Request on GitHub
- [ ] Wrote a clear PR description
- [ ] Linked an issue to a PR
- [ ] Reviewed code in a PR
- [ ] Added review comments
- [ ] Addressed review feedback
- [ ] Amended a commit
- [ ] Updated PR with new commits
- [ ] Squashed commits using interactive rebase
- [ ] Used `--force-with-lease` safely

## Common Commands Reference

```bash
# PR Workflow
git push -u origin <branch>    # Push branch for PR
git push                       # Update existing PR

# Commit Management
git commit --amend             # Modify last commit
git commit --amend --no-edit   # Amend without changing message

# Force Push (use carefully!)
git push --force-with-lease   # Safer force push
git push --force              # Dangerous force push

# Interactive Rebase
git rebase -i HEAD~n          # Rebase last n commits
# In editor: pick, squash, fixup, drop
```

## PR Best Practices

1. **Keep PRs focused:** One feature/fix per PR
2. **Write clear descriptions:** Explain what and why
3. **Keep commits logical:** One logical change per commit
4. **Respond to reviews:** Address all feedback
5. **Keep PRs small:** Easier to review
6. **Test before PR:** Don't push broken code
7. **Update PRs:** Push new commits, don't create new PRs

## Reflection Questions

1. What makes a good PR description?
2. When should you amend vs create a new commit?
3. Why use `--force-with-lease` instead of `--force`?
4. When should you squash commits?
5. How do you handle conflicting review feedback?

## Next Steps

Once you've completed all exercises, mark Day 3 as complete and move to Day 4: Advanced Git Commands.

