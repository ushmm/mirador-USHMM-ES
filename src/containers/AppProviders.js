import { compose } from 'redux';
import { connect } from 'react-redux';
import { withPlugins } from '../extend/withPlugins.js';
import { getConfig, getTheme } from '../state/selectors/index.js';
import { AppProviders } from '../components/AppProviders.js';

/**
 * mapStateToProps - to hook up connect
 * @memberof App
 * @private
 */
const mapStateToProps = state => (
  {
    createGenerateClassNameOptions: getConfig(state).createGenerateClassNameOptions,
    language: getConfig(state).language,
    theme: getTheme(state),
    translations: getConfig(state).translations,
  }
);

const enhance = compose(
  connect(mapStateToProps),
  withPlugins('AppProviders'),
);

export default enhance(AppProviders);
