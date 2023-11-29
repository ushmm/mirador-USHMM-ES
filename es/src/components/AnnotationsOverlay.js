function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
import { createRef, Component } from 'react';
import ReactDOM from 'react-dom';
import isEqual from 'lodash/isEqual';
import debounce from 'lodash/debounce';
import flatten from 'lodash/flatten';
import sortBy from 'lodash/sortBy';
import xor from 'lodash/xor';
import OpenSeadragonCanvasOverlay from '../lib/OpenSeadragonCanvasOverlay.js';
import CanvasWorld from '../lib/CanvasWorld.js';
import CanvasAnnotationDisplay from '../lib/CanvasAnnotationDisplay.js';

/**
 * Represents a OpenSeadragonViewer in the mirador workspace. Responsible for mounting
 * and rendering OSD.
 */
import { jsx as _jsx } from "react/jsx-runtime";
export var AnnotationsOverlay = /*#__PURE__*/function (_Component) {
  _inherits(AnnotationsOverlay, _Component);
  var _super = _createSuper(AnnotationsOverlay);
  /**
   * @param {Object} props
   */
  function AnnotationsOverlay(props) {
    var _this;
    _classCallCheck(this, AnnotationsOverlay);
    _this = _super.call(this, props);
    _this.ref = /*#__PURE__*/createRef();
    _this.osdCanvasOverlay = null;
    // An initial value for the updateCanvas method
    _this.updateCanvas = function () {};
    _this.onUpdateViewport = _this.onUpdateViewport.bind(_assertThisInitialized(_this));
    _this.onCanvasClick = _this.onCanvasClick.bind(_assertThisInitialized(_this));
    _this.onCanvasMouseMove = debounce(_this.onCanvasMouseMove.bind(_assertThisInitialized(_this)), 10);
    _this.onCanvasExit = _this.onCanvasExit.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * React lifecycle event
   */
  _createClass(AnnotationsOverlay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initializeViewer();
    }

    /**
     * When the tileSources change, make sure to close the OSD viewer.
     * When the annotations change, reset the updateCanvas method to make sure
     * they are added.
     * When the viewport state changes, pan or zoom the OSD viewer as appropriate
     */
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
        drawAnnotations = _this$props.drawAnnotations,
        drawSearchAnnotations = _this$props.drawSearchAnnotations,
        annotations = _this$props.annotations,
        searchAnnotations = _this$props.searchAnnotations,
        hoveredAnnotationIds = _this$props.hoveredAnnotationIds,
        selectedAnnotationId = _this$props.selectedAnnotationId,
        highlightAllAnnotations = _this$props.highlightAllAnnotations,
        viewer = _this$props.viewer;
      this.initializeViewer();
      var annotationsUpdated = !AnnotationsOverlay.annotationsMatch(annotations, prevProps.annotations);
      var searchAnnotationsUpdated = !AnnotationsOverlay.annotationsMatch(searchAnnotations, prevProps.searchAnnotations);
      var hoveredAnnotationsUpdated = xor(hoveredAnnotationIds, prevProps.hoveredAnnotationIds).length > 0;
      if (this.osdCanvasOverlay && hoveredAnnotationsUpdated) {
        if (hoveredAnnotationIds.length > 0) {
          this.osdCanvasOverlay.canvasDiv.style.cursor = 'pointer';
        } else {
          this.osdCanvasOverlay.canvasDiv.style.cursor = '';
        }
      }
      var selectedAnnotationsUpdated = selectedAnnotationId !== prevProps.selectedAnnotationId;
      var redrawAnnotations = drawAnnotations !== prevProps.drawAnnotations || drawSearchAnnotations !== prevProps.drawSearchAnnotations || highlightAllAnnotations !== prevProps.highlightAllAnnotations;
      if (searchAnnotationsUpdated || annotationsUpdated || selectedAnnotationsUpdated || hoveredAnnotationsUpdated || redrawAnnotations) {
        this.updateCanvas = this.canvasUpdateCallback();
        viewer.forceRedraw();
      }
    }

    /**
     */
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var viewer = this.props.viewer;
      this.onCanvasMouseMove.cancel();
      viewer.removeHandler('canvas-click', this.onCanvasClick);
      viewer.removeHandler('canvas-exit', this.onCanvasExit);
      viewer.removeHandler('update-viewport', this.onUpdateViewport);
      viewer.removeHandler('mouse-move', this.onCanvasMouseMove);
    }

    /** */
  }, {
    key: "onCanvasClick",
    value: function onCanvasClick(event) {
      var _this2 = this;
      var canvasWorld = this.props.canvasWorld;
      var webPosition = event.position,
        viewport = event.eventSource.viewport;
      var point = viewport.pointFromPixel(webPosition);
      var canvas = canvasWorld.canvasAtPoint(point);
      if (!canvas) return;
      var _canvasWorld$canvasTo = canvasWorld.canvasToWorldCoordinates(canvas.id),
        _canvasWorld$canvasTo2 = _slicedToArray(_canvasWorld$canvasTo, 4),
        _canvasX = _canvasWorld$canvasTo2[0],
        _canvasY = _canvasWorld$canvasTo2[1],
        canvasWidth = _canvasWorld$canvasTo2[2],
        canvasHeight // eslint-disable-line no-unused-vars
        = _canvasWorld$canvasTo2[3];

      // get all the annotations that contain the click
      var annos = this.annotationsAtPoint(canvas, point);
      if (annos.length > 0) {
        event.preventDefaultAction = true; // eslint-disable-line no-param-reassign
      }

      if (annos.length === 1) {
        this.toggleAnnotation(annos[0].id);
      } else if (annos.length > 0) {
        /**
         * Try to find the "right" annotation to select after a click.
         *
         * This is perhaps a naive method, but seems to deal with rectangles and SVG shapes:
         *
         * - figure out how many points around a circle are inside the annotation shape
         * - if there's a shape with the fewest interior points, it's probably the one
         *       with the closest boundary?
         * - if there's a tie, make the circle bigger and try again.
         */
        var annosWithClickScore = function annosWithClickScore(radius) {
          var degreesToRadians = Math.PI / 180;
          return function (anno) {
            var score = 0;
            for (var degrees = 0; degrees < 360; degrees += 1) {
              var x = Math.cos(degrees * degreesToRadians) * radius + point.x;
              var y = Math.sin(degrees * degreesToRadians) * radius + point.y;
              if (_this2.isAnnotationAtPoint(anno, canvas, {
                x: x,
                y: y
              })) score += 1;
            }
            return {
              anno: anno,
              score: score
            };
          };
        };
        var annosWithScore = [];
        var radius = 1;
        annosWithScore = sortBy(annos.map(annosWithClickScore(radius)), 'score');
        while (radius < Math.max(canvasWidth, canvasHeight) && annosWithScore[0].score === annosWithScore[1].score) {
          radius *= 2;
          annosWithScore = sortBy(annos.map(annosWithClickScore(radius)), 'score');
        }
        this.toggleAnnotation(annosWithScore[0].anno.id);
      }
    }

    /** */
  }, {
    key: "onCanvasMouseMove",
    value: function onCanvasMouseMove(event) {
      var _this$props2 = this.props,
        annotations = _this$props2.annotations,
        canvasWorld = _this$props2.canvasWorld,
        hoverAnnotation = _this$props2.hoverAnnotation,
        hoveredAnnotationIds = _this$props2.hoveredAnnotationIds,
        searchAnnotations = _this$props2.searchAnnotations,
        viewer = _this$props2.viewer,
        windowId = _this$props2.windowId;
      if (annotations.length === 0 && searchAnnotations.length === 0) return;
      var webPosition = event.position;
      var point = viewer.viewport.pointFromPixel(webPosition);
      var canvas = canvasWorld.canvasAtPoint(point);
      if (!canvas) {
        hoverAnnotation(windowId, []);
        return;
      }
      var annos = this.annotationsAtPoint(canvas, point);
      if (xor(hoveredAnnotationIds, annos.map(function (a) {
        return a.id;
      })).length > 0) {
        hoverAnnotation(windowId, annos.map(function (a) {
          return a.id;
        }));
      }
    }

    /** If the cursor leaves the canvas, wipe out highlights */
  }, {
    key: "onCanvasExit",
    value: function onCanvasExit(event) {
      var _this$props3 = this.props,
        hoverAnnotation = _this$props3.hoverAnnotation,
        windowId = _this$props3.windowId;

      // a move event may be queued up by the debouncer
      this.onCanvasMouseMove.cancel();
      hoverAnnotation(windowId, []);
    }

    /**
     * onUpdateViewport - fires during OpenSeadragon render method.
     */
  }, {
    key: "onUpdateViewport",
    value: function onUpdateViewport(event) {
      this.updateCanvas();
    }

    /** @private */
  }, {
    key: "initializeViewer",
    value: function initializeViewer() {
      var viewer = this.props.viewer;
      if (!viewer) return;
      if (this.osdCanvasOverlay) return;
      this.osdCanvasOverlay = new OpenSeadragonCanvasOverlay(viewer, this.ref);
      viewer.addHandler('canvas-click', this.onCanvasClick);
      viewer.addHandler('canvas-exit', this.onCanvasExit);
      viewer.addHandler('update-viewport', this.onUpdateViewport);
      viewer.addHandler('mouse-move', this.onCanvasMouseMove);
      this.updateCanvas = this.canvasUpdateCallback();
    }

    /** */
  }, {
    key: "canvasUpdateCallback",
    value: function canvasUpdateCallback() {
      var _this3 = this;
      return function () {
        _this3.osdCanvasOverlay.clear();
        _this3.osdCanvasOverlay.resize();
        _this3.osdCanvasOverlay.canvasUpdate(_this3.renderAnnotations.bind(_this3));
      };
    }

    /** @private */
  }, {
    key: "isAnnotationAtPoint",
    value: function isAnnotationAtPoint(resource, canvas, point) {
      var canvasWorld = this.props.canvasWorld;
      var _canvasWorld$canvasTo3 = canvasWorld.canvasToWorldCoordinates(canvas.id),
        _canvasWorld$canvasTo4 = _slicedToArray(_canvasWorld$canvasTo3, 2),
        canvasX = _canvasWorld$canvasTo4[0],
        canvasY = _canvasWorld$canvasTo4[1];
      var relativeX = point.x - canvasX;
      var relativeY = point.y - canvasY;
      if (resource.svgSelector) {
        var context = this.osdCanvasOverlay.context2d;
        var _CanvasAnnotationDisp = new CanvasAnnotationDisplay({
            resource: resource
          }),
          svgPaths = _CanvasAnnotationDisp.svgPaths;
        return _toConsumableArray(svgPaths).some(function (path) {
          return context.isPointInPath(new Path2D(path.attributes.d.nodeValue), relativeX, relativeY);
        });
      }
      if (resource.fragmentSelector) {
        var _resource$fragmentSel = _slicedToArray(resource.fragmentSelector, 4),
          x = _resource$fragmentSel[0],
          y = _resource$fragmentSel[1],
          w = _resource$fragmentSel[2],
          h = _resource$fragmentSel[3];
        return x <= relativeX && relativeX <= x + w && y <= relativeY && relativeY <= y + h;
      }
      return false;
    }

    /** @private */
  }, {
    key: "annotationsAtPoint",
    value: function annotationsAtPoint(canvas, point) {
      var _this4 = this;
      var _this$props4 = this.props,
        annotations = _this$props4.annotations,
        searchAnnotations = _this$props4.searchAnnotations;
      var lists = [].concat(_toConsumableArray(annotations), _toConsumableArray(searchAnnotations));
      var annos = flatten(lists.map(function (l) {
        return l.resources;
      })).filter(function (resource) {
        if (canvas.id !== resource.targetId) return false;
        return _this4.isAnnotationAtPoint(resource, canvas, point);
      });
      return annos;
    }

    /** */
  }, {
    key: "toggleAnnotation",
    value: function toggleAnnotation(id) {
      var _this$props5 = this.props,
        selectedAnnotationId = _this$props5.selectedAnnotationId,
        selectAnnotation = _this$props5.selectAnnotation,
        deselectAnnotation = _this$props5.deselectAnnotation,
        windowId = _this$props5.windowId;
      if (selectedAnnotationId === id) {
        deselectAnnotation(windowId, id);
      } else {
        selectAnnotation(windowId, id);
      }
    }

    /**
     * annotationsToContext - converts anontations to a canvas context
     */
  }, {
    key: "annotationsToContext",
    value: function annotationsToContext(annotations, palette) {
      var _this$props6 = this.props,
        highlightAllAnnotations = _this$props6.highlightAllAnnotations,
        hoveredAnnotationIds = _this$props6.hoveredAnnotationIds,
        selectedAnnotationId = _this$props6.selectedAnnotationId,
        canvasWorld = _this$props6.canvasWorld,
        viewer = _this$props6.viewer;
      var context = this.osdCanvasOverlay.context2d;
      var zoomRatio = viewer.viewport.getZoom(true) / viewer.viewport.getMaxZoom();
      annotations.forEach(function (annotation) {
        annotation.resources.forEach(function (resource) {
          if (!canvasWorld.canvasIds.includes(resource.targetId)) return;
          var offset = canvasWorld.offsetByCanvas(resource.targetId);
          var canvasAnnotationDisplay = new CanvasAnnotationDisplay({
            hovered: hoveredAnnotationIds.includes(resource.id),
            offset: offset,
            palette: _objectSpread(_objectSpread({}, palette), {}, {
              "default": _objectSpread(_objectSpread({}, palette["default"]), !highlightAllAnnotations && palette.hidden)
            }),
            resource: resource,
            selected: selectedAnnotationId === resource.id,
            zoomRatio: zoomRatio
          });
          canvasAnnotationDisplay.toContext(context);
        });
      });
    }

    /** */
  }, {
    key: "renderAnnotations",
    value: function renderAnnotations() {
      var _this$props7 = this.props,
        annotations = _this$props7.annotations,
        drawAnnotations = _this$props7.drawAnnotations,
        drawSearchAnnotations = _this$props7.drawSearchAnnotations,
        searchAnnotations = _this$props7.searchAnnotations,
        palette = _this$props7.palette;
      if (drawSearchAnnotations) {
        this.annotationsToContext(searchAnnotations, palette.search);
      }
      if (drawAnnotations) {
        this.annotationsToContext(annotations, palette.annotations);
      }
    }

    /**
     * Renders things
     */
  }, {
    key: "render",
    value: function render() {
      var viewer = this.props.viewer;
      if (!viewer) return null;
      return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/_jsx("div", {
        ref: this.ref,
        style: {
          height: '100%',
          left: 0,
          position: 'absolute',
          top: 0,
          width: '100%'
        },
        children: /*#__PURE__*/_jsx("canvas", {})
      }), viewer.canvas);
    }
  }], [{
    key: "annotationsMatch",
    value:
    /**
     * annotationsMatch - compares previous annotations to current to determine
     * whether to add a new updateCanvas method to draw annotations
     * @param  {Array} currentAnnotations
     * @param  {Array} prevAnnotations
     * @return {Boolean}
     */
    function annotationsMatch(currentAnnotations, prevAnnotations) {
      if (!currentAnnotations && !prevAnnotations) return true;
      if (currentAnnotations && !prevAnnotations || !currentAnnotations && prevAnnotations) return false;
      if (currentAnnotations.length === 0 && prevAnnotations.length === 0) return true;
      if (currentAnnotations.length !== prevAnnotations.length) return false;
      return currentAnnotations.every(function (annotation, index) {
        var newIds = annotation.resources.map(function (r) {
          return r.id;
        });
        var prevIds = prevAnnotations[index].resources.map(function (r) {
          return r.id;
        });
        if (newIds.length === 0 && prevIds.length === 0) return true;
        if (newIds.length !== prevIds.length) return false;
        if (annotation.id === prevAnnotations[index].id && isEqual(newIds, prevIds)) {
          return true;
        }
        return false;
      });
    }
  }]);
  return AnnotationsOverlay;
}(Component);
AnnotationsOverlay.defaultProps = {
  annotations: [],
  deselectAnnotation: function deselectAnnotation() {},
  drawAnnotations: true,
  drawSearchAnnotations: true,
  highlightAllAnnotations: false,
  hoverAnnotation: function hoverAnnotation() {},
  hoveredAnnotationIds: [],
  palette: {},
  searchAnnotations: [],
  selectAnnotation: function selectAnnotation() {},
  selectedAnnotationId: undefined,
  viewer: null
};