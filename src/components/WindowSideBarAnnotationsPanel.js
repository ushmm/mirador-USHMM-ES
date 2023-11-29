import { createRef, Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import AnnotationSettings from '../containers/AnnotationSettings.js';
import CanvasAnnotations from '../containers/CanvasAnnotations.js';
import CompanionWindow from '../containers/CompanionWindow.js';
import ns from '../config/css-ns.js';

/**
 * WindowSideBarAnnotationsPanel ~
*/
export class WindowSideBarAnnotationsPanel extends Component {
  /** */
  constructor(props) {
    super(props);

    this.containerRef = createRef();
  }

  /**
   * Returns the rendered component
  */
  render() {
    const {
      annotationCount, classes, canvasIds, t, windowId, id,
    } = this.props;
    return (
      <CompanionWindow
        title={t('annotations')}
        paperClassName={ns('window-sidebar-annotation-panel')}
        windowId={windowId}
        id={id}
        ref={this.containerRef}
        otherRef={this.containerRef}
        titleControls={<AnnotationSettings windowId={windowId} />}
      >
        <div className={classes.section}>
          <Typography component="p" variant="subtitle2">{t('showingNumAnnotations', { count: annotationCount, number: annotationCount })}</Typography>
        </div>

        {canvasIds.map((canvasId, index) => (
          <CanvasAnnotations
            canvasId={canvasId}
            containerRef={this.containerRef}
            key={canvasId}
            index={index}
            totalSize={canvasIds.length}
            windowId={windowId}
          />
        ))}
      </CompanionWindow>
    );
  }
}

WindowSideBarAnnotationsPanel.propTypes = {
  annotationCount: PropTypes.number.isRequired,
  canvasIds: PropTypes.arrayOf(PropTypes.string),
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  t: PropTypes.func,
  windowId: PropTypes.string.isRequired,
};

WindowSideBarAnnotationsPanel.defaultProps = {
  canvasIds: [],
  t: key => key,
};
