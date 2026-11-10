# Palette's Journal - Critical Learnings Only

## 2026-09-25 - CSS Grid Empty States & Search Accessibility
**Learning:** In CSS grid layouts (`.users-grid`), rendering simple unstyled text or elements without grid column spanning (`grid-column: 1 / -1`) confines messages to the first grid cell, causing unnatural text wrapping and misalignment. Using an accessible container with `role="status"` and `class="no-results"` ensures both proper full-width layout and automatic announcements for screen readers when filtering collections.
**Action:** Always span empty/status feedback across all grid tracks using `grid-column: 1 / -1` with `role="status"` or `aria-live="polite"` when working with grid-based list views.
