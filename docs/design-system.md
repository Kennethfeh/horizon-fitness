# Horizon Fitness Design System Snapshot

## Palette

| Token | Value |
| --- | --- |
| Base | `#0f172a` |
| Primary CTA | `#dc2626` |
| Sunrise gradient | `#fee2e2 → #fef3c7` |
| Accent | `#f97316` |
| Surfaces | `#ffffff` with 90% opacity + blur |

## Spacing & Layout
- Baseline grid: 8px
- Section rhythm: `clamp(56px, 10vw, 96px)`
- Cards use `24px` padding w/ `24px` gap

## Typography
- Display: 48–64px, `font-semibold`
- Body: 18px regular
- Labels: 12px uppercase with 0.2em tracking

## Components
- Pill buttons share `rounded-full` + focus ring defined in CSS.
- Cards rely on `.card-surface` helper for border + shadow.
- Schedule list uses `divide-y` to keep rows scannable.

## Accessibility & Motion
- Skip link for keyboard users.
- Buttons + links have `focus-ring` class.
- Hover states: translateY(-4px) + color transitions.
- Motion cues documented in `/app/blueprint`.

## Handoff Assets
- Blueprint route: `/blueprint`
- Figma: `https://www.figma.com/file/gamemaker-horizon/Horizon-Fitness-Systems?type=design`
- README explains installation + deployment.
