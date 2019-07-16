import React from 'react';
import Helmet from 'react-helmet';

import favicon from 'static/favicon.png';
import useSiteMetadata from 'hooks/useSiteMetaData';

interface SEOProps {
    title: string;
    lang?: string;
    meta?: string[];
    keywords?: string[];
}

const SEO: React.SFC<SEOProps> = (props: SEOProps): React.ReactElement => {
    const siteMetadata = useSiteMetadata();

    const title = props.title || siteMetadata.title;

    return (
        <Helmet
            htmlAttributes={{
                lang: 'en',
            }}
            title={title}
            titleTemplate={`%s - ${siteMetadata.title}`}
            link={[{rel: 'shortcut icon', type: 'image/png', href: `${favicon}`}]}
        />
    );
};

SEO.defaultProps = {
    lang: 'en',
    meta: [],
    keywords: [],
};

export default SEO;
