import { loadFromStorage } from "./app.storage.js";
import { renderApp } from "./components/App.js";

document.addEventListener("DOMContentLoaded", () => {
  loadFromStorage();
  renderApp();
});
