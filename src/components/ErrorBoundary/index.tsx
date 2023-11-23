import React from 'react'

interface Props {
  children?: React.ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error: Error, errorInfo: any) {
    console.error({ error, errorInfo })
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex justify-center items-center">
          <h2>Oops, there is an error!</h2>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
