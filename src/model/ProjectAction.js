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
 * Swagger Codegen version: 2.3.1
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
    root.bimdata.ProjectAction = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProjectAction model module.
   * @module model/ProjectAction
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>ProjectAction</code>.
   * @alias module:model/ProjectAction
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ProjectAction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectAction} obj Optional instance to populate.
   * @return {module:model/ProjectAction} The populated <code>ProjectAction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('project_action')) {
        obj['project_action'] = ApiClient.convertToType(data['project_action'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ProjectAction.ProjectActionEnum} project_action
   */
  exports.prototype['project_action'] = undefined;


  /**
   * Allowed values for the <code>project_action</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ProjectActionEnum = {
    /**
     * value: "update"
     * @const
     */
    "update": "update",
    /**
     * value: "createTopic"
     * @const
     */
    "createTopic": "createTopic",
    /**
     * value: "createDocument"
     * @const
     */
    "createDocument": "createDocument",
    /**
     * value: "updateProjectExtensions"
     * @const
     */
    "updateProjectExtensions": "updateProjectExtensions"  };


  return exports;
}));

