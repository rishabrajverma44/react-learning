import { Counter } from './Counters.js';
import { Search } from './Filters.js';
import { Form } from './Form.js';
import { Table } from './Table.js';

export function renderApp() {
  const root = document.getElementById('app');
  root.innerHTML = '';
  //we append diffrent js function as a component structure
  const container = document.createElement('div');
  container.appendChild(Counter());
  container.appendChild(Form());
 // container.appendChild(Search());
  container.appendChild(Table());

  root.appendChild(container);
}
