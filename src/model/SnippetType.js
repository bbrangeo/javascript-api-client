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
 * OpenAPI Generator version: 3.0.2
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
    root.bimdata.SnippetType = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SnippetType model module.
   * @module model/SnippetType
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>SnippetType</code>.
   * @alias module:model/SnippetType
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SnippetType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SnippetType} obj Optional instance to populate.
   * @return {module:model/SnippetType} The populated <code>SnippetType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('snippet_type')) {
        obj['snippet_type'] = ApiClient.convertToType(data['snippet_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} snippet_type
   */
  exports.prototype['snippet_type'] = undefined;



  return exports;
}));


