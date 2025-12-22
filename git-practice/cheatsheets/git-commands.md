# Git Commands Cheat Sheet

## Basic Commands

```bash
# Initialize repository
git init

# Clone repository
git clone <url>

# Check status
git status

# Add files
git add <file>
git add .

# Commit
git commit -m "message"
git commit -am "message"  # Add and commit tracked files

# Push
git push
git push -u origin <branch>

# Pull
git pull
git pull origin main
```

## Branching

```bash
# List branches
git branch
git branch -a  # All branches
git branch -r  # Remote branches

# Create branch
git branch <name>
git checkout -b <name>  # Create and switch
git switch -c <name>    # Modern way

# Switch branches
git checkout <name>
git switch <name>  # Modern way

# Delete branch
git branch -d <name>   # Safe delete
git branch -D <name>   # Force delete

# Rename branch
git branch -m <old> <new>
```

## Remote

```bash
# View remotes
git remote -v
git remote show origin

# Add remote
git remote add origin <url>

# Fetch (download without merge)
git fetch origin

# Pull (fetch + merge)
git pull origin main

# Push
git push origin <branch>
git push -u origin <branch>  # Set upstream

# Track remote branch
git branch --set-upstream-to=origin/<branch>
```

## Merging

```bash
# Merge branch
git merge <branch>
git merge --no-ff <branch>  # Force merge commit

# Abort merge
git merge --abort

# View merge conflicts
git diff
git status
```

## Stashing

```bash
# Stash changes
git stash
git stash push -m "message"
git stash -u  # Include untracked

# List stashes
git stash list

# Apply stash
git stash apply
git stash apply stash@{0}

# Pop stash (apply + remove)
git stash pop

# Drop stash
git stash drop stash@{0}

# Clear all stashes
git stash clear
```

## History

```bash
# View log
git log
git log --oneline
git log --oneline --graph --all

# View reflog (all operations)
git reflog

# View changes
git diff
git diff <branch1> <branch2>
```

## Advanced

```bash
# Interactive rebase
git rebase -i HEAD~n

# Cherry-pick
git cherry-pick <commit-hash>

# Reset
git reset --soft HEAD~1   # Keep changes staged
git reset --mixed HEAD~1  # Keep changes unstaged
git reset --hard HEAD~1   # Discard changes

# Revert (safe for shared branches)
git revert <commit-hash>

# Amend last commit
git commit --amend
git commit --amend --no-edit

# Force push (use carefully!)
git push --force-with-lease
```

## Useful Aliases

Add to `~/.gitconfig`:

```ini
[alias]
    st = status
    co = checkout
    br = branch
    ci = commit
    unstage = reset HEAD --
    last = log -1 HEAD
    lg = log --oneline --graph --all
    amend = commit --amend --no-edit
```

## Emergency Commands

```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard local changes
git restore <file>
git checkout -- <file>

# Recover deleted branch
git reflog
git checkout -b <branch> <hash>

# Abort everything
git merge --abort
git rebase --abort
git cherry-pick --abort
```

