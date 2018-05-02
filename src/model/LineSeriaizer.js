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
    define(['ApiClient', 'model/Point'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Point'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.LineSeriaizer = factory(root.bimdata.ApiClient, root.bimdata.Point);
  }
}(this, function(ApiClient, Point) {
  'use strict';




  /**
   * The LineSeriaizer model module.
   * @module model/LineSeriaizer
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>LineSeriaizer</code>.
   * @alias module:model/LineSeriaizer
   * @class
   * @param endPoint {module:model/Point} 
   * @param startPoint {module:model/Point} 
   */
  var exports = function(endPoint, startPoint) {
    var _this = this;

    _this['end_point'] = endPoint;
    _this['start_point'] = startPoint;
  };

  /**
   * Constructs a <code>LineSeriaizer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LineSeriaizer} obj Optional instance to populate.
   * @return {module:model/LineSeriaizer} The populated <code>LineSeriaizer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('end_point')) {
        obj['end_point'] = Point.constructFromObject(data['end_point']);
      }
      if (data.hasOwnProperty('start_point')) {
        obj['start_point'] = Point.constructFromObject(data['start_point']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Point} end_point
   */
  exports.prototype['end_point'] = undefined;
  /**
   * @member {module:model/Point} start_point
   */
  exports.prototype['start_point'] = undefined;



  return exports;
}));


