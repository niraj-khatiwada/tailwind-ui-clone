import React from 'react'

import styles from './styles.module.css'
import Chapter from '@/ui/Chapter'
import Module from '@/ui/Module'

function TableOfContents() {
  return (
    <>
      <div id="table-of-contents" />
      <div className={styles.container}>
        <Module
          pillProps={{ text: 'Table of contents', prefixText: '01' }}
          title=" Get a look at all of the content covered in the book. Everything you need to know is inside."
          description="“Everything Starts as a Square” is comprised of 240 tightly edited,
        highly visual pages designed to teach you everything you need to know
        about icon design with no unnecessary filler."
        />
        <div className="my-16">
          <Chapter
            title="Getting started"
            data={[
              { name: 'Getting started', page: 1 },
              { name: 'Intro to Figma', page: 15 },
              { name: 'Setting up your first artboard', page: 20 },
            ]}
          />
          <Chapter
            className="my-20"
            title="Fundamentals"
            data={[
              { name: 'Strokes and fills', page: 21 },
              { name: 'End points', page: 22 },
              { name: 'Bezier curves', page: 26 },
              { name: 'Designing on a grid', page: 31 },
              { name: 'Vector shapes', page: 45 },
            ]}
          />
          <Chapter
            className="my-20"
            title="Boolean operations"
            data={[
              { name: 'Combining shapes', page: 50 },
              { name: 'Subtracting shapes', page: 57 },
              { name: 'Intersecting shapes', page: 66 },
              { name: 'Flattening', page: 78 },
            ]}
          />
          <Chapter
            className="my-20"
            title="Optimizing for production"
            data={[
              { name: 'Preparing ', page: 82 },
              { name: 'Configuring your export settings', page: 88 },
              { name: 'Minifying and removing metadata', page: 95 },
            ]}
          />
        </div>
      </div>
    </>
  )
}

export default TableOfContents
