# Palette's Journal

## 2026-11-05 - Safe Dynamic Text in Vanilla DOM Empty States
**Learning:** In vanilla TypeScript DOM rendering, search empty states reflecting user queries directly into `innerHTML` create XSS risks. Building DOM nodes with `document.createElement` and `textContent` ensures safe empty state rendering with accessible live notifications (`role="status"`).
**Action:** Always construct dynamic message elements and interactive recovery controls (such as "Limpiar búsqueda" reset buttons) using safe DOM element creation methods.
