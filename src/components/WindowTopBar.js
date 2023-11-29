import { Component } from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/MenuSharp';
import CloseIcon from '@material-ui/icons/CloseSharp';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import classNames from 'classnames';
import WindowTopMenuButton from '../containers/WindowTopMenuButton.js';
import WindowTopBarPluginArea from '../containers/WindowTopBarPluginArea.js';
import WindowTopBarPluginMenu from '../containers/WindowTopBarPluginMenu.js';
import WindowTopBarTitle from '../containers/WindowTopBarTitle.js';
import MiradorMenuButton from '../containers/MiradorMenuButton.js';
import FullScreenButton from '../containers/FullScreenButton.js';
import WindowMaxIcon from './icons/WindowMaxIcon.js';
import WindowMinIcon from './icons/WindowMinIcon.js';
import WindowDownloadIcon from './icons/WindowDownloadIcon.js';
import ns from '../config/css-ns.js';

/**
 * WindowTopBar
 */
export class WindowTopBar extends Component {
  /**
   * render
   * @return
   */
  render() {
    const {
      removeWindow, windowId, classes, toggleWindowSideBar, t, windowDraggable,
      maximizeWindow, maximized, minimizeWindow, focused, allowClose, allowMaximize,
      focusWindow, allowFullscreen, allowTopMenuButton, allowWindowSideBar,
    } = this.props;

    return (
      <AppBar position="relative" color="default">
        <nav aria-label={t('windowNavigation')}>
          <Toolbar
            disableGutters
            onMouseDown={focusWindow}
            className={classNames(
              classes.windowTopBarStyle,
              windowDraggable ? classes.windowTopBarStyleDraggable : null,
              focused ? classes.focused : null,
              ns('window-top-bar'),
            )}
            variant="dense"
          >
            {allowWindowSideBar && (
              <MiradorMenuButton
                aria-label={t('toggleWindowSideBar')}
                onClick={toggleWindowSideBar}
                className={ns('window-menu-btn')}
              >
                <MenuIcon fontSize="large" />
              </MiradorMenuButton>
            )}
            <WindowTopBarTitle
              windowId={windowId}
            />
            {allowTopMenuButton && (
              <WindowTopMenuButton windowId={windowId} className={ns('window-menu-btn')} />
            )}
            <WindowTopBarPluginArea windowId={windowId} />
            <WindowTopBarPluginMenu windowId={windowId} />
            {allowMaximize && (
              <MiradorMenuButton
                aria-label={(maximized ? t('minimizeWindow') : t('maximizeWindow'))}
                className={classNames(ns('window-maximize'), ns('window-menu-btn'))}
                onClick={(maximized ? minimizeWindow : maximizeWindow)}
              >
                {(maximized ? <WindowMinIcon fontSize="large" /> : <WindowMaxIcon fontSize="large" />)}
              </MiradorMenuButton>
            )}
            <MiradorMenuButton
              aria-label="Download image"
              className={classNames(ns('window-download'), ns('window-menu-btn'))}
              onClick={(() => {
                if (window.PubSub) {
                  window.PubSub.publish('MiradorDownload', windowId);
                }
              })}
            >
              <WindowDownloadIcon fontSize="large" />
            </MiradorMenuButton>
            {allowFullscreen && (
              <FullScreenButton className={ns('window-menu-btn')} />
            )}
            {allowClose && (
              <MiradorMenuButton
                aria-label={t('closeWindow')}
                className={classNames(ns('window-close'), ns('window-menu-btn'))}
                onClick={removeWindow}
              >
                <CloseIcon fontSize="large" />
              </MiradorMenuButton>
            )}
          </Toolbar>
        </nav>
      </AppBar>
    );
  }
}

WindowTopBar.propTypes = {
  allowClose: PropTypes.bool,
  allowFullscreen: PropTypes.bool,
  allowMaximize: PropTypes.bool,
  allowTopMenuButton: PropTypes.bool,
  allowWindowSideBar: PropTypes.bool,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  focused: PropTypes.bool,
  focusWindow: PropTypes.func,
  maximized: PropTypes.bool,
  maximizeWindow: PropTypes.func,
  minimizeWindow: PropTypes.func,
  removeWindow: PropTypes.func.isRequired,
  t: PropTypes.func,
  toggleWindowSideBar: PropTypes.func.isRequired,
  windowDraggable: PropTypes.bool,
  windowId: PropTypes.string.isRequired,
};

WindowTopBar.defaultProps = {
  allowClose: true,
  allowFullscreen: false,
  allowMaximize: true,
  allowTopMenuButton: true,
  allowWindowSideBar: true,
  focused: false,
  focusWindow: () => {},
  maximized: false,
  maximizeWindow: () => {},
  minimizeWindow: () => {},
  t: key => key,
  windowDraggable: true,
};
