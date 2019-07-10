import React, {ReactNode} from 'react';
import {graphql, useStaticQuery} from 'gatsby';

import WrapHeader from 'components/wrapHeader/wrapHeader';
import Background from 'components/background/background';
import Layout from 'layouts/index';
import LogoProject from 'components/projects/logoProject/logoProject';
import Align from 'components/projects/align/align';
import Content from 'components/projects/content/content';

const Ottica = (): ReactNode => {
    const {
        allMarkdownRemark: {edges},
    } = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(
                    filter: {fileAbsolutePath: {regex: "/ottica/"}}
                    sort: {fields: [frontmatter___date], order: DESC}
                ) {
                    edges {
                        node {
                            excerpt
                            id
                            frontmatter {
                                name
                                link
                            }
                            html
                        }
                    }
                }
            }
        `,
    );

    const {
        html,
        frontmatter: {name, link},
    } = edges[0].node;

    return (
        <Layout>
            <WrapHeader />
            <Background name={name} />
            <Align>
                <LogoProject link={link} name={name} />
                <Content html={html} name={name} />
            </Align>
        </Layout>
    );
};

export default Ottica;
