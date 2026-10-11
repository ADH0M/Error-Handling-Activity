import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import ErrorFullback, { GlobalFullbackUi } from "./components/ErrorFullback.tsx";
import GlobalErrorHandle from "./components/GlobalErrorHandle.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalErrorHandle fullbackUI={GlobalFullbackUi}>
      <ErrorBoundary fullbackUi={ErrorFullback}>
        <App />
      </ErrorBoundary>
    </GlobalErrorHandle>
  </StrictMode>,
);
