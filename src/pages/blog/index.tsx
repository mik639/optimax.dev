import React from 'react';
import {Link, graphql} from 'gatsby';
// import SEO from '../../components/SEO';

import Layout from 'layouts/index';

const Blog = props => {
    const posts = props.data.allMarkdownRemark.edges;
    return (
        <Layout bodyClass="page-blog">
            {/* <SEO title="Вакансии" /> */}
            <div className="intro">Blog!</div>
        </Layout>
    );
};

export const query = graphql`
    query BlogQuery {
        allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/blog/"}}
            sort: {fields: [frontmatter___date], order: DESC}
        ) {
            edges {
                node {
                    excerpt
                    frontmatter {
                        title
                        path
                    }
                }
            }
        }
    }
`;

export default Blog;
