import React, {ReactNode} from 'react';
import {graphql} from 'gatsby';

import SEO from 'components/SEO/SEO';
import Layout from 'layouts/index';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';

const Jobs = (): ReactNode => {
    // const jobs = props.data.allMarkdownRemark.edges;
    return (
        <Layout>
            <SEO title="Jobs" />
            <Header />

            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query JobsQuery {
        allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/jobs/"}}
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

export default Jobs;
