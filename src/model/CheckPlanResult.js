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
    define(['ApiClient', 'model/RulesetResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RulesetResult'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.CheckPlanResult = factory(root.bimdata.ApiClient, root.bimdata.RulesetResult);
  }
}(this, function(ApiClient, RulesetResult) {
  'use strict';




  /**
   * The CheckPlanResult model module.
   * @module model/CheckPlanResult
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>CheckPlanResult</code>.
   * @alias module:model/CheckPlanResult
   * @class
   * @param checker {Number} 
   */
  var exports = function(checker) {
    var _this = this;


    _this['checker'] = checker;







  };

  /**
   * Constructs a <code>CheckPlanResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CheckPlanResult} obj Optional instance to populate.
   * @return {module:model/CheckPlanResult} The populated <code>CheckPlanResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('checker')) {
        obj['checker'] = ApiClient.convertToType(data['checker'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('result')) {
        obj['result'] = ApiClient.convertToType(data['result'], 'String');
      }
      if (data.hasOwnProperty('rulesets_results')) {
        obj['rulesets_results'] = ApiClient.convertToType(data['rulesets_results'], [RulesetResult]);
      }
      if (data.hasOwnProperty('collisions')) {
        obj['collisions'] = ApiClient.convertToType(data['collisions'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
      if (data.hasOwnProperty('error_detail')) {
        obj['error_detail'] = ApiClient.convertToType(data['error_detail'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} checker
   */
  exports.prototype['checker'] = undefined;
  /**
   * @member {module:model/CheckPlanResult.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} result
   */
  exports.prototype['result'] = undefined;
  /**
   * @member {Array.<module:model/RulesetResult>} rulesets_results
   */
  exports.prototype['rulesets_results'] = undefined;
  /**
   * @member {String} collisions
   */
  exports.prototype['collisions'] = undefined;
  /**
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;
  /**
   * @member {String} error_detail
   */
  exports.prototype['error_detail'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "C"
     * @const
     */
    "C": "C",
    /**
     * value: "P"
     * @const
     */
    "P": "P",
    /**
     * value: "E"
     * @const
     */
    "E": "E"  };


  return exports;
}));


