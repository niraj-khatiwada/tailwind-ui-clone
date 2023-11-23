import { type SVGComponent } from '@/types/svg'

import Star from '@/assets/icons/star.svg'
import Check from '@/assets/icons/check.svg'

function asRegistry<T extends string>(
  arg: Record<T, SVGComponent>
): Record<T, SVGComponent> {
  return arg
}

const registry = asRegistry({
  star: Star,
  checK: Check,
})

export default registry
