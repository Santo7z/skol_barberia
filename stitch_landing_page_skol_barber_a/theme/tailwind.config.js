// =========================================================
// SKOL — Configuración de Tailwind compartida por todas las páginas.
// Los colores leen las variables de theme/theme.css: para cambiar
// la paleta, editá ese archivo. Acá se definen nombres, fuentes,
// tamaños y radios.
// =========================================================
const c = (v) => `rgb(var(--${v}) / <alpha-value>)`;

tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Acento principal (verde ácido)
        "primary": c("accent"),
        "primary-container": c("accent"),
        "primary-fixed": c("accent-hover"),
        "primary-fixed-dim": c("accent"),
        "surface-tint": c("accent"),
        "inverse-primary": c("accent"),
        "on-primary": c("on-accent"),
        "on-primary-container": c("on-accent"),
        "on-primary-fixed": c("on-accent"),
        "on-primary-fixed-variant": c("on-accent"),

        // Acento secundario (naranja quemado)
        "secondary": c("accent-2"),
        "secondary-container": c("accent-2"),
        "secondary-fixed": c("accent-2"),
        "secondary-fixed-dim": c("accent-2"),
        "on-secondary": c("on-accent-2"),
        "on-secondary-container": c("on-accent-2"),
        "on-secondary-fixed": c("on-accent-2"),
        "on-secondary-fixed-variant": c("on-accent-2"),

        // Superficies
        "background": c("bg"),
        "surface": c("bg"),
        "surface-dim": c("bg"),
        "surface-container-lowest": c("bg-lowest"),
        "surface-container-low": c("bg-low"),
        "surface-container": c("bg-1"),
        "surface-container-high": c("bg-2"),
        "surface-container-highest": c("bg-3"),
        "surface-variant": c("bg-3"),
        "surface-bright": c("bg-3"),

        // Texto y líneas
        "on-background": c("ink"),
        "on-surface": c("ink"),
        "inverse-surface": c("ink"),
        "inverse-on-surface": c("bg"),
        "on-surface-variant": c("ink-muted"),
        "outline": c("line-strong"),
        "outline-variant": c("line"),

        // Terciarios (neutros)
        "tertiary": c("ink-muted"),
        "tertiary-container": c("bg-3"),
        "tertiary-fixed": c("ink"),
        "tertiary-fixed-dim": c("ink-muted"),
        "on-tertiary": c("bg"),
        "on-tertiary-container": c("ink"),
        "on-tertiary-fixed": c("bg"),
        "on-tertiary-fixed-variant": c("bg-3"),

        // Error
        "error": c("error"),
        "error-container": c("error"),
        "on-error": c("bg"),
        "on-error-container": c("bg"),
      },
      // Bordes rectos; "full" queda para círculos (avatares, puntos)
      borderRadius: {
        "DEFAULT": "0px",
        "lg": "0px",
        "xl": "0px",
        "2xl": "0px",
        "full": "9999px",
      },
      spacing: {
        "gutter-mobile": "0.75rem",
        "margin": "3rem",
        "margin-mobile": "1.25rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
        "gutter": "1.25rem",
      },
      fontFamily: {
        "display-hero": ["Archivo", "sans-serif"],
        "display-hero-mobile": ["Archivo", "sans-serif"],
        "headline-lg": ["Archivo", "sans-serif"],
        "headline-lg-mobile": ["Archivo", "sans-serif"],
        "headline-md": ["Archivo", "sans-serif"],
        "headline-sm": ["Archivo", "sans-serif"],
        "title-md": ["Archivo", "sans-serif"],
        "body-lg": ["Archivo", "sans-serif"],
        "body-md": ["Archivo", "sans-serif"],
        "body-sm": ["Archivo", "sans-serif"],
        "label-lg": ["Space Mono", "monospace"],
        "label-md": ["Space Mono", "monospace"],
        "label-sm": ["Space Mono", "monospace"],
      },
      fontSize: {
        "display-hero": ["104px", { lineHeight: "0.88", letterSpacing: "-0.01em", fontWeight: "900" }],
        "display-hero-mobile": ["56px", { lineHeight: "0.92", letterSpacing: "-0.01em", fontWeight: "900" }],
        "headline-lg": ["64px", { lineHeight: "0.95", letterSpacing: "-0.005em", fontWeight: "900" }],
        "headline-lg-mobile": ["44px", { lineHeight: "0.95", fontWeight: "900" }],
        "headline-md": ["32px", { lineHeight: "1", fontWeight: "800" }],
        "headline-sm": ["24px", { lineHeight: "1.05", fontWeight: "800" }],
        "title-md": ["18px", { lineHeight: "26px", fontWeight: "600" }],
        "body-lg": ["17px", { lineHeight: "27px", fontWeight: "400" }],
        "body-md": ["15px", { lineHeight: "23px", fontWeight: "400" }],
        "body-sm": ["13px", { lineHeight: "19px", fontWeight: "400" }],
        "label-lg": ["13px", { lineHeight: "18px", letterSpacing: "0.06em", fontWeight: "700" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.08em", fontWeight: "700" }],
        "label-sm": ["11px", { lineHeight: "14px", letterSpacing: "0.12em", fontWeight: "700" }],
      },
    },
  },
};
