import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error | null;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // You can log the error to an external service here
    // console.error('ErrorBoundary caught error', error, info);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen flex items-center justify-center p-6">
          <div className="max-w-lg w-full bg-white/5 border border-white/5 rounded-2xl p-8 text-center">
            <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
            <p className="text-sm mb-4">An unexpected error occurred. Try reloading the page.</p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={this.handleReload}
                className="px-4 py-2 bg-accent text-primary rounded-lg font-semibold"
              >
                Reload
              </button>
            </div>
          </div>
        </main>
      );
    }

    return this.props.children as React.ReactElement;
  }
}
