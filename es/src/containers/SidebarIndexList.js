import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import { withPlugins } from '../extend/withPlugins.js';
import * as actions from '../state/actions.js';
import { getCompanionWindow, getCanvases, getVisibleCanvasIds } from '../state/selectors/index.js';
import { SidebarIndexList } from '../components/SidebarIndexList.js';

/**
 * mapStateToProps - to hook up connect
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id,
    windowId = _ref.windowId;
  return {
    canvases: getCanvases(state, {
      windowId: windowId
    }),
    selectedCanvasIds: getVisibleCanvasIds(state, {
      windowId: windowId
    }),
    variant: getCompanionWindow(state, {
      companionWindowId: id,
      windowId: windowId
    }).variant
  };
};

/**
 * mapStateToProps - used to hook up connect to state
 * @memberof SidebarIndexList
 * @private
 */
var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var id = _ref2.id,
    windowId = _ref2.windowId;
  return {
    setCanvas: function setCanvas() {
      return dispatch(actions.setCanvas.apply(actions, arguments));
    }
  };
};

/**
 * Styles for withStyles HOC
 */
var styles = function styles(theme) {
  return {
    label: {
      paddingLeft: theme.spacing(1)
    },
    listItem: {
      borderBottom: "0.5px solid ".concat(theme.palette.divider),
      paddingRight: theme.spacing(1)
    }
  };
};
var enhance = compose(withStyles(styles), withTranslation(), connect(mapStateToProps, mapDispatchToProps), withPlugins('SidebarIndexList'));
export default enhance(SidebarIndexList);