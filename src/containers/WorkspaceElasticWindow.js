import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import * as actions from '../state/actions.js';
import WorkspaceElasticWindow from '../components/WorkspaceElasticWindow.js';
import {
  selectCompanionWindowDimensions, getWorkspace, isFocused,
  getElasticLayout,
} from '../state/selectors.js';

/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */
const mapStateToProps = (state, { windowId }) => (
  {
    companionWindowDimensions: selectCompanionWindowDimensions(state, { windowId }),
    focused: isFocused(state, { windowId }),
    layout: getElasticLayout(state)[windowId],
    workspace: getWorkspace(state),
  }
);

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Workspace
 * @private
 */
const mapDispatchToProps = (dispatch, props) => ({
  focusWindow: () => dispatch(actions.focusWindow(props.windowId)),
  updateElasticWindowLayout: (windowId, position) => {
    dispatch(
      actions.updateElasticWindowLayout(windowId, position),
    );
  },
});

/**
 * @param theme
 */
const styles = theme => ({
  focused: {
    zIndex: theme.zIndex.modal - 1,
  },
});

const enhance = compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  // further HOC go here
);

export default enhance(WorkspaceElasticWindow);
