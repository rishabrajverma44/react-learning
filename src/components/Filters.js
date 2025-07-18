import { state } from '../app.state';
import { renderApp } from './App';

export function Search() {
  const searchBox = document.createElement('form');
  searchBox.innerHTML = `
    <div class='search'>
       <input id="searchBox" placeholder="Search"/>
       <button type="button" id="search">Search</button>
       <button type="button" id="cancel">X</button>
    </div>
  `;

  const currentData = JSON.parse(localStorage.getItem('formData')) || [];
  const input = searchBox.querySelector('#searchBox');
  const cancelBtn = searchBox.querySelector('#cancel');
  const searchBtn = searchBox.querySelector('#search');
  //search
  const handleSearch = () => {
    const searchQuery = input.value.toLowerCase().trim();

    if (searchQuery !== '') {
      const filteredData = state.items.filter((element) =>
        element.title.toLowerCase().includes(searchQuery)
      );
      state.items = filteredData;
      renderApp();
    }
  };
  //cancel
  const handleCancel = () => {
    input.value = '';
    //console.log(currentData);
    //console.log(state);
    //take all data form local storage directly
    state.items = currentData;
    renderApp();
  };
  //clear
  const handleChange = (e) => {
    console.log(e.target.value)
    if (input.value !== '') {
      cancelBtn.style.display = 'block';
    } else {
      cancelBtn.style.display = 'none';
    }
  };

  searchBtn.addEventListener('click', handleSearch);
  cancelBtn.addEventListener('click', handleCancel);

  return searchBox;
}

export function filter() {
  const selectDropdown = document.createElement('div');
}
