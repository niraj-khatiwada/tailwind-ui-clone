import React from 'react'

import Pill from '@/ui/Pill'
import styles from './styles.module.css'
import TableOfContentChapter from '@/ui/TableOfContentChapter'

function TableOfContents() {
  return (
    <div className={styles.container}>
      <Pill text={'Table of contents'} prefixText="01" />
      <div className="my-8">
        <p className={styles.title}>
          Get a look at all of the content covered in the book. Everything you
          need to know is inside.
        </p>
        <p className={styles.subtitle}>
          “Everything Starts as a Square” is comprised of 240 tightly edited,
          highly visual pages designed to teach you everything you need to know
          about icon design with no unnecessary filler.
        </p>
      </div>
      <div className="my-16">
        <TableOfContentChapter
          title="Getting started"
          data={[
            { name: 'Getting started', page: 1 },
            { name: 'Intro to Figma', page: 15 },
            { name: 'Setting up your first artboard', page: 20 },
          ]}
        />
        <TableOfContentChapter
          className="my-20"
          title="Optimizing for production"
          data={[
            { name: 'Combining shapes', page: 50 },
            { name: 'Subtracting shapes', page: 57 },
            { name: 'Intersecting shapes', page: 66 },
            { name: 'Flattening', page: 78 },
          ]}
        />
        <TableOfContentChapter
          className="my-20"
          title="Boolean operations"
          data={[
            { name: 'Preparing for SVG', page: 82 },
            { name: 'Configuring your export settings', page: 88 },
            { name: 'Minifying and removing metadata', page: 95 },
          ]}
        />
      </div>
    </div>
  )
}

export default TableOfContents
