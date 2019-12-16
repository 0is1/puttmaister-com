const languages = require("./src/data/languages");

module.exports = {
  siteMetadata: {
    title: `Putt Maister`,
    siteUrl: "https://puttmaister.com",
    menuLinks: [
      {
        name: "",
        link: ""
      }
    ],
    languages
  },
  plugins: [
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
        sourceMap: true,
        autoLabel: process.env.NODE_ENV !== "production",
        labelFormat: "[local]",
        cssPropOptimization: true
      }
    },
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: "./src", // <- will be used as a root dir
        aliases: {
          components: "./components", // <- will become ./src/components
          layouts: "./layouts", // <- will become ./src/layotus
          helpers: "./helpers", // <- will become ./src/helpers
          data: "./data", // <- will become ./src/data
          constants: "./constants", // <- will become ./src/constants
          static: {
            root: "./public", // <- will used as this alias' root dir
            alias: "./static" // <- will become ./public/static
          }
        }
      }
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyForNull: "en",
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        prefixDefault: true
      }
    },
    `gatsby-plugin-flow`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [`IntersectionObserver`]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-124877413-3"
      }
    }
  ]
};
