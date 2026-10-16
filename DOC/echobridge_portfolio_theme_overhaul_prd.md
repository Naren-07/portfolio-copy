# Product Requirements Document (PRD)
## EchoBridge Portfolio — Golden Luxury Theme Overhaul (80/20 Ratio)

- **Target Repository:** `https://github.com/Naren-07/portfolio-Echobridge.git`
- **Document Version:** 1.0.0
- **Status:** Approved for Implementation
- **Author:** Product & Design Systems Team

---

## 1. Executive Summary & Problem Statement

### 1.1 Context
The existing EchoBridge portfolio relies on a standard obsidian/black visual theme. While functional, it does not convey the distinctive, high-impact metallic aesthetic desired for brand positioning.

### 1.2 Objective
Execute a comprehensive theme transformation converting the application's overall canvas from a black backdrop into an **80/20 Golden-to-Black luxury visual theme**:
- **80% Golden Hues:** Backgrounds, canvas layers, card surfaces, frosted overlays, borders, and ambient lighting.
- **20% Obsidian Black Accents:** Typography, primary CTA button fills, high-contrast badges, and sharp structural accents.

### 1.3 Key Principle: Zero Layout Breakage
All existing UI layouts, component trees, micro-interactions, responsive breakpoints, animations (Framer Motion / Three.js), and project content will remain strictly preserved. Only color tokens, blending layers, and text contrast relationships will be refactored.

---

## 2. Design Tokens & Color Architecture

To avoid visual fatigue and maintain WCAG 2.1 AA accessibility, pure raw yellow (`#FFD700`) is avoided across broad surfaces. Instead, an antique-to-champagne metallic gradient system is paired with crisp obsidian black typography.

### 2.1 Token Hierarchy

| Token Key | Color Code / Value | Usage & Distribution |
| :--- | :--- | :--- |
| `--gold-canvas-base` | `#D9B347` | Base canvas tone |
| `--gold-canvas-gradient` | `radial-gradient(ellipse at top, #F7E49A 0%, #D8AE41 55%, #B8891B 100%)` | Main document & section backgrounds (Global 80%) |
| `--gold-surface-card` | `rgba(255, 248, 225, 0.55)` | Frosted glass cards, modal backdrops |
| `--gold-border` | `rgba(168, 126, 26, 0.40)` | Card borders, inputs, divider rules |
| `--gold-highlight` | `#FFF3C4` | Ambient glow, text on black buttons |
| `--black-text-primary` | `#0D0D0E` | H1–H4 Headings, high-emphasis copy (The 20%) |
| `--black-text-secondary` | `#242428` | Body copy, secondary descriptions, labels |
| `--black-interactive` | `#111113` | Primary CTA fills, badge containers, anchor icons |
| `--black-border-subtle` | `rgba(17, 17, 19, 0.18)` | Inner container borders, separators |

---

## 3. Detailed Component & Section Specifications

### 3.1 Global Document & Background Layers
- **Root Element (`html`, `body`):** Set background to `--gold-canvas-gradient` with `min-height: 100vh; background-attachment: fixed;`.
- **Canvas / Particle Animations:**
  - Convert any existing white/gold particles to obsidian charcoal (`rgba(20, 20, 24, 0.35)`) and reflective champagne highlights (`#FFF9E0`).
  - Set Three.js scene clear color to `alpha = 0` (transparent) or `#D9B347`.

### 3.2 Header & Navigation Bar
- **Container:**
  - Glassmorphic warm gold surface (`background: rgba(235, 201, 95, 0.72); backdrop-filter: blur(12px); border-bottom: 1px solid var(--black-border-subtle);`).
- **Brand Logo:**
  - Solid Obsidian Black (`#0D0D0E`) with sharp letter-spacing.
- **Navigation Links:**
  - Normal state: `#242428`.
  - Hover / Active state: `#0D0D0E` with a bold 2px underline in black.
- **Header Action Button (e.g., Contact / Resume):**
  - Solid Obsidian fill (`#111113`) with polished gold text (`#F7E49A`).

### 3.3 Hero Section
- **Headline (H1):** Obsidian Black (`#0D0D0E`) with an optional subtle drop-shadow (`0 1px 2px rgba(255, 240, 180, 0.4)`) to ensure crisp separation.
- **Subheadings & Pitch Copy:** Deep Slate/Charcoal (`#242428`).
- **Hero CTA Buttons:**
  - *Primary CTA:* Obsidian Black fill with `#F7E49A` text and smooth scale-up on hover.
  - *Secondary CTA:* Transparent background, 2px solid `#0D0D0E` border, `#0D0D0E` text. Inverts to solid black on hover.

### 3.4 Projects & Portfolio Cards
- **Card Surface:**
  - `background: rgba(255, 247, 224, 0.60);`
  - `border: 1px solid rgba(168, 126, 26, 0.35);`
  - `box-shadow: 0 10px 30px -10px rgba(90, 65, 10, 0.15);`
  - `backdrop-filter: blur(10px);`
- **Card Titles:** Obsidian Black (`#0D0D0E`).
- **Tech Stack Badges:**
  - Semi-translucent gold base (`rgba(216, 174, 65, 0.3)`) with black text (`#0D0D0E`) and `1px solid rgba(17, 17, 19, 0.2)`.
- **Card Hover States:**
  - Border deepens to `#0D0D0E`, card elevates by `-4px`, subtle shadow deepens.

### 3.5 Skills, Experience & Timeline
- **Timeline Rail / Connectors:** Solid `#0D0D0E` with golden connector nodes.
- **Experience Cards:** Mirror frosted gold card specifications.
- **Skill Badges & Progress Bars:**
  - Bar track: `rgba(17, 17, 19, 0.12)`.
  - Active fill: Solid Obsidian Black (`#111113`) or deep bronze accent.

### 3.6 Contact Form & Input Controls
- **Input & Textarea Fields:**
  - `background: rgba(255, 255, 255, 0.45);`
  - `border: 1.5px solid var(--gold-border);`
  - `color: #0D0D0E;`
- **Focus State:**
  - `border-color: #0D0D0E;`
  - `outline: 2px solid rgba(17, 17, 19, 0.2);`
- **Placeholder Text:**
  - `rgba(36, 36, 40, 0.55)`.
- **Submit Button:**
  - Solid Obsidian Black (`#111113`) with `#F7E49A` label.

### 3.7 Footer & Social Icons
- **Footer Section:** Antique brushed gold base with a 1px top border in `rgba(17, 17, 19, 0.15)`.
- **Social Media Icons:**
  - Default: `#242428`.
  - Hover: Scale `1.1` and shift to `#0D0D0E`.
- **Copyright Text:** `#38383E`.

---

## 4. Implementation Plan & File Modifications

### Step 1: Tailwind CSS / Global Style Configuration
Update `tailwind.config.js` or `src/index.css`:
```css
@layer base {
  :root {
    --gold-canvas-gradient: radial-gradient(ellipse at top, #f7e49a 0%, #d8ae41 55%, #b8891b 100%);
    --gold-card-bg: rgba(255, 247, 224, 0.6);
    --gold-card-border: rgba(168, 126, 26, 0.35);
    --black-text-primary: #0d0d0e;
    --black-text-secondary: #242428;
    --black-btn: #111113;
  }

  body {
    background: var(--gold-canvas-gradient);
    background-attachment: fixed;
    color: var(--black-text-secondary);
  }
}
```

### Step 2: Global Class Refactor
Run targeted search and replace operations across JSX/TSX components:
- `bg-black`, `bg-[#000]`, `bg-zinc-900`, `bg-neutral-950` $\rightarrow$ remove or replace with golden frosted container classes.
- `text-white`, `text-gray-100`, `text-slate-200` $\rightarrow$ `text-[#0D0D0E]` for headings, `text-[#242428]` for body copy.
- Glowing drop shadows (`shadow-[0_0_..._#ffd700]`) $\rightarrow$ warm bronze ambient shadows (`rgba(90, 65, 10, 0.18)`).

### Step 3: Interactive Components Audit
- Ensure all modal backgrounds, hamburger menus, and dropdown trays inherit the golden glassmorphism treatment with solid black typography.

---

## 5. Non-Functional Requirements & Acceptance Criteria

1. **Accessibility Standard (WCAG 2.1 AA):**
   - Every text element must meet or exceed a **4.5:1** contrast ratio against its immediate golden surface.
2. **Color Distribution Audit:**
   - Visual inspection confirms an approximate 80/20 balance: golden backdrop and structural surfaces dominate, with obsidian reserved for content clarity and interactive targets.
3. **No Functional Regressions:**
   - Contact forms, resume downloads, modal triggers, and animations must continue working seamlessly without console errors.
4. **Cross-Device Responsiveness:**
   - Consistent visual balance across mobile, tablet, and desktop viewports.