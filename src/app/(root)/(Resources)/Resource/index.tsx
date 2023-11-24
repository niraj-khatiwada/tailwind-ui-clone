import React from 'react'

import styles from './styles.module.css'
import { mergeClasses } from '@/utils/tailwind'

interface ResourceProps {
  title: string
  description: string
  bannerImage: string
  className?: React.ComponentProps<'div'>['className']
}

function Resource(props: ResourceProps) {
  return (
    <div className={mergeClasses([styles.container, props.className])}>
      <figure
        className={mergeClasses([styles.figure, 'shadow-lg'])}
        style={{ backgroundImage: `url(${props.bannerImage})` }}
      />
      <div className="text-center mt-10">
        <h3 className="text-base font-medium tracking-tight text-slate-900">
          {props.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600">{props.description}</p>
      </div>
    </div>
  )
}

export default Resource
