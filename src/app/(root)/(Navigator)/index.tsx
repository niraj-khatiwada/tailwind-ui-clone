'use client'
import React from 'react'
import Link from 'next/link'

import styles from './styles.module.css'
import { mergeClasses } from '@/utils/tailwind'
import Icon from '@/components/Icon'

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
  const [dropdownVisible, setDropdownVisible] = React.useState(false)
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

  const title = React.useMemo(() => {
    if (!(currentTarget == null)) {
      const entries = Object.values(target)
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i]
        if (entry.id === currentTarget) {
          return entry.title
        }
      }
    }
    return ''
  }, [currentTarget])

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
        'backdrop-blur-2xl sticky top-0 left-0 right-0 items-start',
      ])}
    >
      <div className={`${dropdownVisible ? 'block' : 'hidden'} md:flex`}>
        {Object.values(target).map((item, index) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className={mergeClasses([
              styles.box,
              isSelected(item.id) ? styles.selected : '',
            ])}
            onClick={function () {
              setDropdownVisible(false)
            }}
          >
            <span className="block">0{index + 1}</span>
            <p>{item.title}</p>
          </Link>
        ))}
      </div>
      {!dropdownVisible ? (
        <div className="md:hidden">
          <p className="text-base font-medium text-slate-900">{title}</p>
        </div>
      ) : null}
      <button
        className="absolute top-3 right-5 md:hidden"
        onClick={function () {
          setDropdownVisible((_) => !_)
        }}
      >
        <Icon
          name={dropdownVisible ? 'cross' : 'dropdown'}
          className="text-black1"
          size={30}
        />
      </button>
    </div>
  )
}

export default Navigator
