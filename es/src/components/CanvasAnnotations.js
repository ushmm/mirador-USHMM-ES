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
import clsx from 'clsx';
import Chip from '@material-ui/core/Chip';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import SanitizedHtml from '../containers/SanitizedHtml.js';
import { ScrollTo } from './ScrollTo.js';

/**
 * CanvasAnnotations ~
*/
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export var CanvasAnnotations = /*#__PURE__*/function (_Component) {
  _inherits(CanvasAnnotations, _Component);
  var _super = _createSuper(CanvasAnnotations);
  /**
   * constructor -
   */
  function CanvasAnnotations(props) {
    var _this;
    _classCallCheck(this, CanvasAnnotations);
    _this = _super.call(this, props);
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleAnnotationHover = _this.handleAnnotationHover.bind(_assertThisInitialized(_this));
    _this.handleAnnotationBlur = _this.handleAnnotationBlur.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * Handle click event of an annotation.
  */
  _createClass(CanvasAnnotations, [{
    key: "handleClick",
    value: function handleClick(event, annotation) {
      var _this$props = this.props,
        deselectAnnotation = _this$props.deselectAnnotation,
        selectAnnotation = _this$props.selectAnnotation,
        selectedAnnotationId = _this$props.selectedAnnotationId,
        windowId = _this$props.windowId;
      if (selectedAnnotationId === annotation.id) {
        deselectAnnotation(windowId, annotation.id);
      } else {
        selectAnnotation(windowId, annotation.id);
      }
    }

    /** */
  }, {
    key: "handleAnnotationHover",
    value: function handleAnnotationHover(annotation) {
      var _this$props2 = this.props,
        hoverAnnotation = _this$props2.hoverAnnotation,
        windowId = _this$props2.windowId;
      hoverAnnotation(windowId, [annotation.id]);
    }

    /** */
  }, {
    key: "handleAnnotationBlur",
    value: function handleAnnotationBlur() {
      var _this$props3 = this.props,
        hoverAnnotation = _this$props3.hoverAnnotation,
        windowId = _this$props3.windowId;
      hoverAnnotation(windowId, []);
    }

    /**
     * Returns the rendered component
    */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props4 = this.props,
        annotations = _this$props4.annotations,
        classes = _this$props4.classes,
        index = _this$props4.index,
        label = _this$props4.label,
        selectedAnnotationId = _this$props4.selectedAnnotationId,
        t = _this$props4.t,
        totalSize = _this$props4.totalSize,
        listContainerComponent = _this$props4.listContainerComponent,
        htmlSanitizationRuleSet = _this$props4.htmlSanitizationRuleSet,
        hoveredAnnotationIds = _this$props4.hoveredAnnotationIds,
        containerRef = _this$props4.containerRef;
      if (annotations.length === 0) return null;
      return /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx(Typography, {
          className: classes.sectionHeading,
          variant: "overline",
          children: t('annotationCanvasLabel', {
            context: "".concat(index + 1, "/").concat(totalSize),
            label: label
          })
        }), /*#__PURE__*/_jsx(MenuList, {
          autoFocusItem: true,
          variant: "selectedMenu",
          children: annotations.map(function (annotation) {
            return /*#__PURE__*/_jsx(MenuItem, {
              button: true,
              component: listContainerComponent,
              className: clsx(classes.annotationListItem, _defineProperty({}, classes.hovered, hoveredAnnotationIds.includes(annotation.id))),
              annotationid: annotation.id,
              selected: selectedAnnotationId === annotation.id,
              onClick: function onClick(e) {
                return _this2.handleClick(e, annotation);
              },
              onFocus: function onFocus() {
                return _this2.handleAnnotationHover(annotation);
              },
              onBlur: _this2.handleAnnotationBlur,
              onMouseEnter: function onMouseEnter() {
                return _this2.handleAnnotationHover(annotation);
              },
              onMouseLeave: _this2.handleAnnotationBlur,
              children: /*#__PURE__*/_jsx(ScrollTo, {
                containerRef: containerRef,
                offsetTop: 96 // offset for the height of the form above
                ,
                scrollTo: selectedAnnotationId === annotation.id,
                children: /*#__PURE__*/_jsxs(ListItemText, {
                  primaryTypographyProps: {
                    variant: 'body2'
                  },
                  children: [/*#__PURE__*/_jsx(SanitizedHtml, {
                    ruleSet: htmlSanitizationRuleSet,
                    htmlString: annotation.content
                  }), /*#__PURE__*/_jsx("div", {
                    children: annotation.tags.map(function (tag) {
                      return /*#__PURE__*/_jsx(Chip, {
                        size: "small",
                        variant: "outlined",
                        label: tag,
                        id: tag,
                        className: classes.chip
                      }, tag.toString());
                    })
                  })]
                })
              }, "".concat(annotation.id, "-scroll"))
            }, annotation.id);
          })
        })]
      });
    }
  }]);
  return CanvasAnnotations;
}(Component);
CanvasAnnotations.defaultProps = {
  annotations: [],
  classes: {},
  containerRef: undefined,
  hoveredAnnotationIds: [],
  htmlSanitizationRuleSet: 'iiif',
  listContainerComponent: 'li',
  selectedAnnotationId: undefined
};