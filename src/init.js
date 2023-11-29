import MiradorViewer from './lib/MiradorViewer.js';

/**
 * Default Mirador instantiation
 */
function viewer(config, pluginsOrStruct) {
  let struct;

  if (Array.isArray(pluginsOrStruct)) {
    struct = { plugins: pluginsOrStruct };
  } else {
    struct = pluginsOrStruct;
  }

  return new MiradorViewer(config, struct);
}

export default {
  viewer,
};
