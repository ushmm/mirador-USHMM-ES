import { compose } from 'redux';
import { withPlugins } from '../extend/withPlugins.js';
import { MiradorMenuButton } from '../components/MiradorMenuButton.js';
import { withWorkspaceContext } from '../contexts/WorkspaceContext.js';

const enhance = compose(
  withWorkspaceContext,
  withPlugins('MiradorMenuButton'),
);

export default enhance(MiradorMenuButton);
