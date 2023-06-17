/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Adventure Fun Tours`,
    description: `Tour Company located in Punta Cana, providing adventure for the family.`,
    keywords: `catamaran punta cana, punta cana tours, best excursions in punta cana, dune buggy punta cana, scuba doo punta cana, buggy tour punta cana, saona island from punta cana, catalina island punta cana`,
    author: `@karnes232`,
    siteUrl: `https://adventurefuntoursdr.com/`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        
        trackingIds: [
       
          "G-S2N6RLJNTK", 
        ],
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
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
    `gatsby-plugin-offline`,
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: ['/payment/*', '/payment','/thankyou/*', '/thankyou'],
      },
    }
  ],
}
