import { getState, setFormEdit, deleteForm } from '../app.state';
import { renderApp } from './App.js';

export function Table() {
  //get current state
  const state = JSON.parse(getState());
  const tableDiv = document.createElement('div');
  tableDiv.className = 'table-main';
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
        .join('')}</tbody>
     </table>`;

  if (state.items.length === 0) {
    tableDiv.style.display = 'none';
  }

  tableDiv.querySelectorAll('.edit-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        setFormEdit(id, item.title);
        renderApp();
      }
    });
  });

  tableDiv.querySelectorAll('.delete-btn').forEach((deleteBtn) => {
    deleteBtn.addEventListener('click', (e) => {
      if (confirm('delete ?')) {
        const id = e.target.dataset.id;
        deleteForm(id);
        renderApp();
      }
    });
  });

  return tableDiv;
}
