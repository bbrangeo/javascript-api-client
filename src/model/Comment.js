/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * OpenAPI spec version: v1
 * Contact: contact@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.3
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
    root.bimdata.Comment = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Comment model module.
   * @module model/Comment
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>Comment</code>.
   * @alias module:model/Comment
   * @class
   * @param comment {String} 
   */
  var exports = function(comment) {
    var _this = this;

    _this['comment'] = comment;
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
        obj['author'] = ApiClient.convertToType(data['author'], 'String');
      }
      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
      if (data.hasOwnProperty('viewpoint_guid')) {
        obj['viewpoint_guid'] = ApiClient.convertToType(data['viewpoint_guid'], 'String');
      }
      if (data.hasOwnProperty('reply_to_comment_guid')) {
        obj['reply_to_comment_guid'] = ApiClient.convertToType(data['reply_to_comment_guid'], 'String');
      }
      if (data.hasOwnProperty('topic_guid')) {
        obj['topic_guid'] = ApiClient.convertToType(data['topic_guid'], 'String');
      }
      if (data.hasOwnProperty('modified_author')) {
        obj['modified_author'] = ApiClient.convertToType(data['modified_author'], 'String');
      }
      if (data.hasOwnProperty('modified_date')) {
        obj['modified_date'] = ApiClient.convertToType(data['modified_date'], 'Date');
      }
      if (data.hasOwnProperty('viewpoint_temp_id')) {
        obj['viewpoint_temp_id'] = ApiClient.convertToType(data['viewpoint_temp_id'], 'Number');
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
   * @member {String} author
   */
  exports.prototype['author'] = undefined;
  /**
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;
  /**
   * @member {String} viewpoint_guid
   */
  exports.prototype['viewpoint_guid'] = undefined;
  /**
   * @member {String} reply_to_comment_guid
   */
  exports.prototype['reply_to_comment_guid'] = undefined;
  /**
   * @member {String} topic_guid
   */
  exports.prototype['topic_guid'] = undefined;
  /**
   * @member {String} modified_author
   */
  exports.prototype['modified_author'] = undefined;
  /**
   * @member {Date} modified_date
   */
  exports.prototype['modified_date'] = undefined;
  /**
   * Only used when using POST on the full-topic route to bind viewpoint with comment
   * @member {Number} viewpoint_temp_id
   */
  exports.prototype['viewpoint_temp_id'] = undefined;



  return exports;
}));


