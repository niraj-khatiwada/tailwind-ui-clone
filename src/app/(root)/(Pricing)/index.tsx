import React from 'react'

import Module from '@/ui/Module'
import styles from './styles.module.css'
import Button from '@/components/Button'
import Icon from '@/components/Icon'

function Pricing() {
  return (
    <>
      <div id="pricing" />
      <div className={styles.container}>
        <div className={styles.content}>
          <Module
            pillProps={{ text: 'Pricing', prefixText: '04' }}
            title="Pick your package"
            description="“Everything Starts as a Square” is available in two different packages so you can pick the one that’s right for you."
            titleProps={{ className: styles.title }}
            descriptionProps={{ className: styles.description }}
          />
        </div>
        <section className={styles.pricingContainer}>
          <div>
            <p className="flex font-display font-bold">
              <span className="text-[1.75rem] leading-tight text-slate-500">
                $
              </span>
              <span className="ml-1 mt-1 text-7xl tracking-tight text-slate-900">
                15
              </span>
            </p>
            <h3 className="mt-7 text-lg font-semibold tracking-tight text-slate-900">
              Essential
            </h3>
            <p className="mt-2 text-lg tracking-tight text-slate-600">
              The perfect starting point if you’re on a budget.
            </p>
            <Button text="Get started" className="w-full mt-8 !bg-black1" />
            <ul className="divide-y mt-8">
              <li className="flex items-center my-4">
                <Icon name="checK" size={30} />
                <span className="ml-4">The 240-page ebook</span>
              </li>
              <li className="flex items-center py-2">
                <Icon name="checK" size={30} />
                <span className="ml-4">Figma icon templates</span>
              </li>
              <li className="flex items-center py-2">
                <Icon name="checK" size={30} />
                <span className="ml-4">Community access</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <p className="flex font-display font-bold">
              <span className="text-[1.75rem] leading-tight text-blue-200">
                $
              </span>
              <span className="ml-1 mt-1 text-7xl tracking-tight text-white1">
                299
              </span>
            </p>
            <h3 className="mt-7 text-lg font-semibold tracking-tight text-white1">
              Complete
            </h3>
            <p className="mt-2 text-lg tracking-tight text-white1">
              Everything icon resource you could ever ask for.{' '}
            </p>
            <Button
              text="Get started"
              className="w-full mt-8 !bg-white1"
              textProps={{ className: '!text-primary' }}
            />
            <ul className="divide-y divide-white/10  mt-8">
              <li className="flex items-center my-4">
                <Icon name="checK" size={30} />
                <span className="ml-4">The 240-page ebook</span>
              </li>
              <li className="flex items-center py-2">
                <Icon name="checK" size={30} />
                <span className="ml-4">Figma icon templates</span>
              </li>
              <li className="flex items-center py-2">
                <Icon name="checK" size={30} />
                <span className="ml-4">Over an hour of screencasts</span>
              </li>
              <li className="flex items-center py-2">
                <Icon name="checK" size={30} />
                <span className="ml-4">Weekly icon teardowns</span>
              </li>
              <li className="flex items-center py-2">
                <Icon name="checK" size={30} />
                <span className="ml-4">Community access</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}

export default Pricing
