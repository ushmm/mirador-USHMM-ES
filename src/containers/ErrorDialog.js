import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins.js';
import { ErrorDialog } from '../components/ErrorDialog.js';
import * as actions from '../state/actions.js';
import { getLatestError } from '../state/selectors/index.js';

/**
 * mapStateToProps - to hook up connect
 * @memberof ErrorDialog
 * @private
 */
const mapStateToProps = state => ({
  error: getLatestError(state),
});

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof App
 * @private
 */
const mapDispatchToProps = {
  removeError: actions.removeError,
};

const enhance = compose(
  withTranslation(),
  connect(mapStateToProps, mapDispatchToProps),
  withPlugins('ErrorDialog'),
);

export default enhance(ErrorDialog);
