import { Component } from 'react';
import FullscreenIcon from '@material-ui/icons/FullscreenSharp';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExitSharp';
import PropTypes from 'prop-types';
import MiradorMenuButton from '../containers/MiradorMenuButton.js';
import FullScreenContext from '../contexts/FullScreenContext.js';

/**
 */
export class FullScreenButton extends Component {
  /**
   * render
   * @return
   */
  render() {
    const {
      className, t,
    } = this.props;
    return (
      <FullScreenContext.Consumer>
        { handle => (handle && (
          <MiradorMenuButton
            className={className}
            aria-label={handle.active ? t('exitFullScreen') : t('workspaceFullScreen')}
            onClick={handle.active ? handle.exit : handle.enter}
          >
            {handle.active ? <FullscreenExitIcon fontSize="large" /> : <FullscreenIcon fontSize="large" />}
          </MiradorMenuButton>
        ))}
      </FullScreenContext.Consumer>
    );
  }
}

FullScreenButton.propTypes = {
  className: PropTypes.string,
  t: PropTypes.func,
};

FullScreenButton.defaultProps = {
  className: undefined,
  t: key => key,
};
