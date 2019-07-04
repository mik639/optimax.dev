import React, {ReactNode} from 'react';
import {graphql} from 'gatsby';

import SEO from 'components/SEO/SEO';
import WrapHeader from 'components/wrapHeader/wrapHeader';
import Background from 'components/background/background';
import Layout from 'layouts/index';
import JobsContent from 'components/jobs/jobsContent/jobsContent';
import ButtonBack from 'components/buttonBack/buttonBack';

const Jobs = (props): ReactNode => {
    // const jobs = props.data.allMarkdownRemark.edges;
    console.log('props', props);
    return (
        <Layout>
            <SEO title="Jobs" />
            <WrapHeader />
            <Background name="job" />
            <ButtonBack url={props.location.state.prevPath} />
            <JobsContent />
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
