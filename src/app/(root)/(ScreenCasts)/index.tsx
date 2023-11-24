import React from 'react'

import styles from './styles.module.css'
import Module from '@/ui/Module'
import Content from './Content'
import { mergeClasses } from '@/utils/tailwind'
import ContentImage1SVG from '@/assets/images/content1.svg'
import ContentImage2SVG from '@/assets/images/content2.svg'
import ContentImage3SVG from '@/assets/images/content3.svg'
import ContentImage4SVG from '@/assets/images/content4.svg'

function ScreenCasts() {
  return (
    <>
      <div id="screencasts" />
      <div className={styles.container}>
        <div className={styles.content}>
          <Module
            pillProps={{ text: 'Screencasts', prefixText: '02' }}
            title=" Over an hour of high quality, step-by-step video content to sharpen your icon design workflow."
            description="Learn how to design your very first icons in a series of screencasts that will teach you everything you need to know to go from beginner to pro in just over an hour."
          />
        </div>
        <div className={mergeClasses([styles.contentContainer, 'mt-16'])}>
          <Content
            bannerImage={<ContentImage1SVG />}
            title={'Getting started with Figma'}
            description={
              'Get familiar with the Figma UI, the different tools it offers, and the most important features.'
            }
            time="16:54"
          />
          <Content
            bannerImage={<ContentImage2SVG />}
            title={'Setting up your artboard'}
            description={
              'Learn how to create a new artboard and configure your grid and rulers for designing icons.'
            }
            time="09:12"
          />
          <Content
            bannerImage={<ContentImage3SVG />}
            title={'Designing your first icon'}
            description={
              'Using basic shapes and boolean operations, learn how to design your own notification icon from scratch.'
            }
            time="23:25"
          />
          <Content
            bannerImage={<ContentImage4SVG />}
            title={'Advanced design techniques'}
            description={
              'Learn the techniques you need to know to adapt your original icon to a modern duotone style.'
            }
            time="28:44"
          />
        </div>
      </div>
    </>
  )
}

export default ScreenCasts
