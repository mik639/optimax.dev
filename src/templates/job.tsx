import React from 'react';
import {graphql} from 'gatsby';

import SEO from 'components/SEO/SEO';
import Layout from 'layouts/index';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import JobContent from 'components/jobs/jobContent/jobContent';

const Job = ({data}) => {
    const {title} = data.markdownRemark.frontmatter;
    const {html} = data.markdownRemark;
    return (
        <Layout>
            <SEO title={title} />

            <Header />

            <JobContent>{html}</JobContent>

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
