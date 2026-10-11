import React, { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
  fullbackUI: React.ComponentType<{ error: Error; resetError: () => void }>;
}

const GlobalErrorHandle: React.FC<Props> = ({ children, fullbackUI }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const handlePromiseRejection = (e: PromiseRejectionEvent) => {
      e.preventDefault();
      setError(e instanceof Error ? e.reason : new Error(String(e.reason)));
    };

    const handleError = (e: ErrorEvent) => {
      e.preventDefault();
      setError(e.error);
    };

    window.addEventListener("unhandledrejection", handlePromiseRejection);
    window.addEventListener("error", handleError);
    return () => {
      window.removeEventListener("unhandledrejection", handlePromiseRejection);
      window.removeEventListener("error", handleError);
    };
  }, []);

  if (error) {
    const FullbackUi = fullbackUI;
    return <FullbackUi error={error} resetError={() => setError(null)} />;
  }

  return <>{children}</>;
};

export default GlobalErrorHandle;
