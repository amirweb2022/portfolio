# Product Requirements Document — Personal Portfolio

- Version: 1.0
- Status: Approved by product owner (2026-11-13)
- Product: AmirMohammad Hosseinzade Personal Portfolio
- Role: Frontend Developer & Software Engineer

## 1. Purpose
Build a bilingual personal-brand website that demonstrates engineering decisions, product thinking, selected work, and professional experience. Primary audience: engineering teams, employers, collaborators, and potential clients. Primary success criterion: visitors can understand expertise, review real projects, access a resume, and make contact.

## 2. Confirmed decisions
- Framework: Next.js App Router; TypeScript.
- Languages: Persian and English, with full RTL/LTR support.
- Visual direction: Dark Futuristic, restrained motion; both Dark and Light themes.
- Hero: personal portrait on the right and introduction on the left in the approved desktop composition; verify RTL composition separately.
- Multi-page site, responsive and accessible.
- Projects: cards and individual case-study pages; MDX-backed content.
- Resume: separate Persian and English PDF files.
- Contact: SMTP email delivery to amirm.992@yahoo.com.
- Publishing: staged; publish complete site structure and only verified, ready case studies.
- Workflow: Codex + GitHub Issues, no Matt Pack dependency.

## 3. Identity and contact
- Persian display name: امیرمحمد حسین زاده
- English display name: AmirMohammad Hosseinzade
- Email: amirm.992@yahoo.com
- GitHub: https://github.com/amirweb2022
- LinkedIn: https://www.linkedin.com/in/amirmohammad-hosseinzadeh-a54697205/

## 4. Routes
- `/en`, `/fa`: homepage (hero, selected projects, brief about, contact CTA).
- `/[locale]/about`: biography, expertise, engineering approach, experience (verified facts only).
- `/[locale]/projects`: all published projects.
- `/[locale]/projects/[slug]`: individual case study.
- `/[locale]/contact`: contact form and public contact links.
- Invalid locale and unknown slug must return appropriate 404 responses.

## 5. Project inventory
| Project | Known description | Role/status |
|---|---|---|
| Govahi Online | Smart certificate generation for held seminars | Frontend Developer |
| Boiler CRM | CRM for tank-certificate links and SMS reminders; described as for Arak Machine Manufacturing | Exact role and client attribution require confirmation before publishing |
| Digitize | Mobile phone online store | Exact role and project links pending |
| Syncwhatch | Separate project | Description, role and links pending |
| Beauty Salon CRM | CRM for a beauty salon | Exact features, role and links pending |

All project facts, screenshots, links, metrics, and client names must be approved before publication. No fabricated metrics, testimonials, logos, or features. If a case study is incomplete, show a verified summary card without a broken detail link or omit it until ready.

## 6. Functional requirements
| ID | Requirement | Priority | Acceptance criteria |
|---|---|---|---|
| FR-01 | Personal-brand hero with portrait | P0 | Responsive image with meaningful alt text; clear title and project/contact links |
| FR-02 | Bilingual content | P0 | Both locales available; correct direction and localized navigation; no mixed untranslated UI |
| FR-03 | Theme switching | P0 | Dark/Light toggle; persists user choice; no disruptive hydration flash |
| FR-04 | Project listing | P0 | Cards show verified project details; accessible navigation |
| FR-05 | Case-study template | P0 | MDX content, headings, role, challenge, approach, technology, outcomes when verified |
| FR-06 | About page | P0 | Verified biography, skills and experience |
| FR-07 | Contact form | P0 | Server-side validation, SMTP send, anti-spam and rate limiting, safe success/error states |
| FR-08 | Localized resume PDFs | P0 | Correct PDF downloads for each locale; meaningful filenames |
| FR-09 | Responsive and accessible UI | P0 | Keyboard navigation, visible focus, contrast, mobile layouts |
| FR-10 | Search metadata | P0 | Localized title/description, canonical and hreflang, sitemap, robots configuration |
| FR-11 | Purposeful motion | P1 | Reduced-motion respected; no blocking transitions |
| FR-12 | Project social previews | P1 | Localized Open Graph metadata/images where available |

## 7. Nonfunctional requirements
- Use semantic HTML and keyboard-operable controls; target WCAG 2.2 AA.
- Optimize images and fonts; avoid unnecessary client JavaScript; measure Core Web Vitals on real deployment.
- Avoid exposing SMTP credentials to the client; keep secrets in server environment variables.
- Do not log message bodies or credentials; never expose SMTP errors directly to users.
- Apply rate limiting and bot mitigation to contact endpoint. Return generic failure messages.
- Use safe, restricted MDX content from repository-controlled files only.
- Provide loading, empty and error states where relevant.
- Test both locales, both themes, and narrow/mobile viewports.

## 8. Content model
Each case study has: `slug`, localized `title`, `summary`, `role`, `status`, `year` (if verified), `stack` (verified), `cover`, `gallery`, `links`, `challenge`, `approach`, `contribution`, `outcomes` (if verified), and `published`. Content should be authored separately per locale, with validated frontmatter and no unapproved assertions.

## 9. Release plan
1. Approve documentation and project data requirements.
2. Initialize app, localization, theme, design tokens and quality tooling.
3. Build shared layout, homepage, about, projects and contact pages.
4. Publish verified case studies, portrait and localized PDFs as assets become available.
5. Complete accessibility, SEO, security and performance checks; deploy after separate approval.

## 10. Out of scope for v1
Admin dashboard, database, blog, CMS, authentication, analytics tracking requiring consent, live chat, and speculative project metrics. These require separate approval.

## 11. Open dependencies (not blockers to documentation)
- Portrait image, usage approval and crop.
- Persian and English resume PDF files.
- Verified descriptions, exact roles, screenshots, and links for all projects.
- Confirm public use of client names/logos, particularly Boiler CRM.
- SMTP host, port, secure/TLS mode, account, sender address, verified delivery path and hosting support.
- Hosting provider and production domain.
- Exact biography, work history and public-facing tagline.

## 12. Change control
Changes to scope, route structure, product requirements or accepted design require a documented PRD revision and explicit product-owner approval. Approval of this document does not authorize coding, issue creation, or deployment.
