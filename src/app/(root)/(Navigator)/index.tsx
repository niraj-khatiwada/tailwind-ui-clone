import React from 'react'
import Link from 'next/link'

import styles from './styles.module.css'
import { mergeClasses } from '@/utils/tailwind'

function Navigator() {
  return (
    <div
      className={mergeClasses([
        styles.container,
        'backdrop-blur-xl sticky top-0 left-0 right-0 items-start ',
      ])}
    >
      <Link href={'#table-of-contents'} className={styles.box}>
        <span className="block">01</span>
        <p>Table of contents</p>
      </Link>
      <Link href={'#table-of-contents'} className={styles.box}>
        <span className="block">02</span>
        <p>Screencasts</p>
      </Link>
      <Link href={'#table-of-contents'} className={styles.box}>
        <span className="block">03</span>
        <p>Resources</p>
      </Link>
      <Link href={'#table-of-contents'} className={styles.box}>
        <span className="block">04</span>
        <p>Pricing</p>
      </Link>
      <Link href={'#table-of-contents'} className={styles.box}>
        <span className="block">05</span>
        <p>Author</p>
      </Link>
    </div>
  )
}

export default Navigator
