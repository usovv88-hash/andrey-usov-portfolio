# Design QA

Reference: `/workspace/scratch/fcdc41577557/upload/84da4335-afed-4b70-a581-5b89dbca444c.png` (cover) and `/workspace/scratch/fcdc41577557/upload/956efc24-3e48-4f5e-ad2e-bd9134978d28.png` (project grid).

Implementation screenshots: cloud browser captures of `http://terminal.local:4173/` at 1363×898 CSS px and an isolated 390×844 CSS px mobile viewport. Checked states: desktop cover, mobile cover, mobile project catalogue, and mobile project detail.

- Composition: the full-viewport dark bridge cover, oversized two-line name, restrained navigation, and warm off-white two-column catalogue preserve the approved direction.
- Typography: Montserrat remains the only family. Hero tracking is neutral; catalogue and project titles use a light positive `0.012em`, long project titles use `0.022em`, and body display copy uses `0.015em`. The result retains the identity while preventing letters from visually sticking together.
- Spacing: brand, hero copy, `SELECTED WORKS`, catalogue grid, detail pages, and footer share the same responsive `--page-gutter`. Browser measurement at 1363px confirms 95.4px left position for the header brand, hero content, and catalogue heading.
- Color and tokens: black, warm off-white `#f7f6f2`, muted grey, and source photography remain unchanged.
- Image quality: all supplied imagery remains source-faithful WebP with stable crop and no placeholder assets.
- Copy and content: unchanged in this iteration.
- Interaction: every project card opens a complete detail route; back, next project, About, CV, and contact navigation work.
- Responsive behavior: below 760px the page is recomposed rather than merely scaled. The cover gets a portrait crop, mobile-sized display type, reduced navigation, a single-column catalogue, and full-bleed project imagery. Landscape phones get a compact cover and two-column project grid.
- Maintainability: `src/styles.css` is now formatted, divided into named sections with Russian comments, and starts with a small variable-based control panel for color, gutters, tracking, and corner radius. Duplicate and conflicting desktop overrides were removed.
- Browser QA: production build and all four worker tests pass. Desktop and 390×844 mobile captures show no clipping, overlap, or unintended horizontal overflow.

P0 findings: 0

P1 findings: 0

P2 findings: 0

P3 findings: 0

Comparison history:

- Earlier P2: three conflicting desktop left margins (header 7vw, hero 11.8vw, catalogue 7vw). Fixed with one `--page-gutter`; post-fix browser evidence measures all three at 95.4px.
- Earlier P2: aggressive negative tracking made large titles feel compressed. Fixed with neutral or lightly positive tracking and clearer line heights.
- Earlier P1: the mobile page was only a compressed desktop layout. Fixed with an independent mobile composition and a separate landscape-phone breakpoint.

Final result: passed
