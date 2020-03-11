# Contributing

I have spent a bit of time creating the content for learn-sf. But all the good things here truly belong to the community, and to the people who spend time helping others. You guys are awesome.

All the content for learn-sf is hosted on Github. You could (and probably, should) read the materials, study-aids etc., make corrections, or add new content.

Follow the below instructions to make a clean pull request in order to contribute.

### How to make a clean pull request

- Create an issue and discuss changes(optional). Hopefully, you do this before you start working on the changes
- Create a personal fork of the project on Github.
- Clone the fork on your local machine. Your remote repo on Github is called `origin`.
- Add the original repository as a remote called `upstream`.
- If you created your fork a while ago be sure to pull upstream changes into your local repository.
- Create a new branch to work on! Branch from `dev` if it exists, else from `master`.
- After adding or fixing something, don't forget to properly comment your code.
- Follow the code style of the project, including indentation and Markdown rules.
- Add or change the documentation as needed.
- Squash your commits into a single commit with git's [interactive rebase](https://help.github.com/articles/interactive-rebase). Create a new branch if necessary.
- Push your branch to your fork on Github, the remote `origin`.
- From your fork open a pull request in the correct branch. Target the project's `dev` branch if there is one, else go for `master`!
- Once the pull request is approved and merged you can pull the changes from `upstream` to your local repo and delete your extra branch(es).

And last but not least: Always write your commit messages in the present tense. Your commit message should describe what the commit, when applied, does to the documentation/ code – not what you did to the documentation/code.
