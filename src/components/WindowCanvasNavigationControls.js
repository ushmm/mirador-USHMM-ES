import { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ZoomControls from '../containers/ZoomControls.js';
import ViewerInfo from '../containers/ViewerInfo.js';
import ViewerNavigation from '../containers/ViewerNavigation.js';
import ns from '../config/css-ns.js';
import { PluginHook } from './PluginHook.js';

/**
 * Represents the viewer controls in the mirador workspace.
 */
export class WindowCanvasNavigationControls extends Component {
  /**
   * Determine if canvasNavControls are stacked (based on a hard-coded width)
  */
  canvasNavControlsAreStacked() {
    const { size } = this.props;

    return (size && size.width && size.width <= 253);
  }

  /** */
  render() {
    const {
      classes, visible, windowId, zoomToWorld,
    } = this.props;

    if (!visible) return (<Typography variant="srOnly" component="div"><ViewerInfo windowId={windowId} /></Typography>);

    return (
      <Paper
        square
        className={
          classNames(
            classes.controls,
            ns('canvas-nav'),
            classes.canvasNav,
            this.canvasNavControlsAreStacked() ? ns('canvas-nav-stacked') : null,
            this.canvasNavControlsAreStacked() ? classes.canvasNavStacked : null,
          )
}
        elevation={0}
      >
        <ZoomControls
          displayDivider={!this.canvasNavControlsAreStacked()}
          windowId={windowId}
          zoomToWorld={zoomToWorld}
        />
        <ViewerNavigation windowId={windowId} />
        <ViewerInfo windowId={windowId} />

        <PluginHook {...this.props} />
      </Paper>
    );
  }
}

WindowCanvasNavigationControls.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  size: PropTypes.shape({ width: PropTypes.number }).isRequired,
  visible: PropTypes.bool,
  windowId: PropTypes.string.isRequired,
  zoomToWorld: PropTypes.func.isRequired,
};

WindowCanvasNavigationControls.defaultProps = {
  classes: {},
  visible: true,
};
