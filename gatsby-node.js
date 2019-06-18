const path = require('path');

// Create pages from markdown files
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          query {
            jobs: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/jobs/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                    date(formatString: "DD MMMM YYYY")
                  }
                  excerpt
                }
              }
            }
            team: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/team/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                    date(formatString: "DD MMMM YYYY")
                  }
                  excerpt
                }
              }
            }
            blog: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/blog/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                    date(formatString: "DD MMMM YYYY")
                  }
                  excerpt
                }
              }
            }
          }
        `,
      ).then((result) => {
        // result.data.jobs.edges.forEach(({ node }) => {
        //   const component = path.resolve('src/templates/job.js');
        //   createPage({
        //     path: node.frontmatter.path,
        //     component,
        //     context: {
        //       id: node.id,
        //     },
        //   });
        // });
        // result.data.team.edges.forEach(({ node }) => {
        //   const component = path.resolve('src/templates/team.js');
        //   createPage({
        //     path: node.frontmatter.path,
        //     component,
        //     context: {
        //       id: node.id,
        //     },
        //   });
        // });
        // result.data.blog.edges.forEach(({ node }) => {
        //   const component = path.resolve('src/templates/post.js');
        //   createPage({
        //     path: node.frontmatter.path,
        //     component,
        //     context: {
        //       id: node.id,
        //     },
        //   });
        // });
        resolve();
      }),
    );
  });
};
