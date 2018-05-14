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
 * Swagger Codegen version: 2.3.1
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
    root.bimdata.OrthogonalCamera = factory(root.bimdata.ApiClient, root.bimdata.Direction, root.bimdata.Point);
  }
}(this, function(ApiClient, Direction, Point) {
  'use strict';




  /**
   * The OrthogonalCamera model module.
   * @module model/OrthogonalCamera
   * @version 1.0.14
   */

  /**
   * Constructs a new <code>OrthogonalCamera</code>.
   * @alias module:model/OrthogonalCamera
   * @class
   * @param viewToWorldScale {Number} 
   * @param cameraDirection {module:model/Direction} 
   * @param cameraUpVector {module:model/Direction} 
   * @param cameraViewPoint {module:model/Point} 
   */
  var exports = function(viewToWorldScale, cameraDirection, cameraUpVector, cameraViewPoint) {
    var _this = this;

    _this['view_to_world_scale'] = viewToWorldScale;
    _this['camera_direction'] = cameraDirection;
    _this['camera_up_vector'] = cameraUpVector;
    _this['camera_view_point'] = cameraViewPoint;
  };

  /**
   * Constructs a <code>OrthogonalCamera</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrthogonalCamera} obj Optional instance to populate.
   * @return {module:model/OrthogonalCamera} The populated <code>OrthogonalCamera</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('view_to_world_scale')) {
        obj['view_to_world_scale'] = ApiClient.convertToType(data['view_to_world_scale'], 'Number');
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
   * @member {Number} view_to_world_scale
   */
  exports.prototype['view_to_world_scale'] = undefined;
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


