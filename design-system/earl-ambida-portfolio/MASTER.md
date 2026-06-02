# Design System Master File - Midnight Terminal Theme

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Earl Ambida Portfolio
**Generated/Updated:** 2026-06-03
**Category:** Systems & IT Engineering / Cyber-terminal OLED

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| OLED Background | `#030303` | `--color-bg-pure` | Primary background, deep black |
| Card Background | `#0B0F19` | `--color-bg-card` | Cards, terminal panels, navigation |
| Panel Border | `#1E293B` | `--color-border` | Subtle panel outline (slate-800) |
| Tech Accent (Cyan) | `#06B6D4` | `--color-cyan` | Interactive buttons, inputs, focus borders, active command paths |
| Status Success (Green) | `#10B981` | `--color-green` | Active statuses, online nodes, success logs |
| Embedded Accent (Indigo) | `#6366F1` | `--color-indigo` | Highlights, subtle gradients, IoT tags |
| Primary Text | `#F8FAFC` | `--color-text` | Readability text (slate-50) |
| Muted Text | `#94A3B8` | `--color-text-muted` | Body text description (slate-400) |

**Color Notes:** Deep OLED blacks to minimize eye strain and present a highly technical systems aesthetic, accented with high-contrast active terminal lights.

### Typography

- **Heading Font:** Space Grotesk
- **Body Font:** Inter
- **Monospace/Terminal Font:** JetBrains Mono
- **Google Fonts Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
```

---

## Component Specs

### 1. Terminal Console Panel

```css
.terminal-window {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  font-family: 'JetBrains Mono', monospace;
  overflow: hidden;
}

.terminal-header {
  background: rgba(15, 23, 42, 0.8);
  border-bottom: 1px solid var(--color-border);
  padding: 10px 16px;
  display: flex;
  align-items: center;
}

.terminal-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;
}

.terminal-body {
  padding: 20px;
  color: var(--color-text);
  overflow-y: auto;
}
```

### 2. Glass Cards

```css
.glass-card {
  background: rgba(11, 15, 25, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(30, 41, 59, 0.5);
  border-radius: 12px;
  padding: 24px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card:hover {
  border-color: rgba(6, 182, 212, 0.5);
  box-shadow: 0 8px 30px rgba(6, 182, 212, 0.08);
  transform: translateY(-2px);
}
```

---

## Style Guidelines

* **Floating Elements**: Spaced floating navigation bars, overlapping card grids.
* **Scanline Effects**: Subtle diagonal line background overlay on the terminal widget for standard CRT styling.
* **Blinking Cursor**: Smooth CSS opacity transitions on terminal input pointers.
* **Hover Transitions**: All active elements must transition cleanly within 150-300ms using custom cubic-beziers.

---

## Anti-Patterns (Do NOT Use)

- ❌ **Emojis as icons** — Use Lucide SVG icons.
- ❌ **Over-saturation** — Don't use bright neon backgrounds; restrict neons to text/border accents.
- ❌ **No layout-shifting hovers** — Focus states and card expansions must remain static in terms of layout dimensions.
- ❌ **Poor contrast** — Always keep text at 4.5:1 contrast against dark backdrops.
