const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
  pathPrefix: '/optimaxdev',
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
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
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
  ],
};
