/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-texture": "url(' /src/Assets/backgrounds/homeBackground.png')",
        "header-texture": "url(' /src/Assets/backgrounds/chopping_board.png')",
        "banner-texture": "url(' /src/Assets/backgrounds/banner_textile.png')",
        "portrait-texture": "url(' /src/Assets/backgrounds/Ellipse 10.png')",
        "subTitle-texture": "url(' /src/Assets/backgrounds/Ellipse 21.png')",
        "cat-nav-texture":
          "url(' /src/Assets/backgrounds/cat_nav_texture.png')",
        "post-header-texture": "url(' /src/Assets/backgrounds/spices.jpg')",
      },
      backgroundSize: {
        "95%": "95%",
        "100%": "100%",
      },
    },
  },
  plugins: [],
};
