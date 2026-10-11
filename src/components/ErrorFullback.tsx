import type { MouseEventHandler } from "react";

interface ErrorFallbackProps {
  reload: MouseEventHandler<HTMLButtonElement>;
  error: Error | null;
  resetError?: () => void;
}

const ErrorFullback = ({
  reload,
  error,
  resetError,
}: ErrorFallbackProps) => {
  return (
    <div className="error-screen">
      <section className="error-panel" role="alert">
        <div className="error-icon" aria-hidden="true">
          !
        </div>

        <h2 className="error-title">Oops! Something went wrong.</h2>

        <p className="error-description">
          An unexpected rendering error occurred.
          You can try rendering this section again.
        </p>

        <div className="error-message">
          {error?.message ?? "Unknown error"}
        </div>

        <div className="error-actions">
          {resetError && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={resetError}
            >
              Try again
            </button>
          )}

          <button
            type="button"
            className="btn btn-secondary"
            onClick={reload}
          >
            Reload page
          </button>
        </div>
      </section>
    </div>
  );
};

export const GlobalFullbackUi = ({
  error,
  resetError,
}: {
  error: Error;
  resetError: () => void;
}) => {
  return (
    <div className="error-screen">
      <section className="global-error-panel" role="alert">
        <span className="global-error-label">
          Global error handler
        </span>

        <h2 className="error-title">Application error</h2>

        <p className="global-error-message">
          {error.message}
        </p>

        <button
          type="button"
          className="btn btn-primary"
          onClick={resetError}
        >
          Dismiss and try again
        </button>
      </section>
    </div>
  );
};

export default ErrorFullback;