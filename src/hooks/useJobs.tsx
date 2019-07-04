import {useStaticQuery, graphql} from 'gatsby';

import {MarkdownRemarkFrontmatterFilterInput} from 'types';

const useJobs = (): MarkdownRemarkFrontmatterFilterInput => {
    const {allMarkdownRemark} = useStaticQuery(
        graphql`
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
        `,
    );

    return allMarkdownRemark.edges;
};

export default useJobs;
