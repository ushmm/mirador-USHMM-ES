import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import { withPlugins } from '../extend/withPlugins.js';
import { SearchResults } from '../components/SearchResults.js';
import * as actions from '../state/actions.js';
import {
  getNextSearchId,
  getSearchQuery,
  getSearchIsFetching,
  getSearchNumTotal,
  getSortedSearchHitsForCompanionWindow,
  getSortedSearchAnnotationsForCompanionWindow,
} from '../state/selectors';

/**
 * mapStateToProps - used to hook up connect to state
 * @memberof SearchResult
 * @private
 */
const mapStateToProps = (state, { companionWindowId, windowId }) => ({
  isFetching: getSearchIsFetching(state, { companionWindowId, windowId }),
  nextSearch: getNextSearchId(state, { companionWindowId, windowId }),
  query: getSearchQuery(state, { companionWindowId, windowId }),
  searchAnnotations:
    getSortedSearchAnnotationsForCompanionWindow(state, { companionWindowId, windowId }),
  searchHits: getSortedSearchHitsForCompanionWindow(state, { companionWindowId, windowId }),
  searchNumTotal: getSearchNumTotal(state, { companionWindowId, windowId }),
});

const mapDispatchToProps = {
  fetchSearch: actions.fetchSearch,
};

/** */
const styles = theme => ({
  moreButton: {
    width: '100%',
  },
  navigation: {
    textTransform: 'none',
  },
  noResults: {
    ...theme.typography.h6,
    padding: theme.spacing(2),
  },
  toggleFocus: {
    ...theme.typography.subtitle1,
  },
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
  withTranslation(),
  withPlugins('SearchResults'),
);

export default enhance(SearchResults);
