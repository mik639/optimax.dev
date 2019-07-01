import {useStaticQuery, graphql} from 'gatsby';

const useSiteMetadata = () => {
    const {site} = useStaticQuery(
        graphql`
            query SiteMetaData {
                site {
                    siteMetadata {
                        title
                        menuLinks {
                            name
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
