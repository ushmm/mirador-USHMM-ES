import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import * as actions from '../state/actions.js';
import { withPlugins } from '../extend/withPlugins.js';
import {
  getAnnotationResourcesByMotivation,
  getWindow,
} from '../state/selectors/index.js';
import { AnnotationSettings } from '../components/AnnotationSettings.js';

/**
 * Mapping redux state to component props using connect
 */
const mapStateToProps = (state, { windowId }) => ({
  displayAll: getWindow(state, { windowId }).highlightAllAnnotations,
  displayAllDisabled: getAnnotationResourcesByMotivation(
    state,
    { windowId },
  ).length < 2,
});

/**
 * Mapping redux action dispatches to component props using connect
 */
const mapDispatchToProps = (dispatch, { windowId }) => ({
  toggleAnnotationDisplay: () => {
    dispatch(actions.toggleAnnotationDisplay(windowId));
  },
});

const enhance = compose(
  withTranslation(),
  connect(mapStateToProps, mapDispatchToProps),
  withPlugins('AnnotationSettings'),
);

export default enhance(AnnotationSettings);
