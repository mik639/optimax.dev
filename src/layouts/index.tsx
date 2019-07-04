import React, {Fragment, FunctionComponent, ReactNode} from 'react';
import Footer from 'components/footer/footer';
import s from '../scss/base.module.scss';

interface LayoutProps {
    children: ReactNode;
}

const Layout: FunctionComponent = ({children}: LayoutProps): ReactNode => (
    <Fragment>
        <div className={s.content}>{children}</div>
        <Footer />
    </Fragment>
);

export default Layout;
