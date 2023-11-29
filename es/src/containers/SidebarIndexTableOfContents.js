import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import { alpha } from '@material-ui/core/styles/colorManipulator';
import { withPlugins } from '../extend/withPlugins.js';
import { SidebarIndexTableOfContents } from '../components/SidebarIndexTableOfContents.js';
import { getSequenceTreeStructure, getVisibleNodeIds, getExpandedNodeIds, getNodeIdToScrollTo } from '../state/selectors/index.js';
import * as actions from '../state/actions.js';

/**
 * mapStateToProps - to hook up connect
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id,
    windowId = _ref.windowId;
  return {
    expandedNodeIds: getExpandedNodeIds(state, {
      companionWindowId: id,
      windowId: windowId
    }),
    nodeIdToScrollTo: getNodeIdToScrollTo(state, {
      companionWindowId: id,
      windowId: windowId
    }),
    treeStructure: getSequenceTreeStructure(state, {
      windowId: windowId
    }),
    visibleNodeIds: getVisibleNodeIds(state, {
      companionWindowId: id,
      windowId: windowId
    })
  };
};

/**
 * mapStateToProps - used to hook up connect to state
 * @memberof SidebarIndexTableOfContents
 * @private
 */
var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var id = _ref2.id,
    windowId = _ref2.windowId;
  return {
    expandNodes: function expandNodes(nodeIds) {
      return dispatch(actions.expandNodes(windowId, id, nodeIds));
    },
    setCanvas: function setCanvas() {
      return dispatch(actions.setCanvas.apply(actions, arguments));
    },
    toggleNode: function toggleNode(nodeId) {
      return dispatch(actions.toggleNode(windowId, id, nodeId));
    }
  };
};

/**
 * Styles for withStyles HOC
 */
var styles = function styles(theme) {
  var _theme$palette$highli;
  return {
    content: {
      alignItems: 'flex-start',
      borderLeft: '1px solid transparent',
      padding: '8px 16px 8px 0',
      width: 'auto'
    },
    group: {
      borderLeft: "1px solid ".concat(theme.palette.grey[300])
    },
    label: {
      paddingLeft: 0
    },
    // needed for pseudo $label class
    root: {
      flexGrow: 1
    },
    selected: {},
    // needed for pseudo $selected class
    treeItemRoot: {
      '&:focus > $content': {
        backgroundColor: theme.palette.action.selected
      },
      '&:hover > $content': {
        backgroundColor: theme.palette.action.hover
      },
      '&:hover >$content $label, &:focus > $content $label, &$selected > $content $label, &$selected > $content $label:hover, &$selected:focus > $content $label': {
        backgroundColor: 'transparent'
      }
    },
    visibleNode: {
      backgroundColor: alpha(((_theme$palette$highli = theme.palette.highlights) === null || _theme$palette$highli === void 0 ? void 0 : _theme$palette$highli.primary) || theme.palette.action.selected, 0.35),
      display: 'inline'
    }
  };
};
var enhance = compose(withStyles(styles), withTranslation(), connect(mapStateToProps, mapDispatchToProps), withPlugins('SidebarIndexTableOfContents'));
export default enhance(SidebarIndexTableOfContents);