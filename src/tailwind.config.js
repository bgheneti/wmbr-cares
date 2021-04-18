module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' }
      },
      typography: (theme) => {
        return {
          DEFAULT: {
            css: {
              a: {
                textDecoration: "underline",
                "&:hover": {
                  color: "#fbbf24",
                },
              },
            },
          },
        }
      }
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
}
