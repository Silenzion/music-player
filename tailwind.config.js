module.exports = {
  mode: "jit",

  content: ["./src/**/*.vue", "index.html"],

  theme: {
    screens: {
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1680px",
    },

    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
    },

    extend: {
      colors: {
        gray: {
          100: "#cecece",
          150: "#c8d0e7",
          200: "#efefef",
          250: "#e0e5ec",
          300: "#f2f2f2",
          350: "#a1a1a1",
          600: "#575F6B",
        },
      },

      borderRadius: {
        none: "0",
        sm: "5px",
        md: "16px",
        lg: "40px",
        full: "9999px",
        large: "24px",
      },
      opacity: {
        15: "0.15",
      },
      zIndex: {
        1: "1",
      },
      fontSize: {
        xs: [
          "12px",
          {
            lineHeight: "14px",
          },
        ],
        sm: [
          "16px",
          {
            lineHeight: "140%",
          },
        ],
        base: [
          "18px",
          {
            lineHeight: "21px",
          },
        ],
        lg: [
          "24px",
          {
            lineHeight: "140%",
          },
        ],
        xl: [
          "64px",
          {
            lineHeight: "75px",
          },
        ],
      },
    },

    spacing: {
      0: "0px",
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
      13: "13px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      22: "22px",
      24: "24px",
      26: "26px",
      28: "28px",
      30: "30px",
      32: "32px",
      34: "34px",
      36: "36px",
      38: "38px",
      40: "40px",
      42: "42px",
      44: "44px",
      46: "46px",
      48: "48px",
      50: "50px",
      55: "55px",
      60: "60px",
      70: "70px",
      80: "80px",
      90: "90px",
      100: "100px",
      120: "120px",
      140: "140px",
      156: "156px",
      170: "170px",
      240: "240px",
      250: "250px",
      300: "300px",
      475: "475px",
    },
  },
};
