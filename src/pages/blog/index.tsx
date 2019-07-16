import React, {ReactNode} from 'react';

import SEO from 'components/SEO/SEO';
import WrapHeader from 'components/wrapHeader/wrapHeader';
import Background from 'components/background/background';
import Layout from 'layouts/index';
import BlogWrapper from 'components/blog/blogWrapper/blogWrapper';

const Blog = (): ReactNode => {
    return (
        <Layout>
            <SEO title="Blog" />
            <WrapHeader />
            <Background name="job" />
            <BlogWrapper />
        </Layout>
    );
};

export default Blog;
