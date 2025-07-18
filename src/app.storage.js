import { state } from "./app.state.js";

export function loadFromStorage() {
  const data = JSON.parse(localStorage.getItem("formData")) || [];
  state.items = data;
}

export function saveToStorage() {
  localStorage.setItem("formData", JSON.stringify(state.items));
}
