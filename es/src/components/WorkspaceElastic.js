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
import { Rnd } from 'react-rnd';
import ResizeObserver from 'react-resize-observer';
import classNames from 'classnames';
import WorkspaceElasticWindow from '../containers/WorkspaceElasticWindow.js';
import ns from '../config/css-ns.js';

/**
 * Represents a work area that contains any number of windows
 * @memberof Workspace
 * @private
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var WorkspaceElastic = /*#__PURE__*/function (_Component) {
  _inherits(WorkspaceElastic, _Component);
  var _super = _createSuper(WorkspaceElastic);
  function WorkspaceElastic() {
    _classCallCheck(this, WorkspaceElastic);
    return _super.apply(this, arguments);
  }
  _createClass(WorkspaceElastic, [{
    key: "render",
    value:
    /**
     */
    function render() {
      var _this$props = this.props,
        classes = _this$props.classes,
        workspace = _this$props.workspace,
        elasticLayout = _this$props.elasticLayout,
        setWorkspaceViewportDimensions = _this$props.setWorkspaceViewportDimensions,
        setWorkspaceViewportPosition = _this$props.setWorkspaceViewportPosition;
      var viewportPosition = workspace.viewportPosition;
      var offsetX = workspace.width / 2;
      var offsetY = workspace.height / 2;
      return /*#__PURE__*/_jsxs("div", {
        style: {
          height: '100%',
          position: 'relative',
          width: '100%'
        },
        children: [/*#__PURE__*/_jsx(ResizeObserver, {
          onReflow: function onReflow() {},
          onResize: function onResize(rect) {
            setWorkspaceViewportDimensions(rect);
          }
        }), /*#__PURE__*/_jsx(Rnd, {
          size: {
            height: workspace.height,
            width: workspace.width
          },
          position: {
            x: -1 * viewportPosition.x - offsetX,
            y: -1 * viewportPosition.y - offsetY
          },
          enableResizing: {
            bottom: false,
            bottomLeft: false,
            bottomRight: false,
            left: false,
            right: false,
            top: false,
            topLeft: false,
            topRight: false
          },
          onDragStop: function onDragStop(e, d) {
            setWorkspaceViewportPosition({
              x: -1 * d.x - offsetX,
              y: -1 * d.y - offsetY
            });
          },
          cancel: ".".concat(ns('window')),
          className: classNames(classes.workspace, ns('workspace')),
          disableDragging: !workspace.draggingEnabled,
          children: Object.keys(elasticLayout).map(function (windowId) {
            return /*#__PURE__*/_jsx(WorkspaceElasticWindow, {
              windowId: windowId
            }, windowId);
          })
        })]
      });
    }
  }]);
  return WorkspaceElastic;
}(Component);
export default WorkspaceElastic;