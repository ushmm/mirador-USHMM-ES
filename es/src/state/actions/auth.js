function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import ActionTypes from './action-types.js';

/**
 * addAuthenticationRequest - action creator
 *
 * @param  {String} windowId
 * @param  {String} id
 * @memberof ActionCreators
 */
export function addAuthenticationRequest(windowId, id) {
  var profile = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  return {
    id: id,
    profile: profile,
    type: ActionTypes.ADD_AUTHENTICATION_REQUEST,
    windowId: windowId
  };
}

/**
 * resolveAuthenticationRequest - action creator
 * Triggered when we might have an IIIF auth cookie available (but we
 *   can't be really sure until try the access token)
 *
 * @param {String} id
 * @memberof ActionCreators
 */
export function resolveAuthenticationRequest(id, tokenServiceId, props) {
  return _objectSpread({
    id: id,
    tokenServiceId: tokenServiceId,
    type: ActionTypes.RESOLVE_AUTHENTICATION_REQUEST
  }, props);
}

/**
 * requestAccessToken - action creator
 * @private
 *
 * @param  {String} serviceId
 * @param  {String} authId
 * @memberof ActionCreators
 */
export function requestAccessToken(serviceId, authId) {
  return {
    authId: authId,
    serviceId: serviceId,
    type: ActionTypes.REQUEST_ACCESS_TOKEN
  };
}

/**
 * receiveAccessToken - action creator
 * @private
 *
 * @param  {String} serviceId
 * @param  {Object} json
 * @memberof ActionCreators
 */
export function receiveAccessToken(authId, serviceId, json) {
  return {
    authId: authId,
    json: json,
    serviceId: serviceId,
    type: ActionTypes.RECEIVE_ACCESS_TOKEN
  };
}

/**
 * receiveAccessTokenFailure - action creator
 * @private
 *
 * @param  {String} serviceId
 * @param  {Object} error
 * @memberof ActionCreators
 */
export function receiveAccessTokenFailure(authId, serviceId, error) {
  return {
    authId: authId,
    error: error,
    serviceId: serviceId,
    type: ActionTypes.RECEIVE_ACCESS_TOKEN_FAILURE
  };
}

/**
 * resolveAccessTokenRequest - action creator
 *
 * @param {String} authServiceId
 * @param {String} tokenServiceId
 * @param {Object} json
 * @memberof ActionCreators
 */
export function resolveAccessTokenRequest(authServiceId, tokenServiceId, json) {
  if (!json.accessToken) return receiveAccessTokenFailure(authServiceId, tokenServiceId, json);
  return receiveAccessToken(authServiceId, tokenServiceId, json);
}

/**
 * Resets authentication state for a token service
 */
export function resetAuthenticationState(_ref) {
  var authServiceId = _ref.authServiceId,
    tokenServiceId = _ref.tokenServiceId;
  return {
    id: authServiceId,
    tokenServiceId: tokenServiceId,
    type: ActionTypes.RESET_AUTHENTICATION_STATE
  };
}