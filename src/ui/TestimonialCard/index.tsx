import React from 'react'

import Avatar, { type AvatarProps } from '../Avatar'
import styles from './styles.module.css'
import { mergeClasses } from '@/utils/tailwind'

interface TestimonialCardProps {
  text: string
  avatarProps: AvatarProps
}

function TestimonialCard(props: TestimonialCardProps) {
  return (
    <div
      className={mergeClasses([
        styles.container,
        'rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5',
      ])}
    >
      <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
        {props.text}
      </p>
      <div className="mt-6">
        <Avatar {...props.avatarProps} />
      </div>
    </div>
  )
}

export default TestimonialCard
