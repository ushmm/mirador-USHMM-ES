import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins.js';
import { getManifestTitle } from '../state/selectors.js';
import { MosaicRenderPreview } from '../components/MosaicRenderPreview.js';

/** */
const mapStateToProps = (state, { windowId }) => (
  {
    title: getManifestTitle(state, { windowId }),
  }
);

/**
 *
 * @param theme
 */
const styles = theme => ({
  preview: {
    ...theme.typography.h4,
  },
});

const enhance = compose(
  withStyles(styles),
  withTranslation(),
  connect(mapStateToProps, null),
  withPlugins('MosaicRenderPreview'),
);

export default enhance(MosaicRenderPreview);
