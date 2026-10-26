## 2026-10-26 - Grid Empty State Accessibility and CSS Class Alignment
**Learning:** In CSS grid layouts for user card directories, empty search result messages require `grid-column: 1 / -1` (via `.no-results`) to center correctly across grid columns, and `role="status"` to announce zero-result filtering updates to screen readers.
**Action:** When adding or modifying dynamically updated empty states in grid components, ensure appropriate grid-spanning CSS classes and live region ARIA attributes (`role="status"` or `aria-live="polite"`) are included.
