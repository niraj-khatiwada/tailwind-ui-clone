import React from 'react'
import Image from 'next/image'

import { type SVGComponent } from '@/types/svg'

import Button from '@/components/Button'
import Pattern1VectorSVG from '@/assets/images/pattern1.svg'
import styles from './styles.module.css'
import { mergeClasses } from '@/utils/tailwind'
import BookImage from '@/assets/images/book.webp'
import Icon from '@/components/Icon'

const Pattern1VectorSVGVector = Pattern1VectorSVG as SVGComponent

function Hero() {
  return (
    <div className={mergeClasses([styles.container, 'h-full relative'])}>
      <div className={mergeClasses([styles.rectangleVector, 'bg-primary'])}>
        <Pattern1VectorSVGVector
          id="hero"
          className="text-white1 opacity-10 w-full h-full"
        />
      </div>
      <div className={styles.contentContainer}>
        <div className="flex items-center justify-center mt-20 lg:mt-[128px]">
          <Image
            src={BookImage}
            width={470}
            height={629}
            alt="book"
            className={mergeClasses([styles.bookImage])}
            priority
          />
        </div>
        <section className="px-6 lg:px-0 lg:ml-[40px] xl:ml-[80px] mt-[50px] lg:mt-0">
          <div className="w-full h-[308px] absolute left-0 z-[-2] bg-gray1" />
          <div className="w-full h-[308px] pt-[128px] ">
            <div className="flex items-center mb-2">
              <Icon name="star" className="text-primary mr-1" />
              <Icon name="star" className="text-primary mr-1" />
              <Icon name="star" className="text-primary mr-1" />
              <Icon name="star" className="text-primary mr-1" />
              <Icon name="star" className="text-primary" />
            </div>
            <p className={mergeClasses([styles.testimonialTest])}>
              “This method of designing icons is genius. I wish I had known this
              method a lot sooner.”
            </p>
            <p className={mergeClasses([styles.testimonialUser])}>
              <strong className="text-primary"> Stacey Solomon, </strong>
              Founder at Retail Park
            </p>
          </div>
          <div className="mt-[80px] max-w-[578px]">
            <h1 className={mergeClasses([styles.brandText])}>
              Get lost in the world of icon design.
            </h1>
            <h2 className={mergeClasses([styles.brandSubtext])}>
              A book and video course that teaches you how to design your own
              icons from scratch.
            </h2>
            <div className="mt-8 flex">
              <Button text="Get sample chapter" className="mr-4" />
              <Button text="Buy book" variant="bordered" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Hero
