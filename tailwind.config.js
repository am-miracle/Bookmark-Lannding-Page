// // postcss.config.js
// const purgecss = require("@fullhuman/postcss-purgecss")({
//   // Here you should add the files to check for the classes you've used. This is how it looks for mine, I check all my components and pages.
//   content: ["./public/index.html", "./public/style.css"],

//   // Include any special characters you're using in this regular expression
//   defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
// });

module.exports = {
  purge: {
    content: ["./public/html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "soft-blue": "hsl(231, 69%, 60%)",
        "soft-red": "hsl(0, 94%, 66%)",
        "grayish-blue": "hsl(229, 8%, 60%)",
        "very-dark-blue": "hsl(229, 31%, 21%)",
      },
    },
    fontWeight: {
      normal: 400,
      medium: 500,
    },
    fontFamily: {
      "Rubik": ["Rubik, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",

      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require("tailwindcss"),
    // require("autoprefixer"),
    // ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ],
}
