# Palette's Journal - Critical UX & Accessibility Learnings

## 2026-03-30 - Search input accessibility & empty state alignment
**Learning:** Search filters often lack accessible labels when placeholder text is mistakenly treated as an accessible name; additionally, empty states rendered inside CSS Grid layouts need explicit spanning (`grid-column: 1 / -1`) to avoid appearing squished in the first column cell.
**Action:** Always provide an associated `<label>` (using `.visually-hidden` if design prefers clean visual field) and ensure dynamic empty-state elements inside CSS grids apply grid-spanning classes and communicate changes via `aria-live`.
