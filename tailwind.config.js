/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    fontSize: {
      "7px": "7px",
      "13px": "13px",
    },
    extend: {
      colors: {
        "background": "#151718",
        "background-chat": "#232526",
        "button": "#232728",
        "blue-button": "#2F69FE",
        "rose": "#FF9BF6",
        "rosedark": "#FF44ED",
        "border": "#2C2F30",
      },
      spacing: {
        "2px": "2px",
      },
      maxWidth: {
        '281px': '281px',
      },
      minWidth: {
        '302px': '302px',
        '690px': '690px',
        '281px': '281px',
      },
      translate: {
        '50%': '50%'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

