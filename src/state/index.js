import * as actions from './actions.js';
import * as reducers from './reducers.js';
import * as sagas from './sagas.js';
import * as selectors from './selectors.js';
import createStore from './createStore.js';

export default {
  actions,
  createStore,
  reducers,
  sagas,
  selectors,
};
