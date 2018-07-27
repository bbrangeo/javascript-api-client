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
 * OpenAPI Generator version: 3.1.2
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
    root.bimdata.IfcFiles = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The IfcFiles model module.
   * @module model/IfcFiles
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>IfcFiles</code>.
   * @alias module:model/IfcFiles
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>IfcFiles</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IfcFiles} obj Optional instance to populate.
   * @return {module:model/IfcFiles} The populated <code>IfcFiles</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('structure_file')) {
        obj['structure_file'] = ApiClient.convertToType(data['structure_file'], 'String');
      }
      if (data.hasOwnProperty('systems_file')) {
        obj['systems_file'] = ApiClient.convertToType(data['systems_file'], 'String');
      }
      if (data.hasOwnProperty('map_file')) {
        obj['map_file'] = ApiClient.convertToType(data['map_file'], 'String');
      }
      if (data.hasOwnProperty('gltf_file')) {
        obj['gltf_file'] = ApiClient.convertToType(data['gltf_file'], 'String');
      }
      if (data.hasOwnProperty('bvh_tree_file')) {
        obj['bvh_tree_file'] = ApiClient.convertToType(data['bvh_tree_file'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} structure_file
   */
  exports.prototype['structure_file'] = undefined;
  /**
   * @member {String} systems_file
   */
  exports.prototype['systems_file'] = undefined;
  /**
   * @member {String} map_file
   */
  exports.prototype['map_file'] = undefined;
  /**
   * @member {String} gltf_file
   */
  exports.prototype['gltf_file'] = undefined;
  /**
   * @member {String} bvh_tree_file
   */
  exports.prototype['bvh_tree_file'] = undefined;



  return exports;
}));


