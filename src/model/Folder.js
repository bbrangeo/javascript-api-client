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
    define(['ApiClient', 'model/FosUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FosUser'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.Folder = factory(root.bimdata.ApiClient, root.bimdata.FosUser);
  }
}(this, function(ApiClient, FosUser) {
  'use strict';




  /**
   * The Folder model module.
   * @module model/Folder
   * @version 1.0.4
   */

  /**
   * Constructs a new <code>Folder</code>.
   * @alias module:model/Folder
   * @class
   * @param name {String} 
   */
  var exports = function(name) {
    var _this = this;



    _this['name'] = name;





  };

  /**
   * Constructs a <code>Folder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Folder} obj Optional instance to populate.
   * @return {module:model/Folder} The populated <code>Folder</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('parent_id')) {
        obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'Number');
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
      if (data.hasOwnProperty('children')) {
        obj['children'] = ApiClient.convertToType(data['children'], ['String']);
      }
      if (data.hasOwnProperty('project_id')) {
        obj['project_id'] = ApiClient.convertToType(data['project_id'], 'Number');
      }
      if (data.hasOwnProperty('created_by')) {
        obj['created_by'] = FosUser.constructFromObject(data['created_by']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} parent_id
   */
  exports.prototype['parent_id'] = undefined;
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
   * @member {Array.<String>} children
   */
  exports.prototype['children'] = undefined;
  /**
   * @member {Number} project_id
   */
  exports.prototype['project_id'] = undefined;
  /**
   * @member {module:model/FosUser} created_by
   */
  exports.prototype['created_by'] = undefined;



  return exports;
}));


