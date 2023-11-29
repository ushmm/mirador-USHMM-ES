import ThumbnailNavigation from '../containers/ThumbnailNavigation.js';
import WindowSideBarAnnotationsPanel from '../containers/WindowSideBarAnnotationsPanel.js';
import WindowSideBarInfoPanel from '../containers/WindowSideBarInfoPanel.js';
import WindowSideBarCanvasPanel from '../containers/WindowSideBarCanvasPanel.js';
import AttributionPanel from '../containers/AttributionPanel.js';
import SearchPanel from '../containers/SearchPanel.js';
import LayersPanel from '../containers/LayersPanel.js';
import CustomPanel from '../containers/CustomPanel.js';
import WindowSideBarCollectionPanel from '../containers/WindowSideBarCollectionPanel.js';
var map = {
  annotations: WindowSideBarAnnotationsPanel,
  attribution: AttributionPanel,
  canvas: WindowSideBarCanvasPanel,
  collection: WindowSideBarCollectionPanel,
  custom: CustomPanel,
  info: WindowSideBarInfoPanel,
  layers: LayersPanel,
  search: SearchPanel,
  thumbnailNavigation: ThumbnailNavigation
};
export default map;