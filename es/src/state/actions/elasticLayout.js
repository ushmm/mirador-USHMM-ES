import ActionTypes from './action-types.js';

/** */
export function updateElasticWindowLayout(windowId, payload) {
  return {
    payload: payload,
    type: ActionTypes.UPDATE_ELASTIC_WINDOW_LAYOUT,
    windowId: windowId
  };
}