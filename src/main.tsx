import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/Styles/main.css";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/Store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StrictMode>
);
