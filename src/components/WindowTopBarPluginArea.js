import { Component } from 'react';
import { PluginHook } from './PluginHook.js';

/**
 *
 */
export class WindowTopBarPluginArea extends Component {
  /** */
  render() {
    return (
      <PluginHook {...this.props} />
    );
  }
}
