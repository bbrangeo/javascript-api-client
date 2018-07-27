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
 * OpenAPI Generator version: 3.1.2
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
    root.bimdata.ResetPassword = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ResetPassword model module.
   * @module model/ResetPassword
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>ResetPassword</code>.
   * @alias module:model/ResetPassword
   * @class
   * @param resetToken {String} 
   * @param newPassword {String} 
   */
  var exports = function(resetToken, newPassword) {
    var _this = this;

    _this['reset_token'] = resetToken;
    _this['new_password'] = newPassword;
  };

  /**
   * Constructs a <code>ResetPassword</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResetPassword} obj Optional instance to populate.
   * @return {module:model/ResetPassword} The populated <code>ResetPassword</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('reset_token')) {
        obj['reset_token'] = ApiClient.convertToType(data['reset_token'], 'String');
      }
      if (data.hasOwnProperty('new_password')) {
        obj['new_password'] = ApiClient.convertToType(data['new_password'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} reset_token
   */
  exports.prototype['reset_token'] = undefined;
  /**
   * @member {String} new_password
   */
  exports.prototype['new_password'] = undefined;



  return exports;
}));


