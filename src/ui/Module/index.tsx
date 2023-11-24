import React from 'react'

import Pill, { type PillProps } from '@/ui/Pill'
import styles from './styles.module.css'
import { mergeClasses } from '@/utils/tailwind'

interface ModuleProps {
  title: string
  description: string
  pillProps: PillProps
  titleProps?: React.ComponentProps<'p'>
  descriptionProps?: React.ComponentProps<'p'>
}

function Module(props: ModuleProps) {
  return (
    <div className={mergeClasses([styles.content])}>
      <Pill {...props.pillProps} />
      <p
        {...props.titleProps}
        className={mergeClasses([
          styles.title,
          props.titleProps?.className ?? '',
        ])}
      >
        {props.title}
      </p>
      <p
        {...props.descriptionProps}
        className={mergeClasses([
          styles.description,
          props.descriptionProps?.className ?? '',
        ])}
      >
        {props.description}
      </p>
    </div>
  )
}

export default Module
