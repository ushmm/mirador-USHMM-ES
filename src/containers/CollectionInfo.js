import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins.js';
import {
  getManifestTitle,
  getWindow,
} from '../state/selectors.js';
import * as actions from '../state/actions.js';
import { CollectionInfo } from '../components/CollectionInfo.js';

/**
 * mapStateToProps - to hook up connect
 * @memberof WindowSideBarInfoPanel
 * @private
 */
const mapStateToProps = (state, { id, windowId }) => {
  const { collectionPath } = (getWindow(state, { windowId }) || {});
  const manifestId = collectionPath[collectionPath.length - 1];

  return {
    collectionLabel: getManifestTitle(state, { manifestId }),
    collectionPath,
  };
};

const mapDispatchToProps = {
  showCollectionDialog: actions.showCollectionDialog,
};

const enhance = compose(
  withTranslation(),
  connect(mapStateToProps, mapDispatchToProps),
  withPlugins('CollectionInfo'),
);

export default enhance(CollectionInfo);
