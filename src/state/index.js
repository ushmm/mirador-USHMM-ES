import * as actions from './actions/index.js';
import * as reducers from './reducers/index.js';
import * as sagas from './sagas/index.js';
import * as selectors from './selectors/index.js';
import createStore from './createStore/index.js';

export default {
  actions,
  createStore,
  reducers,
  sagas,
  selectors,
};
