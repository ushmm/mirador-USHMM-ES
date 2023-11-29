import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import { withPlugins } from '../extend/withPlugins.js';
import {
  getManifestHomepage,
  getManifestRelated,
  getManifestRenderings,
  getManifestSeeAlso,
  getManifestUrl,
} from '../state/selectors/index.js';
import { ManifestRelatedLinks } from '../components/ManifestRelatedLinks.js';

/**
 * mapStateToProps - to hook up connect
 * @memberof WindowSideBarInfoPanel
 * @private
 */
const mapStateToProps = (state, { id, windowId }) => ({
  homepage: getManifestHomepage(state, { windowId }),
  manifestUrl: getManifestUrl(state, { windowId }),
  related: getManifestRelated(state, { windowId }),
  renderings: getManifestRenderings(state, { windowId }),
  seeAlso: getManifestSeeAlso(state, { windowId }),
});

const styles = {
  labelValueMetadata: {
    '& dd': {
      marginBottom: '.5em',
      marginLeft: '0',
    },
  },
};

const enhance = compose(
  withStyles(styles),
  withTranslation(),
  connect(mapStateToProps),
  withPlugins('ManifestRelatedLinks'),
);

export default enhance(ManifestRelatedLinks);
