# Design QA

Reference: `/workspace/scratch/fcdc41577557/upload/84da4335-afed-4b70-a581-5b89dbca444c.png` (cover) and `/workspace/scratch/fcdc41577557/upload/956efc24-3e48-4f5e-ad2e-bd9134978d28.png` (project grid).

Implementation screenshot: cloud browser capture of `http://terminal.local:4173/` at 1363×898 CSS px, device density 1, desktop home state and `#works` state.

- Composition: the full-viewport dark bridge cover, oversized two-line name, restrained navigation, and warm off-white two-column catalogue preserve the approved direction.
- Typography: Montserrat remains the only family. Display tracking was relaxed from −6.5% to −2.5%, card-title tracking from −4% to −1.2%, and display line-height increased slightly. The result retains the dense identity without letters visually sticking together.
- Spacing: brand, hero copy, `SELECTED WORKS`, catalogue grid, detail pages, and footer share the same responsive `--page-gutter`. Browser measurement at 1363px confirms 95.4px left position for the header brand, hero content, and catalogue heading.
- Color and tokens: black, warm off-white `#f7f6f2`, muted grey, and source photography remain unchanged.
- Image quality: all supplied imagery remains source-faithful WebP with stable crop and no placeholder assets.
- Copy and content: unchanged in this iteration.
- Interaction: every project card opens a complete detail route; back, next project, About, CV, and contact navigation work.
- Responsive behavior: single-column project catalogue and simplified navigation activate below 760px; type and margins use fluid `clamp()` values.
- Browser QA: production build and worker tests pass. No application console errors were observed (browser-extension metadata errors excluded).

P0 findings: 0

P1 findings: 0

P2 findings: 0

P3 findings: 0

Comparison history:

- Earlier P2: three conflicting desktop left margins (header 7vw, hero 11.8vw, catalogue 7vw). Fixed with one `--page-gutter`; post-fix browser evidence measures all three at 95.4px.
- Earlier P2: aggressive negative tracking made large titles feel compressed. Fixed by relaxing display and card-title tracking; post-fix visual check shows clear counters and consistent word shapes without changing the font family or hierarchy.

Final result: passed
