import { NextSeo } from 'next-seo'
import * as React from 'react'

import routes from '~/config/routes'
import { ListDetailView, SiteLayout } from '~ui/_base/Layouts'
import { AppList } from '~ui/App/AppList'

function CraftPage() {
  return (
    <>
      <NextSeo
        title={routes.app.seo.title}
        description={routes.app.seo.description}
        openGraph={routes.app.seo.openGraph}
      />
    </>
  )
}

CraftPage.getLayout = function getLayout(page) {
  return (
    <SiteLayout>
      <ListDetailView list={null} hasDetail={false} detail={page} />
    </SiteLayout>
  )
}

export default CraftPage
