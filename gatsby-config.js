const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Optimax',
    description: 'Optimax is a global e-commerce company that is changing the world of eyewear in a very profound way.',
    contact: {
      phone: 'XXX XXX XXX',
      email: 'dev@glassesusa.com',
    },
    menuLinks: [
      {
        name: 'Вакансии',
        link: '/jobs',
      },
      {
        name: 'Команда',
        link: '/team',
      },
      {
        name: 'Блог',
        link: '/blog',
      },
      {
        name: 'Контакты',
        link: '/contacts',
      },
    ],
  },
  plugins: [
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-svg-sprite',
    'gatsby-plugin-typescript',
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['src/scss/'],
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        pages: path.join(__dirname, 'src/pages'),
        layouts: path.join(__dirname, 'src/layouts'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: guid || 'UA-XXX-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true, // defaults to false
        jsxPragma: 'React', // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.ts$|\.tsx$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
  ],
};
