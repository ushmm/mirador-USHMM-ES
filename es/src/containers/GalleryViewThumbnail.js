function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { compose } from 'redux';
import { connect } from 'react-redux';
import flatten from 'lodash/flatten';
import { withStyles } from '@material-ui/core/styles';
import * as actions from '../state/actions.js';
import { GalleryViewThumbnail } from '../components/GalleryViewThumbnail.js';
import { getSearchAnnotationsForWindow, getCurrentCanvas, getConfig, getPresentAnnotationsOnSelectedCanvases, getCompanionWindowsForContent } from '../state/selectors/index.js';

/**
 * Styles to be passed to the withStyles HOC
 */
var styles = function styles(theme) {
  var _theme$palette$highli;
  return {
    annotationIcon: {
      height: '1rem',
      width: '1rem'
    },
    annotationsChip: _objectSpread({}, theme.typography.caption),
    avatar: {
      backgroundColor: 'transparent'
    },
    chips: {
      opacity: 0.875,
      position: 'absolute',
      right: 0,
      textAlign: 'right',
      top: 0
    },
    galleryViewItem: {
      '&$hasAnnotations': {
        border: "2px solid ".concat(theme.palette.action.selected)
      },
      '&$selected,&$selected$hasAnnotations': {
        border: "2px solid ".concat(theme.palette.primary.main)
      },
      '&:focus': {
        outline: 'none'
      },
      '&:hover': {
        backgroundColor: theme.palette.action.hover
      },
      border: '2px solid transparent',
      cursor: 'pointer',
      display: 'inline-block',
      margin: "".concat(theme.spacing(1), "px ").concat(theme.spacing(0.5), "px"),
      maxHeight: function maxHeight(props) {
        return props.config.height + 45;
      },
      minWidth: '60px',
      overflow: 'hidden',
      padding: theme.spacing(0.5),
      position: 'relative',
      width: 'min-content'
    },
    hasAnnotations: {},
    searchChip: _objectSpread(_objectSpread({}, theme.typography.caption), {}, {
      '&$selected $avatar': {
        backgroundColor: (_theme$palette$highli = theme.palette.highlights) === null || _theme$palette$highli === void 0 ? void 0 : _theme$palette$highli.primary
      },
      marginTop: 2
    }),
    selected: {}
  };
};

/** */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var canvas = _ref.canvas,
    windowId = _ref.windowId;
  var currentCanvas = getCurrentCanvas(state, {
    windowId: windowId
  });
  var searchAnnotations = getSearchAnnotationsForWindow(state, {
    windowId: windowId
  });
  var canvasAnnotations = flatten(searchAnnotations.map(function (a) {
    return a.resources;
  })).filter(function (a) {
    return a.targetId === canvas.id;
  });
  var hasOpenAnnotationsWindow = getCompanionWindowsForContent(state, {
    content: 'annotations',
    windowId: windowId
  }).length > 0;
  return {
    annotationsCount: function () {
      if (!hasOpenAnnotationsWindow) return undefined;
      var annotations = getPresentAnnotationsOnSelectedCanvases(state, {
        canvasId: canvas.id
      });
      return annotations.reduce(function (v, a) {
        return v + a.resources.filter(function (r) {
          return r.targetId === canvas.id;
        }).length;
      }, 0);
    }(),
    config: getConfig(state).galleryView,
    searchAnnotationsCount: canvasAnnotations.length,
    selected: currentCanvas && currentCanvas.id === canvas.id
  };
};

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof WindowViewer
 * @private
 */
var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var canvas = _ref2.canvas,
    id = _ref2.id,
    windowId = _ref2.windowId;
  return {
    focusOnCanvas: function focusOnCanvas() {
      return dispatch(actions.setWindowViewType(windowId, 'single'));
    },
    requestCanvasAnnotations: function requestCanvasAnnotations() {
      return dispatch(actions.requestCanvasAnnotations(windowId, canvas.id));
    },
    setCanvas: function setCanvas() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return dispatch(actions.setCanvas.apply(actions, [windowId].concat(args)));
    }
  };
};
var enhance = compose(connect(mapStateToProps, mapDispatchToProps), withStyles(styles)
// further HOC go here
);

export default enhance(GalleryViewThumbnail);