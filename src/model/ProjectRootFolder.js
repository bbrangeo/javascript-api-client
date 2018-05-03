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
    root.bimdata.ProjectRootFolder = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProjectRootFolder model module.
   * @module model/ProjectRootFolder
   * @version 1.0.4
   */

  /**
   * Constructs a new <code>ProjectRootFolder</code>.
   * @alias module:model/ProjectRootFolder
   * @class
   * @param name {String} 
   */
  var exports = function(name) {
    var _this = this;


    _this['name'] = name;









  };

  /**
   * Constructs a <code>ProjectRootFolder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectRootFolder} obj Optional instance to populate.
   * @return {module:model/ProjectRootFolder} The populated <code>ProjectRootFolder</code> instance.
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
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
      if (data.hasOwnProperty('lft')) {
        obj['lft'] = ApiClient.convertToType(data['lft'], 'Number');
      }
      if (data.hasOwnProperty('rght')) {
        obj['rght'] = ApiClient.convertToType(data['rght'], 'Number');
      }
      if (data.hasOwnProperty('tree_id')) {
        obj['tree_id'] = ApiClient.convertToType(data['tree_id'], 'Number');
      }
      if (data.hasOwnProperty('level')) {
        obj['level'] = ApiClient.convertToType(data['level'], 'Number');
      }
      if (data.hasOwnProperty('creator')) {
        obj['creator'] = ApiClient.convertToType(data['creator'], 'Number');
      }
      if (data.hasOwnProperty('project')) {
        obj['project'] = ApiClient.convertToType(data['project'], 'Number');
      }
      if (data.hasOwnProperty('parent')) {
        obj['parent'] = ApiClient.convertToType(data['parent'], 'Number');
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
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;
  /**
   * @member {Number} lft
   */
  exports.prototype['lft'] = undefined;
  /**
   * @member {Number} rght
   */
  exports.prototype['rght'] = undefined;
  /**
   * @member {Number} tree_id
   */
  exports.prototype['tree_id'] = undefined;
  /**
   * @member {Number} level
   */
  exports.prototype['level'] = undefined;
  /**
   * @member {Number} creator
   */
  exports.prototype['creator'] = undefined;
  /**
   * @member {Number} project
   */
  exports.prototype['project'] = undefined;
  /**
   * @member {Number} parent
   */
  exports.prototype['parent'] = undefined;



  return exports;
}));


