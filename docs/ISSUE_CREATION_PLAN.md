# GitHub Issue Creation Plan — P-01 through P-24

This local artifact prepares proposed Issue bodies from the approved `docs/GITHUB_ISSUES.md`, `docs/PRD.md`, and `docs/DESIGN.md`. It does not create Issues or labels and does not authorize implementation. Issue creation and implementation remain subject to the approvals stated in `AGENTS.md` and the source documents.

## Label plan

- Priority: `priority:p0` for P-01–P-06; `priority:p1` for P-07–P-24.
- Triage: `ready-for-human` for P-07, P-08, P-14, P-15, P-16, P-17, P-18, P-19, and P-24; `needs-triage` for all other Issues.
- Type and area labels are listed per Issue and follow its approved scope. `blocked` is additionally listed for P-15–P-19 because those case studies require verified content/assets and approval.
- Labels are proposed metadata for the creation plan only. This document does not create labels.

## External prerequisites versus Issue dependencies

Only references to other P-xx Issues below are GitHub Issue dependencies. Approved execution, approved portrait, approved bio/resumes, verified project descriptions/roles/screenshots/links and claim approvals, SMTP configuration, hosting/domain details, and deployment approval are external prerequisites. They are stated separately and are not represented as GitHub Issue dependencies. An external prerequisite does not expand the Issue scope or authorize its work.

---

## P-01 — Initialize Next.js App Router + TypeScript + Tailwind

**Labels:** `priority:p0`, `needs-triage`, `type:chore`, `area:design`

### Description
Establish the approved application foundation for the personal portfolio using Next.js App Router, TypeScript, and Tailwind CSS.

### Scope
- Initialize the application with the approved technical baseline.
- Provide basic project scripts and a README that explain how to run and build the app.

### Acceptance criteria
- App builds.
- Basic scripts and README work.

### Dependencies
- **GitHub Issue dependencies:** None.
- **External prerequisites:** Product-owner approval to execute this assigned Issue. Approval of the plan alone is not execution authorization.

### Verification steps
- Run the documented basic development and build commands and confirm they work.
- Record the commands and results in the implementation PR/Issue evidence.

### Implementation boundaries
- Keep this to app initialization, baseline configuration, basic scripts, and README.
- Do not add unapproved product functionality, analytics, database, authentication, or unrelated tooling. Proposed tools remain subject to repository compatibility and approval.


### Non-goals
- Do not build portfolio pages, content, localization, theme behavior, or deployment as part of initialization.

### References
- [PRD ?9 release plan](PRD.md#9-release-plan)
- [Design ?6 components](DESIGN.md#6-components)

---

## P-02 — Configure lint, formatting, typecheck and tests

**Labels:** `priority:p0`, `needs-triage`, `type:chore`, `area:design`

### Description
Add quality checks and scripts on top of the initialized application so the repository can run its lint, formatting, typecheck, and test workflows and is CI-ready.

### Scope
- Configure linting, formatting, type checking, and tests.
- Add CI-ready scripts and a representative sample test.

### Acceptance criteria
- CI-ready scripts are available.
- Sample tests pass.

### Dependencies
- **GitHub Issue dependencies:** P-01.
- **External prerequisites:** Product-owner approval to execute this assigned Issue. Proposed tooling (including Vitest, Testing Library, ESLint, Prettier, and GitHub Actions) is not an installed-dependency authorization; confirm compatibility before choosing/configuring tools.

### Verification steps
- Run the configured lint, formatting check, typecheck, and sample test commands; record actual commands and results.
- Confirm the documented scripts correspond to the repository configuration.

### Implementation boundaries
- Do not configure or install tools solely because they are proposed in planning documents; select compatible tooling within the approved Issue scope.
- Do not add unrelated CI workflows or broaden into application implementation.


### Non-goals
- Do not implement application features or adopt proposed tools without confirming repository compatibility.

### References
- [PRD ?9 release plan](PRD.md#9-release-plan)
- [Design ?10 accessibility and performance](DESIGN.md#10-accessibility-and-performance)

---

## P-03 — Implement design tokens, typography and base styles

**Labels:** `priority:p0`, `needs-triage`, `type:feature`, `area:design`

### Description
Implement the approved design tokens, typography, and foundational styles for the portfolio.

### Scope
- Map approved dark and light palette tokens to CSS variables and Tailwind theme tokens.
- Configure English Geist and Persian Vazirmatn typography and base styles.

### Acceptance criteria
- Tokens match `docs/DESIGN.md`.
- Persian and English fonts load.

### Dependencies
- **GitHub Issue dependencies:** P-01.
- **External prerequisites:** Product-owner approval to execute this assigned Issue. Detailed visual assets and copy remain pending; this Issue covers the approved initial design direction only.

### Verification steps
- Compare implemented palette values with the approved DESIGN token table.
- Check that both specified fonts load and that base typography is legible.

### Implementation boundaries
- Preserve the approved palette and typography direction; derive additional tokens only as DESIGN specifies and test contrast.
- Do not invent branding, copy, imagery, or an expanded visual system.


### Non-goals
- Do not create page layouts, add unapproved visual assets or copy, or introduce a new visual direction.

### References
- [PRD ?2 confirmed decisions](PRD.md#2-confirmed-decisions)
- [Design ?2 color tokens initial approved palette](DESIGN.md#2-color-tokens-initial-approved-palette)
- [Design ?3 typography](DESIGN.md#3-typography)

---

## P-04 — Implement locale routing and translation scaffolding

**Labels:** `priority:p0`, `needs-triage`, `type:feature`, `area:i18n`

### Description
Set up Persian and English locale routes and the translation foundation for the portfolio.

### Scope
- Implement `/fa` and `/en` locale routing.
- Set document language and direction correctly and provide translation scaffolding.

### Acceptance criteria
- `/fa` and `/en` work.
- Correct `lang` and `dir` are set.
- Invalid locale returns 404.

### Dependencies
- **GitHub Issue dependencies:** P-01.
- **External prerequisites:** Product-owner approval to execute this assigned Issue. Final localized copy is not supplied by this Issue.

### Verification steps
- Visit both supported locale routes and confirm their document language and direction.
- Request an unsupported locale and confirm a 404 response.

### Implementation boundaries
- Use the approved `/fa` and `/en` routes and localization approach (`next-intl`).
- Do not invent translated content or change the approved route structure.


### Non-goals
- Do not author complete page content or change the approved /fa and /en route structure.

### References
- [PRD ?2 confirmed decisions](PRD.md#2-confirmed-decisions)
- [PRD ?4 routes](PRD.md#4-routes)
- [Design ?8 localization and direction](DESIGN.md#8-localization-and-direction)

---

## P-05 — Implement persistent Dark/Light theme

**Labels:** `priority:p0`, `needs-triage`, `type:feature`, `area:design`

### Description
Provide the approved Dark and Light themes with a persistent, accessible theme control.

### Scope
- Implement the theme toggle and persistence of the user’s choice.
- Avoid a disruptive hydration flash and make the control accessible.

### Acceptance criteria
- Toggle persists.
- No disruptive flash.
- Theme control is accessible.

### Dependencies
- **GitHub Issue dependencies:** P-03.
- **External prerequisites:** Product-owner approval to execute this assigned Issue.

### Verification steps
- Switch themes, reload, and confirm the selected theme persists without a disruptive flash.
- Operate the control by keyboard and verify its accessible name and visible focus.

### Implementation boundaries
- Use `next-themes` as the approved theme-state baseline.
- Do not add additional themes or unrelated visual effects.


### Non-goals
- Do not add themes beyond Dark and Light or introduce unrelated animation and visual effects.

### References
- [PRD ?2 confirmed decisions](PRD.md#2-confirmed-decisions)
- [PRD ?6 functional requirements](PRD.md#6-functional-requirements)
- [Design ?7 interaction and motion](DESIGN.md#7-interaction-and-motion)

---

## P-06 — Build responsive site shell, navigation and footer

**Labels:** `priority:p0`, `needs-triage`, `type:feature`, `area:design`

### Description
Build the shared responsive site shell, including navigation and footer, with working locale and theme controls.

### Scope
- Implement shared header/navigation and footer.
- Include locale and theme controls and a mobile layout.

### Acceptance criteria
- Navigation is keyboard-accessible.
- Locale and theme controls are present.
- Mobile layout works.

### Dependencies
- **GitHub Issue dependencies:** P-03, P-04, P-05.
- **External prerequisites:** Product-owner approval to execute this assigned Issue. Use only the public contact and profile links already approved in PRD/DESIGN.

### Verification steps
- Navigate the shell by keyboard and check visible focus.
- Check locale/theme controls and the responsive layout at mobile and desktop widths in both locales and themes.

### Implementation boundaries
- Follow the shared header/footer content and localization direction in DESIGN.
- Do not add unapproved navigation destinations, sections, or content.


### Non-goals
- Do not build page-specific content or add navigation destinations beyond the approved site shell.

### References
- [PRD ?4 routes](PRD.md#4-routes)
- [Design ?4 layout](DESIGN.md#4-layout)
- [Design ?5 pages](DESIGN.md#5-pages)
- [Design ?8 localization and direction](DESIGN.md#8-localization-and-direction)

---

## P-07 — Hero and personal portrait integration

**Labels:** `priority:p1`, `ready-for-human`, `type:feature`, `area:design`

### Description
Implement the portfolio hero with bilingual copy and integrate the approved personal portrait.

### Scope
- Add the responsive hero image and approved bilingual introduction.
- Preserve the approved desktop composition and review RTL balance.

### Acceptance criteria
- Bilingual copy is present.
- Image is optimized.
- Hero is responsive on desktop and mobile.

### Dependencies
- **GitHub Issue dependencies:** P-06.
- **External prerequisites:** Approved portrait, usage approval and crop; finalized bilingual hero copy. These are not GitHub Issue dependencies.

### Verification steps
- Inspect `/fa` and `/en` at desktop and mobile widths, including Persian RTL composition.
- Verify image optimization and meaningful alt text for the supplied portrait.

### Implementation boundaries
- Use only the owner-provided, approved portrait and copy; do not fabricate identity or professional claims.
- Keep the layout within the approved hero composition in PRD/DESIGN.


### Non-goals
- Do not invent biography, professional claims, or portrait assets, and do not add unapproved hero sections.

### References
- [PRD ?2 confirmed decisions](PRD.md#2-confirmed-decisions)
- [PRD ?6 functional requirements](PRD.md#6-functional-requirements)
- [Design ?4 layout](DESIGN.md#4-layout)
- [Design ?9 assets](DESIGN.md#9-assets)

---

## P-08 — About page and resume download UI

**Labels:** `priority:p1`, `ready-for-human`, `type:feature`, `area:i18n`

### Description
Build the localized About page and resume download UI using verified biography information and the matching language-specific resume.

### Scope
- Present approved localized biography and professional information.
- Provide the corresponding Persian or English PDF download.

### Acceptance criteria
- Content is localized.
- Downloaded PDF matches the selected locale.

### Dependencies
- **GitHub Issue dependencies:** P-06.
- **External prerequisites:** Approved bio and work-history facts, plus Persian and English resume PDFs. These are not GitHub Issue dependencies.

### Verification steps
- Inspect both locale pages and confirm the correct PDF is linked for each language.
- Check download behavior and keyboard access to the resume control.

### Implementation boundaries
- Use verified and approved biography, skills, and experience only.
- Do not write unverified career claims or generate replacement resume content.


### Non-goals
- Do not add unverified biography or experience, generate resume content, or create pages outside the About and resume UI scope.

### References
- [PRD ?4 routes](PRD.md#4-routes)
- [PRD ?6 functional requirements](PRD.md#6-functional-requirements)
- [Design ?5 pages](DESIGN.md#5-pages)
- [Design ?9 assets](DESIGN.md#9-assets)

---

## P-09 — Project content schema and MDX loader

**Labels:** `priority:p1`, `needs-triage`, `type:feature`, `area:projects`

### Description
Create the validated bilingual project-content schema and repository-controlled MDX loader for case studies.

### Scope
- Validate bilingual frontmatter against the approved content model.
- Load safe project content from repository-managed MDX.

### Acceptance criteria
- Bilingual frontmatter is validated.
- Repository content is handled safely.

### Dependencies
- **GitHub Issue dependencies:** P-04.
- **External prerequisites:** Product-owner approval to execute this assigned Issue. Project-specific facts and assets require verification/approval before publication.

### Verification steps
- Exercise schema validation with representative valid and invalid frontmatter.
- Confirm loader accepts only the intended repository-controlled content and rejects invalid data safely.

### Implementation boundaries
- Follow the PRD content model and use restricted, safe MDX.
- Do not add project claims, fields, or publishing behavior beyond the approved schema; verified content remains an external content prerequisite.


### Non-goals
- Do not author project claims or add schema fields and publishing behavior outside the approved content model.

### References
- [PRD ?5 project inventory](PRD.md#5-project-inventory)
- [PRD ?8 content model](PRD.md#8-content-model)
- [Design ?5 pages](DESIGN.md#5-pages)

---

## P-10 — Projects index and cards

**Labels:** `priority:p1`, `needs-triage`, `type:feature`, `area:projects`

### Description
Build the projects index and cards using verified project data and valid destinations.

### Scope
- Render published project cards with available verified details.
- Link only to valid project destinations.

### Acceptance criteria
- Cards show verified data.
- There are no dead links.

### Dependencies
- **GitHub Issue dependencies:** P-06, P-09.
- **External prerequisites:** Verified and approved project descriptions, roles, stack details, links, and media where used. These are not GitHub Issue dependencies.

### Verification steps
- Check each rendered card against approved source content and follow every displayed link.
- Check card navigation for keyboard access and both locale directions.

### Implementation boundaries
- Show only verified details; omit incomplete projects or show only verified summaries without broken detail links.
- Do not fabricate project features, metrics, client claims, or screenshots.


### Non-goals
- Do not publish unverified projects, project details, screenshots, or links.

### References
- [PRD ?5 project inventory](PRD.md#5-project-inventory)
- [PRD ?6 functional requirements](PRD.md#6-functional-requirements)
- [Design ?5 pages](DESIGN.md#5-pages)

---

## P-11 — Case-study route and shared layout

**Labels:** `priority:p1`, `needs-triage`, `type:feature`, `area:projects`

### Description
Implement the shared localized case-study route and layout for published project slugs.

### Scope
- Render published slugs through the shared case-study layout.
- Return 404 for missing or unpublished slugs.

### Acceptance criteria
- Published slugs render.
- Missing and unpublished slugs return 404.

### Dependencies
- **GitHub Issue dependencies:** P-09, P-10.
- **External prerequisites:** Approved project content and assets are required for publication, but are not GitHub Issue dependencies.

### Verification steps
- Visit a published slug in each supported locale and confirm it renders.
- Request missing and unpublished slugs and confirm 404 responses.

### Implementation boundaries
- Render only repository-controlled, validated MDX content and approved facts/media.
- Do not publish incomplete case studies or invent missing sections or outcomes.


### Non-goals
- Do not publish incomplete case studies or add project content beyond validated approved material.

### References
- [PRD ?4 routes](PRD.md#4-routes)
- [PRD ?5 project inventory](PRD.md#5-project-inventory)
- [PRD ?8 content model](PRD.md#8-content-model)
- [Design ?5 pages](DESIGN.md#5-pages)

---

## P-12 — Homepage composition and selected work

**Labels:** `priority:p1`, `needs-triage`, `type:feature`, `area:design`

### Description
Compose the homepage from the approved sections and selected verified work.

### Scope
- Assemble the approved hero, selected work, brief About/approach content, contact call to action, and shared shell as applicable to the approved design.
- Check responsive and locale-direction behavior.

### Acceptance criteria
- Homepage contains approved sections.
- Mobile, RTL, and LTR layouts are tested.

### Dependencies
- **GitHub Issue dependencies:** P-07, P-10.
- **External prerequisites:** Approved hero copy/assets and verified project content for any displayed work. These are not GitHub Issue dependencies.

### Verification steps
- Inspect both locales at mobile and desktop widths and confirm RTL/LTR layout.
- Confirm selected work and calls to action use valid destinations and approved content.

### Implementation boundaries
- Follow the approved homepage section list in PRD/DESIGN.
- Do not add unapproved sections or unverified claims, metrics, or project details.


### Non-goals
- Do not add homepage sections or project claims beyond the approved homepage composition and verified selected work.

### References
- [PRD ?4 routes](PRD.md#4-routes)
- [PRD ?6 functional requirements](PRD.md#6-functional-requirements)
- [Design ?5 pages](DESIGN.md#5-pages)
- [Design ?11 visual acceptance](DESIGN.md#11-visual-acceptance)

---

## P-13 — Contact form UI and validation

**Labels:** `priority:p1`, `needs-triage`, `type:feature`, `area:contact`

### Description
Build the accessible localized contact form UI with client-facing validation and status messages.

### Scope
- Provide the approved name, email, and message fields.
- Localize validation and submission status UI.

### Acceptance criteria
- Fields are accessible.
- Validation and status are localized.

### Dependencies
- **GitHub Issue dependencies:** P-06.
- **External prerequisites:** Product-owner approval to execute this assigned Issue. SMTP configuration is needed for delivery work in P-14, not a dependency for this form UI Issue.

### Verification steps
- Check labels, keyboard operation, visible focus, and validation/status messages in both locales.
- Confirm form layout on mobile and desktop.

### Implementation boundaries
- Limit this Issue to form UI and validation; secure server delivery belongs to P-14.
- Do not expose SMTP implementation details or add unapproved fields or data collection.


### Non-goals
- Do not implement SMTP delivery or collect fields beyond the approved name, email, and message form.

### References
- [PRD ?4 routes](PRD.md#4-routes)
- [PRD ?6 functional requirements](PRD.md#6-functional-requirements)
- [PRD ?7 nonfunctional requirements](PRD.md#7-nonfunctional-requirements)
- [Design ?5 pages](DESIGN.md#5-pages)

---

## P-14 — Secure SMTP server endpoint

**Labels:** `priority:p1`, `ready-for-human`, `type:feature`, `area:contact`

### Description
Implement secure server-side contact delivery through SMTP, with abuse protections and safe user-facing responses.

### Scope
- Validate at the server boundary, send using server-only credentials, and mitigate abuse with rate limiting.
- Return safe, generic success/error states and verify delivery.

### Acceptance criteria
- Credentials remain server-only.
- Rate limiting and abuse mitigation are present.
- Errors are safe.
- Delivery test succeeds.

### Dependencies
- **GitHub Issue dependencies:** P-13.
- **External prerequisites:** SMTP host, port, secure/TLS mode, account, sender address, verified delivery path, and hosting support. This configuration is external and is not a GitHub Issue dependency. Keep credentials in server environment variables.

### Verification steps
- Exercise server-side validation, rate limiting/abuse controls, and generic error handling.
- Perform an authorized delivery test using configured environment credentials; record outcome without logging credentials or raw email bodies.

### Implementation boundaries
- Keep secrets server-only; do not print credentials, log message bodies, or expose raw SMTP errors.
- Do not add a database, analytics, authentication, or third-party tracking.


### Non-goals
- Do not expose SMTP details or add a database, analytics, authentication, or tracking.

### References
- [PRD ?2 confirmed decisions](PRD.md#2-confirmed-decisions)
- [PRD ?6 functional requirements](PRD.md#6-functional-requirements)
- [PRD ?7 nonfunctional requirements](PRD.md#7-nonfunctional-requirements)
- [Design ?5 pages](DESIGN.md#5-pages)

---

## P-15 — Govahi Online case study

**Labels:** `priority:p1`, `ready-for-human`, `type:content`, `area:projects`, `blocked`

### Description
Prepare the Govahi Online case study in both locales using verified project information and approved assets.

### Scope
- Author the bilingual case study using the shared case-study structure.
- Include only approved screenshots and claims.

### Acceptance criteria
- Case study is available in both locales.
- Screenshots and claims are approved.

### Dependencies
- **GitHub Issue dependencies:** P-11.
- **External prerequisites:** Verified project assets and content, including approval of screenshots and claims. Work/publication requiring those inputs remains blocked until approval; these are not GitHub Issue dependencies.

### Verification steps
- Review both locale versions against the approved source material.
- Confirm every screenshot and claim has approval and the case study renders through the published route.

### Implementation boundaries
- The PRD identifies Govahi Online as smart certificate generation for held seminars and lists the role as Frontend Developer; use these only as approved facts and do not extend them without verification.
- Do not invent metrics, outcomes, client claims, features, links, or screenshots. Keep unpublished until the required content is verified.


### Non-goals
- Do not add unverified project claims, metrics, screenshots, links, or outcomes.

### References
- [PRD ?5 project inventory](PRD.md#5-project-inventory)
- [PRD ?8 content model](PRD.md#8-content-model)
- [Design ?5 pages](DESIGN.md#5-pages)
- [Design ?9 assets](DESIGN.md#9-assets)

---

## P-16 — Boiler CRM case study

**Labels:** `priority:p1`, `ready-for-human`, `type:content`, `area:projects`, `blocked`

### Description
Prepare the Boiler CRM case study in both locales using verified project information and approved client attribution/assets.

### Scope
- Author the bilingual case study using the shared case-study structure.
- Include only approved screenshots and claims.

### Acceptance criteria
- Case study is available in both locales.
- Screenshots and claims are approved.

### Dependencies
- **GitHub Issue dependencies:** P-11.
- **External prerequisites:** Verified client attribution and approval of content/assets, including public-use confirmation for client name/logo where applicable. These are not GitHub Issue dependencies.

### Verification steps
- Review both locale versions against verified source material and confirmed attribution.
- Confirm screenshots and claims are approved and the case study renders through the published route.

### Implementation boundaries
- The PRD describes a CRM for tank-certificate links and SMS reminders and says it was described as for Arak Machine Manufacturing; exact role and client attribution require confirmation before publication.
- Do not present the tentative attribution as confirmed, or invent metrics, outcomes, features, or screenshots. Keep unpublished until attribution and content are approved.


### Non-goals
- Do not treat tentative client attribution as confirmed or add unverified claims, metrics, features, or screenshots.

### References
- [PRD ?5 project inventory](PRD.md#5-project-inventory)
- [PRD ?8 content model](PRD.md#8-content-model)
- [Design ?5 pages](DESIGN.md#5-pages)
- [Design ?9 assets](DESIGN.md#9-assets)

---

## P-17 — Digitize case study

**Labels:** `priority:p1`, `ready-for-human`, `type:content`, `area:projects`, `blocked`

### Description
Prepare the Digitize case study in both locales using verified project information and approved assets.

### Scope
- Author the bilingual case study using the shared case-study structure.
- Include only approved screenshots and claims.

### Acceptance criteria
- Case study is available in both locales.
- Screenshots and claims are approved.

### Dependencies
- **GitHub Issue dependencies:** P-11.
- **External prerequisites:** Verified project assets and content. The PRD notes exact role and project links are pending; those facts/links must be confirmed before use. These are not GitHub Issue dependencies.

### Verification steps
- Review both locale versions against verified source material.
- Confirm screenshots and claims are approved and the case study renders through the published route.

### Implementation boundaries
- The PRD identifies Digitize as a mobile phone online store; exact role and project links remain pending.
- Do not invent role, links, metrics, outcomes, features, or screenshots. Keep unpublished until required content is verified.


### Non-goals
- Do not infer the pending role or links and do not add unverified claims, metrics, features, or screenshots.

### References
- [PRD ?5 project inventory](PRD.md#5-project-inventory)
- [PRD ?8 content model](PRD.md#8-content-model)
- [Design ?5 pages](DESIGN.md#5-pages)
- [Design ?9 assets](DESIGN.md#9-assets)

---

## P-18 — Syncwhatch case study

**Labels:** `priority:p1`, `ready-for-human`, `type:content`, `area:projects`, `blocked`

### Description
Prepare the Syncwhatch case study in both locales using a verified project description and approved assets.

### Scope
- Author the bilingual case study using the shared case-study structure.
- Include only approved screenshots and claims.

### Acceptance criteria
- Case study is available in both locales.
- Screenshots and claims are approved.

### Dependencies
- **GitHub Issue dependencies:** P-11.
- **External prerequisites:** Verified project description and approved content/assets, including screenshots and claims where used. These are not GitHub Issue dependencies.

### Verification steps
- Review both locale versions against the verified project description.
- Confirm screenshots and claims are approved and the case study renders through the published route.

### Implementation boundaries
- The PRD lists Syncwhatch as a separate project; description, role, and links are pending.
- Do not invent project meaning, role, links, metrics, outcomes, features, or screenshots. Keep unpublished until required content is verified.


### Non-goals
- Do not infer the pending project description, role, or links and do not add unverified project claims or screenshots.

### References
- [PRD ?5 project inventory](PRD.md#5-project-inventory)
- [PRD ?8 content model](PRD.md#8-content-model)
- [Design ?5 pages](DESIGN.md#5-pages)
- [Design ?9 assets](DESIGN.md#9-assets)

---

## P-19 — Beauty Salon CRM case study

**Labels:** `priority:p1`, `ready-for-human`, `type:content`, `area:projects`, `blocked`

### Description
Prepare the Beauty Salon CRM case study in both locales using verified project information and approved assets.

### Scope
- Author the bilingual case study using the shared case-study structure.
- Include only approved screenshots and claims.

### Acceptance criteria
- Case study is available in both locales.
- Screenshots and claims are approved.

### Dependencies
- **GitHub Issue dependencies:** P-11.
- **External prerequisites:** Verified project assets and content, including exact features and role, which remain pending in the PRD. These are not GitHub Issue dependencies.

### Verification steps
- Review both locale versions against verified source material.
- Confirm screenshots and claims are approved and the case study renders through the published route.

### Implementation boundaries
- The PRD identifies a CRM for a beauty salon but says exact features and role are pending.
- Do not invent features, role, metrics, outcomes, links, or screenshots. Keep unpublished until required content is verified.


### Non-goals
- Do not infer pending features or role and do not add unverified project claims, metrics, links, or screenshots.

### References
- [PRD ?5 project inventory](PRD.md#5-project-inventory)
- [PRD ?8 content model](PRD.md#8-content-model)
- [Design ?5 pages](DESIGN.md#5-pages)
- [Design ?9 assets](DESIGN.md#9-assets)

---

## P-20 — SEO, sitemap, hreflang and Open Graph

**Labels:** `priority:p1`, `needs-triage`, `type:feature`, `area:i18n`

### Description
Implement localized search metadata and discovery artifacts for the supported portfolio routes.

### Scope
- Provide localized metadata, canonical and hreflang references, and a sitemap.
- Include Open Graph metadata as named in the Issue title, using localized values and available approved images.

### Acceptance criteria
- Localized metadata is present.
- Canonical/hreflang values are valid.
- Sitemap is available.

### Dependencies
- **GitHub Issue dependencies:** P-04, P-11.
- **External prerequisites:** Approved localized copy and approved social-preview images where available; no image is required where none is approved/available.

### Verification steps
- Inspect localized metadata and verify canonical/hreflang URLs correspond to supported routes.
- Inspect generated sitemap entries and confirm they do not include invalid/unpublished routes.

### Implementation boundaries
- Keep metadata factual and localized; use only available approved images.
- Do not add analytics/tracking or fabricate metadata claims. Scope remains the title and acceptance criteria in the approved plan.


### Non-goals
- Do not add analytics/tracking or metadata claims and images that are not approved.

### References
- [PRD ?4 routes](PRD.md#4-routes)
- [PRD ?6 functional requirements](PRD.md#6-functional-requirements)
- [Design ?8 localization and direction](DESIGN.md#8-localization-and-direction)

---

## P-21 — Accessibility and responsive audit

**Labels:** `priority:p1`, `needs-triage`, `type:test`, `area:design`

### Description
Audit the implemented shared shell, About, project listing and case-study pages, homepage, contact form, and localized metadata for accessibility and responsive behavior.

### Scope
- Check keyboard access, contrast, reduced motion, RTL/LTR, both themes, and mobile layouts across the named implemented surfaces.

### Acceptance criteria
- Audit the implemented shared shell, About, project listing and case-study pages, homepage, contact form, and localized metadata.
- Check keyboard access, contrast, reduced motion, RTL/LTR, both themes, and mobile layouts.

### Dependencies
- **GitHub Issue dependencies:** P-06, P-08, P-10, P-11, P-12, P-13, P-20.
- **External prerequisites:** Product-owner approval to execute this assigned Issue. Audit only surfaces that have been implemented; report unavailable surfaces as limitations.

### Verification steps
- Record audit findings for each named surface and both locales, both themes, and mobile layouts.
- Check keyboard access, visible focus, contrast, and reduced-motion behavior; document issues and evidence.

### Implementation boundaries
- This is an audit of the listed implemented surfaces; report findings and remediation evidence within the authorized Issue scope.
- Do not silently expand into unrelated redesign or features. WCAG 2.2 AA is the project target from PRD/AGENTS.


### Non-goals
- Do not expand the audit into unrelated redesign or unimplemented surfaces.

### References
- [PRD ?7 nonfunctional requirements](PRD.md#7-nonfunctional-requirements)
- [Design ?7 interaction and motion](DESIGN.md#7-interaction-and-motion)
- [Design ?10 accessibility and performance](DESIGN.md#10-accessibility-and-performance)

---

## P-22 — End-to-end flows and security checks

**Labels:** `priority:p1`, `needs-triage`, `type:test`, `area:contact`

### Description
Add end-to-end coverage for the approved user flows and security checks for the contact workflow and secrets handling.

### Scope
- Cover locale, theme, project, resume, and form flows.
- Check for secrets exposure.

### Acceptance criteria
- Locale, theme, project, resume, and form tests are present and pass.
- Secrets check is performed.

### Dependencies
- **GitHub Issue dependencies:** P-14, P-20.
- **External prerequisites:** Approved resume files, verified published project content, and SMTP test configuration as needed for the flows. These are not GitHub Issue dependencies.

### Verification steps
- Run the implemented end-to-end flows for locale, theme, project, resume, and form; report results and unavailable prerequisites.
- Perform and record a secrets check without printing secret values.

### Implementation boundaries
- Do not expose or commit secrets, log raw message bodies, or fabricate test data as real project content.
- Use the repository-supported test tooling; proposed Playwright tooling requires compatibility confirmation and approval.


### Non-goals
- Do not expose or commit secrets, log message bodies, or invent product functionality for test coverage.

### References
- [PRD ?6 functional requirements](PRD.md#6-functional-requirements)
- [PRD ?7 nonfunctional requirements](PRD.md#7-nonfunctional-requirements)
- [PRD ?9 release plan](PRD.md#9-release-plan)
- [Design ?10 accessibility and performance](DESIGN.md#10-accessibility-and-performance)

---

## P-23 — Performance audit and optimization

**Labels:** `priority:p1`, `needs-triage`, `type:chore`, `area:design`

### Description
Audit performance and make focused optimizations to images and fonts, then report measured results.

### Scope
- Review image and font optimization.
- Measure and report performance results.

### Acceptance criteria
- Image and font optimization is addressed.
- Measured results are reported.

### Dependencies
- **GitHub Issue dependencies:** P-12, P-21.
- **External prerequisites:** A deployed or otherwise measurable target is needed for any real-deployment Core Web Vitals measurement; deployment access/approval is external and is not a GitHub Issue dependency.

### Verification steps
- Record measurement environment, method, and results; distinguish local measurements from real-deployment Core Web Vitals.
- Verify any image/font optimizations against the measured target.

### Implementation boundaries
- Optimize only as supported by evidence and approved scope; do not claim unmeasured results.
- Do not deploy as part of this Issue.


### Non-goals
- Do not claim unmeasured performance results or deploy as part of the audit.

### References
- [PRD ?7 nonfunctional requirements](PRD.md#7-nonfunctional-requirements)
- [Design ?9 assets](DESIGN.md#9-assets)
- [Design ?10 accessibility and performance](DESIGN.md#10-accessibility-and-performance)

---

## P-24 — Deployment configuration and release checklist

**Labels:** `priority:p1`, `ready-for-human`, `type:chore`, `area:design`

### Description
Prepare documented deployment configuration and a release checklist, with a production smoke test only after separate deployment approval.

### Scope
- Document required environment configuration and release steps.
- Perform production smoke test after approval.

### Acceptance criteria
- Environment is documented.
- Production smoke test is completed after approval.

### Dependencies
- **GitHub Issue dependencies:** P-20, P-22, P-23.
- **External prerequisites:** Hosting provider and production domain, production environment configuration, and separate deployment approval. These are not GitHub Issue dependencies; approval of this Issue plan does not authorize deployment.

### Verification steps
- Review environment documentation for completeness without exposing secrets.
- After separate deployment approval, run and record a production smoke test; before approval, report that step as pending.

### Implementation boundaries
- Document configuration and checklist only until separate deployment approval is granted.
- Do not deploy, alter external services, or include secret values without explicit authorization.


### Non-goals
- Do not deploy or alter external services before separate approval, and do not expose secret values.

### References
- [PRD ?9 release plan](PRD.md#9-release-plan)
- [PRD ?11 open dependencies](PRD.md#11-open-dependencies-not-blockers-to-documentation)
- [Design ?10 accessibility and performance](DESIGN.md#10-accessibility-and-performance)

---

## Source alignment notes

- Approved identifiers, exact titles, Issue dependencies, and acceptance criteria are transcribed from `docs/GITHUB_ISSUES.md`.
- `P-21` retains the detailed audit surfaces and checks stated in that source.
- External prerequisites are distinguished from P-xx GitHub Issue dependencies.
- Project-specific facts and pending information are limited to the PRD inventory and remain subject to verification and approval.
- Verification steps and implementation boundaries clarify evidence and authorization limits; they do not add product features or change acceptance criteria.
