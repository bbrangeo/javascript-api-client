/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * OpenAPI spec version: v1
 * Contact: contact@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.3
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
    root.bimdata.ClippingPlane = factory(root.bimdata.ApiClient, root.bimdata.Direction, root.bimdata.Point);
  }
}(this, function(ApiClient, Direction, Point) {
  'use strict';



  /**
   * The ClippingPlane model module.
   * @module model/ClippingPlane
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>ClippingPlane</code>.
   * @alias module:model/ClippingPlane
   * @class
   * @param location {module:model/Point} 
   * @param direction {module:model/Direction} 
   */
  var exports = function(location, direction) {
    var _this = this;

    _this['location'] = location;
    _this['direction'] = direction;
  };

  /**
   * Constructs a <code>ClippingPlane</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClippingPlane} obj Optional instance to populate.
   * @return {module:model/ClippingPlane} The populated <code>ClippingPlane</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('location')) {
        obj['location'] = Point.constructFromObject(data['location']);
      }
      if (data.hasOwnProperty('direction')) {
        obj['direction'] = Direction.constructFromObject(data['direction']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Point} location
   */
  exports.prototype['location'] = undefined;
  /**
   * @member {module:model/Direction} direction
   */
  exports.prototype['direction'] = undefined;



  return exports;
}));


