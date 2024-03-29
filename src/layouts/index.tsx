import React, { Fragment, ReactNode } from 'react'
import Footer from 'components/footer/footer'
import s from '../scss/base.module.scss'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps): React.ReactElement => (
  <Fragment>
    <div className={s.content}>{children}</div>
    <Footer />
  </Fragment>
)

export default Layout
