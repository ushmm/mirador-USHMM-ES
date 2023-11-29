import ActionTypes from './action-types.js';

/**
 * updateLayers - action creator
 * @param {string} id
 */
export function updateLayers(windowId, canvasId, payload) {
  return {
    canvasId, payload, type: ActionTypes.UPDATE_LAYERS, windowId,
  };
}
