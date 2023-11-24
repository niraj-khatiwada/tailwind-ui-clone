import React from 'react'

import styles from './styles.module.css'
import Icon from '@/components/Icon'
import Avatar, { type AvatarProps } from '../Avatar'

interface TestimonialBannerProps {
  text: string
  rating: number
  avatarProps: AvatarProps
}

function TestimonialBanner(props: TestimonialBannerProps) {
  return (
    <div className={styles.container}>
      <svg
        aria-hidden="true"
        className={styles.pattern}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id=":S2:"
            width="128"
            height="128"
            patternUnits="userSpaceOnUse"
            x="100%"
            y="100%"
            patternTransform="translate(112 64)"
          >
            <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#:S2:)"></rect>
      </svg>
      <div className={styles.content}>
        <div className="flex items-center">
          {new Array(props.rating).fill(0).map((_, index) => (
            <Icon key={index.toString()} name="star" className="mx-1" />
          ))}
        </div>
        <blockquote className="mt-10 font-display text-4xl text-[2rem] font-medium tracking-tight text-slate-900 sm:text-center font-CG">
          <p>{props.text}</p>
        </blockquote>
        <div className="mt-10 text-left">
          {props.avatarProps ? <Avatar {...props.avatarProps} /> : null}
        </div>
      </div>
    </div>
  )
}

export default TestimonialBanner
