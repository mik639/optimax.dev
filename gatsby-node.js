const path = require('path');

exports.onCreateWebpackConfig = ({actions}) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                components: path.resolve(__dirname, 'src/components'),
                pages: path.resolve(__dirname, 'src/pages'),
                layouts: path.resolve(__dirname, 'src/layouts'),
                hooks: path.resolve(__dirname, 'src/hooks'),
                scss: path.resolve(__dirname, 'src/scss'),
                data: path.resolve(__dirname, 'src/data'),
                images: path.resolve(__dirname, 'src/images'),
                static: path.resolve(__dirname, 'static'),
            },
        },
    });
};

// Create pages from markdown files
exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;
    return new Promise((resolve, reject) => {
        resolve(
            graphql(
                `
                    query {
                        jobs: allMarkdownRemark(
                            filter: {fileAbsolutePath: {regex: "/jobs/"}}
                            sort: {fields: [frontmatter___date], order: DESC}
                        ) {
                            edges {
                                node {
                                    id
                                    frontmatter {
                                        path
                                        title
                                        address
                                        date(formatString: "DD MMMM YYYY")
                                    }
                                    excerpt
                                }
                            }
                        }
                        team: allMarkdownRemark(
                            filter: {fileAbsolutePath: {regex: "/team/"}}
                            sort: {fields: [frontmatter___date], order: DESC}
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
                            filter: {fileAbsolutePath: {regex: "/blog/"}}
                            sort: {fields: [frontmatter___date], order: DESC}
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
            ).then(result => {
                result.data.jobs.edges.forEach(({node}) => {
                    const component = path.resolve('src/templates/job.tsx');
                    createPage({
                        path: node.frontmatter.path,
                        component,
                        context: {
                            id: node.id,
                        },
                    });
                });
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
                result.data.blog.edges.forEach(({node}) => {
                    const component = path.resolve('src/templates/post.tsx');
                    createPage({
                        path: node.frontmatter.path,
                        component,
                        context: {
                            id: node.id,
                        },
                    });
                });
                resolve();
            }),
        );
    });
};
