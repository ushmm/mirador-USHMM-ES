import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import { withPlugins } from '../extend/withPlugins.js';
import * as actions from '../state/actions.js';
import { getThumbnailNavigationPosition, getThemeDirection } from '../state/selectors/index.js';
import { WindowThumbnailSettings } from '../components/WindowThumbnailSettings.js';

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */
var mapDispatchToProps = {
  setWindowThumbnailPosition: actions.setWindowThumbnailPosition
};

/**
 * mapStateToProps - to hook up connect
 * @memberof WindowViewer
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    direction: getThemeDirection(state),
    thumbnailNavigationPosition: getThumbnailNavigationPosition(state, {
      windowId: windowId
    })
  };
};

/** */
var styles = function styles(theme) {
  return {
    label: {
      borderBottom: '2px solid transparent'
    },
    MenuItem: {
      display: 'inline-block'
    },
    selectedLabel: {
      borderBottom: "2px solid ".concat(theme.palette.secondary.main),
      color: theme.palette.secondary.main
    }
  };
};
var enhance = compose(withStyles(styles), withTranslation(null, {
  withRef: true
}), connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true
}), withPlugins('WindowThumbnailSettings')
// further HOC go here
);

export default enhance(WindowThumbnailSettings);