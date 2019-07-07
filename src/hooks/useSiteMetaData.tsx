import {useStaticQuery, graphql} from 'gatsby';

import {SiteSiteMetadataFilterInput} from 'types';

const useSiteMetadata = (): SiteSiteMetadataFilterInput => {
    const {site} = useStaticQuery(
        graphql`
            query SiteMetaData {
                site {
                    siteMetadata {
                        title
                        menuLinks {
                            name
                            icon
                            link
                        }
                        contact {
                            email
                        }
                    }
                }
            }
        `,
    );
    return site.siteMetadata;
};

export default useSiteMetadata;
