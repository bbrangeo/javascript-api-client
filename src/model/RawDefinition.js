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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.RawDefinition = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The RawDefinition model module.
   * @module model/RawDefinition
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>RawDefinition</code>.
   * @alias module:model/RawDefinition
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>RawDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RawDefinition} obj Optional instance to populate.
   * @return {module:model/RawDefinition} The populated <code>RawDefinition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('value_type')) {
        obj['value_type'] = ApiClient.convertToType(data['value_type'], 'String');
      }
      if (data.hasOwnProperty('unit_id')) {
        obj['unit_id'] = ApiClient.convertToType(data['unit_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} value_type
   */
  exports.prototype['value_type'] = undefined;
  /**
   * @member {Number} unit_id
   */
  exports.prototype['unit_id'] = undefined;



  return exports;
}));


