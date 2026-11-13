# Design Specification — Personal Portfolio

- Version: 1.0
- Status: Approved direction; detailed visual assets and copy pending
- Direction: Dark Futuristic with restrained editorial layout

## 1. Principles
- The person and real work are the focus, not decoration.
- Clear visual hierarchy, readable typography, generous whitespace.
- Premium dark aesthetic with a fully designed light counterpart.
- Motion reinforces meaning and never delays access to content.
- Bilingual design is native to each reading direction.

## 2. Color tokens (initial approved palette)
| Token | Dark | Light |
|---|---|---|
| background | `#09090F` | `#FAFAFD` |
| surface | `#171724` | `#FFFFFF` |
| primary | `#8B5CF6` | `#6D28D9` |
| text | `#F5F3FF` | `#181625` |
| muted | `#A1A1B5` | `#626175` |

Derive border, focus, hover, danger and status tokens and test contrast before implementation. Purple glow is an accent only, not a text backdrop that reduces legibility. Use CSS variables mapped to Tailwind theme tokens.

## 3. Typography
- English: Geist; Persian: Vazirmatn.
- Hero heading target: desktop 56–80px; mobile 36–44px; fluid clamp values.
- Body text target: 16–18px with generous line height; Persian line height adjusted for script.
- Use consistent heading hierarchy and no hardcoded text inside decorative images.

## 4. Layout
- Desktop: portrait at right, introductory copy at left in hero; review visual balance in Persian RTL separately.
- Mobile: stack content, keep title and CTA visible early, ensure portrait is not excessively tall.
- Responsive grid: project cards adapt from multiple columns to one; no horizontal overflow.
- Header: identity, navigation, locale switch, theme switch; accessible mobile navigation.
- Footer: email, GitHub, LinkedIn, copyright and language-aware links.

## 5. Pages
### Home
Header, hero with portrait and title, selected work, brief about/approach, contact CTA, footer.
### About
Professional summary, engineering approach, skills and verified work history; resume download.
### Projects
Verified project cards with title, summary, role, stack when known, and valid detail links.
### Case Study
Project title and cover, problem, role and scope, engineering decisions, implementation, evidence/screenshots, outcomes if verified, next-project navigation.
### Contact
Simple accessible form (name, email, message), server-backed status, alternative contact links. Avoid displaying SMTP implementation details.

## 6. Components
`SiteHeader`, `SiteFooter`, `LocaleSwitcher`, `ThemeToggle`, `Hero`, `Portrait`, `SectionHeading`, `ProjectCard`, `CaseStudyLayout`, `ResumeLink`, `ContactForm`, `Button`, `Container`, `SkipLink`.

## 7. Interaction and motion
- Entrance effects: subtle opacity and short translation, only where useful.
- Hover: small elevation/border/glow changes, no layout jumps.
- Typical transitions: 200–500ms, with shorter durations for controls.
- Honor `prefers-reduced-motion`; no mandatory parallax, cursor-tracking or scroll hijacking.
- Theme and locale controls must be keyboard-operable and visibly focused.

## 8. Localization and direction
- Route locales `/fa` and `/en`; translate all user-facing UI and metadata.
- Set document `lang` and `dir` correctly per locale.
- Prefer logical CSS properties (`margin-inline`, `padding-inline`, etc.).
- Keep email, URLs, technical names and code in appropriate LTR isolation within Persian text.
- Preserve the current page on locale switch when translation exists.

## 9. Assets
- Use an optimized, user-provided portrait with responsive sizing and descriptive alt text.
- Use real project screenshots with approval; never imply a mockup is a real screenshot.
- Separate `resume-fa.pdf` and `resume-en.pdf`; show the matching version per locale.
- Provide meaningful fallback for unavailable project media.

## 10. Accessibility and performance
- WCAG 2.2 AA target; verify text contrast, touch target sizes, focus states and forms.
- Use `next/image`, font optimization and server rendering where appropriate.
- Limit animation libraries and client components to interactive surfaces.
- Test mobile, desktop, both themes and both locales.

## 11. Visual acceptance
- Both themes feel intentionally designed and remain readable.
- English and Persian have balanced layout and correct text direction.
- Hero communicates role, identity and next action within the first viewport on desktop.
- Project cards are scannable; case studies prioritize evidence and readability.
- No excessive animation, horizontal scrolling or inaccessible controls.

## 12. Pending production assets
Portrait, finalized bilingual hero copy, actual project screenshots, brand mark decision (wordmark is default), resume PDFs, and project descriptions. No visual production work is authorized by this document alone.
