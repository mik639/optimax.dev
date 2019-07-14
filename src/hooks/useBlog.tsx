import {graphql, useStaticQuery} from 'gatsby';

const useBlogPosts = (): {} => {
    const {allMarkdownRemark} = useStaticQuery(
        graphql`
            query BlogQuery {
                allMarkdownRemark(
                    filter: {fileAbsolutePath: {regex: "/blog/"}}
                    sort: {fields: [frontmatter___date], order: DESC}
                ) {
                    edges {
                        node {
                            excerpt
                            id
                            frontmatter {
                                title
                                path
                                image
                                author
                                avatar
                                shortDescription
                                tags
                            }
                            html
                        }
                    }
                }
            }
        `,
    );
    return allMarkdownRemark.edges;
};

export default useBlogPosts;
