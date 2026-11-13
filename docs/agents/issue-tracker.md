# Issue tracker: GitHub

GitHub Issues is the configured issue tracker for this repo. Use the `gh` CLI for all operations.

`docs/GITHUB_ISSUES.md` is the approved planning source for P-01 through P-24. These planned Issues have not yet been created on GitHub. Creating GitHub Issues or labels requires separate owner authorization.

## Conventions

- Create an issue: `gh issue create --title "..." --body "..."`
- Read an issue: `gh issue view <number> --comments`
- List issues: `gh issue list --state open`
- Comment on an issue: `gh issue comment <number> --body "..."`
- Apply or remove labels: `gh issue edit <number> --add-label "..."` / `--remove-label "..."`
- Close an issue: `gh issue close <number> --comment "..."`

Infer the repo from `git remote -v`; `gh` does this automatically inside a clone.

## Pull requests as a triage surface

**PRs as a request surface: no.** Set this to `yes` only if the repo treats external PRs as feature requests.

## When a skill says "publish to the issue tracker"

Create a GitHub issue.

## When a skill says "fetch the relevant ticket"

Run `gh issue view <number> --comments`.
