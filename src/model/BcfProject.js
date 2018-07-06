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
    define(['ApiClient', 'model/ProjectAction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProjectAction'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.BcfProject = factory(root.bimdata.ApiClient, root.bimdata.ProjectAction);
  }
}(this, function(ApiClient, ProjectAction) {
  'use strict';




  /**
   * The BcfProject model module.
   * @module model/BcfProject
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>BcfProject</code>.
   * @alias module:model/BcfProject
   * @class
   * @param name {String} 
   */
  var exports = function(name) {
    var _this = this;


    _this['name'] = name;

  };

  /**
   * Constructs a <code>BcfProject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BcfProject} obj Optional instance to populate.
   * @return {module:model/BcfProject} The populated <code>BcfProject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('project_id')) {
        obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('autorization_project_actions')) {
        obj['autorization_project_actions'] = ApiClient.convertToType(data['autorization_project_actions'], [ProjectAction]);
      }
    }
    return obj;
  }

  /**
   * @member {String} project_id
   */
  exports.prototype['project_id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<module:model/ProjectAction>} autorization_project_actions
   */
  exports.prototype['autorization_project_actions'] = undefined;



  return exports;
}));


