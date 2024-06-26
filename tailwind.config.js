/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2.5rem',
      },
    },
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
      },
      padding: {
        'full': '100%',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "autumn", "cupcake", "dark", "lemonade"],
  },
};
