import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins.js';
import * as actions from '../state/actions.js';
import { getShowZoomControlsConfig, getThemeIds, getWorkspace } from '../state/selectors/index.js';
import { withWorkspaceContext } from '../contexts/WorkspaceContext.js';
import { WorkspaceMenu } from '../components/WorkspaceMenu.js';

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof WorkspaceMenu
 * @private
 */
var mapDispatchToProps = {
  toggleZoomControls: actions.toggleZoomControls
};

/**
 * mapStateToProps - to hook up connect
 * @memberof WindowViewer
 * @private
 */
var mapStateToProps = function mapStateToProps(state) {
  return {
    isWorkspaceAddVisible: getWorkspace(state).isWorkspaceAddVisible,
    showThemePicker: getThemeIds(state).length > 0,
    showZoomControls: getShowZoomControlsConfig(state)
  };
};
var enhance = compose(withTranslation(), withWorkspaceContext, connect(mapStateToProps, mapDispatchToProps), withPlugins('WorkspaceMenu'));
export default enhance(WorkspaceMenu);