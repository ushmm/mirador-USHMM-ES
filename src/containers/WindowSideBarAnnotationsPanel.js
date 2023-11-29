import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import { withPlugins } from '../extend/withPlugins.js';
import {
  getVisibleCanvasIds,
  getAnnotationResourcesByMotivation,
} from '../state/selectors/index.js';
import { WindowSideBarAnnotationsPanel } from '../components/WindowSideBarAnnotationsPanel.js';

/**
 * mapStateToProps - to hook up connect
 * @memberof WindowSideBarAnnotationsPanel
 * @private
 */
const mapStateToProps = (state, { windowId }) => ({
  annotationCount: getAnnotationResourcesByMotivation(
    state,
    { windowId },
  ).length,
  canvasIds: getVisibleCanvasIds(state, { windowId }),
});

/** */
const styles = theme => ({
  section: {
    borderBottom: `.5px solid ${theme.palette.section_divider}`,
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(2),
  },
});

const enhance = compose(
  withTranslation(),
  withStyles(styles),
  connect(mapStateToProps, null),
  withPlugins('WindowSideBarAnnotationsPanel'),
  // further HOC
);

export default enhance(WindowSideBarAnnotationsPanel);
