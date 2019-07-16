import {graphql, useStaticQuery} from 'gatsby';

import {MarkdownRemarkEdge} from 'types';

const useBlogPosts = (): MarkdownRemarkEdge[] => {
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
