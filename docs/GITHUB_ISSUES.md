# Proposed GitHub Issues — Portfolio

- Status: APPROVED by the project owner (2026-11-13). Approval covers this proposed plan only; Issues have not been created, and execution still requires separate authorization.
- Target repository: https://github.com/amirweb2022/portfolio
- No Issues have been created.
- Labels proposed: `type:feature`, `type:chore`, `type:content`, `type:test`, `priority:p0`, `priority:p1`, `area:design`, `area:i18n`, `area:projects`, `area:contact`, `blocked`.
- Each Issue should include: context, scope, explicit non-goals, dependencies, acceptance criteria, test evidence and relevant PRD/Design links.

## Milestone 1 — Foundation
| ID | Issue | Depends on | Acceptance criteria |
|---|---|---|---|
| P-01 | Initialize Next.js App Router + TypeScript + Tailwind | Approved execution | App builds; basic scripts and README work |
| P-02 | Configure lint, formatting, typecheck and tests | P-01 | CI-ready scripts; sample tests pass |
| P-03 | Implement design tokens, typography and base styles | P-01 | Tokens match DESIGN; Persian/English fonts load |
| P-04 | Implement locale routing and translation scaffolding | P-01 | `/fa` and `/en` work; correct lang/dir; invalid locale 404 |
| P-05 | Implement persistent Dark/Light theme | P-03 | Toggle persists; no disruptive flash; accessible |
| P-06 | Build responsive site shell, navigation and footer | P-03, P-04, P-05 | Keyboard-accessible nav; locale/theme controls; mobile layout |

## Milestone 2 — Core pages
| ID | Issue | Depends on | Acceptance criteria |
|---|---|---|---|
| P-07 | Hero and personal portrait integration | P-06, approved portrait | Bilingual copy; optimized image; responsive desktop/mobile |
| P-08 | About page and resume download UI | P-06, approved bio/resumes | Localized content and matching PDF download |
| P-09 | Project content schema and MDX loader | P-04 | Validated bilingual frontmatter; safe repository content |
| P-10 | Projects index and cards | P-06, P-09 | Cards show verified data; no dead links |
| P-11 | Case-study route and shared layout | P-09, P-10 | Published slugs render; missing/unpublished return 404 |
| P-12 | Homepage composition and selected work | P-07, P-10 | Approved sections; mobile/RTL/LTR tested |

## Milestone 3 — Contact and content
| ID | Issue | Depends on | Acceptance criteria |
|---|---|---|---|
| P-13 | Contact form UI and validation | P-06 | Accessible fields; localized validation/status |
| P-14 | Secure SMTP server endpoint | P-13, SMTP configuration | Server-only credentials; rate limiting; abuse mitigation; safe errors; delivery test |
| P-15 | Govahi Online case study | P-11, verified project assets | Both locales; approved screenshots/claims |
| P-16 | Boiler CRM case study | P-11, verified client attribution | Both locales; approved screenshots/claims |
| P-17 | Digitize case study | P-11, verified project assets | Both locales; approved screenshots/claims |
| P-18 | Syncwhatch case study | P-11, verified project description | Both locales; approved screenshots/claims |
| P-19 | Beauty Salon CRM case study | P-11, verified project assets | Both locales; approved screenshots/claims |

## Milestone 4 — Quality and release
| ID | Issue | Depends on | Acceptance criteria |
|---|---|---|---|
| P-20 | SEO, sitemap, hreflang and Open Graph | P-04, P-11 | Localized metadata; valid canonical/hreflang; sitemap |
| P-21 | Accessibility and responsive audit | P-06, P-08, P-10, P-11, P-12, P-13, P-20 | Audit the implemented shared shell, About, project listing and case-study pages, homepage, contact form, and localized metadata. Check keyboard access, contrast, reduced motion, RTL/LTR, both themes, and mobile layouts. |
| P-22 | End-to-end flows and security checks | P-14, P-20 | Locale, theme, project, resume, form tests; secrets check |
| P-23 | Performance audit and optimization | P-12, P-21 | Image/font optimization; report measured results |
| P-24 | Deployment configuration and release checklist | P-20, P-22, P-23 | Environment documented; production smoke test after approval |

## Recommended sequencing
- Do not parallelize Issues with unresolved dependencies.
- P-15 through P-19 can proceed independently after P-11 **and** asset/claim approval.
- Release can include only ready case studies; incomplete projects can remain unpublished without fabricated content.
- Keep one Issue focused on one reviewable outcome. Split only when implementation evidence shows a task is too large.

## Proposed tooling
- Package manager: npm.
- Unit and component tests: Vitest and Testing Library.
- End-to-end tests: Playwright.
- Linting and formatting: ESLint and Prettier.
- CI: GitHub Actions.
- These are proposed tools for planning; this document does not authorize installing dependencies, configuring CI, or beginning implementation.

## Proposed PR template
- Related Issue:
- Summary:
- Scope / excluded scope:
- Screenshots (desktop/mobile, fa/en, dark/light if UI):
- Tests run and results:
- Accessibility / performance notes:
- Risks and follow-ups:

## Authorization boundary
Approval of the plan is separate from authorization to create Issues, run Codex, modify the repository, or deploy. Seek explicit permission for each action category.
