import { Component } from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/MenuSharp';
import cn from 'classnames';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/CloseSharp';
import MiradorMenuButton from '../containers/MiradorMenuButton.js';
import ns from '../config/css-ns.js';

/** */
export class MinimalWindow extends Component {
  /** */
  render() {
    const {
      allowClose,
      allowWindowSideBar,
      ariaLabel,
      children,
      classes,
      label,
      removeWindow,
      t,
      windowId,
    } = this.props;

    return (
      <Paper
        component="section"
        elevation={1}
        id={windowId}
        className={
          cn(classes.window, ns('placeholder-window'))
        }
        aria-label={label && ariaLabel ? t('window', { label }) : null}
      >
        <AppBar position="relative" color="default">
          <Toolbar
            disableGutters
            className={cn(
              classes.windowTopBarStyle,
              ns('window-top-bar'),
            )}
            variant="dense"
          >
            {allowWindowSideBar && (
              <MiradorMenuButton
                aria-label={t('toggleWindowSideBar')}
                disabled
              >
                <MenuIcon fontSize="large" />
              </MiradorMenuButton>
            )}
            <Typography variant="h2" noWrap color="inherit" className={classes.title}>
              {label}
            </Typography>
            {allowClose && removeWindow && (
              <MiradorMenuButton
                aria-label={t('closeWindow')}
                className={cn(classes.button, ns('window-close'))}
                onClick={removeWindow}
                TooltipProps={{
                  tabIndex: ariaLabel ? '0' : '-1',
                }}
              >
                <CloseIcon fontSize="large" />
              </MiradorMenuButton>
            )}
          </Toolbar>
        </AppBar>
        {children}
      </Paper>
    );
  }
}

MinimalWindow.propTypes = {
  allowClose: PropTypes.bool,
  allowWindowSideBar: PropTypes.bool,
  ariaLabel: PropTypes.bool,
  children: PropTypes.node,
  classes: PropTypes.objectOf(PropTypes.string),
  label: PropTypes.string,
  removeWindow: PropTypes.func,
  t: PropTypes.func,
  windowId: PropTypes.string.isRequired,
};

MinimalWindow.defaultProps = {
  allowClose: true,
  allowWindowSideBar: true,
  ariaLabel: true,
  children: null,
  classes: {},
  label: '',
  removeWindow: () => {},
  t: key => key,
};
