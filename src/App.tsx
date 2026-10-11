import { Activity, Suspense, useState } from "react";
import "./App.css";

import VideoFallbackUi from "./components/VideoFallbackUi";
import VidoComponent from "./components/VidoComponent";

type Tab = "home" | "video" | "image" | "promise" | "action";

function App() {
  const [tab, setTab] = useState<Tab>("home");

  const tabs: { id: Tab; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "video", label: "Video / Activity" },
    { id: "image", label: "Image" },
    { id: "promise", label: "Promise Error" },
    { id: "action", label: "Event Error" },
  ];

  function handleTabClick(nextTab: Tab) {
    setTab(nextTab);

    if (nextTab === "promise") {
      Promise.reject(new Error("Unhandled promise rejection"));
    }

    if (nextTab === "action") {
      // Intentionally do not throw here.
      // Use this tab to implement explicit event-error handling.
      throw new Error("Event handler error");
    }
  }

  return (
    <main className="app">
      <header className="app-header">
        <span className="app-eyebrow">React Learning Lab</span>
        <h1 className="app-title">Error Handling & Activity</h1>
        <p className="app-description">
          Explore React Error Boundaries, global errors, Suspense, and Activity
          through practical experiments.
        </p>
      </header>

      <nav aria-label="Experiments">
        <ul className="tab-list">
          {tabs.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={`tab-button ${tab === item.id ? "active" : ""}`}
                aria-pressed={tab === item.id}
                onClick={() => handleTabClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <section className="content-card">
        <h2 className="section-title">
          {tabs.find((item) => item.id === tab)?.label}
        </h2>

        <p className="section-description">
          {tab === "home" &&
            "Welcome to the learning lab. Select an experiment to explore how React handles errors and component visibility."}
          {tab === "video" &&
            "Explore how Activity switches between visible and hidden modes."}
          {tab === "image" &&
            "Use this section to experiment with media rendering and loading errors."}
          {tab === "promise" &&
            "Explore unhandled promise rejections and global error handling."}
          {tab === "action" &&
            "Use this section to experiment with errors inside event handlers."}
        </p>

        {tab === "video" && (
          <Suspense fallback={<VideoFallbackUi />}>
            <Activity mode={tab === "video" ? "visible" : "hidden"}>
              <VidoComponent />
            </Activity>
          </Suspense>
        )}

        {tab === "home" && (
          <div className="video-fallback">
            <h3 className="video-fallback-title">Ready to experiment?</h3>
            <p>Select an experiment above to get started.</p>
          </div>
        )}

        <div className="status-row">
          <span>Current experiment</span>
          <span className="status-value">{tab}</span>
        </div>
      </section>
    </main>
  );
}

export default App;
