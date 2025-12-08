/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/**/*.{html,js}", "./js/**/*.js", "./css/**/*.css"],
  theme: {
    extend: {
      fontFamily: {
        display: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"San Francisco"',
          '"Segoe UI"',
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        "brand-orange": "#ff9500",
        "brand-blue": "#0a84ff",
        "brand-ink": "#0b132b",
      },
      boxShadow: {
        "brand-glow": "0 18px 50px rgba(255, 102, 0, 0.25)",
      },
    },
  },
  safelist: [
    "relative",
    "w-full",
    "rounded-2xl",
    "bg-white/90",
    "p-5",
    "text-left",
    "text-brand-ink",
    "font-semibold",
    "shadow-lg",
    "shadow-black/10",
    "ring-1",
    "ring-white/15",
    "backdrop-blur",
    "transition",
    "duration-200",
    "hover:-translate-y-1",
    "hover:shadow-2xl",
    "hover:ring-brand-blue/50",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-brand-blue/40",
    "focus:ring-offset-2",
    "focus:ring-offset-slate-100",
  ],
  plugins: [],
};
