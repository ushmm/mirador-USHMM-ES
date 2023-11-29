import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core';
import { withPlugins } from '../extend/withPlugins.js';
import { WorkspaceImport } from '../components/WorkspaceImport.js';
import * as actions from '../state/actions.js';

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof App
 * @private
 */
const mapDispatchToProps = {
  addError: actions.addError,
  importConfig: actions.importMiradorState,
};

/** */
const styles = theme => ({
  cancelBtn: {
    color: theme.palette.text.primary,
  },
  textField: {
    width: '100%',
  },
  textInput: {
    fontFamily: 'monospace',
  },
});

const enhance = compose(
  withTranslation(),
  withStyles(styles),
  connect(null, mapDispatchToProps),
  withPlugins('WorkspaceImport'),
);

export default enhance(WorkspaceImport);
