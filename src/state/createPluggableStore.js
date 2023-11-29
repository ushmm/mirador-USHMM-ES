import deepmerge from 'deepmerge';
import createStore from './createStore.js';
import { importConfig } from './actions/config.js';
import {
  filterValidPlugins,
  getConfigFromPlugins,
  getReducersFromPlugins,
  getSagasFromPlugins,
} from '../extend/pluginPreprocessing.js';

/**
 * Configure Store
 */
function createPluggableStore(config, plugins = []) {
  const filteredPlugins = filterValidPlugins(plugins);

  const store = createStore(
    getReducersFromPlugins(filteredPlugins),
    getSagasFromPlugins(filteredPlugins),
  );

  store.dispatch(
    importConfig(
      deepmerge(getConfigFromPlugins(filteredPlugins), config),
    ),
  );

  return store;
}

export default createPluggableStore;
