# GitHub Fundamentals 2: learning-github-proper

<!-- ***************** -->

## How do you display your current branch?
### You type the command:
==> git branch

## How do you create a new branch and switch into the new branch?
### You type the command
==> git checkout -b name-of-new-branch
### But to create a new branch without switching into it:
==> git branch name-of-new-branch

## How do you switch from one branch to another?
### You type the command
==> git checkout name-of-new-branch

## How do you push to the master branch of your remote repository?
### You type the command:
==> git push -u origin master
### Or this when you want to push to your current branch
==> 
#### And subsequently, you type:
==> git push

## How do you create a new branch and switch into the new branch?
### You type the command

## How do you merge with the master branch locally?
### You type the command
==> git merge master

## How do you undo your add command?
### You type the command
==> git reset

## How do you undo your commit command?
### You type the command
==> git reset HEAD~1
or
==> git reset --hard your-commit-hash

## Other commands:
### Add and commit modified files:
==> git commit -am "your-commit-message"

## View your commit logs:
==> git log