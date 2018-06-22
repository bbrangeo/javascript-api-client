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
    root.bimdata.TopicAction = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TopicAction model module.
   * @module model/TopicAction
   * @version v1
   */

  /**
   * Constructs a new <code>TopicAction</code>.
   * @alias module:model/TopicAction
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TopicAction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TopicAction} obj Optional instance to populate.
   * @return {module:model/TopicAction} The populated <code>TopicAction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('topic_action')) {
        obj['topic_action'] = ApiClient.convertToType(data['topic_action'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/TopicAction.TopicActionEnum} topic_action
   */
  exports.prototype['topic_action'] = undefined;


  /**
   * Allowed values for the <code>topic_action</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TopicActionEnum = {
    /**
     * value: "update"
     * @const
     */
    "update": "update",
    /**
     * value: "updateFiles"
     * @const
     */
    "updateFiles": "updateFiles",
    /**
     * value: "updateBimSnippet"
     * @const
     */
    "updateBimSnippet": "updateBimSnippet",
    /**
     * value: "updateRelatedTopics"
     * @const
     */
    "updateRelatedTopics": "updateRelatedTopics",
    /**
     * value: "updateDocumentServices"
     * @const
     */
    "updateDocumentServices": "updateDocumentServices",
    /**
     * value: "createViewpoint"
     * @const
     */
    "createViewpoint": "createViewpoint",
    /**
     * value: "createComment"
     * @const
     */
    "createComment": "createComment"  };


  return exports;
}));


