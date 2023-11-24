'use client'
import React from 'react'
import Link from 'next/link'

import styles from './styles.module.css'
import { mergeClasses } from '@/utils/tailwind'

const target = {
  tableOfContents: {
    id: 'table-of-contents',
    title: 'Table of contents',
  },
  screenCasts: {
    id: 'screencasts',
    title: 'Screencasts',
  },
  resources: {
    id: 'resources',
    title: 'Resources',
  },
  pricing: {
    id: 'pricing',
    title: 'Pricing',
  },
  author: {
    id: 'author',
    title: 'Author',
  },
}

function Navigator() {
  const [currentTarget, setCurrentTarget] = React.useState<string | null>()
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entryIds = entries.map((entry) => entry.target.id)
      if (entryIds.length > 0) {
        entries?.[0]?.isIntersecting && setCurrentTarget(entryIds[0])
      }
    })

    Object.values(target).map((item) =>
      observer.observe(document.getElementById(item.id)!)
    )
    return function () {
      observer.disconnect()
    }
  }, [])

  const isSelected = React.useCallback(
    function (id: string): boolean {
      return currentTarget === id
    },
    [currentTarget]
  )

  React.useLayoutEffect(() => {
    const hash = window.location.hash
    if (
      hash.length > 0 &&
      Object.values(target)
        .map((item) => item.id)
        .includes(hash.slice(1))
    ) {
      setCurrentTarget(hash.slice(1))
    }
  }, [])

  return (
    <div
      className={mergeClasses([
        styles.container,
        'backdrop-blur-2xl sticky top-0 left-0 right-0 items-start ',
      ])}
    >
      {Object.values(target).map((item, index) => (
        <Link
          key={item.id}
          href={`#${item.id}`}
          className={mergeClasses([
            styles.box,
            isSelected(item.id) ? styles.selected : '',
          ])}
        >
          <span className="block">0{index}</span>
          <p>{item.title}</p>
        </Link>
      ))}
    </div>
  )
}

export default Navigator
