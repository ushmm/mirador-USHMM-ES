function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ZoomControls from '../containers/ZoomControls.js';
import ViewerInfo from '../containers/ViewerInfo.js';
import ViewerNavigation from '../containers/ViewerNavigation.js';
import ns from '../config/css-ns.js';
import { PluginHook } from './PluginHook.js';

/**
 * Represents the viewer controls in the mirador workspace.
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var WindowCanvasNavigationControls = /*#__PURE__*/function (_Component) {
  _inherits(WindowCanvasNavigationControls, _Component);
  var _super = _createSuper(WindowCanvasNavigationControls);
  function WindowCanvasNavigationControls() {
    _classCallCheck(this, WindowCanvasNavigationControls);
    return _super.apply(this, arguments);
  }
  _createClass(WindowCanvasNavigationControls, [{
    key: "canvasNavControlsAreStacked",
    value:
    /**
     * Determine if canvasNavControls are stacked (based on a hard-coded width)
    */
    function canvasNavControlsAreStacked() {
      var size = this.props.size;
      return size && size.width && size.width <= 253;
    }

    /** */
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        classes = _this$props.classes,
        visible = _this$props.visible,
        windowId = _this$props.windowId,
        zoomToWorld = _this$props.zoomToWorld;
      if (!visible) return /*#__PURE__*/_jsx(Typography, {
        variant: "srOnly",
        component: "div",
        children: /*#__PURE__*/_jsx(ViewerInfo, {
          windowId: windowId
        })
      });
      return /*#__PURE__*/_jsxs(Paper, {
        square: true,
        className: classNames(classes.controls, ns('canvas-nav'), classes.canvasNav, this.canvasNavControlsAreStacked() ? ns('canvas-nav-stacked') : null, this.canvasNavControlsAreStacked() ? classes.canvasNavStacked : null),
        elevation: 0,
        children: [/*#__PURE__*/_jsx(ZoomControls, {
          displayDivider: !this.canvasNavControlsAreStacked(),
          windowId: windowId,
          zoomToWorld: zoomToWorld
        }), /*#__PURE__*/_jsx(ViewerNavigation, {
          windowId: windowId
        }), /*#__PURE__*/_jsx(ViewerInfo, {
          windowId: windowId
        }), /*#__PURE__*/_jsx(PluginHook, _objectSpread({}, this.props))]
      });
    }
  }]);
  return WindowCanvasNavigationControls;
}(Component);
WindowCanvasNavigationControls.defaultProps = {
  classes: {},
  visible: true
};