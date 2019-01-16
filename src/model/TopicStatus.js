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
    root.bimdata.TopicStatus = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The TopicStatus model module.
   * @module model/TopicStatus
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>TopicStatus</code>.
   * @alias module:model/TopicStatus
   * @class
   * @param topicStatus {String} 
   */
  var exports = function(topicStatus) {
    var _this = this;

    _this['topic_status'] = topicStatus;
  };

  /**
   * Constructs a <code>TopicStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TopicStatus} obj Optional instance to populate.
   * @return {module:model/TopicStatus} The populated <code>TopicStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('topic_status')) {
        obj['topic_status'] = ApiClient.convertToType(data['topic_status'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} topic_status
   */
  exports.prototype['topic_status'] = undefined;



  return exports;
}));


