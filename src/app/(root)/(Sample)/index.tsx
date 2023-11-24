import React from 'react'

import styles from './styles.module.css'
import Button from '@/components/Button'
import Patter2Vector from '@/assets/images/pattern2.svg'

function Sample() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className="max-w-[480px]">
          <p className={styles.title}>Get the free sample chapters</p>
          <p className="mt-4 text-lg tracking-tight text-blue-200">
            Enter your email address and I’ll send you a sample from the book
            containing two of my favorite chapters.
          </p>
        </div>
        <div style={{ alignSelf: 'end' }}>
          <h3 className="text-base font-medium tracking-tight text-white">
            Get two free chapters straight to your inbox →
          </h3>
          <form className="border border-[hsla(0,0%,100%,.2)] rounded-xl px-4 py-2 pr-2 mt-4 flex items-center">
            <input
              type="email"
              name="email"
              required
              aria-label="Email address"
              placeholder="Email address"
              className="focus:outline-none bg-transparent placeholder:text-white/70 mr-4 text-white1"
            />
            <Button
              text="Get free chapters"
              className="bg-white1"
              textProps={{ className: 'text-primary' }}
              variant="none"
            />
          </form>
        </div>
      </div>
      <div className={styles.patternVector}>
        <Patter2Vector />
      </div>
    </div>
  )
}

export default Sample
