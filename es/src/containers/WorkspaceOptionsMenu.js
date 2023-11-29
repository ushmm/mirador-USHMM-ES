import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import { withWorkspaceContext } from '../contexts/WorkspaceContext.js';
import { WorkspaceOptionsMenu } from '../components/WorkspaceOptionsMenu.js';
var enhance = compose(withTranslation(), withWorkspaceContext);
export default enhance(WorkspaceOptionsMenu);