import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import { withPlugins } from '../extend/withPlugins.js';
import { SidebarIndexThumbnail } from '../components/SidebarIndexThumbnail.js';
import { getConfig } from '../state/selectors/index.js';

/**
 * mapStateToProps - used to hook up state to props
 * @memberof SidebarIndexThumbnail
 * @private
 */
const mapStateToProps = (state, { data }) => ({
  ...(getConfig(state).canvasNavigation || {}),
});

/**
 * Styles for withStyles HOC
 */
const styles = theme => ({
  label: {
    paddingLeft: theme.spacing(1),
  },
});

const enhance = compose(
  withStyles(styles),
  withTranslation(),
  connect(mapStateToProps, null),
  withPlugins('SidebarIndexThumbnail'),
);

export default enhance(SidebarIndexThumbnail);
