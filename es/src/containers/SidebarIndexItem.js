import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import { withPlugins } from '../extend/withPlugins.js';
import { SidebarIndexItem } from '../components/SidebarIndexItem.js';

/**
 * Styles for withStyles HOC
 */
var styles = function styles(theme) {
  return {
    label: {
      paddingLeft: theme.spacing(1)
    }
  };
};
var enhance = compose(withStyles(styles), withTranslation(), connect(null, null), withPlugins('SidebarIndexItem'));
export default enhance(SidebarIndexItem);