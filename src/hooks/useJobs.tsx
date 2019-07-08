import {useStaticQuery, graphql} from 'gatsby';

import {SiteSiteMetadataFilterInput} from 'types';

const useJobs = (): SiteSiteMetadataFilterInput => {
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
                            id
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
