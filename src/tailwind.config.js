module.exports = {
  purge: {
    content: ["./src/**/*.liquid", "./src/**/*.md"],
    options: {
      safelist: []
    },
  },
  theme: {
    extend: {
      screens: {
        "dark-mode": {"raw": "(prefers-color-scheme: dark)"},
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
