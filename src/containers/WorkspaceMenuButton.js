import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core';
import { withPlugins } from '../extend/withPlugins.js';
import { WorkspaceMenuButton } from '../components/WorkspaceMenuButton.js';

/**
 *
 * @param theme
 * @returns {{ctrlBtn: {margin: (number|string)}}}
 */
const styles = theme => ({
  ctrlBtn: {
    margin: theme.spacing(1),
  },
  ctrlBtnSelected: {
    backgroundColor: theme.palette.action.selected,
  },
});

const enhance = compose(
  withTranslation(),
  withStyles(styles),
  withPlugins('WorkspaceMenuButton'),
  // further HOC
);

export default enhance(WorkspaceMenuButton);
