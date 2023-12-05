/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    transitionTimingFunction: {
      trc: "all 0.5s cubic-bezier(0,1,0,1)",
      trc2: "all 0.5s cubic-bezier(1,0,1,0)",
    },
    extend: {
      animation: {
        wleft: "wxleft 25s linear infinite",
        wright: "wxright 25s linear infinite",
        loader: "loader 2s linear infinite",
      },
      keyframes: {
        wxleft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-90%)" },
        },
        wxright: {
          "0%": { transform: "translateX(-90%)" },
          "100%": { transform: "translateX(0%)" },
        },
        loader: {
          "0%": { height: "83px" },
          "50%": { height: "28px" },
          "100%": { height: "83px" }
        }
      },
      colors: {
        primary: "#111211",
        silv: "#BDBDBD",
        pointGray: "#464C5D",
        coolYellow: "#FFB902",
        normBlack: "#080000",
        errorRed: "#FA5D29",
        contactBlack: "#0B0B0B"
      },
      letterSpacing: {
        log: "0.15em;",
      },
      fontFamily: {
        PostNoBills: "post_no_bills_colombosemibold, sans-serif",
        IBM: "IBM Plex Sans, sans-serif",
        Manrope: "Manrope, sans-serif",
        Roboto: "Roboto, sans-serif",
        Montserrat: "Montserrat, sans-serif",
      },
      border: {
        lol: "1px solid #000000",
      },
      fontSize: {
        adapt: "calc(10px + 6 * ((100vw - 320px) / (1440 - 320)))",
        adaptEN: "calc(12px + 8 * ((100vw - 320px) / (1440 - 320)))",
        adaptBurger: "calc(20px + 15 * ((100vw - 320px) / (1440 - 320)))",
        adaptBurgerEN: "calc(30px + 6 * ((100vw - 320px) / (1440 - 320)))",
        maintext: "calc(48px + 16 * ((100vw - 390px) / (1920 - 390)))",
      },
    },
    screens: {
      xxs: { max: "320px" },
      xs: "480px",
      xss: { max: "480px" },
      sss: { max: "560px" },
      ss: "620px",
      sm: "768px",
      smm: { max: "768px" },
      md: "1110px",
      mdd: { max: "1110px" },
      lg: "1200px",
      xl: "1700px",
      xll: { max: "1280px" },
      xlll: { max: "1440px" },
      xllr: { min: "1440px" },


    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-opentype"),
  ],
};
