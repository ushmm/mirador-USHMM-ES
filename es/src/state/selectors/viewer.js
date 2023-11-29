import { createSelector } from 'reselect';
import CanvasWorld from '../../lib/CanvasWorld';
import { getVisibleCanvases } from './canvases.js';
import { getLayersForVisibleCanvases } from './layers.js';
import { getSequenceViewingDirection } from './sequences.js';

/** Instantiate a manifesto instance */
export var getCurrentCanvasWorld = createSelector(getVisibleCanvases, getLayersForVisibleCanvases, getSequenceViewingDirection, function (canvases, layers, viewingDirection) {
  return new CanvasWorld(canvases, layers, viewingDirection);
});