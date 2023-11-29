import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core';
import { withPlugins } from '../extend/withPlugins.js';
import * as actions from '../state/actions.js';
import { getWindowConfig, isFocused } from '../state/selectors/index.js';
import { WindowTopBar } from '../components/WindowTopBar.js';

/** mapStateToProps */
const mapStateToProps = (state, { windowId }) => {
  const config = getWindowConfig(state, { windowId });

  return {
    allowClose: config.allowClose,
    allowFullscreen: config.allowFullscreen,
    allowMaximize: config.allowMaximize,
    allowTopMenuButton: config.allowTopMenuButton,
    allowWindowSideBar: config.allowWindowSideBar,
    focused: isFocused(state, { windowId }),
    maximized: config.maximized,
  };
};

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */
const mapDispatchToProps = (dispatch, { windowId }) => ({
  focusWindow: () => dispatch(actions.focusWindow(windowId)),
  maximizeWindow: () => dispatch(actions.maximizeWindow(windowId)),
  minimizeWindow: () => dispatch(actions.minimizeWindow(windowId)),
  removeWindow: () => dispatch(actions.removeWindow(windowId)),
  toggleWindowSideBar: () => dispatch(actions.toggleWindowSideBar(windowId)),
});

/**
 * @param theme
 * @returns {{typographyBody: {flexGrow: number, fontSize: number|string},
 * windowTopBarStyle: {minHeight: number, paddingLeft: number, backgroundColor: string}}}
 */
const styles = theme => ({
  focused: {},
  windowTopBarStyle: {
    '&$focused': {
      borderTop: `2px solid ${theme.palette.primary.main}`,
    },
    backgroundColor: theme.palette.shades?.main,
    borderTop: '2px solid transparent',
    minHeight: 32,
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
  },
  windowTopBarStyleDraggable: {
    cursor: 'move',
  },
});

const enhance = compose(
  withTranslation(),
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  withPlugins('WindowTopBar'),
);

export default enhance(WindowTopBar);
