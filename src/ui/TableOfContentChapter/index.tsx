import React from 'react'

import styles from './styles.module.css'

type Chapter = {
  name: string
  page: number
}

type TableOfContentChapterProps = {
  title: string
  data: Chapter[]
  className?: React.HTMLProps<HTMLElement>['className']
}

function TableOfContentChapter(props: TableOfContentChapterProps) {
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

export default TableOfContentChapter
