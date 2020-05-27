import React from 'react';
import ReactDOM from 'react-dom'
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions'
import { fetchAllPokemon } from './util/api_util'
import { configureStore } from './store/store'
import { selectAllPokemon} from './reducers/selectors'
import Root from './components/root'

window.receiveAllPokemon = receiveAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
window.selectAllPokemon = selectAllPokemon;


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

});