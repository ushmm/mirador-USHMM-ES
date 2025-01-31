import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins.js';
import * as actions from '../state/actions.js';
import { getFocusedWindowId, getWindowIds, getWindowTitles } from '../state/selectors/index.js';
import { WindowList } from '../components/WindowList.js';
import { withWorkspaceContext } from '../contexts/WorkspaceContext.js';

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */
var mapDispatchToProps = {
  focusWindow: actions.focusWindow
};

/**
 * mapStateToProps - to hook up connect
 * @memberof WorkspaceControlPanel
 * @private
 */
var mapStateToProps = function mapStateToProps(state) {
  return {
    focusedWindowId: getFocusedWindowId(state),
    titles: getWindowTitles(state),
    windowIds: getWindowIds(state)
  };
};
var enhance = compose(withTranslation(), withWorkspaceContext, connect(mapStateToProps, mapDispatchToProps), withPlugins('WindowList'));
export default enhance(WindowList);