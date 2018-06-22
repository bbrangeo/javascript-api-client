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
    define(['ApiClient', 'model/Component', 'model/ViewSetupHints'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Component'), require('./ViewSetupHints'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.Visibility = factory(root.bimdata.ApiClient, root.bimdata.Component, root.bimdata.ViewSetupHints);
  }
}(this, function(ApiClient, Component, ViewSetupHints) {
  'use strict';




  /**
   * The Visibility model module.
   * @module model/Visibility
   * @version v1
   */

  /**
   * Constructs a new <code>Visibility</code>.
   * @alias module:model/Visibility
   * @class
   * @param exceptions {Array.<module:model/Component>} 
   * @param viewSetupHints {module:model/ViewSetupHints} 
   */
  var exports = function(exceptions, viewSetupHints) {
    var _this = this;


    _this['exceptions'] = exceptions;
    _this['view_setup_hints'] = viewSetupHints;
  };

  /**
   * Constructs a <code>Visibility</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Visibility} obj Optional instance to populate.
   * @return {module:model/Visibility} The populated <code>Visibility</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('default_visibility')) {
        obj['default_visibility'] = ApiClient.convertToType(data['default_visibility'], 'Boolean');
      }
      if (data.hasOwnProperty('exceptions')) {
        obj['exceptions'] = ApiClient.convertToType(data['exceptions'], [Component]);
      }
      if (data.hasOwnProperty('view_setup_hints')) {
        obj['view_setup_hints'] = ViewSetupHints.constructFromObject(data['view_setup_hints']);
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} default_visibility
   */
  exports.prototype['default_visibility'] = undefined;
  /**
   * @member {Array.<module:model/Component>} exceptions
   */
  exports.prototype['exceptions'] = undefined;
  /**
   * @member {module:model/ViewSetupHints} view_setup_hints
   */
  exports.prototype['view_setup_hints'] = undefined;



  return exports;
}));


