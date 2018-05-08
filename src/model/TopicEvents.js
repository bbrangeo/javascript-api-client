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
    define(['ApiClient', 'model/ActionEvent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ActionEvent'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.TopicEvents = factory(root.bimdata.ApiClient, root.bimdata.ActionEvent);
  }
}(this, function(ApiClient, ActionEvent) {
  'use strict';




  /**
   * The TopicEvents model module.
   * @module model/TopicEvents
   * @version 1.0.11
   */

  /**
   * Constructs a new <code>TopicEvents</code>.
   * @alias module:model/TopicEvents
   * @class
   * @param topicGuid {String} 
   * @param author {Number} 
   */
  var exports = function(topicGuid, author) {
    var _this = this;

    _this['topic_guid'] = topicGuid;

    _this['author'] = author;

  };

  /**
   * Constructs a <code>TopicEvents</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TopicEvents} obj Optional instance to populate.
   * @return {module:model/TopicEvents} The populated <code>TopicEvents</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('topic_guid')) {
        obj['topic_guid'] = ApiClient.convertToType(data['topic_guid'], 'String');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('author')) {
        obj['author'] = ApiClient.convertToType(data['author'], 'Number');
      }
      if (data.hasOwnProperty('events')) {
        obj['events'] = ApiClient.convertToType(data['events'], [ActionEvent]);
      }
    }
    return obj;
  }

  /**
   * @member {String} topic_guid
   */
  exports.prototype['topic_guid'] = undefined;
  /**
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {Number} author
   */
  exports.prototype['author'] = undefined;
  /**
   * @member {Array.<module:model/ActionEvent>} events
   */
  exports.prototype['events'] = undefined;



  return exports;
}));


