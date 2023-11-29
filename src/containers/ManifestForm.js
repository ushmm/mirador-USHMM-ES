import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core';
import { withPlugins } from '../extend/withPlugins.js';
import * as actions from '../state/actions.js';
import { ManifestForm } from '../components/ManifestForm.js';

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestForm
 * @private
 */
const mapDispatchToProps = { addResource: actions.addResource };
/**
 *
 * @param theme
 */
const styles = theme => ({
  buttons: {
    textAlign: 'right',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'inherit',
    },
  },
  input: {
    ...theme.typography.body1,
  },
});

const enhance = compose(
  withStyles(styles),
  withTranslation(),
  connect(null, mapDispatchToProps),
  withPlugins('ManifestForm'),
);

export default enhance(ManifestForm);
