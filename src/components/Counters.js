import { state } from '../app.state';

export function Counter() {
  const counter = document.createElement('div');
  counter.className = 'counter';

  const total = state.items.length;

  counter.innerHTML = `<p class="counter"> Total ${total}</p>`;
  return counter;
}
