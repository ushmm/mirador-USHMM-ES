import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins.js';
import { WorkspaceExport } from '../components/WorkspaceExport.js';
import {
  getExportableState,
} from '../state/selectors/index.js';

/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */
const mapStateToProps = state => ({
  exportableState: getExportableState(state),
});

/**
 * Styles for the withStyles HOC
 */
const styles = theme => ({
  accordionTitle: {
    padding: 0,
  },
});

const enhance = compose(
  withTranslation(),
  withStyles(styles),
  connect(mapStateToProps, {}),
  withPlugins('WorkspaceExport'),
);

export default enhance(WorkspaceExport);
