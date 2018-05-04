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
    define(['ApiClient', 'model/Cloud', 'model/ProjectRootFolder'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Cloud'), require('./ProjectRootFolder'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.Project = factory(root.bimdata.ApiClient, root.bimdata.Cloud, root.bimdata.ProjectRootFolder);
  }
}(this, function(ApiClient, Cloud, ProjectRootFolder) {
  'use strict';




  /**
   * The Project model module.
   * @module model/Project
   * @version 1.0.5
   */

  /**
   * Constructs a new <code>Project</code>.
   * @alias module:model/Project
   * @class
   * @param name {String} 
   */
  var exports = function(name) {
    var _this = this;




    _this['name'] = name;






  };

  /**
   * Constructs a <code>Project</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Project} obj Optional instance to populate.
   * @return {module:model/Project} The populated <code>Project</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('logo')) {
        obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
      }
      if (data.hasOwnProperty('cloud')) {
        obj['cloud'] = Cloud.constructFromObject(data['cloud']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
      if (data.hasOwnProperty('root_folder')) {
        obj['root_folder'] = ProjectRootFolder.constructFromObject(data['root_folder']);
      }
      if (data.hasOwnProperty('property_permissions_enabled')) {
        obj['property_permissions_enabled'] = ApiClient.convertToType(data['property_permissions_enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('cloud_id')) {
        obj['cloud_id'] = ApiClient.convertToType(data['cloud_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} logo
   */
  exports.prototype['logo'] = undefined;
  /**
   * @member {module:model/Cloud} cloud
   */
  exports.prototype['cloud'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/Project.StatusEnum} status
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
   * @member {module:model/ProjectRootFolder} root_folder
   */
  exports.prototype['root_folder'] = undefined;
  /**
   * @member {Boolean} property_permissions_enabled
   */
  exports.prototype['property_permissions_enabled'] = undefined;
  /**
   * @member {Number} cloud_id
   */
  exports.prototype['cloud_id'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "A"
     * @const
     */
    "A": "A",
    /**
     * value: "D"
     * @const
     */
    "D": "D"  };


  return exports;
}));


