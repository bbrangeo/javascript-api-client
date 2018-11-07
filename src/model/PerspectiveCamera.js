/**
 * BIMData API
 * BIMData API documentation
 *
 * OpenAPI spec version: v1
 * Contact: contact@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.2.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Direction', 'model/Point'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Direction'), require('./Point'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.PerspectiveCamera = factory(root.bimdata.ApiClient, root.bimdata.Direction, root.bimdata.Point);
  }
}(this, function(ApiClient, Direction, Point) {
  'use strict';




  /**
   * The PerspectiveCamera model module.
   * @module model/PerspectiveCamera
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>PerspectiveCamera</code>.
   * @alias module:model/PerspectiveCamera
   * @class
   * @param fieldOfView {Number} 
   * @param cameraDirection {module:model/Direction} 
   * @param cameraUpVector {module:model/Direction} 
   * @param cameraViewPoint {module:model/Point} 
   */
  var exports = function(fieldOfView, cameraDirection, cameraUpVector, cameraViewPoint) {
    var _this = this;

    _this['field_of_view'] = fieldOfView;
    _this['camera_direction'] = cameraDirection;
    _this['camera_up_vector'] = cameraUpVector;
    _this['camera_view_point'] = cameraViewPoint;
  };

  /**
   * Constructs a <code>PerspectiveCamera</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PerspectiveCamera} obj Optional instance to populate.
   * @return {module:model/PerspectiveCamera} The populated <code>PerspectiveCamera</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('field_of_view')) {
        obj['field_of_view'] = ApiClient.convertToType(data['field_of_view'], 'Number');
      }
      if (data.hasOwnProperty('camera_direction')) {
        obj['camera_direction'] = Direction.constructFromObject(data['camera_direction']);
      }
      if (data.hasOwnProperty('camera_up_vector')) {
        obj['camera_up_vector'] = Direction.constructFromObject(data['camera_up_vector']);
      }
      if (data.hasOwnProperty('camera_view_point')) {
        obj['camera_view_point'] = Point.constructFromObject(data['camera_view_point']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} field_of_view
   */
  exports.prototype['field_of_view'] = undefined;
  /**
   * @member {module:model/Direction} camera_direction
   */
  exports.prototype['camera_direction'] = undefined;
  /**
   * @member {module:model/Direction} camera_up_vector
   */
  exports.prototype['camera_up_vector'] = undefined;
  /**
   * @member {module:model/Point} camera_view_point
   */
  exports.prototype['camera_view_point'] = undefined;



  return exports;
}));


