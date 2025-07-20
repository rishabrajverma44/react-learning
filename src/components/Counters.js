import { getState } from '../app.state';

export function Counter() {
  const counter = document.createElement('div');
  counter.className = 'counter';
  //get current state
  const state = JSON.parse(getState());

  const total = state.items.length;

  counter.innerHTML = `<p class="counter"> Total ${total}</p>`;
  return counter;
}
