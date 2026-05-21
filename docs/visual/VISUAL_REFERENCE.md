# Visual Reference

## Purpose

This document defines the visual direction for **Alba Full Stack Portfolio**. It must be read before implementing layouts, pages, components, design tokens, UI states, or Tailwind styling decisions.

This guide complements `AGENTS.md`. `AGENTS.md` defines the product, workflow, architecture, scope rules, and development process. This file defines how the interface should look and feel based on the approved visual reference.

Any future visual implementation must respect:

- `AGENTS.md`
- `docs/visual/VISUAL_REFERENCE.md`
- `docs/visual/VisualReference.png`

## Source Image

Main reference file:

```txt
docs/visual/VisualReference.png
```

This image is the primary visual reference for the project. It defines the expected art direction for the public portfolio, project/blog listing pages, admin dashboard, mobile layout, palette, typography, components, iconography, and overall product feel.

Future UI work should treat the image as the visual baseline. The implementation does not need to copy it pixel by pixel, but it must preserve the same premium dark tech identity, spacing discipline, card language, accent colors, and professional Full Stack portfolio tone.

## Product Language

- The primary interface language is Spanish.
- Initial UI copy, navigation labels, buttons, section headings, form labels, empty states, error messages, and admin labels should be written in Spanish.
- The visual reference includes an `ES / EN` language switcher.
- The language switcher is part of the visual direction and can appear as a future-ready UI element.
- Real English translation support must be implemented only in a future dedicated task.
- Do not add i18n libraries unless explicitly requested.
- Do not create translation files in early layout phases.
- Keep all future copy clear, professional, technical, concise, and portfolio-oriented.

Suggested Spanish navigation labels:

- Inicio
- Sobre mí
- Habilidades
- Proyectos
- Blog
- Experiencia
- Contacto

Suggested Spanish CTA labels:

- Ver proyectos
- Leer blog
- Descargar CV
- Contactar
- Ver detalle
- Leer artículo

Suggested Spanish admin labels:

- Resumen
- Artículos
- Categorías
- Proyectos
- Experiencia
- Mensajes
- Configuración
- Cerrar sesión

## Visual Identity

The visual identity should communicate a modern professional portfolio with a premium technology aesthetic. The interface should feel like a senior digital product, not like a generic bootcamp exercise.

Core attributes:

- Modern professional portfolio.
- Premium tech aesthetic.
- Deep dark background.
- Cyan, violet, and pink accents.
- Senior digital product feeling.
- Clean, sophisticated, creative, and technical design.
- Full Stack profile with strong UI and Figma sensitivity.
- Professional enough for real-world portfolio use.
- Technical enough to support a blog and admin dashboard.
- Design-aware enough to show visual craft and product thinking.

The product should position Alba as a developer who understands frontend, backend, full stack architecture, user interfaces, visual systems, Figma, and technical communication.

## Global Art Direction

The reference uses a dark, product-like interface with layered surfaces and controlled highlights.

Use:

- Dark interface.
- Subtle glassmorphism.
- Controlled neon accents.
- Soft gradients.
- Card-based layouts.
- Strong spacing.
- Clear hierarchy.
- Professional dashboard/product feeling.
- Thin borders and dividers.
- Dotted background patterns when useful.
- Soft radial glow around key visual areas.
- Compact but readable navigation.
- Polished icon and chip systems.

Avoid:

- Plain white backgrounds.
- Childish visual style.
- Overloaded neon effects.
- Excessive gradients.
- Heavy decoration that competes with content.
- Random visual motifs unrelated to the reference.

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| Deep background | #081020 | Main app background |
| Dark background | #111827 | Secondary dark areas |
| Elevated surface | #161E2E | Elevated panels |
| Card surface | #1E293B | Cards and blocks |
| Border muted | #334155 | Borders and dividers |
| Cyan accent | #22D3EE | Primary actions and highlights |
| Violet accent | #A78BFA | Secondary accents |
| Pink accent | #FB7185 | Creative/design highlights |
| White text | #F8FAFC | Main titles |
| Soft text | #CBD5E1 | Body text |
| Muted text | #94A3B8 | Metadata and secondary labels |

Recommended usage:

- Main background: use `Deep background` as the primary app canvas.
- Secondary areas: use `Dark background` for page bands, nav surfaces, and dashboard containers.
- Cards: use `Elevated surface` and `Card surface` with transparent overlays when matching glass panels.
- Borders: use `Border muted` with low opacity for cards, dividers, inputs, and panels.
- Primary CTA: use `Cyan accent` as the main action color.
- Secondary CTA: use a dark transparent surface with a subtle cyan or violet border.
- Highlights: use cyan for technical/product emphasis, violet for secondary emphasis, and pink for design/creative emphasis.
- Text hierarchy: use `White text` for main headings, `Soft text` for body copy, and `Muted text` for metadata.
- Badges/chips: use dark surfaces with low-opacity cyan, violet, or pink borders.

Do not let the interface become a flat single-color dark theme. The reference depends on contrast between deep background, elevated cards, luminous accents, and soft text hierarchy.

## Typography

Recommended font:

- Inter.
- System sans-serif fallback if Inter is not configured.

Typography direction:

- Large bold H1.
- Compact clear H2.
- Readable body text.
- Small caption text for metadata.
- Strong contrast for titles.
- Soft gray for secondary text.
- Tight, professional hierarchy.
- No playful or decorative fonts.

Approximate sizes:

| Type | Size / Line height |
|---|---|
| H1 desktop | 48px / 56px |
| H1 mobile | 32px / 40px |
| H2 | 32px / 40px |
| H3 | 24px / 32px |
| Body | 16px / 24px |
| Small | 14px / 20px |
| Caption | 12px / 16px |

The hero headline should be visually dominant, with selected words highlighted in violet or pink when it supports the message. Body copy should remain readable and calm.

## Layout Principles

Use a premium product layout system:

- Wide container with generous side spacing.
- Responsive grid system.
- Large section spacing.
- Top navbar.
- Desktop hero in two columns.
- Mobile hero in one column.
- Balanced cards.
- Dashboard with sidebar plus content layout.
- Mobile-first adaptation.
- Avoid cramped layouts.
- Maintain consistent alignment across sections.
- Keep cards visually related through shared radius, border, background, and spacing rules.

Recommended layout behavior:

- Desktop public pages should use a centered max-width container.
- Hero sections should have enough vertical presence without hiding the next content entirely.
- Cards should align to a grid and maintain predictable heights where possible.
- Admin screens should prioritize scanability and functional hierarchy.
- Mobile views should preserve the premium look without forcing desktop density.

## Main Page Reference

The homepage in the reference establishes the strongest visual direction.

Expected homepage elements:

- Logo on the left.
- Horizontal navigation.
- `ES / EN` visual selector on the right.
- Strong hero headline in Spanish.
- Badge like `Desarrolladora Full Stack`.
- Primary cyan CTA.
- Secondary dark CTA with border.
- Main portrait or visual framed with subtle glow.
- Floating technology icons.
- Technology strip.
- Featured projects.
- Recent blog articles.
- Design/Figma side card.

Visual details from the reference:

- The hero combines clean portfolio copy with a strong portrait/image card.
- The portrait area uses a cyan/violet/pink glow and an orbital or circular visual motif.
- Technology icons float around the hero image in small glass cards.
- The hero background includes subtle dotted texture and soft neon light.
- Project and blog cards appear below the hero as compact premium cards.
- The Figma/design card reinforces Alba's UI design sensitivity.

The future implementation should keep interface copy in Spanish. The `EN` option in the language switcher can be visual only until a future i18n phase.

## Public Pages Reference

The visual reference includes public project and blog listing pages.

Projects page:

- Dark page background.
- Consistent navbar.
- Page title and concise Spanish description.
- Category filters as chips.
- Search input on the right or below filters on smaller screens.
- Project cards in a responsive grid.
- Cards with image, title, short description, tags, and metadata.
- Active filter highlighted with cyan.

Blog page:

- Dark page background.
- Consistent navbar.
- Category filters and search.
- Blog cards with visual thumbnails.
- Cards should include title, date, reading time, category, and short context.
- Spanish labels should be used for all public UI.

Public pages should feel like a polished portfolio product, not isolated demo pages.

## Admin Dashboard Reference

The admin dashboard in the reference uses a premium dark product layout.

Expected admin direction:

- Left sidebar.
- General summary area.
- Metric cards.
- Recent activity.
- Traffic/statistics panel.
- Compact icon navigation.
- Active sidebar item with cyan accent.
- Functional but premium aesthetic.
- Clear hierarchy between navigation, metrics, activity, and charts.
- Avoid visual overload.
- Prioritize clarity.
- Admin copy should be in Spanish.

The admin area should look operational and professional, while still sharing the same portfolio brand language.

## Mobile Reference

The mobile reference preserves the same visual identity with a simpler layout.

Expected mobile behavior:

- Compact navbar.
- Logo left.
- Hamburger menu.
- Hero reorganized into one column.
- Spanish headline remains readable.
- Visible CTAs.
- Technology chips in a responsive grid.
- Cards adapted to mobile width.
- Reduced decorative density.
- Premium look remains readable.
- Spanish copy remains short enough for mobile.

Mobile should not feel like an afterthought. Use spacing, type scale, and card sizing intentionally.

## Components

### Header / Navbar

Dark surface, thin border, logo on the left, navigation links, and future `ES / EN` selector. On desktop, links are horizontal. On mobile, use a compact header with a hamburger menu when navigation is implemented.

### Primary Button

Cyan background, dark text or strong contrast, rounded corners, clear hover state, and optional right icon. It should be used for the most important page action.

### Secondary Button

Dark transparent surface, subtle border, soft glow or hover state, and strong readable text. It should support the primary action without competing with it.

### Badge

Small pill, dark surface, cyan or pink accent, uppercase or semi-uppercase text. Use for role labels, categories, statuses, and highlighted metadata.

### Technology Chip

Icon plus label, dark card surface, subtle border, compact spacing. Use for React, Next.js, TypeScript, Node.js, PostgreSQL, Tailwind CSS, Figma, Git, GitHub, and similar technologies.

### Project Card

Image, title, short description, tags, and hover elevation. The image should have a dark/premium treatment and the card should remain compact, readable, and aligned with the grid.

### Blog Card

Image or visual thumbnail, title, date, reading time, and category. Blog cards should feel technical and editorial, not generic news cards.

### Search Input

Dark input, subtle border, icon, clear focus state, placeholder in Spanish. It should match the card and filter chip system.

### Admin Stat Card

Compact metric block, dark surface, border, small trend text. Use restrained accent color for positive or meaningful trends.

### Dashboard Sidebar Item

Icon plus Spanish label, active state with cyan accent, compact height, clear hover state. Keep the sidebar legible and efficient.

### Section Title

Small uppercase eyebrow plus clear title when needed. Eyebrow text can use muted gray or cyan accent. Titles should be concise and Spanish by default.

### Empty State

Dark card, simple icon, Spanish message, and optional action. Keep it calm and helpful.

### Error State

Clear Spanish message, accessible contrast, and no aggressive red overload. Use red or pink sparingly and pair it with useful guidance.

### Loading State

Subtle skeleton or loading message, consistent with the dark UI. Avoid large spinners unless necessary.

### Logo Mark

The reference uses a geometric gradient mark with cyan, violet, and pink tones. Future logo usage should preserve a sharp technical feel, strong contrast, and compact sizing in the navbar.

### Decorative Glow

Use glows sparingly around key hero visuals, active elements, and selected highlights. The glow should support hierarchy, not become the main content.

## Tailwind Implementation Guidance

- Use Tailwind CSS as the main styling system.
- Use utility classes.
- Avoid traditional CSS except the minimum Tailwind import.
- Use consistent spacing, radius, borders, and shadows.
- Use arbitrary values only when useful to match the reference.
- Do not introduce UI libraries without approval.
- Do not create a visual style different from the reference.
- Prefer reusable class patterns through components, not global CSS.
- Keep repeated visual systems in reusable React components when implementation phases allow it.
- Use `lucide-react` for UI icons unless a specific technology logo is required.
- Preserve `src/index.css` as the minimal Tailwind import unless a later task explicitly changes that rule.

Recommended Tailwind tendencies:

- Dark backgrounds with `slate`, `zinc`, or custom hex arbitrary values.
- Borders with low-opacity slate tones.
- Rounded cards around `rounded-xl` or similar, without overly playful radius.
- Soft shadows and controlled glow via cyan/violet/pink opacity.
- Responsive grids for cards and technology chips.
- Focus states using cyan outlines or rings.

## Accessibility

- Maintain sufficient contrast.
- Provide visible hover and focus states.
- Use semantic HTML.
- Keep buttons and links clearly distinguishable.
- Ensure real responsive behavior.
- Do not rely only on color to communicate states.
- Spanish labels must be understandable and concise.
- Keep touch targets usable on mobile.
- Use meaningful alt text for portfolio images when images are introduced.
- Avoid decorative motion that reduces readability.

## Do

- Keep the dark premium background.
- Use cyan as the primary action color.
- Use violet and pink for controlled creative accents.
- Keep cards clean.
- Respect generous spacing.
- Design like a professional portfolio.
- Make the UI feel senior, polished, and intentional.
- Keep initial visible copy in Spanish.
- Keep the `ES / EN` selector as a future-ready visual element.
- Preserve a strong distinction between public portfolio pages and admin screens while sharing the same visual language.
- Use technology chips and iconography to reinforce the Full Stack profile.
- Use Figma/design references intentionally to show UI sensitivity.

## Do Not

- Do not use generic white backgrounds.
- Do not create a childish aesthetic.
- Do not saturate the UI with neon.
- Do not use exaggerated shadows.
- Do not mix unrelated visual styles.
- Do not use components unrelated to the reference.
- Do not turn the product into a generic blog.
- Do not break the premium tech aesthetic.
- Do not add unnecessary traditional CSS.
- Do not install UI libraries without permission.
- Do not implement real i18n until explicitly requested.
- Do not write the initial interface mainly in English.
- Do not flatten the UI into plain dark blocks without depth, borders, and hierarchy.
- Do not make the admin dashboard look disconnected from the public portfolio brand.

## Future Implementation Notes

Before implementing visual work, Codex must:

1. Read `AGENTS.md`.
2. Read `docs/visual/VISUAL_REFERENCE.md`.
3. Review `docs/visual/VisualReference.png`.
4. Implement only the requested block.
5. Keep the scope limited.
6. Use Spanish copy by default.
7. Keep `ES / EN` as a future-ready element unless the task explicitly asks for i18n.
8. Validate with `npm run build` when code changes exist.
9. Do not commit unless explicitly requested.

This document is binding for future layout, page, component, and styling work. If a future request conflicts with this file, clarify the tradeoff in the task response and follow the user's latest explicit instruction.
