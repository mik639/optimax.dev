import React, {Component, ReactNode} from 'react';
import {StaticQuery, graphql} from 'gatsby';

import Title from 'components/title/title';
import Subtitle from 'components/subtitle/subtitle';
import JoinUsItem from 'components/home/joinUsItem/joinUsItem';

import s from './joinUs.module.scss';

interface ItemType {
    title: string;
    address: string;
    text: string;
}

const JoinUs = ({data}) => {
    const jobs = data.allMarkdownRemark.edges;
    console.log('jobs: ', jobs);
    return (
        <div className={s.wrap}>
            <div className={s.wrapTitles}>
                <Title>Join Us</Title>
                <Subtitle>Current openings</Subtitle>
            </div>
            <div className={s.wrapItems}>
                {jobs.map(
                    (item: ItemType): ReactNode => (
                        <JoinUsItem key={item.node.frontmatter.path} item={item.node.frontmatter} />
                    ),
                )}
            </div>
        </div>
    );
};

export default props => (
    <StaticQuery
        query={graphql`
            query {
                allMarkdownRemark(
                    filter: {fileAbsolutePath: {regex: "/jobs/"}}
                    sort: {fields: [frontmatter___date], order: DESC}
                ) {
                    edges {
                        node {
                            excerpt
                            frontmatter {
                                title
                                address
                                date
                                path
                            }
                        }
                    }
                }
            }
        `}
        render={data => <JoinUs data={data} {...props} />}
    />
);
