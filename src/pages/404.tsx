import React, {ReactNode} from 'react';

import Layout from 'layouts/index';

class NotFoundPage extends React.Component {
    render(): ReactNode {
        return (
            <Layout>
                <h1>Not Found</h1>
                <p>You just hit a page that doesn&#39;t exist...</p>
            </Layout>
        );
    }
}

export default NotFoundPage;
