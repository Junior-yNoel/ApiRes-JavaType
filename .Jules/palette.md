# Palette's Journal - Critical UX Learnings

## 2026-03-31 - Focus Visible & Screen Reader Feedback for Live Search
**Learning:** Live search inputs require explicit screen reader labels (`aria-label` / `.sr-only` label), semantic `type="search"`, dynamic empty-state announcements (`role="status"`), and clear keyboard focus rings (`:focus-visible`) to ensure full accessibility for screen reader and keyboard users.
**Action:** When working on search or filtered list components, always combine `:focus-visible` ring styling with `role="status"` live region announcements on empty states and explicit aria-labels on new-tab links.
