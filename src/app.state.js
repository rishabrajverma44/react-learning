import { saveToStorage } from './app.storage';

export const state = {
  items: [],
  form: {
    editId: null,
    title: '',
  },
};

export function getState() {
  return JSON.stringify(state);
}

export function setFormEdit(editId = null, title) {
  state.form.editId = editId;
  state.form.title = title;
}

export function setState({ id = null, title }) {
  if (id !== null) {
    //for adding new state
    state.items.push({ id, title });
  } else {
    //for update state
    const item = state.items.find((element) => element.id === state.form.editId);
    item.title = title;
    state.form.title = title;
  }
  //reset
  state.form = {};
  saveToStorage();
}

export function deleteForm(id) {
  state.items = state.items.filter((item) => item.id !== id);
  saveToStorage(state.items);
}
