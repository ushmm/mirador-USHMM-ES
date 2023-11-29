import { createSelector } from 'reselect';
import CanvasWorld from '../../lib/CanvasWorld.js';

import { getVisibleCanvases } from './canvases.js';
import { getLayersForVisibleCanvases } from './layers.js';
import { getSequenceViewingDirection } from './sequences.js';

/** Instantiate a manifesto instance */
export const getCurrentCanvasWorld = createSelector(
  getVisibleCanvases,
  getLayersForVisibleCanvases,
  getSequenceViewingDirection,
  (canvases, layers, viewingDirection) => new CanvasWorld(canvases, layers, viewingDirection),
);
