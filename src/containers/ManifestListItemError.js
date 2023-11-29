import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import { withPlugins } from '../extend/withPlugins.js';
import { fetchManifest, removeResource } from '../state/actions.js';
import { ManifestListItemError } from '../components/ManifestListItemError.js';

/** */
const mapDispatchToProps = {
  onDismissClick: removeResource,
  onTryAgainClick: fetchManifest,
};

/**
 *
 * @param theme
 * @returns {{manifestIdText: {wordBreak: string},
 * errorIcon: {color: string, width: string, height: string}}}
 */
const styles = theme => ({
  errorIcon: {
    color: theme.palette.error.main,
    height: '2rem',
    width: '2rem',
  },
  manifestIdText: {
    wordBreak: 'break-all',
  },
});

const enhance = compose(
  withTranslation(),
  withStyles(styles),
  connect(null, mapDispatchToProps),
  withPlugins('ManifestListItemError'),
);

export default enhance(ManifestListItemError);
