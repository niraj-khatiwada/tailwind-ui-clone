import React from 'react'

import PatternSVG from '@/assets/images/pattern1.svg'
import { SVGComponent } from '@/types/svg'
import styles from './styles.module.css'

const Pattern = PatternSVG as SVGComponent

function Copyright() {
  return (
    <div className="relative">
      <div className="relative text-center text-sm text-slate-600 mt-[5rem] mb-[3rem]">
        <p>Copyright © Lindehoff Design, LLC</p>
        <p>All rights reserved.</p>
      </div>
      <svg
        aria-hidden="true"
        className={styles.pattern}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="S2"
            width="128"
            height="128"
            patternUnits="userSpaceOnUse"
            x="100%"
            y="100%"
            patternTransform="translate(112 64)"
          >
            <path
              d="M0 128V.5H128"
              fill="none"
              stroke="rgba(15,23,42,.05)"
            ></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#S2)"></rect>
      </svg>{' '}
    </div>
  )
}

export default Copyright
