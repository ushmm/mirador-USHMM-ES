function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * MiradorManifest - adds additional, testable logic around Manifesto's Manifest
 * https://iiif-commons.github.io/manifesto/classes/_canvas_.manifesto.canvas.html
 */
var MiradorManifest = /*#__PURE__*/function () {
  /** */
  function MiradorManifest(manifest) {
    _classCallCheck(this, MiradorManifest);
    this.manifest = manifest;
  }

  /**
   * Returns the starting canvas specified in the manifest
   * @param {object} manifest manifesto instance
   * @param {number} canvasIndexFromState
   * @return {Canvas}
   */
  _createClass(MiradorManifest, [{
    key: "startCanvas",
    get: function get() {
      var canvasId;
      var sequence = this.manifest.getSequences()[0];
      if (!sequence) return undefined;

      // IIIF v2
      canvasId = sequence.getProperty('startCanvas');
      if (!canvasId) {
        // IIIF v3
        var start = this.manifest.getProperty('start') || sequence.getProperty('start');
        canvasId = start && (start.id || start.source);
      }
      return canvasId && sequence.getCanvasById(canvasId) || undefined;
    }

    /** */
  }, {
    key: "canvasAt",
    value: function canvasAt(index) {
      var sequence = this.manifest.getSequences()[0];
      var canvases = sequence && sequence.getCanvases();
      return canvases && canvases[index];
    }
  }]);
  return MiradorManifest;
}();
export { MiradorManifest as default };