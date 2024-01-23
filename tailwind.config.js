// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx}"],
//   mode: "jit",
//   theme: {
//     extend: {
//       colors: {
//         primary: "#050816",
//         secondary: "#aaa6c3",
//         tertiary: "#151030",
//         "black-100": "#100d25",
//         "black-200": "#090325",
//         "white-100": "#f3f3f3",
//       },
//       boxShadow: {
//         card: "0px 35px 120px -15px #211e35",
//       },
//       screens: {
//         xs: "450px",
//       },
//       backgroundImage: {
//         "hero-pattern": "url('/src/assets/herobg.png')",
//         avatar: "url(/src/assets/heroAvatar.png)",
//       },
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "avatar": "url(/src/assets/ab.png)",
        "abstract":"url('/src/assets/abstract.jpg')",
        "avatar1":"url('/src/assets/avatar1.png')"
        // avatar: "#100d25",
      },
    },
  },
  plugins: [],
}


