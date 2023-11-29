import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins.js';
import * as actions from '../state/actions.js';
import { Window } from '../components/Window.js';
import { getManifestStatus, getManifestTitle, getThumbnailNavigationPosition, getWindow, getWorkspaceType, getWindowDraggability, getWindowViewType, getManifestError } from '../state/selectors/index.js';

/**
 * mapStateToProps - used to hook up connect to action creators
 * @memberof Window
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    isFetching: getManifestStatus(state, {
      windowId: windowId
    }).isFetching,
    label: getManifestTitle(state, {
      windowId: windowId
    }),
    manifestError: getManifestError(state, {
      windowId: windowId
    }),
    maximized: (getWindow(state, {
      windowId: windowId
    }) || {}).maximized,
    sideBarOpen: (getWindow(state, {
      windowId: windowId
    }) || {}).sideBarOpen,
    thumbnailNavigationPosition: getThumbnailNavigationPosition(state, {
      windowId: windowId
    }),
    view: getWindowViewType(state, {
      windowId: windowId
    }),
    windowDraggable: getWindowDraggability(state, {
      windowId: windowId
    }),
    workspaceType: getWorkspaceType(state)
  };
};

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */
var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var windowId = _ref2.windowId;
  return {
    focusWindow: function focusWindow() {
      return dispatch(actions.focusWindow(windowId));
    }
  };
};

/**
 * @param theme
 */
var styles = function styles(theme) {
  var _theme$palette$shades, _theme$palette$shades2;
  return {
    companionAreaBottom: {
      display: 'flex',
      flex: '0',
      flexBasis: 'auto',
      minHeight: 0
    },
    companionAreaRight: {
      display: 'flex',
      flex: '0 1 auto',
      minHeight: 0
    },
    maximized: {},
    middle: {
      display: 'flex',
      flex: '1',
      flexDirection: 'row',
      minHeight: 0
    },
    middleLeft: {
      display: 'flex',
      flex: '1',
      flexDirection: 'column',
      minHeight: 0
    },
    primaryWindow: {
      display: 'flex',
      flex: '1',
      height: '300px',
      minHeight: 0,
      position: 'relative'
    },
    thumbnailArea: {
      backgroundColor: (_theme$palette$shades = theme.palette.shades) === null || _theme$palette$shades === void 0 ? void 0 : _theme$palette$shades.dark
    },
    thumbnailAreaBottom: {},
    thumbnailAreaRight: {
      minWidth: 100
    },
    window: {
      '&$maximized': {
        left: 0,
        position: 'absolute',
        top: 0,
        zIndex: theme.zIndex.modal - 1
      },
      backgroundColor: (_theme$palette$shades2 = theme.palette.shades) === null || _theme$palette$shades2 === void 0 ? void 0 : _theme$palette$shades2.dark,
      borderRadius: 0,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      minHeight: 0,
      overflow: 'hidden',
      width: '100%'
    }
  };
};
var enhance = compose(withTranslation(), withStyles(styles), connect(mapStateToProps, mapDispatchToProps), withPlugins('Window'));
export default enhance(Window);