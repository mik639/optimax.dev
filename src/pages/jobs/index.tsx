import React, { ReactNode } from 'react'

import JoinUs from 'components/joinUs/joinUs'
import SEO from 'components/SEO/SEO'
import WrapHeader from 'components/wrapHeader/wrapHeader'
import Background from 'components/background/background'
import Layout from 'layouts/index'

const Jobs = (): ReactNode => {
  return (
    <Layout>
      <SEO title="Jobs" />
      <WrapHeader />
      <Background name="job" />
      <JoinUs />
    </Layout>
  )
}

export default Jobs
