import React from 'react'
import Image from 'next/image'

import { type SVGComponent } from '@/types/svg'

import Layout from '@/components/Layout'
import Button from '@/components/Button'
import RectangleVectorSVG from '@/assets/images/rectangle.svg'
import styles from './styles.module.css'
import { mergeClasses } from '@/utils/tailwind'
import BookImage from '@/assets/images/book.webp'
import Icon from '@/components/Icon'

const RectangleVector = RectangleVectorSVG as SVGComponent

function Hero() {
  return (
    <div className={mergeClasses([styles.container, 'h-full relative'])}>
      <div className={mergeClasses([styles.rectangleVector, 'bg-primary'])}>
        <RectangleVector className="text-white1 opacity-10 w-full h-full" />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={BookImage}
          width={470}
          height={629}
          alt="book"
          className={mergeClasses([styles.bookImage])}
        />
      </div>
      <section className="ml-[80px]">
        <div className="w-full h-[308px] absolute left-0 z-[-2] bg-gray1" />
        <div className="flex justify-center flex-col w-full h-[308px]">
          <div className="flex items-center mt-[70px] mb-2">
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
  )
}

export default Hero
