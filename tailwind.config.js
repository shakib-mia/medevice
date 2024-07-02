/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      serif: ['"DM Serif Text", serif'],

      sans: ['"DM Sans", sans-serif'],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1000px",
        xl: "1260px",
      },
    },
    extend: {
      fontSize: {
        64: "64px",
        24: "24px",
        18: "18px",
        56: "56px",
        48: "48px",
        40: "40px",
        32: "32px",
        20: "20px",
        16: "16px",
        14: "14px",
        12: "12px",
      },
      colors: {
        black: "#040404",
        white: "#FFFFFF",
        light: "#F8F9FE",
        accent: {
          DEFAULT: "#5EB1FF",
          15: "#5EB1FF26",
        },
      },
    },
  },
  plugins: [],
};
