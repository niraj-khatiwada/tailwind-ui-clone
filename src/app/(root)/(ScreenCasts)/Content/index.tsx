import React from 'react'

import { mergeClasses } from '@/utils/tailwind'
import styles from './styles.module.css'
import ContentImage1SVG from '@/assets/images/content1.svg'
import { SVGComponent } from '@/types/svg'
import Icon from '@/components/Icon'

const ContentImage1 = ContentImage1SVG as SVGComponent

interface ContentProps {
  time: `${number}${number}:${number}${number}`
  bannerImage: React.ReactNode
  title: string
  description: string
}

function Content(props: ContentProps) {
  return (
    <div
      className={mergeClasses([
        styles.container,
        'mt-8 lg:mt-0 [counter-increment:video]',
      ])}
    >
      <figure className={mergeClasses([styles.figure, 'shadow-lg'])}>
        {props.bannerImage}
        <div className="absolute bottom-2 left-2 flex items-center rounded-lg bg-black/30 px-1.5 py-0.5 text-sm text-white [@supports(backdrop-filter:blur(0))]:bg-white/10 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
          <Icon name="play" />
          <time dateTime="16m 54s" className="ml-2">
            {props.time}
          </time>
        </div>
      </figure>
      <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
        {props.title}
      </h3>
      <p className="mt-2 text-sm text-slate-600">{props.description}</p>
    </div>
  )
}

export default Content
