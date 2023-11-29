import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins.js';
import {
  getCompanionWindowIdsForPosition, getCompanionAreaVisibility, getThemeDirection, getWindow,
} from '../state/selectors.js';
import * as actions from '../state/actions.js';
import { CompanionArea } from '../components/CompanionArea.js';

/** */
const mapStateToProps = (state, { windowId, position }) => ({
  companionAreaOpen: getCompanionAreaVisibility(state, { position, windowId }),
  companionWindowIds: getCompanionWindowIdsForPosition(state, { position, windowId }),
  direction: getThemeDirection(state),
  sideBarOpen: (getWindow(state, { windowId }) || {}).sideBarOpen,
});

const mapDispatchToProps = ({
  setCompanionAreaOpen: actions.setCompanionAreaOpen,
});

/** */
const styles = theme => ({
  horizontal: {
    flexDirection: 'column',
    width: '100%',
  },
  left: {
    minWidth: 235,
  },
  root: {
    display: 'flex',
    minHeight: 0,
    position: 'relative',
    zIndex: theme.zIndex.appBar - 2,
  },
  toggle: {
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.shades?.dark}`,
    borderRadius: 0,
    height: '48px',
    left: '100%',
    marginTop: '1rem',
    padding: 2,
    position: 'absolute',
    width: '23px',
    zIndex: theme.zIndex.drawer,
  },
  toggleButton: {
    marginBottom: 12,
    marginTop: 12,
    padding: 0,
  },
});

const enhance = compose(
  withTranslation(),
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  withPlugins('CompanionArea'),
);

export default enhance(CompanionArea);
