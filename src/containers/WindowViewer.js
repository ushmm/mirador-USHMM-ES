import { compose } from 'redux';
import { withPlugins } from '../extend/withPlugins.js';
import { WindowViewer } from '../components/WindowViewer.js';

const enhance = compose(
  withPlugins('WindowViewer'),
  // further HOC go here
);

export default enhance(WindowViewer);
