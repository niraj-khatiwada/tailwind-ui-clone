import React from 'react'

import Hero from './(Hero)'
import Description from './(Description)'
import Navigator from './(Navigator)'
import TableOfContents from './(TableOfContents)'

function RootPage() {
  return (
    <div>
      <Hero />
      <Description />
      <Navigator />
      <TableOfContents />
    </div>
  )
}

export default RootPage
