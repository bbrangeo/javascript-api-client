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
    define(['ApiClient', 'model/CommentAction', 'model/Label', 'model/Priority', 'model/ProjectAction', 'model/SnippetType', 'model/Stage', 'model/TopicAction', 'model/TopicStatus', 'model/TopicType', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CommentAction'), require('./Label'), require('./Priority'), require('./ProjectAction'), require('./SnippetType'), require('./Stage'), require('./TopicAction'), require('./TopicStatus'), require('./TopicType'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.Extensions = factory(root.bimdata.ApiClient, root.bimdata.CommentAction, root.bimdata.Label, root.bimdata.Priority, root.bimdata.ProjectAction, root.bimdata.SnippetType, root.bimdata.Stage, root.bimdata.TopicAction, root.bimdata.TopicStatus, root.bimdata.TopicType, root.bimdata.User);
  }
}(this, function(ApiClient, CommentAction, Label, Priority, ProjectAction, SnippetType, Stage, TopicAction, TopicStatus, TopicType, User) {
  'use strict';




  /**
   * The Extensions model module.
   * @module model/Extensions
   * @version 1.0.4
   */

  /**
   * Constructs a new <code>Extensions</code>.
   * @alias module:model/Extensions
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>Extensions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Extensions} obj Optional instance to populate.
   * @return {module:model/Extensions} The populated <code>Extensions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('topic_type')) {
        obj['topic_type'] = ApiClient.convertToType(data['topic_type'], [TopicType]);
      }
      if (data.hasOwnProperty('topic_status')) {
        obj['topic_status'] = ApiClient.convertToType(data['topic_status'], [TopicStatus]);
      }
      if (data.hasOwnProperty('topic_label')) {
        obj['topic_label'] = ApiClient.convertToType(data['topic_label'], [Label]);
      }
      if (data.hasOwnProperty('snippet_type')) {
        obj['snippet_type'] = ApiClient.convertToType(data['snippet_type'], [SnippetType]);
      }
      if (data.hasOwnProperty('priority')) {
        obj['priority'] = ApiClient.convertToType(data['priority'], [Priority]);
      }
      if (data.hasOwnProperty('user_id_type')) {
        obj['user_id_type'] = ApiClient.convertToType(data['user_id_type'], [User]);
      }
      if (data.hasOwnProperty('stage')) {
        obj['stage'] = ApiClient.convertToType(data['stage'], [Stage]);
      }
      if (data.hasOwnProperty('project_actions')) {
        obj['project_actions'] = ApiClient.convertToType(data['project_actions'], [ProjectAction]);
      }
      if (data.hasOwnProperty('topic_actions')) {
        obj['topic_actions'] = ApiClient.convertToType(data['topic_actions'], [TopicAction]);
      }
      if (data.hasOwnProperty('comment_actions')) {
        obj['comment_actions'] = ApiClient.convertToType(data['comment_actions'], [CommentAction]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/TopicType>} topic_type
   */
  exports.prototype['topic_type'] = undefined;
  /**
   * @member {Array.<module:model/TopicStatus>} topic_status
   */
  exports.prototype['topic_status'] = undefined;
  /**
   * @member {Array.<module:model/Label>} topic_label
   */
  exports.prototype['topic_label'] = undefined;
  /**
   * @member {Array.<module:model/SnippetType>} snippet_type
   */
  exports.prototype['snippet_type'] = undefined;
  /**
   * @member {Array.<module:model/Priority>} priority
   */
  exports.prototype['priority'] = undefined;
  /**
   * @member {Array.<module:model/User>} user_id_type
   */
  exports.prototype['user_id_type'] = undefined;
  /**
   * @member {Array.<module:model/Stage>} stage
   */
  exports.prototype['stage'] = undefined;
  /**
   * @member {Array.<module:model/ProjectAction>} project_actions
   */
  exports.prototype['project_actions'] = undefined;
  /**
   * @member {Array.<module:model/TopicAction>} topic_actions
   */
  exports.prototype['topic_actions'] = undefined;
  /**
   * @member {Array.<module:model/CommentAction>} comment_actions
   */
  exports.prototype['comment_actions'] = undefined;



  return exports;
}));


