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
    define(['ApiClient', 'model/CommentAction', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CommentAction'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.Comment = factory(root.bimdata.ApiClient, root.bimdata.CommentAction, root.bimdata.User);
  }
}(this, function(ApiClient, CommentAction, User) {
  'use strict';




  /**
   * The Comment model module.
   * @module model/Comment
   * @version 1.0.5
   */

  /**
   * Constructs a new <code>Comment</code>.
   * @alias module:model/Comment
   * @class
   * @param author {module:model/User} 
   * @param topicGuid {String} 
   */
  var exports = function(author, topicGuid) {
    var _this = this;



    _this['author'] = author;

    _this['topic_guid'] = topicGuid;





  };

  /**
   * Constructs a <code>Comment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Comment} obj Optional instance to populate.
   * @return {module:model/Comment} The populated <code>Comment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('guid')) {
        obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('author')) {
        obj['author'] = User.constructFromObject(data['author']);
      }
      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
      if (data.hasOwnProperty('topic_guid')) {
        obj['topic_guid'] = ApiClient.convertToType(data['topic_guid'], 'String');
      }
      if (data.hasOwnProperty('viewpoint_guid')) {
        obj['viewpoint_guid'] = ApiClient.convertToType(data['viewpoint_guid'], 'String');
      }
      if (data.hasOwnProperty('reply_to_comment_guid')) {
        obj['reply_to_comment_guid'] = ApiClient.convertToType(data['reply_to_comment_guid'], 'String');
      }
      if (data.hasOwnProperty('modified_date')) {
        obj['modified_date'] = ApiClient.convertToType(data['modified_date'], 'Date');
      }
      if (data.hasOwnProperty('modified_author')) {
        obj['modified_author'] = ApiClient.convertToType(data['modified_author'], 'Number');
      }
      if (data.hasOwnProperty('autorization_comment_actions')) {
        obj['autorization_comment_actions'] = ApiClient.convertToType(data['autorization_comment_actions'], [CommentAction]);
      }
    }
    return obj;
  }

  /**
   * @member {String} guid
   */
  exports.prototype['guid'] = undefined;
  /**
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {module:model/User} author
   */
  exports.prototype['author'] = undefined;
  /**
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;
  /**
   * @member {String} topic_guid
   */
  exports.prototype['topic_guid'] = undefined;
  /**
   * @member {String} viewpoint_guid
   */
  exports.prototype['viewpoint_guid'] = undefined;
  /**
   * @member {String} reply_to_comment_guid
   */
  exports.prototype['reply_to_comment_guid'] = undefined;
  /**
   * @member {Date} modified_date
   */
  exports.prototype['modified_date'] = undefined;
  /**
   * @member {Number} modified_author
   */
  exports.prototype['modified_author'] = undefined;
  /**
   * @member {Array.<module:model/CommentAction>} autorization_comment_actions
   */
  exports.prototype['autorization_comment_actions'] = undefined;



  return exports;
}));


