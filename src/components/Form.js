import { state } from '../app.state.js';
import { saveToStorage } from '../app.storage.js';
import { renderApp } from './App.js';
import { generateId } from '../Utils/id.js';

export function Form() {
  const form = document.createElement('form');

  //check always edit mood or not
  const isEdit = !!state.form.editId;
  form.innerHTML = `
  <div class='form'>
    <input name="title" value="${state.form.title || ''}" placeholder="Tittle" />
    <button type="submit">${isEdit ? 'Update' : 'Add'} Item</button>
  </div>
  `;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = form.title.value.trim();
    if (!title) return;

    if (isEdit) {
      const item = state.items.find((i) => i.id === state.form.editId);
      if (item) item.title = title;
    } else {
      state.items.push({ id: generateId(), title });
    }
    //reset the state of form we can undo/redo form state here if needed
    state.form = {};
    saveToStorage();
    renderApp();
  });

  return form;
}
