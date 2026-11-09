## 2026-09-25 - Search input and empty state accessibility
**Learning:** Dynamic search filtering on user cards requires `role="status"` on empty state feedback so screen readers announce when results are filtered out, alongside `:focus-visible` styling on `#search-input` and card links for keyboard navigation.
**Action:** Always verify search inputs have explicit `aria-label`, standard `type="search"`, and clear `:focus-visible` indicators when enhancing client-side filtered lists.
