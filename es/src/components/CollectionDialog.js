function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
import { Button, Chip, Dialog, DialogActions, DialogTitle, Link, MenuList, MenuItem, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBackSharp';
import Skeleton from '@material-ui/lab/Skeleton';
import asArray from '../lib/asArray.js';
import { LabelValueMetadata } from './LabelValueMetadata.js';
import CollapsibleSection from '../containers/CollapsibleSection.js';
import ScrollIndicatedDialogContent from '../containers/ScrollIndicatedDialogContent.js';
import ManifestInfo from '../containers/ManifestInfo.js';

/**
 * a dialog providing the possibility to select the collection
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export var CollectionDialog = /*#__PURE__*/function (_Component) {
  _inherits(CollectionDialog, _Component);
  var _super = _createSuper(CollectionDialog);
  /** */
  function CollectionDialog(props) {
    var _this;
    _classCallCheck(this, CollectionDialog);
    _this = _super.call(this, props);
    _this.state = {
      filter: null
    };
    _this.hideDialog = _this.hideDialog.bind(_assertThisInitialized(_this));
    return _this;
  }

  /** */
  _createClass(CollectionDialog, [{
    key: "setFilter",
    value: function setFilter(filter) {
      this.setState({
        filter: filter
      });
    }

    /** */
  }, {
    key: "hideDialog",
    value: function hideDialog() {
      var _this$props = this.props,
        hideCollectionDialog = _this$props.hideCollectionDialog,
        windowId = _this$props.windowId;
      hideCollectionDialog(windowId);
    }

    /** */
  }, {
    key: "selectCollection",
    value: function selectCollection(c) {
      var _this$props2 = this.props,
        collectionPath = _this$props2.collectionPath,
        manifestId = _this$props2.manifestId,
        showCollectionDialog = _this$props2.showCollectionDialog,
        windowId = _this$props2.windowId;
      showCollectionDialog(c.id, [].concat(_toConsumableArray(collectionPath), [manifestId]), windowId);
    }

    /** */
  }, {
    key: "goToPreviousCollection",
    value: function goToPreviousCollection() {
      var _this$props3 = this.props,
        collectionPath = _this$props3.collectionPath,
        showCollectionDialog = _this$props3.showCollectionDialog,
        windowId = _this$props3.windowId;
      showCollectionDialog(collectionPath[collectionPath.length - 1], collectionPath.slice(0, -1), windowId);
    }

    /** */
  }, {
    key: "selectManifest",
    value: function selectManifest(m) {
      var _this$props4 = this.props,
        addWindow = _this$props4.addWindow,
        collectionPath = _this$props4.collectionPath,
        manifestId = _this$props4.manifestId,
        setWorkspaceAddVisibility = _this$props4.setWorkspaceAddVisibility,
        updateWindow = _this$props4.updateWindow,
        windowId = _this$props4.windowId;
      if (windowId) {
        updateWindow(windowId, {
          canvasId: null,
          collectionPath: [].concat(_toConsumableArray(collectionPath), [manifestId]),
          manifestId: m.id
        });
      } else {
        addWindow({
          collectionPath: [].concat(_toConsumableArray(collectionPath), [manifestId]),
          manifestId: m.id
        });
      }
      this.hideDialog();
      setWorkspaceAddVisibility(false);
    }

    /** */
  }, {
    key: "dialogContainer",
    value: function dialogContainer() {
      var _this$props5 = this.props,
        container = _this$props5.container,
        windowId = _this$props5.windowId;
      return ((container === null || container === void 0 ? void 0 : container.current) || document.body).querySelector("#".concat(windowId));
    }

    /** */
  }, {
    key: "placeholder",
    value: function placeholder() {
      var classes = this.props.classes;
      return /*#__PURE__*/_jsxs(Dialog, {
        className: classes.dialog,
        onClose: this.hideDialog,
        open: true,
        container: this.dialogContainer(),
        BackdropProps: this.backdropProps(),
        children: [/*#__PURE__*/_jsx(DialogTitle, {
          id: "select-collection",
          disableTypography: true,
          children: /*#__PURE__*/_jsx(Skeleton, {
            className: classes.placeholder,
            variant: "text"
          })
        }), /*#__PURE__*/_jsxs(ScrollIndicatedDialogContent, {
          children: [/*#__PURE__*/_jsx(Skeleton, {
            className: classes.placeholder,
            variant: "text"
          }), /*#__PURE__*/_jsx(Skeleton, {
            className: classes.placeholder,
            variant: "text"
          })]
        })]
      });
    }

    /** */
  }, {
    key: "backdropProps",
    value: function backdropProps() {
      var classes = this.props.classes;
      return {
        classes: {
          root: classes.dialog
        }
      };
    }

    /** */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props6 = this.props,
        classes = _this$props6.classes,
        collection = _this$props6.collection,
        error = _this$props6.error,
        isMultipart = _this$props6.isMultipart,
        manifest = _this$props6.manifest,
        ready = _this$props6.ready,
        t = _this$props6.t;
      var filter = this.state.filter;
      if (error) return null;
      // If this component is optimistically rendering ahead of the window its in
      // force a re-render so that it is placed correctly. The right thing here is
      // to maybe pass a ref.
      if (!this.dialogContainer()) {
        this.forceUpdate();
        return null;
      }
      if (!ready) return this.placeholder();
      var rights = manifest && asArray(manifest.getProperty('rights') || manifest.getProperty('license'));
      var requiredStatement = manifest && asArray(manifest.getRequiredStatement()).filter(function (l) {
        return l.getValue();
      }).map(function (labelValuePair) {
        return {
          label: null,
          values: labelValuePair.getValues()
        };
      });
      var collections = manifest.getCollections();
      var currentFilter = filter || (collections.length > 0 ? 'collections' : 'manifests');
      return /*#__PURE__*/_jsxs(Dialog, {
        className: classes.dialog,
        onClose: this.hideDialog,
        container: this.dialogContainer(),
        BackdropProps: this.backdropProps(),
        open: true,
        children: [/*#__PURE__*/_jsxs(DialogTitle, {
          id: "select-collection",
          disableTypography: true,
          children: [/*#__PURE__*/_jsx(Typography, {
            component: "div",
            variant: "overline",
            children: t(isMultipart ? 'multipartCollection' : 'collection')
          }), /*#__PURE__*/_jsx(Typography, {
            variant: "h3",
            children: CollectionDialog.getUseableLabel(manifest)
          })]
        }), /*#__PURE__*/_jsxs(ScrollIndicatedDialogContent, {
          className: classes.dialogContent,
          children: [collection && /*#__PURE__*/_jsx(Button, {
            startIcon: /*#__PURE__*/_jsx(ArrowBackIcon, {
              fontSize: "large"
            }),
            onClick: function onClick() {
              return _this2.goToPreviousCollection();
            },
            children: CollectionDialog.getUseableLabel(collection)
          }), /*#__PURE__*/_jsxs("div", {
            className: classes.collectionMetadata,
            children: [/*#__PURE__*/_jsx(ManifestInfo, {
              manifestId: manifest.id
            }), /*#__PURE__*/_jsxs(CollapsibleSection, {
              id: "select-collection-rights",
              label: t('attributionTitle'),
              children: [requiredStatement && /*#__PURE__*/_jsx(LabelValueMetadata, {
                labelValuePairs: requiredStatement,
                defaultLabel: t('attribution')
              }), rights && rights.length > 0 && /*#__PURE__*/_jsxs(_Fragment, {
                children: [/*#__PURE__*/_jsx(Typography, {
                  variant: "subtitle2",
                  component: "dt",
                  children: t('rights')
                }), rights.map(function (v) {
                  return /*#__PURE__*/_jsx(Typography, {
                    variant: "body1",
                    component: "dd",
                    children: /*#__PURE__*/_jsx(Link, {
                      target: "_blank",
                      rel: "noopener noreferrer",
                      href: v,
                      children: v
                    })
                  }, v);
                })]
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: classes.collectionFilter,
            children: [manifest.getTotalCollections() > 0 && /*#__PURE__*/_jsx(Chip, {
              clickable: true,
              color: currentFilter === 'collections' ? 'primary' : 'default',
              onClick: function onClick() {
                return _this2.setFilter('collections');
              },
              label: t('totalCollections', {
                count: manifest.getTotalCollections()
              })
            }), manifest.getTotalManifests() > 0 && /*#__PURE__*/_jsx(Chip, {
              clickable: true,
              color: currentFilter === 'manifests' ? 'primary' : 'default',
              onClick: function onClick() {
                return _this2.setFilter('manifests');
              },
              label: t('totalManifests', {
                count: manifest.getTotalManifests()
              })
            })]
          }), currentFilter === 'collections' && /*#__PURE__*/_jsx(MenuList, {
            children: collections.map(function (c) {
              return /*#__PURE__*/_jsx(MenuItem, {
                onClick: function onClick() {
                  _this2.selectCollection(c);
                },
                className: classes.collectionItem,
                children: CollectionDialog.getUseableLabel(c)
              }, c.id);
            })
          }), currentFilter === 'manifests' && /*#__PURE__*/_jsx(MenuList, {
            children: manifest.getManifests().map(function (m) {
              return /*#__PURE__*/_jsx(MenuItem, {
                onClick: function onClick() {
                  _this2.selectManifest(m);
                },
                className: classes.collectionItem,
                children: CollectionDialog.getUseableLabel(m)
              }, m.id);
            })
          })]
        }), /*#__PURE__*/_jsx(DialogActions, {
          children: /*#__PURE__*/_jsx(Button, {
            onClick: this.hideDialog,
            children: t('close')
          })
        })]
      });
    }
  }], [{
    key: "getUseableLabel",
    value: /** */
    function getUseableLabel(resource, index) {
      return resource && resource.getLabel && resource.getLabel().length > 0 ? resource.getLabel().getValue() : String(index + 1);
    }
  }]);
  return CollectionDialog;
}(Component);
CollectionDialog.defaultProps = {
  collection: null,
  collectionPath: [],
  container: null,
  error: null,
  isMultipart: false,
  ready: false,
  windowId: null
};