import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core';
import { withPlugins } from '../extend/withPlugins.js';
import { WindowTopBarPluginArea } from '../components/WindowTopBarPluginArea.js';

/**
 */
const styles = {};

const enhance = compose(
  withTranslation(),
  withStyles(styles),
  connect(null, null),
  withPlugins('WindowTopBarPluginArea'),
);

export default enhance(WindowTopBarPluginArea);
