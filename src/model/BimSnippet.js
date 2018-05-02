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
    root.bimdata.BimSnippet = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BimSnippet model module.
   * @module model/BimSnippet
   * @version 1.0.3
   */

  /**
   * Constructs a new <code>BimSnippet</code>.
   * @alias module:model/BimSnippet
   * @class
   * @param snippetType {String} 
   * @param reference {String} 
   * @param referenceSchema {String} 
   */
  var exports = function(snippetType, reference, referenceSchema) {
    var _this = this;

    _this['snippet_type'] = snippetType;

    _this['reference'] = reference;
    _this['reference_schema'] = referenceSchema;
  };

  /**
   * Constructs a <code>BimSnippet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BimSnippet} obj Optional instance to populate.
   * @return {module:model/BimSnippet} The populated <code>BimSnippet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('snippet_type')) {
        obj['snippet_type'] = ApiClient.convertToType(data['snippet_type'], 'String');
      }
      if (data.hasOwnProperty('is_external')) {
        obj['is_external'] = ApiClient.convertToType(data['is_external'], 'Boolean');
      }
      if (data.hasOwnProperty('reference')) {
        obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
      }
      if (data.hasOwnProperty('reference_schema')) {
        obj['reference_schema'] = ApiClient.convertToType(data['reference_schema'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} snippet_type
   */
  exports.prototype['snippet_type'] = undefined;
  /**
   * @member {Boolean} is_external
   */
  exports.prototype['is_external'] = undefined;
  /**
   * @member {String} reference
   */
  exports.prototype['reference'] = undefined;
  /**
   * @member {String} reference_schema
   */
  exports.prototype['reference_schema'] = undefined;



  return exports;
}));


