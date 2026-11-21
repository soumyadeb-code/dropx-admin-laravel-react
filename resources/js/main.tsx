import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import PageLoader from "./components/ui/page-loader";
import "../css/globals.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <Suspense fallback={<PageLoader />}>
        <App />
      </Suspense>
    </React.StrictMode>
  );
}
