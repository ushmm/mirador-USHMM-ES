import { Component } from 'react';
import PropTypes from 'prop-types';
import CompanionWindow from '../containers/CompanionWindow.js';

/**
 * a custom panel that can be used for anything
 */
export class CustomPanel extends Component {
  /**
   * render
   */
  render() {
    const {
      id,
      children,
      t,
      title,
      windowId,
    } = this.props;

    return (
      <CompanionWindow
        title={t(title)}
        id={id}
        windowId={windowId}
      >
        {children}
      </CompanionWindow>
    );
  }
}

CustomPanel.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  windowId: PropTypes.string.isRequired,
};

CustomPanel.defaultProps = {
  children: null,
};
