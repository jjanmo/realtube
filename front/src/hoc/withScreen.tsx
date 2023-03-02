import { useMediaQuery } from 'react-responsive'

export interface WithScreenContextProps {
  isXSmall: boolean
  isSmall: boolean
  isLarge: boolean
  isXLarge: boolean
}

export function withScreen<T extends WithScreenContextProps = WithScreenContextProps>(
  WrappedComponent: React.ComponentType<T>
) {
  return () => {
    const displayName = WrappedComponent.displayName || 'Component'

    const ComponentWithScreenContext = (props: T) => {
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

      return <WrappedComponent {...screenContext} {...(props as T)} />
    }

    ComponentWithScreenContext.displayName = `withScreen(${displayName})`

    return ComponentWithScreenContext
  }
}
