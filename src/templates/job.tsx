import React, {ReactNode} from 'react';
import {graphql} from 'gatsby';

import SEO from 'components/SEO/SEO';
import Layout from 'layouts/index';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import JobContent from 'components/job/jobContent/jobContent';
import JobApply from 'components/job/jobApply/jobApply';
import JobShare from 'components/job/jobShare/jobShare';
import {MarkdownRemark} from 'src/types.ts';

import s from './job.module.scss';

const Job = ({data}: MarkdownRemark): ReactNode => {
    const {title, path} = data.markdownRemark.frontmatter;
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
                    <JobShare url={path} />
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
