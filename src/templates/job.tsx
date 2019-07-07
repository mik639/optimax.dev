import React, {ReactNode} from 'react';
import {graphql, Link} from 'gatsby';

import SEO from 'components/SEO/SEO';
import Layout from 'layouts/index';
import useJobs from 'hooks/useJobs';
import BaseIcon from 'components/baseIcon/baseIcon';
import WrapHeader from 'components/wrapHeader/wrapHeader';
import Background from 'components/background/background';
import JobContent from 'components/job/jobContent/jobContent';
import JobApply from 'components/job/jobApply/jobApply';
import JobShare from 'components/job/jobShare/jobShare';
import Title from 'components/title/title';
import {MarkdownRemark} from 'types';

import s from './job.module.scss';

const Job = ({data}: MarkdownRemark): ReactNode => {
    const {title, path} = data.markdownRemark.frontmatter;
    const {html} = data.markdownRemark;
    const jobs = useJobs();
    return (
        <Layout>
            <SEO title={title} />
            <WrapHeader />
            <Background name="job">
                <Title>Softwre Engineer</Title>
            </Background>
            <div className={s.container}>
                <div className={s.content}>
                    <h1 className={s.title}>{title}</h1>
                    <h2 className={s.subtitle}>Job Description</h2>
                    <JobContent>{html}</JobContent>
                    {jobs.map(
                        (item: ItemType): ReactNode => (
                            <Link to={item.path} className={s.wrap}>
                                <div className={s.content}>
                                    <span className={s.title}>{item.title}</span>
                                    <span className={s.address}>{item.address}</span>
                                    <span className={s.text}>{item.text}</span>
                                </div>
                                <div className={s.wrapArrow}>
                                    <BaseIcon name="arrow" />
                                </div>
                            </Link>
                        ),
                    )}
                </div>
                <div className={s.sidebar}>
                    <JobApply />
                    <JobShare url={path} />
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query($id: String!) {
        markdownRemark(id: {eq: $id}) {
            id
            frontmatter {
                title
                path
            }
            html
        }
    }
`;

export default Job;
