import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import { withPlugins } from '../extend/withPlugins.js';
import { WorkspaceOptionsButton } from '../components/WorkspaceOptionsButton.js';

/**
 *
 * @param theme
 */
var styles = function styles(theme) {
  return {
    ctrlBtn: {
      margin: theme.spacing(1)
    },
    ctrlBtnSelected: {
      backgroundColor: theme.palette.action.selected
    }
  };
};
var enhance = compose(withStyles(styles), withTranslation(), withPlugins('WorkspaceOptionsButton'));
export default enhance(WorkspaceOptionsButton);