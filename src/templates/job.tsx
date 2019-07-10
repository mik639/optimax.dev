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
import SubTitle from 'components/subtitle/subtitle';
import Button from 'components/button/button';
import {MarkdownRemark} from 'types';

import s from './job.module.scss';

const Job = ({data}: MarkdownRemark): ReactNode => {
    const {
        id,
        html,
        frontmatter: {title, path, address},
    } = data.markdownRemark;
    const jobs = useJobs();

    return (
        <Layout>
            <SEO title={title} />
            <WrapHeader />
            <Background name="job">
                <Title isWhite>
                    <div className={s.wrapTitle}>{title}</div>
                </Title>
                <SubTitle isWhite>
                    <div className={s.wrapSubtitle}>
                        <div className={s.wrapMarker}>
                            <BaseIcon width="8px" height="12px" name="marker" />
                        </div>
                        <span className={s.wrapAddress}>{address}</span>
                    </div>
                </SubTitle>
            </Background>
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

            <div className={s.wrapJobs}>
                {jobs.map(
                    ({node: {id: itemId, frontmatter: item}}: ItemType): ReactNode => {
                        if (itemId === id) return null;

                        return (
                            <Link key={itemId} to={item.path} className={s.wrap}>
                                <div className={s.body}>
                                    <span className={s.jobTitle}>{item.title}</span>
                                    <span className={s.jobAddress}>{item.address}</span>
                                </div>
                                <Button className={s.btn}>
                                    <span className={s.btnText}>View Job</span>
                                </Button>
                            </Link>
                        );
                    },
                )}
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
                address
            }
            html
        }
    }
`;

export default Job;
