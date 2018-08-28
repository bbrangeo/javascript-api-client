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
    define(['ApiClient', 'model/Document', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Document'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.Ifc = factory(root.bimdata.ApiClient, root.bimdata.Document, root.bimdata.User);
  }
}(this, function(ApiClient, Document, User) {
  'use strict';




  /**
   * The Ifc model module.
   * @module model/Ifc
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>Ifc</code>.
   * @alias module:model/Ifc
   * @class
   */
  var exports = function() {
    var _this = this;
















  };

  /**
   * Constructs a <code>Ifc</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ifc} obj Optional instance to populate.
   * @return {module:model/Ifc} The populated <code>Ifc</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('creator')) {
        obj['creator'] = User.constructFromObject(data['creator']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
      if (data.hasOwnProperty('document_id')) {
        obj['document_id'] = ApiClient.convertToType(data['document_id'], 'String');
      }
      if (data.hasOwnProperty('document')) {
        obj['document'] = Document.constructFromObject(data['document']);
      }
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
      if (data.hasOwnProperty('error_detail')) {
        obj['error_detail'] = ApiClient.convertToType(data['error_detail'], 'String');
      }
      if (data.hasOwnProperty('project_id')) {
        obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/User} creator
   */
  exports.prototype['creator'] = undefined;
  /**
   * @member {module:model/Ifc.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;
  /**
   * @member {String} document_id
   */
  exports.prototype['document_id'] = undefined;
  /**
   * @member {module:model/Document} document
   */
  exports.prototype['document'] = undefined;
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
  /**
   * @member {String} error_detail
   */
  exports.prototype['error_detail'] = undefined;
  /**
   * @member {String} project_id
   */
  exports.prototype['project_id'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "C"
     * @const
     */
    "C": "C",
    /**
     * value: "D"
     * @const
     */
    "D": "D",
    /**
     * value: "P"
     * @const
     */
    "P": "P",
    /**
     * value: "I"
     * @const
     */
    "I": "I",
    /**
     * value: "E"
     * @const
     */
    "E": "E"  };


  return exports;
}));


