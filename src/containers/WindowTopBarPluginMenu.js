import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core';
import { withPlugins } from '../extend/withPlugins.js';
import { WindowTopBarPluginMenu } from '../components/WindowTopBarPluginMenu.js';
import { withWorkspaceContext } from '../contexts/WorkspaceContext.js';

/**
 *
 * @param theme
 * @returns {{ctrlBtn: {margin: (number|string)}}}
 */
const styles = theme => ({
  ctrlBtnSelected: {
    backgroundColor: theme.palette.action.selected,
  },
});

const enhance = compose(
  withTranslation(),
  withWorkspaceContext,
  withStyles(styles),
  withPlugins('WindowTopBarPluginMenu'),
);

export default enhance(WindowTopBarPluginMenu);
