# Git Practice Repository

This repository is designed to help you learn Git through hands-on practice. Follow the exercises for each day to master collaborative Git workflows.

## Setup Instructions

1. **Initialize this as a Git repository:**
   ```bash
   cd git-practice
   git init
   git add .
   git commit -m "Initial commit: Git practice repository"
   ```

2. **Create a GitHub repository:**
   - Go to GitHub and create a new repository called `git-practice`
   - Don't initialize it with a README (we already have one)
   - Copy the repository URL

3. **Connect to remote:**
   ```bash
   git remote add origin <your-github-repo-url>
   git branch -M main
   git push -u origin main
   ```

## Daily Exercises

- [Day 1: Branching Strategy & Remote Collaboration](exercises/day1-branching.md)
- [Day 2: Merging & Conflict Resolution](exercises/day2-merging.md)
- [Day 3: Pull Requests & Code Review](exercises/day3-prs.md)
- [Day 4: Advanced Git Commands](exercises/day4-advanced.md)
- [Day 5: Best Practices & Real-World Scenarios](exercises/day5-practices.md)

## Practice Files

The `practice-files/` directory contains files you'll use for various exercises:
- `app.js` - Main application file for practice
- `config.json` - Configuration file
- `utils.js` - Utility functions
- `styles.css` - Styling file

## Tips

- Work through exercises sequentially
- Don't skip ahead - each day builds on the previous
- Make mistakes intentionally to practice recovery
- Use `git log --oneline --graph --all` frequently to visualize history
- Refer back to the main learning plan document

## Getting Help

- Use `git help <command>` for command documentation
- Check `git status` frequently to understand current state
- Use `git log` to see commit history
- Practice in this repo - you can always reset and start over!

