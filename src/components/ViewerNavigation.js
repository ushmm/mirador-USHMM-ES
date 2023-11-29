import { Component } from 'react';
import NavigationIcon from '@material-ui/icons/PlayCircleOutlineSharp';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MiradorMenuButton from '../containers/MiradorMenuButton.js';
import ns from '../config/css-ns.js';

/**
 */
export class ViewerNavigation extends Component {
  /**
   * Renders things
   */
  render() {
    const {
      hasNextCanvas, hasPreviousCanvas, setNextCanvas, setPreviousCanvas, t,
      classes, viewingDirection,
    } = this.props;

    let htmlDir = 'ltr';
    let previousIconStyle = {};
    let nextIconStyle = {};
    switch (viewingDirection) {
      case 'top-to-bottom':
        previousIconStyle = { transform: 'rotate(270deg)' };
        nextIconStyle = { transform: 'rotate(90deg)' };
        break;
      case 'bottom-to-top':
        previousIconStyle = { transform: 'rotate(90deg)' };
        nextIconStyle = { transform: 'rotate(270deg)' };
        break;
      case 'right-to-left':
        htmlDir = 'rtl';
        previousIconStyle = {};
        nextIconStyle = { transform: 'rotate(180deg)' };
        break;
      default:
        previousIconStyle = { transform: 'rotate(180deg)' };
        nextIconStyle = {};
    }

    return (
      <div
        className={classNames(ns('osd-navigation'), classes.osdNavigation)}
        dir={htmlDir}
      >
        <MiradorMenuButton
          aria-label={t('previousCanvas')}
          className={ns('previous-canvas-button')}
          disabled={!hasPreviousCanvas}
          onClick={() => { hasPreviousCanvas && setPreviousCanvas(); }}
        >
          <NavigationIcon style={previousIconStyle} fontSize="large" />
        </MiradorMenuButton>
        <MiradorMenuButton
          aria-label={t('nextCanvas')}
          className={ns('next-canvas-button')}
          disabled={!hasNextCanvas}
          onClick={() => { hasNextCanvas && setNextCanvas(); }}
        >
          <NavigationIcon style={nextIconStyle} fontSize="large" />
        </MiradorMenuButton>
      </div>
    );
  }
}

ViewerNavigation.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  hasNextCanvas: PropTypes.bool,
  hasPreviousCanvas: PropTypes.bool,
  setNextCanvas: PropTypes.func,
  setPreviousCanvas: PropTypes.func,
  t: PropTypes.func.isRequired,
  viewingDirection: PropTypes.string,
};

ViewerNavigation.defaultProps = {
  hasNextCanvas: false,
  hasPreviousCanvas: false,
  setNextCanvas: () => {},
  setPreviousCanvas: () => {},
  viewingDirection: '',
};
