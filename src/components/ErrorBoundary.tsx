import React, { type MouseEventHandler } from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fullbackUi: React.ComponentType<{
    error: Error | null;
    reload: MouseEventHandler<HTMLButtonElement>;
    resetError?: () => void;
  }>;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error: error };
  }

  resetError: () => void = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      const FullBackUi = this.props.fullbackUi;
      return (
        <FullBackUi
          error={this.state.error}
          reload={(e) => {
            window.location.reload();
          }}
          resetError={this.resetError}
        />
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
