import React from 'react'

import Module from '@/ui/Module'
import styles from './styles.module.css'
import Resource from './Resource'
import ResourceImage1 from '@/assets/images/resource1.png'
import ResourceImage2 from '@/assets/images/resource2.png'
import ResourceImage3 from '@/assets/images/resource3.png'

function Resources() {
  return (
    <>
      <div id="resources" />
      <div className={styles.container}>
        <div className={styles.content}>
          <Module
            pillProps={{ text: 'Resources', prefixText: '03' }}
            title="Tools and resources you can use to get started even faster and progress even further."
            description="Design assets, icon teardowns, and a community of fellow icon designers where you can ask questions, get feedback, and accelerate your learning."
          />
        </div>
        <div className="mt-16 flex justify-center items-center gap-20">
          <Resource
            title={'Figma icon templates'}
            description={
              'Perfectly structured templates for quickly designing new icons at dozens of common sizes.'
            }
            bannerImage={ResourceImage1.src}
          />
          <Resource
            title={'Weekly icon teardowns'}
            description={
              'Weekly videos where we dissect and recreate beautiful icons we find on the web.'
            }
            bannerImage={ResourceImage2.src}
          />
          <Resource
            title={'Community of icon designers'}
            description={
              "A private Discord server where you can get help and give feedback on each others' work."
            }
            bannerImage={ResourceImage3.src}
          />
        </div>
      </div>
    </>
  )
}

export default Resources
