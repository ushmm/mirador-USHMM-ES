import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import { withPlugins } from '../extend/withPlugins.js';
import { SearchPanelNavigation } from '../components/SearchPanelNavigation.js';
import * as actions from '../state/actions.js';
import {
  getSelectedContentSearchAnnotationIds,
  getSearchNumTotal,
  getSortedSearchHitsForCompanionWindow,
  getThemeDirection,
} from '../state/selectors/index.js';

/**
 * mapStateToProps - used to hook up connect to state
 * @memberof SearchPanelControls
 * @private
 */
const mapStateToProps = (state, { companionWindowId, windowId }) => ({
  direction: getThemeDirection(state),
  numTotal: getSearchNumTotal(state, { companionWindowId, windowId }),
  searchHits: getSortedSearchHitsForCompanionWindow(state, { companionWindowId, windowId }),
  selectedContentSearchAnnotation: getSelectedContentSearchAnnotationIds(state, {
    companionWindowId, windowId,
  }),
});

/**
 * mapDispatchToProps - to hook up connect
 * @memberof SearchPanelNavigation
 * @private
 */
const mapDispatchToProps = (dispatch, { windowId }) => ({
  selectAnnotation: (...args) => dispatch(
    actions.selectAnnotation(windowId, ...args),
  ),
});

/** */
const styles = theme => ({
  body2: {
    marginLeft: '-16px',
    width: '100%',
  },
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
  withTranslation(),
  withPlugins('SearchPanelNavigation'),
);

export default enhance(SearchPanelNavigation);
