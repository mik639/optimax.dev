import React from 'react';
import {Link, graphql} from 'gatsby';

import SEO from 'components/SEO/SEO';
import Layout from 'layouts/index';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import JobContent from 'components/jobs/jobContent/jobContent';

const Jobs = props => {
    const jobs = props.data.allMarkdownRemark.edges;
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
