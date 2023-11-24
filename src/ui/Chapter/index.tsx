import React from 'react'

import styles from './styles.module.css'

type ChapterProps = {
  title: string
  data: {
    name: string
    page: number
  }[]
  className?: React.HTMLProps<HTMLElement>['className']
}

function Chapter(props: ChapterProps) {
  return (
    <div className={props.className}>
      <p className={styles.title}>{props.title}</p>
      <section className={styles.chaptersContainer}>
        {props.data.map((chapter) => (
          <div
            key={chapter.name}
            className="flex justify-between border-b py-4 last:border-none"
          >
            <span className="text-black1 font-medium">{chapter.name}</span>
            <span className="font-mono text-slate-400">{chapter.page}</span>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Chapter
