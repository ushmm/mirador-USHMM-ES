function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import AnnotationList from './AnnotationList.js';
import AnnotationPage from './AnnotationPage.js';

/**
 * Used to determine the type of Annotation supported by a version of the IIIF
 * Presentation API.
 */
var AnnotationFactory = /*#__PURE__*/function () {
  function AnnotationFactory() {
    _classCallCheck(this, AnnotationFactory);
  }
  _createClass(AnnotationFactory, null, [{
    key: "determineAnnotation",
    value: /** */
    function determineAnnotation(json, target) {
      if (!json) {
        return null;
      }

      // IIIF Presentation API v3. AnnotationPage
      if (json.type === 'AnnotationPage') {
        return new AnnotationPage(json, target);
      }

      // IIIF Presentation API v2. OpenAnnotation and SharedCanvas models
      return new AnnotationList(json, target);
    }
  }]);
  return AnnotationFactory;
}();
export { AnnotationFactory as default };