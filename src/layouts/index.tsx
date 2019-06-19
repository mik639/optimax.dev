import React, {FunctionComponent, ReactNode} from 'react';

import '../scss/base.scss';

interface LayoutProps {
    children: ReactNode;
}

const Layout: FunctionComponent = ({children}: LayoutProps): ReactNode => (
    <React.Fragment>{children}</React.Fragment>
);

export default Layout;
