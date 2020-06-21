import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OSDViewer from '../containers/OpenSeadragonViewer';
import WindowCanvasNavigationControls from '../containers/WindowCanvasNavigationControls';

/**
 * Represents a WindowViewer in the mirador workspace. Responsible for mounting
 * OSD and Navigation
 */
export class WindowViewer extends Component {
  /** */
  constructor(props) {
    super(props);
    this.state = {};
  }

  /** */
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  /**
   * Renders things
   */
  render() {
    const { windowId } = this.props;

    const { hasError } = this.state;

    if (hasError) {
      return <></>;
    }

    return (
      <OSDViewer
        windowId={windowId}
      >
        <WindowCanvasNavigationControls windowId={windowId} />
      </OSDViewer>
    );
  }
}

WindowViewer.propTypes = {
  windowId: PropTypes.string.isRequired,
};
