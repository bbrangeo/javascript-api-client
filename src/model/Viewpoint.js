/**
 * BIMData API
 * BIMData API documentation
 *
 * OpenAPI spec version: v1
 * Contact: contact@bimdata.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Bitmap', 'model/ClippingPlane', 'model/ComponentsParent', 'model/LineSeriaizer', 'model/OrthogonalCamera', 'model/PerspectiveCamera', 'model/Snapshot'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Bitmap'), require('./ClippingPlane'), require('./ComponentsParent'), require('./LineSeriaizer'), require('./OrthogonalCamera'), require('./PerspectiveCamera'), require('./Snapshot'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.Viewpoint = factory(root.bimdata.ApiClient, root.bimdata.Bitmap, root.bimdata.ClippingPlane, root.bimdata.ComponentsParent, root.bimdata.LineSeriaizer, root.bimdata.OrthogonalCamera, root.bimdata.PerspectiveCamera, root.bimdata.Snapshot);
  }
}(this, function(ApiClient, Bitmap, ClippingPlane, ComponentsParent, LineSeriaizer, OrthogonalCamera, PerspectiveCamera, Snapshot) {
  'use strict';




  /**
   * The Viewpoint model module.
   * @module model/Viewpoint
   * @version 1.0.8
   */

  /**
   * Constructs a new <code>Viewpoint</code>.
   * @alias module:model/Viewpoint
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>Viewpoint</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Viewpoint} obj Optional instance to populate.
   * @return {module:model/Viewpoint} The populated <code>Viewpoint</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('index')) {
        obj['index'] = ApiClient.convertToType(data['index'], 'Number');
      }
      if (data.hasOwnProperty('guid')) {
        obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
      }
      if (data.hasOwnProperty('orthogonal_camera')) {
        obj['orthogonal_camera'] = OrthogonalCamera.constructFromObject(data['orthogonal_camera']);
      }
      if (data.hasOwnProperty('perspective_camera')) {
        obj['perspective_camera'] = PerspectiveCamera.constructFromObject(data['perspective_camera']);
      }
      if (data.hasOwnProperty('lines')) {
        obj['lines'] = ApiClient.convertToType(data['lines'], [LineSeriaizer]);
      }
      if (data.hasOwnProperty('clipping_planes')) {
        obj['clipping_planes'] = ApiClient.convertToType(data['clipping_planes'], [ClippingPlane]);
      }
      if (data.hasOwnProperty('bitmaps')) {
        obj['bitmaps'] = ApiClient.convertToType(data['bitmaps'], [Bitmap]);
      }
      if (data.hasOwnProperty('snapshot')) {
        obj['snapshot'] = Snapshot.constructFromObject(data['snapshot']);
      }
      if (data.hasOwnProperty('components')) {
        obj['components'] = ComponentsParent.constructFromObject(data['components']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} index
   */
  exports.prototype['index'] = undefined;
  /**
   * @member {String} guid
   */
  exports.prototype['guid'] = undefined;
  /**
   * @member {module:model/OrthogonalCamera} orthogonal_camera
   */
  exports.prototype['orthogonal_camera'] = undefined;
  /**
   * @member {module:model/PerspectiveCamera} perspective_camera
   */
  exports.prototype['perspective_camera'] = undefined;
  /**
   * @member {Array.<module:model/LineSeriaizer>} lines
   */
  exports.prototype['lines'] = undefined;
  /**
   * @member {Array.<module:model/ClippingPlane>} clipping_planes
   */
  exports.prototype['clipping_planes'] = undefined;
  /**
   * @member {Array.<module:model/Bitmap>} bitmaps
   */
  exports.prototype['bitmaps'] = undefined;
  /**
   * @member {module:model/Snapshot} snapshot
   */
  exports.prototype['snapshot'] = undefined;
  /**
   * @member {module:model/ComponentsParent} components
   */
  exports.prototype['components'] = undefined;



  return exports;
}));


