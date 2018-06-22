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
    root.bimdata.Bitmap = factory(root.bimdata.ApiClient, root.bimdata.Direction, root.bimdata.Point);
  }
}(this, function(ApiClient, Direction, Point) {
  'use strict';




  /**
   * The Bitmap model module.
   * @module model/Bitmap
   * @version v1
   */

  /**
   * Constructs a new <code>Bitmap</code>.
   * @alias module:model/Bitmap
   * @class
   * @param bitmapType {String} 
   * @param location {module:model/Point} 
   * @param normal {module:model/Direction} 
   * @param up {module:model/Direction} 
   * @param height {Number} 
   */
  var exports = function(bitmapType, location, normal, up, height) {
    var _this = this;


    _this['bitmap_type'] = bitmapType;
    _this['location'] = location;
    _this['normal'] = normal;
    _this['up'] = up;
    _this['height'] = height;

  };

  /**
   * Constructs a <code>Bitmap</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Bitmap} obj Optional instance to populate.
   * @return {module:model/Bitmap} The populated <code>Bitmap</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('guid')) {
        obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
      }
      if (data.hasOwnProperty('bitmap_type')) {
        obj['bitmap_type'] = ApiClient.convertToType(data['bitmap_type'], 'String');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = Point.constructFromObject(data['location']);
      }
      if (data.hasOwnProperty('normal')) {
        obj['normal'] = Direction.constructFromObject(data['normal']);
      }
      if (data.hasOwnProperty('up')) {
        obj['up'] = Direction.constructFromObject(data['up']);
      }
      if (data.hasOwnProperty('height')) {
        obj['height'] = ApiClient.convertToType(data['height'], 'Number');
      }
      if (data.hasOwnProperty('bitmap_data')) {
        obj['bitmap_data'] = ApiClient.convertToType(data['bitmap_data'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} guid
   */
  exports.prototype['guid'] = undefined;
  /**
   * @member {String} bitmap_type
   */
  exports.prototype['bitmap_type'] = undefined;
  /**
   * @member {module:model/Point} location
   */
  exports.prototype['location'] = undefined;
  /**
   * @member {module:model/Direction} normal
   */
  exports.prototype['normal'] = undefined;
  /**
   * @member {module:model/Direction} up
   */
  exports.prototype['up'] = undefined;
  /**
   * @member {Number} height
   */
  exports.prototype['height'] = undefined;
  /**
   * @member {String} bitmap_data
   */
  exports.prototype['bitmap_data'] = undefined;



  return exports;
}));


