import React from 'react'

import TestimonialCard from '@/ui/TestimonialCard'
import TestimonialUser1 from '@/assets/images/testimonial1.webp'
import TestimonialUser2 from '@/assets/images/testimonial2.webp'
import TestimonialUser3 from '@/assets/images/testimonial3.webp'
import TestimonialUser4 from '@/assets/images/testimonial4.webp'
import TestimonialUser5 from '@/assets/images/testimonial5.webp'
import TestimonialUser6 from '@/assets/images/testimonial6.webp'
import TestimonialUser7 from '@/assets/images/testimonial7.webp'
import TestimonialUser8 from '@/assets/images/testimonial8.webp'
import TestimonialUser9 from '@/assets/images/testimonial9.webp'
import styles from './styles.module.css'

const data = [
  {
    text: 'Mira’s teaching style is second to none. Everything was easy to follow every step of the way.',
    avatar: {
      name: 'Antonio Littel',
      description: 'Frontend Developer',
      imageProps: { src: TestimonialUser1.src },
    },
  },
  {
    text: 'I run an ecommerce store selling rare vintage gummy bears and could never find a good gummy bear icon. Now I can design my own in minutes.',
    avatar: {
      name: 'Cameron Considine',
      description: 'Frontend Developer',
      imageProps: { src: TestimonialUser2.src },
    },
  },
  {
    text: 'I couldn’t believe how fast Mira moved in Figma compared to my own workflow. I’m designing icons more accurately in half the time with the shortcuts I learned from her videos.',
    avatar: {
      name: 'Steven Hackett',
      description: 'Bootcamp Instructor',
      imageProps: { src: TestimonialUser3.src },
    },
  },
  {
    text: 'Even though I was excited to learn, I was pessimistic that I wouldn’t actually ever get good enough to design my own icons. I was wrong — this book is all I needed.',
    avatar: {
      name: 'Lynn Nolan',
      description: 'Growth Marketer',
      imageProps: { src: TestimonialUser4.src },
    },
  },
  {
    text: 'I didn’t expect to find a lot of value in the community but now I’m in there for at least an hour every day picking up tips from other designers.',
    avatar: {
      name: 'Vernon Cummerata',
      description: 'UI Engineer',
      imageProps: { src: TestimonialUser5.src },
    },
  },
  {
    text: 'All I can say is wow — this is easily the best icon design resource I’ve ever encountered.',
    avatar: {
      name: 'Leah Kiehn',
      description: 'Creative Director',
      imageProps: { src: TestimonialUser6.src },
    },
  },
  {
    text: 'I’ve been employed as a professional icon designer for years and still learned tons of new tricks that have made my work even better',
    avatar: {
      name: 'Krista Prosacco',
      description: 'Professional Designer',
      imageProps: { src: TestimonialUser7.src },
    },
  },
  {
    text: 'I didn’t expect to find a lot of value in the community but now I’m in there for at least an hour every day picking up tips from other designers.',
    avatar: {
      name: 'Vernon Cummerata',
      description: 'UI Engineer',
      imageProps: { src: TestimonialUser8.src },
    },
  },
  {
    text: 'All I can say is wow — this is easily the best icon design resource I’ve ever encountered.',
    avatar: {
      name: 'Leah Kiehn',
      description: 'Creative Director',
      imageProps: { src: TestimonialUser9.src },
    },
  },
]

function Testimonials() {
  return (
    <div className={styles.container}>
      <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12 text-center">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900 font-CG">
          Some kind words from early customers...
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-600">
          I worked with a small group of early access customers to make sure all
          of the content in the book was exactly what they needed. Hears what
          they had to say about the finished product.
        </p>
      </div>
      <ul className="mx-auto grid place-items-center md:place-items-start max-w-2xl grid-cols-1 md:grid-cols-2 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8 mt-16">
        {data.map((item) => (
          <TestimonialCard
            key={item.text}
            text={item.text}
            avatarProps={item.avatar}
          />
        ))}
      </ul>
    </div>
  )
}

export default Testimonials
