// Configures Tailwind content scanning and the VoiceForge design tokens.
export default {
  // "class" strategy: dark mode activates when <html class="dark"> is present.
  // ThemeContext.jsx manages adding/removing that class.
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // ── Light mode tokens (unchanged) ───────────────────────────────
        ink:   "#16201d",
        moss:  "#3f5f4d",
        mint:  "#c9ead7",
        coral: "#f26f63",
        amber: "#f3bc51",
        cloud: "#f6f8f5",

        // ── Dark mode surface tokens ─────────────────────────────────────
        // Use these as: dark:bg-night, dark:bg-surface, etc.
        night:   "#0f172a",   // page background
        surface: "#1e293b",   // card / panel background
        border:  "#334155",   // subtle border
        muted:   "#94a3b8",   // secondary text

        // ── Dark mode accent (bright green, visible on dark bg) ──────────
        glow: "#22c55e",
      },
      boxShadow: {
        soft:     "0 18px 60px rgba(22, 32, 29, 0.12)",
        "soft-dk": "0 18px 60px rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
};