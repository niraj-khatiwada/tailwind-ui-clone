import React from 'react'
import Link from 'next/link'

import styles from './styles.module.css'
import Icon from '@/components/Icon'

function Description() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        “Everything Starts as a Square” is a book and video course that teaches
        you a simple method to designing icons that anyone can learn.
      </p>
      <section className={styles.description}>
        <p className={styles.description}>
          Before I learned how to design icons myself, I always imagined that
          they were drawn by hand using the pen tool, some sort of fancy
          graphics tablet, and hours and hours spent manually fine-tuning bezier
          curves.
          <span className="block my-4">
            But it turns out this isn’t how great icon designers work at all. In
          </span>
          <span className="block my-4">
            “Everything Starts as a Square”, you’ll learn the systems experts
            use to create pixel perfect icons, without relying on a steady hand.
          </span>
        </p>
        <ul className={styles.descriptionListContainer}>
          <li>
            <Icon
              name="checK"
              className="text-secondary inline-block mr-4 my-2"
              size={30}
            />
            Using boolean operations to combine basic shapes into complex icons
          </li>
          <li>
            <Icon
              name="checK"
              className="text-secondary inline-block mr-4 my-2"
              size={30}
            />
            How to adapt icons to different sizes
          </li>
          <li>
            <Icon
              name="checK"
              className="text-secondary inline-block mr-4 my-2"
              size={30}
            />
            Translating icons from an outline style to a solid style
          </li>
          <li>
            <Icon
              name="checK"
              className="text-secondary inline-block mr-4 my-2"
              size={30}
            />
            Identifying the characteristics that make an icon set cohesive
          </li>
          <li>
            <Icon
              name="checK"
              className="text-secondary inline-block mr-4 my-2"
              size={30}
            />
            Figma features and keyboard shortcuts to speed up your workflow
          </li>
        </ul>
        <p className="my-4">
          By the end of the book, you’ll have all the confidence you need to dig
          in and start creating beautiful icons that can hold their own against
          any of the sets you can find online.
        </p>
        <Link href={'#free-chapters'} className={styles.freeChaptersLink}>
          Get two free chapters straight to your inbox →
        </Link>
      </section>
    </div>
  )
}

export default Description
