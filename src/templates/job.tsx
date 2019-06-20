import React from 'react';
import {graphql} from 'gatsby';
import MediaQuery from 'react-responsive';

import SEO from 'components/SEO/SEO';
import Layout from 'layouts/index';
import Header from 'components/header/header';
import HeaderMobile from 'components/headerMobile/headerMobile';
import Footer from 'components/footer/footer';
import JobContent from 'components/jobs/jobContent/jobContent';

const Job = ({data}) => {
    const {title} = data.markdownRemark.frontmatter;
    const {html} = data.markdownRemark;
    return (
        <Layout>
            <SEO title={title} />
            <MediaQuery query="(min-device-width: 1024px)">
                <Header />
            </MediaQuery>

            <JobContent>{html}</JobContent>

            <MediaQuery query="(max-device-width: 1024px)">
                <HeaderMobile />
            </MediaQuery>

            <Footer />
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

export default Job;
