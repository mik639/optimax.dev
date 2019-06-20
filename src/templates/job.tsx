import React from 'react';
import {graphql} from 'gatsby';
import MediaQuery from 'react-responsive';

import SEO from 'components/SEO/SEO';
import Layout from 'layouts/index';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import JobContent from 'components/jobs/jobContent/jobContent';
import JobApply from 'components/jobs/jobApply/jobApply';
import JobShare from 'components/jobs/jobShare/jobShare';

import s from './job.module.scss';

const Job = ({data}) => {
    const {title} = data.markdownRemark.frontmatter;
    const {html} = data.markdownRemark;
    return (
        <Layout>
            <SEO title={title} />
            <Header />

            <div className={s.container}>
                <div className={s.content}>
                    <h1 className={s.title}>{title}</h1>
                    <h2 className={s.subtitle}>Job Description</h2>
                    <JobContent>{html}</JobContent>
                </div>
                <div className={s.sidebar}>
                    <JobApply />
                    <JobShare />
                </div>
            </div>

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
