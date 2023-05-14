/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "Unknown",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo-fun.png",
        name: `Adventure Fun Tours RD`,
        short_name: `Adventure Fun`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#1f2937`,
        display: `standalone`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
}
