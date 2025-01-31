function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import omit from 'lodash/omit';
import ActionTypes from '../actions/action-types.js';

/** */
export function accessTokensReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case ActionTypes.RESOLVE_AUTHENTICATION_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.tokenServiceId, {
        authId: action.id,
        id: action.tokenServiceId,
        isFetching: true
      }));
    case ActionTypes.REQUEST_ACCESS_TOKEN:
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.serviceId, {
        authId: action.authId,
        id: action.serviceId,
        isFetching: true
      }));
    case ActionTypes.RECEIVE_ACCESS_TOKEN:
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.serviceId, _objectSpread(_objectSpread({}, state[action.serviceId]), {}, {
        isFetching: false,
        json: action.json
      })));
    case ActionTypes.RECEIVE_ACCESS_TOKEN_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.serviceId, _objectSpread(_objectSpread({}, state[action.serviceId]), {}, {
        error: action.error,
        isFetching: false
      })));
    case ActionTypes.RESET_AUTHENTICATION_STATE:
      return omit(state, action.tokenServiceId);
    case ActionTypes.RECEIVE_INFO_RESPONSE:
      if (!action.tokenServiceId) return state;
      if (state[action.tokenServiceId].success) return state;
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.tokenServiceId, _objectSpread(_objectSpread({}, state[action.tokenServiceId]), {}, {
        success: true
      })));
    default:
      return state;
  }
}