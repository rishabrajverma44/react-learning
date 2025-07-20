import { getState, setState } from '../app.state.js';
import { renderApp } from './App.js';
import { generateId } from '../Utils/id.js';

export function Form() {
  const form = document.createElement('form');
  //get current state
  const state = JSON.parse(getState());

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
    if (!title) {
      alert('Enter somthing !');
      return;
    }

    if (isEdit) {
      setState({ title });
    } else {
      setState({ id: generateId(), title });
    }
    renderApp();
  });

  return form;
}
