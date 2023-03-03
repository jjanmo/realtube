import { useEffect } from 'react'
import _ from 'lodash'
import useScreenContext from '@hoc/withScreen'

/**
 * @description
 * mobile에서 상단(or 하단)의 주소창으로 인해 vh값이 달라지는 이슈를 해결
 */
export default function useResponsiveHeight() {
  const { isLargeWeb } = useScreenContext()

  useEffect(() => {
    if (typeof window === 'undefined' || isLargeWeb) return

    setViewportHeight()

    const handleResize = _.throttle(setViewportHeight, 500)
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])
}

function setViewportHeight() {
  const vh = window.innerHeight * 0.01

  document.documentElement.style.setProperty('--vh', `${vh}px`)
}
