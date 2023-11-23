import React from 'react'
import { mergeClasses } from '@/utils/tailwind'

import styles from './styles.module.css'

type Variant = 'solid' | 'bordered'

export interface ButtonProps extends React.ComponentProps<'button'> {
  text?: string
  variant?: Variant
}

function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={mergeClasses([
        styles.button,
        props.variant === 'bordered'
          ? styles.buttonVariantBordered
          : styles.buttonVariantSolid,
        props.className,
      ])}
    >
      {props.text ? (
        <span className={styles.buttonText}>{props.text}</span>
      ) : (
        props.children
      )}
    </button>
  )
}

export default Button
