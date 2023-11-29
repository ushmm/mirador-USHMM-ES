import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { withPlugins } from '../extend/withPlugins.js';
import { WorkspaceControlPanelButtons } from '../components/WorkspaceControlPanelButtons.js';

/**
 *
 * @param theme
 * @returns {{ctrlBtn: {margin: (number|string)}}}
 */
const styles = theme => ({
  ctrlBtn: {
    margin: theme.spacing(1),
  },
});

const enhance = compose(
  withStyles(styles),
  withPlugins('WorkspaceControlPanelButtons'),
);

export default enhance(WorkspaceControlPanelButtons);
