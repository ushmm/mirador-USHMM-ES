import { Component } from 'react';
import PropTypes from 'prop-types';
import { Rnd } from 'react-rnd';
import ResizeObserver from 'react-resize-observer';
import classNames from 'classnames';
import WorkspaceElasticWindow from '../containers/WorkspaceElasticWindow.js';
import ns from '../config/css-ns.js';

/**
 * Represents a work area that contains any number of windows
 * @memberof Workspace
 * @private
 */
class WorkspaceElastic extends Component {
  /**
   */
  render() {
    const {
      classes,
      workspace,
      elasticLayout,
      setWorkspaceViewportDimensions,
      setWorkspaceViewportPosition,
    } = this.props;

    const { viewportPosition } = workspace;
    const offsetX = workspace.width / 2;
    const offsetY = workspace.height / 2;

    return (
      <div style={{ height: '100%', position: 'relative', width: '100%' }}>
        <ResizeObserver
          onReflow={() => {}}
          onResize={(rect) => { setWorkspaceViewportDimensions(rect); }}
        />

        <Rnd
          size={{
            height: workspace.height,
            width: workspace.width,
          }}
          position={{
            x: -1 * viewportPosition.x - offsetX, y: -1 * viewportPosition.y - offsetY,
          }}
          enableResizing={{
            bottom: false,
            bottomLeft: false,
            bottomRight: false,
            left: false,
            right: false,
            top: false,
            topLeft: false,
            topRight: false,
          }}
          onDragStop={(e, d) => {
            setWorkspaceViewportPosition({ x: -1 * d.x - offsetX, y: -1 * d.y - offsetY });
          }}
          cancel={`.${ns('window')}`}
          className={classNames(classes.workspace, ns('workspace'))}
          disableDragging={!workspace.draggingEnabled}
        >
          {
            Object.keys(elasticLayout).map(windowId => (
              <WorkspaceElasticWindow
                key={windowId}
                windowId={windowId}
              />
            ))
          }
        </Rnd>
      </div>
    );
  }
}

WorkspaceElastic.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  elasticLayout: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  setWorkspaceViewportDimensions: PropTypes.func.isRequired,
  setWorkspaceViewportPosition: PropTypes.func.isRequired,
  workspace: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default WorkspaceElastic;
