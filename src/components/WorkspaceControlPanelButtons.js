import { Component } from 'react';
import PropTypes from 'prop-types';
import FullScreenButton from '../containers/FullScreenButton.js';
import WorkspaceMenuButton from '../containers/WorkspaceMenuButton.js';
import WorkspaceOptionsButton from '../containers/WorkspaceOptionsButton.js';
import WindowListButton from '../containers/WindowListButton.js';
import { PluginHook } from './PluginHook.js';

/**
 *
 */
export class WorkspaceControlPanelButtons extends Component {
  /**
   * render
   *
   * @return {type}  description
   */
  render() {
    const { classes } = this.props;
    return (
      <>
        <WindowListButton />
        <WorkspaceMenuButton />
        <WorkspaceOptionsButton />
        <FullScreenButton className={classes.ctrlBtn} />
        <PluginHook {...this.props} />
      </>
    );
  }
}

WorkspaceControlPanelButtons.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};

WorkspaceControlPanelButtons.defaultProps = {
  classes: {},
};
