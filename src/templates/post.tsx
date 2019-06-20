import React from 'react';
import {graphql} from 'gatsby';

import SEO from 'components/SEO/SEO';
import Layout from 'layouts/index';

const Post = ({data}) => {
    const {title} = data.markdownRemark.frontmatter;
    const {html} = data.markdownRemark;
    return (
        <Layout bodyClass="page-service">
            <SEO title={title} />
            <div>Post!</div>
        </Layout>
    );
};

export const query = graphql`
    query($id: String!) {
        markdownRemark(id: {eq: $id}) {
            frontmatter {
                title
                path
            }
            html
        }
    }
`;

export default Post;
