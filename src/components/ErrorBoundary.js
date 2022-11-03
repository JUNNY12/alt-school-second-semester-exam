import React from "react";

export default class ErrorBoundary extends React.Component {
    state = {
      errorMessage: ''
    }
    static getDerivedStateFromError(error) {
      return {errorMessage: error.toString()}
    }
    componentDidCatch(error, info) {
      this.logErrorToServices(error.toString(), info.componentStack)
    }
    logErrorToServices = console.log
    render() {
      if (this.state.errorMessage) {
        return (
          <p className="error">
            {this.state.errorMessage}
          </p>
        )
      }
      return this.props.children
    }
  }