# Quick Start Guide

Welcome to your Git practice repository! This guide will get you started in 5 minutes.

## Setup (5 minutes)

### 1. Initialize Git Repository

```bash
cd git-practice
git init
git add .
git commit -m "Initial commit: Git practice repository"
```

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click "+" → "New repository"
3. Name it `git-practice`
4. **Don't** initialize with README (we already have one)
5. Click "Create repository"

### 3. Connect to GitHub

```bash
# Replace with your actual repository URL
git remote add origin https://github.com/YOUR-USERNAME/git-practice.git
git branch -M main
git push -u origin main
```

### 4. Verify Setup

```bash
git remote -v
git log --oneline
```

You should see your remote and initial commit!

## Your First Practice (10 minutes)

### Create a Feature Branch

```bash
# Make sure you're on main
git checkout main

# Create and switch to feature branch
git checkout -b feature/my-first-feature
```

### Make Changes

```bash
# Edit a file
echo "console.log('Hello Git!');" >> practice-files/app.js

# Check what changed
git status
git diff

# Stage changes
git add practice-files/app.js

# Commit
git commit -m "feat: add hello message"
```

### Push to GitHub

```bash
git push -u origin feature/my-first-feature
```

### Create Pull Request

1. Go to your GitHub repository
2. Click "Compare & pull request"
3. Add description
4. Click "Create pull request"

### Merge and Clean Up

On GitHub:
1. Click "Merge pull request"
2. Click "Confirm merge"
3. Click "Delete branch"

Locally:
```bash
# Switch to main
git checkout main

# Pull merged changes
git pull origin main

# Delete local feature branch
git branch -d feature/my-first-feature

# Verify
git log --oneline
```

## What's Next?

### Follow the 5-Day Plan

1. **Day 1:** [Branching Strategy & Remote Collaboration](exercises/day1-branching.md)
2. **Day 2:** [Merging & Conflict Resolution](exercises/day2-merging.md)
3. **Day 3:** [Pull Requests & Code Review](exercises/day3-prs.md)
4. **Day 4:** [Advanced Git Commands](exercises/day4-advanced.md)
5. **Day 5:** [Best Practices & Real-World Scenarios](exercises/day5-practices.md)

### Practice Scenarios

Try realistic scenarios in the [scenarios/](scenarios/) directory.

### Reference Materials

- [Git Commands Cheat Sheet](cheatsheets/git-commands.md)
- [Workflow Cheat Sheet](cheatsheets/workflow.md)

## Common First-Time Issues

### "Permission denied" when pushing

**Problem:** SSH key not set up

**Solution:** Use HTTPS or [set up SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

### "Remote already exists"

**Problem:** Already added remote

**Solution:** 
```bash
git remote remove origin
git remote add origin <your-url>
```

### "Branch 'main' doesn't exist"

**Problem:** Still using 'master' branch

**Solution:**
```bash
git branch -M main
```

## Tips for Success

1. ✅ **Work through exercises in order** - Each builds on previous
2. ✅ **Practice daily** - 30-60 minutes per day
3. ✅ **Make mistakes intentionally** - Learn recovery techniques
4. ✅ **Use visualization** - `git log --oneline --graph --all`
5. ✅ **Ask for help** - Git community is friendly!

## Ready to Start?

Jump into [Day 1: Branching Strategy](exercises/day1-branching.md) and begin your journey to Git mastery!

Good luck! 🚀

