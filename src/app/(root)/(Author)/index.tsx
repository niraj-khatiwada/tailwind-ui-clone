import React from 'react'
import Link from 'next/link'

import styles from './styles.module.css'
import Pill from '@/ui/Pill'
import Icon from '@/components/Icon'
import AuthorImage from '@/assets/images/author.webp'

function Author() {
  return (
    <>
      <div id="author" />
      <div className={styles.container}>
        <div className={styles.content}>
          <Pill text="Author" prefixText="05" />
          <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl font-CG">
            <span className="block text-primary font-extrabold">
              Mira Lindehoff –
            </span>{' '}
            Hey there, I’m the author{' '}
            <span className="block">
              {' '}
              behind ‘Everything Starts as a Square’.
            </span>
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            I’ve been designing icons professionally for over a decade and have
            worked with dozens of the biggest brands to create custom sets for
            their products. I’m an accomplished conference speaker, and have
            been teaching icon design workshops every month for the last three
            years. I’ve worked with designers of all skill levels and honed my
            way of teaching to really click for anyone who has the itch to start
            designing their own icons.
          </p>
          <div className="mt-8">
            <Link href={'#'} className="flex items-center">
              <Icon name="twitter" className="text-primary" size={30} />
              <span className="ml-4 text-blue-600 font-medium tracking-tight">
                Follow me on Twitter
              </span>
            </Link>
          </div>
          <img
            alt="author"
            src={AuthorImage.src}
            className={styles.authorImage}
          />
        </div>
      </div>
    </>
  )
}

export default Author
