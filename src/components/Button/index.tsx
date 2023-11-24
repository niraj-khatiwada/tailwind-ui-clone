import React from 'react'
import { mergeClasses } from '@/utils/tailwind'

import styles from './styles.module.css'

type Variant = 'solid' | 'bordered' | 'none'

export interface ButtonProps extends React.ComponentProps<'button'> {
  text?: string
  variant?: Variant
  textProps?: React.ComponentProps<'span'>
}

function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={mergeClasses([
        styles.button,
        mapVariantClassName(props.variant ?? 'solid'),
        props.className,
      ])}
    >
      {props.text ? (
        <span
          {...props.textProps}
          className={mergeClasses([
            styles.buttonText,
            props.textProps?.className,
          ])}
        >
          {props.text}
        </span>
      ) : (
        props.children
      )}
    </button>
  )
}

function mapVariantClassName(variant: Variant) {
  switch (variant) {
    case 'solid':
      return styles.buttonVariantSolid
    case 'bordered':
      return styles.buttonVariantBordered
    default:
      return ''
  }
}

export default Button
