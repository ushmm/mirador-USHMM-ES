import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import { withPlugins } from '../extend/withPlugins.js';
import { SearchPanelControls } from '../components/SearchPanelControls.js';
import * as actions from '../state/actions.js';
import {
  getManifestAutocompleteService,
  getManifestSearchService,
  getSearchIsFetching,
  getSearchQuery,
} from '../state/selectors/index.js';

/**
 * mapStateToProps - used to hook up connect to state
 * @memberof SearchPanelControls
 * @private
 */
const mapStateToProps = (state, { companionWindowId, windowId }) => ({
  autocompleteService: getManifestAutocompleteService(state, { windowId }),
  query: getSearchQuery(state, { companionWindowId, windowId }),
  searchIsFetching: getSearchIsFetching(state, { companionWindowId, windowId }),
  searchService: getManifestSearchService(state, { windowId }),
});

/**
 * mapDispatchToProps - to hook up connect
 * @memberof SearchPanelControls
 * @private
 */
const mapDispatchToProps = {
  fetchSearch: actions.fetchSearch,
};

/** */
const styles = theme => ({
  endAdornment: {
    position: 'absolute',
    right: 0,
  },
  form: {
    paddingBottom: theme.spacing(1),
    paddingRight: theme.spacing(1.5),
    width: '100%',
  },
  searchProgress: {
    position: 'absolute',
    right: 0,
  },
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
  withTranslation(),
  withPlugins('SearchPanelControls'),
);

export default enhance(SearchPanelControls);
