import React from 'react'

import Hero from './(Hero)'
import Description from './(Description)'
import Navigator from './(Navigator)'
import TableOfContents from './(TableOfContents)'
import TestimonialBanner from '@/ui/TestimonialBanner'
import TestimonialUser1 from '@/assets/images/testimonial-user-1.png'
import TestimonialUser2 from '@/assets/images/testimonial-user-2.png'
import ScreenCasts from './(ScreenCasts)'
import Resources from './(Resources)'
import Sample from './(Sample)'
import Pricing from './(Pricing)'
import Testimonials from './(Testimonials)'
import Author from './(Author)'
import Copyright from './(Copyright)'

function RootPage() {
  return (
    <div>
      <Hero />
      <Description />
      <Navigator />
      <TableOfContents />
      <TestimonialBanner
        text="“I didn’t know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!”"
        rating={5}
        avatarProps={{
          name: 'Tommy Stroman',
          description: 'Front-end developer',
          imageProps: { src: TestimonialUser1.src },
        }}
      />
      <ScreenCasts />
      <TestimonialBanner
        text="“I’ve tried to create my own icons in the past but quickly got frustrated and gave up. Now I sell my own custom icon sets online.”"
        rating={5}
        avatarProps={{
          name: 'Gerardo Stark',
          description: 'Creator of Pandemicons',
          imageProps: { src: TestimonialUser2.src },
        }}
      />
      <Resources />
      <Sample />
      <Pricing />
      <Testimonials />
      <Author />
      <Copyright />
    </div>
  )
}

export default RootPage
