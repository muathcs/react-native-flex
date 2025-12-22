# Scenario 1: Create and Merge Feature Branch

**Difficulty:** Beginner  
**Time:** 10 minutes

## Situation

You need to add a new feature to the application. You should work on a feature branch and merge it back to main when complete.

## Your Task

1. Create a feature branch called `feature/add-footer`
2. Add a footer function to `practice-files/app.js`
3. Commit your changes
4. Merge the feature back to main
5. Delete the feature branch

## Step-by-Step Solution

<details>
<summary>Click to reveal solution</summary>

### Step 1: Start from main

```bash
git checkout main
git pull origin main  # Make sure you're up to date
```

### Step 2: Create feature branch

```bash
git checkout -b feature/add-footer
```

### Step 3: Make changes

Edit `practice-files/app.js` and add:

```javascript
function Footer() {
  return {
    copyright: '© 2024 Git Practice',
    links: ['About', 'Contact', 'Privacy']
  };
}
```

### Step 4: Commit changes

```bash
git add practice-files/app.js
git commit -m "feat: add footer component"
```

### Step 5: Switch to main and merge

```bash
git checkout main
git merge feature/add-footer
```

### Step 6: Delete feature branch

```bash
git branch -d feature/add-footer
```

### Step 7: Verify

```bash
git log --oneline
git branch  # Feature branch should be gone
```

</details>

## What You Learned

- ✅ Creating feature branches
- ✅ Making commits on feature branch
- ✅ Merging feature to main
- ✅ Cleaning up after merge

## Next Challenge

Try [Scenario 2: Resolve Simple Merge Conflict](scenario-02-simple-conflict.md)

