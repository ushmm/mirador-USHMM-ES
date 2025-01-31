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
import ListItem from '@material-ui/core/ListItem';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import { Img } from 'react-image';
import ManifestListItemError from '../containers/ManifestListItemError.js';
import ns from '../config/css-ns.js';

/**
 * Represents an item in a list of currently-loaded or loading manifests
 * @param {object} props
 * @param {object} [props.manifest = string]
 */

/** */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var ManifestListItem = /*#__PURE__*/function (_Component) {
  _inherits(ManifestListItem, _Component);
  var _super = _createSuper(ManifestListItem);
  /** */
  function ManifestListItem(props) {
    var _this;
    _classCallCheck(this, ManifestListItem);
    _this = _super.call(this, props);
    _this.handleOpenButtonClick = _this.handleOpenButtonClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  /** */
  _createClass(ManifestListItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
        fetchManifest = _this$props.fetchManifest,
        manifestId = _this$props.manifestId,
        ready = _this$props.ready,
        isFetching = _this$props.isFetching,
        error = _this$props.error,
        provider = _this$props.provider;
      if (!ready && !error && !isFetching && provider !== 'file') fetchManifest(manifestId);
    }

    /**
     * Handling open button click
     */
  }, {
    key: "handleOpenButtonClick",
    value: function handleOpenButtonClick() {
      var _this$props2 = this.props,
        addWindow = _this$props2.addWindow,
        handleClose = _this$props2.handleClose,
        manifestId = _this$props2.manifestId;
      addWindow({
        manifestId: manifestId
      });
      handleClose();
    }

    /** */
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        active = _this$props3.active,
        buttonRef = _this$props3.buttonRef,
        manifestId = _this$props3.manifestId,
        ready = _this$props3.ready,
        title = _this$props3.title,
        thumbnail = _this$props3.thumbnail,
        manifestLogo = _this$props3.manifestLogo,
        size = _this$props3.size,
        classes = _this$props3.classes,
        provider = _this$props3.provider,
        t = _this$props3.t,
        error = _this$props3.error,
        isCollection = _this$props3.isCollection,
        isMultipart = _this$props3.isMultipart;
      var placeholder = /*#__PURE__*/_jsxs(Grid, {
        container: true,
        className: ns('manifest-list-item'),
        spacing: 2,
        children: [/*#__PURE__*/_jsx(Grid, {
          item: true,
          xs: 3,
          sm: 2,
          children: /*#__PURE__*/_jsx(Skeleton, {
            className: classes.placeholder,
            variant: "rect",
            height: 80,
            width: 120
          })
        }), /*#__PURE__*/_jsx(Grid, {
          item: true,
          xs: 9,
          sm: 6,
          children: /*#__PURE__*/_jsx(Skeleton, {
            className: classes.placeholder,
            variant: "text"
          })
        }), /*#__PURE__*/_jsxs(Grid, {
          item: true,
          xs: 8,
          sm: 2,
          children: [/*#__PURE__*/_jsx(Skeleton, {
            className: classes.placeholder,
            variant: "text"
          }), /*#__PURE__*/_jsx(Skeleton, {
            className: classes.placeholder,
            variant: "text"
          })]
        }), /*#__PURE__*/_jsx(Grid, {
          item: true,
          xs: 4,
          sm: 2,
          children: /*#__PURE__*/_jsx(Skeleton, {
            className: classes.placeholder,
            variant: "rect",
            height: 60,
            width: 60
          })
        })]
      });
      if (error) {
        return /*#__PURE__*/_jsx(ListItem, {
          divider: true,
          className: classes.root,
          "data-manifestid": manifestId,
          children: /*#__PURE__*/_jsx(ManifestListItemError, {
            manifestId: manifestId
          })
        });
      }
      return /*#__PURE__*/_jsx(ListItem, {
        divider: true,
        className: [classes.root, active ? classes.active : ''].join(' '),
        "data-manifestid": manifestId,
        children: ready ? /*#__PURE__*/_jsxs(Grid, {
          container: true,
          className: ns('manifest-list-item'),
          spacing: 2,
          children: [/*#__PURE__*/_jsx(Grid, {
            item: true,
            xs: 12,
            sm: 6,
            className: classes.buttonGrid,
            children: /*#__PURE__*/_jsx(ButtonBase, {
              ref: buttonRef,
              className: ns('manifest-list-item-title'),
              style: {
                width: '100%'
              },
              onClick: this.handleOpenButtonClick,
              children: /*#__PURE__*/_jsxs(Grid, {
                container: true,
                spacing: 2,
                className: classes.label,
                component: "span",
                children: [/*#__PURE__*/_jsx(Grid, {
                  item: true,
                  xs: 4,
                  sm: 3,
                  component: "span",
                  children: thumbnail ? /*#__PURE__*/_jsx(Img, {
                    className: [classes.thumbnail, ns('manifest-list-item-thumb')].join(' '),
                    src: [thumbnail],
                    alt: "",
                    height: "80",
                    unloader: /*#__PURE__*/_jsx(Skeleton, {
                      variant: "rect",
                      animation: false,
                      className: classes.placeholder,
                      height: 80,
                      width: 120
                    })
                  }) : /*#__PURE__*/_jsx(Skeleton, {
                    className: classes.placeholder,
                    variant: "rect",
                    height: 80,
                    width: 120
                  })
                }), /*#__PURE__*/_jsxs(Grid, {
                  item: true,
                  xs: 8,
                  sm: 9,
                  component: "span",
                  children: [isCollection && /*#__PURE__*/_jsx(Typography, {
                    component: "div",
                    variant: "overline",
                    children: t(isMultipart ? 'multipartCollection' : 'collection')
                  }), /*#__PURE__*/_jsx(Typography, {
                    component: "span",
                    variant: "h6",
                    children: title || manifestId
                  })]
                })]
              })
            })
          }), /*#__PURE__*/_jsxs(Grid, {
            item: true,
            xs: 8,
            sm: 4,
            children: [/*#__PURE__*/_jsx(Typography, {
              className: ns('manifest-list-item-provider'),
              children: provider
            }), /*#__PURE__*/_jsx(Typography, {
              children: t('numItems', {
                count: size,
                number: size
              })
            })]
          }), /*#__PURE__*/_jsx(Grid, {
            item: true,
            xs: 4,
            sm: 2,
            children: manifestLogo && /*#__PURE__*/_jsx(Img, {
              src: [manifestLogo],
              alt: "",
              role: "presentation",
              className: classes.logo,
              unloader: /*#__PURE__*/_jsx(Skeleton, {
                variant: "rect",
                animation: false,
                className: classes.placeholder,
                height: 60,
                width: 60
              })
            })
          })]
        }) : placeholder
      });
    }
  }]);
  return ManifestListItem;
}(Component);
ManifestListItem.defaultProps = {
  active: false,
  buttonRef: undefined,
  classes: {},
  error: null,
  handleClose: function handleClose() {},
  isCollection: false,
  isFetching: false,
  isMultipart: false,
  manifestLogo: null,
  provider: null,
  ready: false,
  size: 0,
  t: function t(key) {
    return key;
  },
  thumbnail: null,
  title: null
};