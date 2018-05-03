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
    root.bimdata.RelatedTopic = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RelatedTopic model module.
   * @module model/RelatedTopic
   * @version 1.0.4
   */

  /**
   * Constructs a new <code>RelatedTopic</code>.
   * @alias module:model/RelatedTopic
   * @class
   * @param relatedTopicGuid {String} 
   */
  var exports = function(relatedTopicGuid) {
    var _this = this;

    _this['related_topic_guid'] = relatedTopicGuid;
  };

  /**
   * Constructs a <code>RelatedTopic</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RelatedTopic} obj Optional instance to populate.
   * @return {module:model/RelatedTopic} The populated <code>RelatedTopic</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('related_topic_guid')) {
        obj['related_topic_guid'] = ApiClient.convertToType(data['related_topic_guid'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} related_topic_guid
   */
  exports.prototype['related_topic_guid'] = undefined;



  return exports;
}));


