import { useEffect } from 'react'
import { useAnimation, AnimationControls } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function useScroll(): [(node?: Element | null) => void, AnimationControls] {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.3 })

  useEffect(() => {
    if (inView) {
      controls.start('show')
    } else {
      controls.start('hidden')
    }
  }, [inView, controls])

  return [ref, controls]
}
