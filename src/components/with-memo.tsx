import { memo, ComponentType } from 'react'
import { isEqual } from 'lodash'

interface WithMemoOptions {
  name?: string
  arePropsEqual?: (prevProps: any, nextProps: any) => boolean
}

export function withMemo<P extends object>(
  Component: ComponentType<P>,
  options: WithMemoOptions = {}
) {
  const {
    name = Component.displayName || Component.name,
    arePropsEqual = isEqual
  } = options

  const WrappedComponent = memo(Component, arePropsEqual)
  WrappedComponent.displayName = `WithMemo(${name})`

  return WrappedComponent
}

// Example usage:
// const MemoizedComponent = withMemo(MyComponent, {
//   name: 'MyComponent',
//   arePropsEqual: (prev, next) => prev.id === next.id
// })
