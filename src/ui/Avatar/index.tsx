import React from 'react'

import styles from './styles.module.css'
import { mergeClasses } from '@/utils/tailwind'

export interface AvatarProps {
  name: string
  description: string
  imageProps: React.ComponentProps<'img'>
}

function Avatar(props: AvatarProps) {
  return (
    <div className={styles.container}>
      <img
        className={mergeClasses([
          styles.displayImage,
          props?.imageProps?.className ?? '',
        ])}
        {...props.imageProps}
      />
      <div className="ml-4">
        <p className="text-base font-medium leading-6 tracking-tight text-slate-900">
          {props.name}
        </p>
        <span className="mt-1 text-sm text-slate-600">{props.description}</span>
      </div>
    </div>
  )
}

export default Avatar
