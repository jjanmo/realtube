import { createContext, useContext } from 'react'
import { useMediaQuery } from 'react-responsive'

interface ScreenContextType {
  isXSmall: boolean
  isSmall: boolean
  isLarge: boolean
  isXLarge: boolean
}

export const ScreenContext = createContext({} as ScreenContextType)
export default function useScreenContext() {
  return useContext(ScreenContext)
}

export function withScreen<T>(WrappedComponent: React.ComponentType<T>) {
  const displayName = WrappedComponent.displayName || 'Component'

  const ComponentWithScreen = (props: T & JSX.IntrinsicAttributes) => {
    const isXSmall = useMediaQuery({ maxWidth: 480 })
    const isSmall = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isLarge = useMediaQuery({ minWidth: 769, maxWidth: 1024 })
    const isXLarge = useMediaQuery({ minWidth: 1025 })

    const screenContext = {
      isXSmall,
      isSmall,
      isLarge,
      isXLarge,
    }

    return (
      <ScreenContext.Provider value={screenContext}>
        <WrappedComponent {...(props as T & JSX.IntrinsicAttributes)} />
      </ScreenContext.Provider>
    )
  }

  ComponentWithScreen.displayName = `withScreen(${displayName})`

  return ComponentWithScreen
}
