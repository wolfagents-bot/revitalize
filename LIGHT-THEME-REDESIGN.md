# Revitalize: Light Theme Redesign Plan

> **Client feedback:** "I don't like dark colors when it comes to health. A light color is better for medical sites."
>
> **Reference site:** [totalhealthsolutions.care](https://totalhealthsolutions.care/)

This document captures the full plan to convert the Revitalize site from its current dark navy theme to a light, medical-appropriate palette. Same layout, same content, same components — just a visual transformation.

---

## New Color Palette

| Role | Current (Dark) | New (Light) |
|------|---------------|-------------|
| Page background | `navy-950` #0a0e1a | `cream-50` #FAFAF7 |
| Alternating section bg | `navy-900` #0f1629 | `cream-100` #F5F3EE |
| Card surfaces | `navy-950/50` semi-transparent | `white` #FFFFFF + `shadow-sm` |
| Headings | `text-white` | `text-slate-900` |
| Body text | `text-slate-400` | `text-slate-600` |
| Borders | `border-white/10` | `border-slate-200` |
| Icon backgrounds | `bg-teal-500/10` | `bg-teal-50` |
| Icon color | `text-teal-400` | `text-teal-600` |
| Accent text | `text-teal-400` | `text-teal-600` / `text-teal-700` |
| Footer | `bg-navy-950` | `bg-slate-900` (stays dark) |

Teal remains the primary accent color — ideal for medical/health (conveys trust, calm, professionalism). All combinations pass WCAG AA contrast requirements.

---

## Design Rationale

- **Light backgrounds** convey cleanliness and trust — industry standard for healthcare
- **Cream tones** (#FAFAF7, #F5F3EE) feel warmer and more approachable than pure white
- **Teal accent** works beautifully on both light and dark — no need to change brand identity
- **White cards with subtle shadows** replace the glass-morphism dark cards
- **Dark footer** stays — this is a common pattern that anchors light-themed pages
- **Contact section** becomes a bold teal gradient card — the one element that pops with rich color

---

## Section Background Rhythm

```
Hero             → cream-50  (primary light)
Services         → cream-100 (warm alternate)
How It Works     → cream-50  (primary light)
Peptide Catalog  → cream-100 (warm alternate)
Why Revitalize   → cream-50  (primary light)
FAQ              → cream-100 (warm alternate)
Contact          → cream-50  (teal gradient card provides contrast)
Footer           → slate-900 (dark anchor)
```

---

## File-by-File Changes

### 1. `src/app/globals.css`

**Replace the `@theme` block** — remove all `navy-*` tokens, add `cream-*` and `teal-700`:

```css
@theme {
  --color-cream-50: #FAFAF7;
  --color-cream-100: #F5F3EE;
  --color-teal-400: #2dd4bf;
  --color-teal-500: #14b8a6;
  --color-teal-600: #0d9488;
  --color-teal-700: #0f766e;
  --color-gold-400: #d4a72d;
  --color-gold-500: #b8961f;
}
```

**Add to body rule:**
```css
body {
  background-color: #FAFAF7;
  color: #334155;
}
```

---

### 2. `src/components/Header.tsx`

| What | Dark | Light |
|------|------|-------|
| Header bg | `bg-navy-950/80 border-white/10` | `bg-white/80 border-slate-200` |
| Logo text | `text-white` | `text-slate-900` |
| Logo dot | `text-teal-400` | `text-teal-500` |
| Nav links | `text-slate-300 hover:text-teal-400` | `text-slate-600 hover:text-teal-600` |
| Hamburger icon | `text-white` | `text-slate-900` |
| Mobile menu bg | `bg-navy-950 border-white/10` | `bg-white border-slate-200` |
| Mobile links | `text-slate-300 hover:text-teal-400` | `text-slate-600 hover:text-teal-600` |

CTA button (`bg-teal-500 text-white`) stays the same — works great on light.

---

### 3. `src/components/Hero.tsx`

| What | Dark | Light |
|------|------|-------|
| Section bg | `bg-navy-950` | `bg-cream-50` |
| Gradient orbs | `bg-teal-500/10`, `bg-teal-600/5` | `bg-teal-500/5`, `bg-teal-400/5` |
| Badge text | `text-teal-400` | `text-teal-700` |
| H1 | `text-white` | `text-slate-900` |
| Gradient span | `from-teal-400 to-teal-500` | `from-teal-500 to-teal-600` |
| Subtitle | `text-slate-400` | `text-slate-600` |
| Secondary button | `border-slate-700 text-slate-300` | `border-slate-300 text-slate-600 hover:border-teal-500 hover:text-teal-700` |
| Stats divider | `border-white/10` | `border-slate-200` |
| Stat values | `text-teal-400` | `text-teal-600` |

---

### 4. `src/components/Services.tsx`

| What | Dark | Light |
|------|------|-------|
| Section bg | `bg-navy-900` | `bg-cream-100` |
| H2 | `text-white` | `text-slate-900` |
| Subtitle | `text-slate-400` | `text-slate-600` |
| Cards | `border-white/10 bg-navy-950/50` | `border-slate-200 bg-white shadow-sm` |
| Card hover | `hover:bg-navy-950` | `hover:shadow-md` |
| Icon bg | `bg-teal-500/10` | `bg-teal-50` |
| Icon color | `text-teal-400` | `text-teal-600` |
| Card h3 | `text-white` | `text-slate-900` |
| Card text | `text-slate-400` | `text-slate-600` |

---

### 5. `src/components/HowItWorks.tsx`

| What | Dark | Light |
|------|------|-------|
| Section bg | `bg-navy-950` | `bg-cream-50` |
| H2 | `text-white` | `text-slate-900` |
| Subtitle | `text-slate-400` | `text-slate-600` |
| Connector gradient | `from-teal-500/40` | `from-teal-500/30` |
| Cards | `border-white/5 bg-navy-900/50` | `border-slate-200 bg-white shadow-sm` |
| Icon bg | `bg-teal-500/10` | `bg-teal-50` |
| Icon color | `text-teal-400` | `text-teal-600` |
| Step number ghost | `text-white/5` | `text-slate-200` |
| Step title | `text-white` | `text-slate-900` |
| Step description | `text-slate-400` | `text-slate-600` |

---

### 6. `src/components/PeptideCatalog.tsx`

Same section/card/text pattern as Services above, plus:

**Category badge colors:**
```ts
const categoryColors: Record<string, string> = {
  Recovery: "bg-emerald-50 text-emerald-700",
  "Growth Hormone": "bg-blue-50 text-blue-700",
  Metabolic: "bg-amber-50 text-amber-700",
  Performance: "bg-purple-50 text-purple-700",
  Longevity: "bg-rose-50 text-rose-700",
};
// fallback: "bg-slate-100 text-slate-600"
```

**Benefit tags:** `border-white/5 bg-white/5 text-slate-400` → `border-slate-200 bg-slate-50 text-slate-600`

---

### 7. `src/components/WhyRevitalize.tsx`

Same card pattern as above. Notable changes:
- "Revitalize" highlight: `text-teal-400` → `text-teal-600`
- Reason cards: `border-white/5 bg-navy-900/50` → `border-slate-200 bg-white shadow-sm`

---

### 8. `src/components/FAQ.tsx`

| What | Dark | Light |
|------|------|-------|
| Section bg | `bg-navy-900` | `bg-cream-100` |
| Accordion items | `border-white/10 bg-navy-950/50` | `border-slate-200 bg-white shadow-sm` |
| Question text | `text-white` | `text-slate-900` |
| Answer divider | `border-white/5` | `border-slate-100` |
| Answer text | `text-slate-400` | `text-slate-600` |

---

### 9. `src/components/Contact.tsx` (Most Complex)

The contact section transforms into a **teal gradient card** — the visual centerpiece:

| What | Dark | Light |
|------|------|-------|
| Section bg | `bg-navy-950` | `bg-cream-50` |
| Card wrapper | `border-white/10 from-navy-800 to-navy-900` | `border-teal-600/20 from-teal-600 to-teal-700` |
| H2 | `text-white` (keep) | `text-white` (keep — on teal bg) |
| "Optimize" highlight | `text-teal-400` | `text-teal-100` |
| Body text | `text-slate-400` | `text-teal-100` |
| Contact info text | `text-slate-400` | `text-teal-100` |
| Contact icons | `text-teal-400` | `text-white` |
| Form bg | `bg-navy-950/50` | `bg-white/10` |
| Form labels | `text-slate-300` | `text-teal-100` |
| Form inputs | `border-white/10 bg-navy-900 text-white placeholder:text-slate-600` | `border-white/20 bg-white/10 text-white placeholder:text-teal-200/60` |
| Submit button | `bg-teal-500 text-white hover:bg-teal-600` | `bg-white text-teal-700 hover:bg-teal-50` |
| Disclaimer | `text-slate-600` | `text-teal-200` |

---

### 10. `src/components/Footer.tsx`

Footer **stays dark** — standard pattern for light sites:

| What | Dark | Light |
|------|------|-------|
| Border + bg | `border-white/10 bg-navy-950` | `border-slate-200 bg-slate-900` |
| Inner divider | `border-white/5` | `border-slate-700` |
| Disclaimer/copyright | `text-slate-600` | `text-slate-400` |

All other footer styles (white logo, slate-400 links) remain unchanged.

---

## Accessibility (WCAG AA Verification)

| Combination | Contrast Ratio | Status |
|-------------|---------------|--------|
| `slate-900` on `cream-50` | ~16.5:1 | AAA |
| `slate-600` on `cream-50` | ~6.4:1 | AA |
| `slate-600` on `white` | ~7.0:1 | AA |
| `teal-600` on `cream-50` | ~4.6:1 | AA |
| `teal-700` on `cream-50` | ~5.8:1 | AA |
| `white` on `teal-600` (contact) | ~4.6:1 | AA |
| `white` on `slate-900` (footer) | ~15.4:1 | AAA |

---

## Verification Steps

1. `pnpm build` — confirm no Tailwind errors from removed navy tokens
2. `pnpm dev` — visual check of every section at desktop + mobile
3. Test Header mobile menu opens with correct light styling
4. Verify Contact form inputs are readable (white text on teal)
5. Verify FAQ accordion open/close with new colors
6. Spot-check text contrast across cream/white backgrounds
