# AGENTS.md — Proposed Codex Operating Rules

> STATUS: APPROVED by the project owner (2026-11-13). This document records operating rules; it does not authorize implementation, GitHub operations, or deployment.

## Mission
Implement the approved personal portfolio using `docs/PRD.md` and `docs/DESIGN.md` as the source of truth. Respect verified project data and user-approved scope.

## Execution boundary
- Work only after the product owner separately approves execution and assigns a specific GitHub Issue.
- Do not create GitHub Issues, branches, commits, pull requests, deployments, or external service changes without authorization.
- For each approved Issue, restate the goal, acceptance criteria, touched files and tests before editing.
- If requirements conflict or essential inputs are missing, stop and report the ambiguity. Do not invent facts.
- Never modify unrelated files or perform opportunistic refactors.

## Technical baseline
- Next.js App Router, TypeScript, Tailwind CSS.
- Use Server Components by default; add `use client` only when needed.
- Use `next-intl` for localization, `next-themes` for theme state, repository-managed MDX for case studies.
- Validate untrusted inputs at the server boundary with Zod; use React Hook Form if it improves form UX.
- Keep code modular and semantic; avoid premature abstractions and unnecessary dependencies.
- Avoid `any`, unsafe assertions and suppressing lint/type errors without documented justification.

## Design and accessibility
- Follow `docs/DESIGN.md` tokens and responsive layout.
- Test Persian RTL and English LTR; use logical CSS properties.
- Meet WCAG 2.2 AA target, visible keyboard focus and reduced-motion support.
- Never fabricate project content, metrics, screenshots, client approvals or experience.

## Security and privacy
- SMTP secrets are server-only environment variables; never commit credentials or print them.
- Contact form: server-side validation, abuse protection, safe errors, rate limiting, no raw email-body logging.
- Do not introduce analytics, third-party tracking, databases or auth without approval.
- Use only approved media and safe repository-controlled MDX.

## GitHub Issue workflow (only after separate approval)
1. Read the assigned Issue and linked PRD/Design sections.
2. Confirm dependencies are met; create a focused branch only if authorized.
3. Implement the smallest coherent change satisfying acceptance criteria.
4. Add or update relevant tests; run lint, typecheck and test commands supported by the repository.
5. Inspect both locales and themes for UI changes; include mobile checks.
6. Summarize changes, test evidence, known limitations and follow-up tasks.
7. Open a PR and reference the Issue only if authorized; do not self-merge without approval.

## Definition of done
- Issue acceptance criteria met.
- No unrelated code changes or undocumented dependencies.
- Lint, TypeScript and applicable tests pass, or limitations are disclosed.
- Accessibility, localization, theme and responsive behavior checked where relevant.
- Documentation updated when behavior or configuration changes.
- No secrets or unverified public claims introduced.

## Repository commands
Do not assume scripts exist. Inspect `package.json` and use actual project scripts. Proposed eventual scripts: `lint`, `typecheck`, `test`, `test:e2e`, `build`.

## Proposed tooling
- Package manager: npm.
- Unit and component tests: Vitest and Testing Library.
- End-to-end tests: Playwright.
- Linting and formatting: ESLint and Prettier.
- CI: GitHub Actions.
- These are proposed project tools, not installed dependencies or authorization to configure them. Confirm repository compatibility when an implementation Issue is separately approved.

## Agent skills

### Issue tracker

Issues and specs live in this repository's GitHub Issues; use `gh`. See `docs/agents/issue-tracker.md`.

### Triage labels

Use the five canonical labels: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, and `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Use the single-context layout: root `CONTEXT.md` and `docs/adr/`. See `docs/agents/domain.md`.
