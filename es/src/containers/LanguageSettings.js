import { compose } from 'redux';
import { connect } from 'react-redux';
import { withPlugins } from '../extend/withPlugins.js';
import * as actions from '../state/actions.js';
import { getLanguagesFromConfigWithCurrent } from '../state/selectors.js';
import { LanguageSettings } from '../components/LanguageSettings.js';

/**
 * Map state to props for connect
 */
var mapStateToProps = function mapStateToProps(state) {
  return {
    languages: getLanguagesFromConfigWithCurrent(state)
  };
};

/**
 * Map action dispatches to props for connect
 */
var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref) {
  var afterSelect = _ref.afterSelect;
  return {
    handleClick: function handleClick(language) {
      dispatch(actions.updateConfig({
        language: language
      }));
      afterSelect && afterSelect();
    }
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps), withPlugins('LanguageSettings'))(LanguageSettings);