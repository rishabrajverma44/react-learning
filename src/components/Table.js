import { state } from "../app.state";
import { saveToStorage } from "../app.storage.js";
import { renderApp } from "./App.js";

export function Table() {
  const tableDiv = document.createElement("div");
  tableDiv.className="table-main"
  tableDiv.innerHTML = `
  <table>
    <thead>
      <tr><th>Title</th><th>Actions</th></tr>
    </thead>
    <tbody>
      ${state.items
        .map(
          (item) => `
        <tr>
          <td>${item.title}</td>
          <td class="action">
            <button data-id=${item.id} class="edit-btn">Edit</button>
            <button data-id=${item.id} class="delete-btn">Delete</button>
          </td>
        </tr>`
        )
        .join("")}</tbody>
     </table>`;

  tableDiv.querySelectorAll(".edit-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        state.form = {
          editId: item.id,
          title: item.title,
        };
        renderApp();
      }
    });
  });

  tableDiv.querySelectorAll(".delete-btn").forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      const item = state.items.find((item) => {
        return item.id === id;
      });

      if (item) {
        state.items = state.items.filter((item) => item.id !== id);
        saveToStorage(state.items);
        renderApp();
      }
    });
  });

  return tableDiv;
}
