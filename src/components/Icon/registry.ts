import { type SVGComponent } from '@/types/svg'

import Star from '@/assets/icons/star.svg'
import Check from '@/assets/icons/check.svg'
import Play from '@/assets/icons/play.svg'
import Twitter from '@/assets/icons/twiter.svg'

function asRegistry<T extends string>(
  arg: Record<T, SVGComponent>
): Record<T, SVGComponent> {
  return arg
}

const registry = asRegistry({
  star: Star,
  checK: Check,
  play: Play,
  twitter: Twitter,
})

export default registry
