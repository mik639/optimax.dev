import React, {ReactNode} from 'react';
import {StaticQuery, graphql} from 'gatsby';

import Title from 'components/title/title';
import Subtitle from 'components/subtitle/subtitle';
import JoinUsItem from 'components/home/joinUsItem/joinUsItem';
import {MarkdownRemarkConnection} from 'src/types.ts';

import s from './joinUs.module.scss';

interface ItemType {
    title: string;
    address: string;
    text: string;
}

const JoinUs = ({data}: MarkdownRemarkConnection): ReactNode => {
    const jobs = data.allMarkdownRemark.edges;
    return (
        <div className={s.wrap}>
            <div className={s.wrapTitles}>
                <Title>Join Us</Title>
                <Subtitle>Current openings</Subtitle>
            </div>
            {jobs.map(
                (item: ItemType): ReactNode => (
                    <JoinUsItem key={item.node.frontmatter.path} item={item.node.frontmatter} />
                ),
            )}
        </div>
    );
};

export default (): ReactNode => (
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
        render={(data: MarkdownRemarkConnection): ReactNode => <JoinUs data={data} />}
    />
);
