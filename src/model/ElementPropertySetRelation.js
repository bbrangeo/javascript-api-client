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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.ElementPropertySetRelation = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ElementPropertySetRelation model module.
   * @module model/ElementPropertySetRelation
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ElementPropertySetRelation</code>.
   * @alias module:model/ElementPropertySetRelation
   * @class
   * @param elementUuid {String} 
   * @param propertySetId {Number} 
   */
  var exports = function(elementUuid, propertySetId) {
    var _this = this;

    _this['element_uuid'] = elementUuid;
    _this['property_set_id'] = propertySetId;
  };

  /**
   * Constructs a <code>ElementPropertySetRelation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ElementPropertySetRelation} obj Optional instance to populate.
   * @return {module:model/ElementPropertySetRelation} The populated <code>ElementPropertySetRelation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('element_uuid')) {
        obj['element_uuid'] = ApiClient.convertToType(data['element_uuid'], 'String');
      }
      if (data.hasOwnProperty('property_set_id')) {
        obj['property_set_id'] = ApiClient.convertToType(data['property_set_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} element_uuid
   */
  exports.prototype['element_uuid'] = undefined;
  /**
   * @member {Number} property_set_id
   */
  exports.prototype['property_set_id'] = undefined;



  return exports;
}));


