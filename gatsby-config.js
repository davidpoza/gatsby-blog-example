/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    defaultTitle: 'Creatividad digital. Mi blog personal',
    titleTemplate: '%s - David Poza',
    defaultDescription: 'Me llamo David Poza Suárez y soy desarrollador web. Mi blog gira en torno a la creatividad digital.',
    defaultImage: '....',
    siteUrl: 'https://davidinformatico.com',
    footer: 'David Poza Suárez © 2021',
    author: 'David Poza Suárez',
    twitterUsername: '@enformatico',
  },
  plugins: [
    'gatsby-plugin-dark-mode',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
         name: 'src',
         path: `${__dirname}`
      }
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          modules: {
            exportLocalsConvention: 'camelCaseOnly'
          }
        }
      }
    },
    'gatsby-plugin-root-import',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-abbr',
          {
            resolve: 'gatsby-remark-embed-youtube',
            options: {
              width: 600,
              height: 400
            }
          },
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: '-120',
            }
          },
          'gatsby-remark-relative-images',
          'gatsby-remark-gifs',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800, // redimensionamos las que sean más grandes
              quality: 30,
              withWebp: true,
              showCaptions: true,
              markdownCaptions: true,
              linkImagesToOriginal: false,
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              showLineNumbers: false,
            },
          },
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                danger: {
                  classes: 'danger',
                  title: 'optional',
                },
                info: {
                  classes: 'info',
                  title: 'optional',
                },
                center: {
                  classes: 'center',
                  title: 'optional',
                },
                right: {
                  classes: 'floatRight',
                  title: 'optional',
                },
                left: {
                  classes: 'floatLeft',
                  title: 'optional',
                },
              },
            },
          },
        ]
      }
    }
  ],
}
