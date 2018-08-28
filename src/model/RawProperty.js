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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.RawProperty = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RawProperty model module.
   * @module model/RawProperty
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>RawProperty</code>.
   * @alias module:model/RawProperty
   * @class
   * @param defId {Number} 
   */
  var exports = function(defId) {
    var _this = this;


    _this['def_id'] = defId;
  };

  /**
   * Constructs a <code>RawProperty</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RawProperty} obj Optional instance to populate.
   * @return {module:model/RawProperty} The populated <code>RawProperty</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('def_id')) {
        obj['def_id'] = ApiClient.convertToType(data['def_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} value
   */
  exports.prototype['value'] = undefined;
  /**
   * @member {Number} def_id
   */
  exports.prototype['def_id'] = undefined;



  return exports;
}));


