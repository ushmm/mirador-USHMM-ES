function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
import { Component } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircleOutlineSharp';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircleOutlineSharp';
import RestoreZoomIcon from './icons/RestoreZoomIcon.js';
import MiradorMenuButton from '../containers/MiradorMenuButton.js';

/**
 */
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var ZoomControls = /*#__PURE__*/function (_Component) {
  _inherits(ZoomControls, _Component);
  var _super = _createSuper(ZoomControls);
  /**
   * constructor -
   */
  function ZoomControls(props) {
    var _this;
    _classCallCheck(this, ZoomControls);
    _this = _super.call(this, props);
    _this.handleZoomInClick = _this.handleZoomInClick.bind(_assertThisInitialized(_this));
    _this.handleZoomOutClick = _this.handleZoomOutClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * @private
   */
  _createClass(ZoomControls, [{
    key: "handleZoomInClick",
    value: function handleZoomInClick() {
      var _this$props = this.props,
        windowId = _this$props.windowId,
        updateViewport = _this$props.updateViewport,
        viewer = _this$props.viewer;
      updateViewport(windowId, {
        zoom: viewer.zoom * 2
      });
    }

    /**
     * @private
     */
  }, {
    key: "handleZoomOutClick",
    value: function handleZoomOutClick() {
      var _this$props2 = this.props,
        windowId = _this$props2.windowId,
        updateViewport = _this$props2.updateViewport,
        viewer = _this$props2.viewer;
      updateViewport(windowId, {
        zoom: viewer.zoom / 2
      });
    }

    /**
     * render
     * @return
     */
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        displayDivider = _this$props3.displayDivider,
        showZoomControls = _this$props3.showZoomControls,
        classes = _this$props3.classes,
        t = _this$props3.t,
        zoomToWorld = _this$props3.zoomToWorld;
      if (!showZoomControls) {
        return /*#__PURE__*/_jsx(_Fragment, {});
      }
      return /*#__PURE__*/_jsxs("div", {
        className: classes.zoom_controls,
        children: [/*#__PURE__*/_jsx(MiradorMenuButton, {
          "aria-label": t('zoomIn'),
          onClick: this.handleZoomInClick,
          children: /*#__PURE__*/_jsx(AddCircleIcon, {
            fontSize: "large"
          })
        }), /*#__PURE__*/_jsx(MiradorMenuButton, {
          "aria-label": t('zoomOut'),
          onClick: this.handleZoomOutClick,
          children: /*#__PURE__*/_jsx(RemoveCircleIcon, {
            fontSize: "large"
          })
        }), /*#__PURE__*/_jsx(MiradorMenuButton, {
          "aria-label": t('zoomReset'),
          onClick: function onClick() {
            return zoomToWorld(false);
          },
          children: /*#__PURE__*/_jsx(RestoreZoomIcon, {
            fontSize: "large"
          })
        }), displayDivider && /*#__PURE__*/_jsx("span", {
          className: classes.divider
        })]
      });
    }
  }]);
  return ZoomControls;
}(Component);
ZoomControls.defaultProps = {
  displayDivider: true,
  showZoomControls: false,
  t: function t(key) {
    return key;
  },
  updateViewport: function updateViewport() {},
  viewer: {},
  windowId: ''
};