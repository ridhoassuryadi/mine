import { NextSeo } from 'next-seo'
import * as React from 'react'

import { ListDetailView, SiteLayout } from '~ui/_base/Layouts'
import { TilList } from '~ui/Til/TilList'
import routes from '~/config/routes'

function TilPage() {
  return (
    <NextSeo
      title={routes.writing.seo.title}
      description={routes.writing.seo.description}
      openGraph={routes.writing.seo.openGraph}
    />
  )
}

TilPage.getLayout = function getLayout(page) {
  return (
    <SiteLayout>
      <ListDetailView list={<TilList />} hasDetail={false} detail={page} />
    </SiteLayout>
  )
}

export default TilPage
