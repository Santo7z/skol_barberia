---
name: Warm Atelier
colors:
  surface: '#121316'
  surface-dim: '#121316'
  surface-bright: '#38393c'
  surface-container-lowest: '#0d0e11'
  surface-container-low: '#1b1b1f'
  surface-container: '#1f1f23'
  surface-container-high: '#292a2d'
  surface-container-highest: '#343538'
  on-surface: '#e3e2e6'
  on-surface-variant: '#d6c3b3'
  inverse-surface: '#e3e2e6'
  inverse-on-surface: '#2f3034'
  outline: '#9e8e7f'
  outline-variant: '#514438'
  surface-tint: '#feb96c'
  primary: '#feb96c'
  on-primary: '#482900'
  primary-container: '#c98b43'
  on-primary-container: '#482900'
  inverse-primary: '#86530c'
  secondary: '#f8bb72'
  on-secondary: '#472a00'
  secondary-container: '#6c4200'
  on-secondary-container: '#ecb068'
  tertiary: '#c6c6cb'
  on-tertiary: '#2e3035'
  tertiary-container: '#97989d'
  on-tertiary-container: '#2f3035'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdcbb'
  primary-fixed-dim: '#feb96c'
  on-primary-fixed: '#2c1700'
  on-primary-fixed-variant: '#673d00'
  secondary-fixed: '#ffddb9'
  secondary-fixed-dim: '#f8bb72'
  on-secondary-fixed: '#2b1700'
  on-secondary-fixed-variant: '#663e00'
  tertiary-fixed: '#e2e2e7'
  tertiary-fixed-dim: '#c6c6cb'
  on-tertiary-fixed: '#1a1c20'
  on-tertiary-fixed-variant: '#45474b'
  background: '#121316'
  on-background: '#e3e2e6'
  surface-variant: '#343538'
typography:
  display-hero:
    fontFamily: Syne
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Syne
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Syne
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Syne
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Syne
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-mobile: 0.75rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system crafts an upscale, modern, and sensorial grooming destination tailored for Skol Barbería in Chivilcoy, Buenos Aires. The aesthetic channels refined masculine elegance: a deliberate fusion of classic atelier craftsmanship and contemporary minimalist luxury. The interface must evoke relaxation, artisanal expertise, understated wealth, and confidence.

The design movement blends **warm minimalism** with **tactile editorial depth**. Surfaces are velvety, warm-charcoal planes punctuated by rich, radiant copper and bronze metallic accents. The interface avoids aggressive ultra-black tech motifs in favor of warm, deep-roasted charcoal tones reminiscent of aged leather, darkened steel, and dark timber. Bone and cream typography ensures effortless legibility and a softened, editorial cadence across high-contrast appointments.

## Colors

The chromatic architecture rests on four core pillars calibrated for deep ambiance and conversion clarity:

- **Primary (`#C98B43`) & Secondary (`#D49B55`)**: Burnished copper and warm raw gold. Reserved strictly for conversion-driving actions (appointment booking, membership upgrades), active tab indicators, and status badges.
- **Tertiary (`#1A1C20`)**: Elevated charcoal container base, offering soft separation against deep canvas layers.
- **Neutral (`#121316`)**: Grounded background charcoal, rich in warm undertones rather than stark blue-black.

### Text & Surface Tokens
- **Canvas Base**: `#121316`
- **Surface Elevation 1 (Cards, Modals)**: `#1A1C20`
- **Surface Elevation 2 (Hover, Interactive inputs)**: `#24272D`
- **Text Primary (Bone/Warm Cream)**: `#F5F2EB`
- **Text Secondary (Muted Parchment)**: `#B8B2A6`
- **Border / Divider (Warm Wireframe)**: `rgba(201, 139, 67, 0.18)` or subtle surface bounds `rgba(245, 242, 235, 0.08)`

## Typography

The type system balances evocative craftsmanship with fast, functional transactional flows:

- **Headlines & Display (`Syne`)**: A sculpted, wide geometric typeface that confers architectural presence, editorial distinction, and confident authority. Headings lead service tiers, artist portfolios, and experiential narratives.
- **Body & Functional UI (`Plus Jakarta Sans`)**: Clean, contemporary, and engineered with humane geometry. The open apertures guarantee absolute clarity in booking calendars, pricing charts, and grooming service descriptions under any mobile device conditions.
- **Case Formatting**: Section kickers, service badges, and small metadata labels employ uppercase styling with increased letter spacing (`0.05em` to `0.08em`) to echo high-end apothecary branding.

## Layout & Spacing

The layout model adopts a fluid, responsive container system anchored by an 8pt spatial baseline:

- **Desktop (1024px+)**: 12-column grid, 48px margins (`margin`), and 20px gutters (`gutter`). Content widths max out at 1280px for standard pages and 840px for single-column checkout or scheduling funnels to focus user attention.
- **Tablet (768px - 1023px)**: 8-column grid with 32px margins and 16px gutters.
- **Mobile (< 768px)**: 4-column responsive grid with 20px edge margins (`margin-mobile`) and 12px gutters (`gutter-mobile`).

Touch targets conform strictly to mobile-first ergonomics with minimum interactive heights of 48px. Spacing within booking flows and product collections utilizes generous whitespace (`space-lg` to `space-xl`) between distinct service categories to reinforce unhurried luxury.

## Elevation & Depth

Visual hierarchy rejects harsh drop shadows, utilizing **tonal surface stacking** combined with **subtle warm illumination**:

- **Ground Canvas (`#121316`)**: The bottom-most layer.
- **Resting Cards & Surfaces (`#1A1C20`)**: Elevated 1 tier above canvas, bounded by a feather-light 1px hairline border in `rgba(245, 242, 235, 0.07)` to establish edge definition without hard contrast.
- **Floating Overlays & Modals (`#24272D`)**: Elevated 2 tiers. Supported by a dual ambient shadow:
  - Base: `0 20px 40px -10px rgba(0, 0, 0, 0.6)`
  - Warm Tint Halo: `0 0 24px 0 rgba(201, 139, 67, 0.06)`
- **Interactive State Depth**: When hovered or active, cards and primary CTA buttons gain a warm, copper-infused bloom (`0 8px 24px rgba(201, 139, 67, 0.25)`), evoking warm salon lamplight on brushed metal.

## Shapes

The design system enforces **Soft** corner architecture (`roundedness: 1`), keeping elements crisp and tailored:

- **Standard Elements (Buttons, Inputs, Cards)**: `0.25rem` (4px). Reflects tailored craftsmanship, straight razor angles, and solid woodwork.
- **Large Panels & Modals (`rounded-lg`)**: `0.5rem` (8px). Softens broader visual spans while retaining structural precision.
- **Status Tags & Feature Badges (`rounded-xl`)**: `0.75rem` (12px) or full pill formatting strictly when representing discrete selectable time slots or barber availability.

## Components

### Buttons
- **Primary (Booking / CTA)**: Solid `#C98B43` background with dark neutral `#121316` bold text. On hover, transitions to `#D49B55` with an ambient copper glow (`0 8px 20px rgba(201, 139, 67, 0.25)`). Minimum touch height 48px on mobile, 44px on desktop. Padding: `12px 24px`.
- **Secondary (Detail / Outline)**: Transparent background with a 1px border in `rgba(201, 139, 67, 0.4)`. Text in `#F5F2EB`. Hover shifts border to 100% `#C98B43` with a subtle surface wash `rgba(201, 139, 67, 0.08)`.
- **Ghost (Tertiary)**: Flat `#F5F2EB` text with zero border; underline appears on hover with a 2px copper stroke.

### Chips & Filter Tags
- **Service Categories & Barber Filters**: Dark `#1A1C20` base, 1px border in `rgba(245, 242, 235, 0.1)`. Text in `#B8B2A6`. When active/selected: Background shifts to `rgba(201, 139, 67, 0.15)`, border snaps to `#C98B43`, text brightens to `#F5F2EB`.

### Cards (Service & Barber Profiles)
- Background `#1A1C20`, 1px boundary in `rgba(245, 242, 235, 0.07)`.
- Internal padding using `space-lg` (24px).
- Displays barber portrait or treatment illustration framed with an inset vignette. Pricing presented in primary copper typography (`Syne`, 20px, bold), contrasting against the bone headline.

### Input Fields & Selectors
- Default container `#15171A` with a 1px bottom border or soft enclosure in `rgba(245, 242, 235, 0.15)`.
- Typography: `#F5F2EB` for entered values, `#B8B2A6` for placeholder labels.
- Focus state: Border transitions to `#C98B43` with an understated inner ring glow. Height: 52px for friction-free mobile typing.

### Checkboxes & Radio Buttons
- Custom 20px rounded squares (checkbox) and circles (radio) in `#1A1C20` with a 1.5px border in `rgba(245, 242, 235, 0.25)`.
- Checked state: `#C98B43` fill with dark `#121316` checkmark icon or center dot.

### Specialized Component: Time Slot Pill
- Ergonomic horizontal slot picker for scheduling. Size: 56px wide x 44px high.
- Available slots display muted bone text with a faint surface border; reserved/unavailable slots are rendered at 35% opacity with strikethrough; selected appointment slot lights up in primary `#C98B43` with bold dark text.