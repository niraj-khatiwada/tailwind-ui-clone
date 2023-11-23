import React from 'react'

import styles from './style.module.css'

type PillProps = {
  text: string
  prefixText?: string
}

function Pill(props: PillProps) {
  return (
    <div className={styles.container}>
      <span className="prefix font-mono text-sm">{props.prefixText}</span>
      <span className="mx-3 h-3.5 w-px bg-blue-600/20"></span>
      <p>{props.text}</p>
    </div>
  )
}

export default Pill
