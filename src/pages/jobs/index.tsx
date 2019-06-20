import React from 'react';
import {Link, graphql} from 'gatsby';
import MediaQuery from 'react-responsive';

import SEO from 'components/SEO/SEO';
import Layout from 'layouts/index';
import Header from 'components/header/header';
import HeaderMobile from 'components/headerMobile/headerMobile';
import Footer from 'components/footer/footer';
import JobContent from 'components/jobs/jobContent/jobContent';

const Jobs = props => {
    const jobs = props.data.allMarkdownRemark.edges;
    return (
        <Layout>
            <SEO title="Jobs" />
            <MediaQuery query="(min-device-width: 1024px)">
                <Header />
            </MediaQuery>

            <MediaQuery query="(max-device-width: 1024px)">
                <HeaderMobile />
            </MediaQuery>

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
