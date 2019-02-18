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
    define(['ApiClient', 'model/Component'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Component'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.Coloring = factory(root.bimdata.ApiClient, root.bimdata.Component);
  }
}(this, function(ApiClient, Component) {
  'use strict';



  /**
   * The Coloring model module.
   * @module model/Coloring
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>Coloring</code>.
   * @alias module:model/Coloring
   * @class
   * @param color {String} 
   * @param components {Array.<module:model/Component>} 
   */
  var exports = function(color, components) {
    var _this = this;

    _this['color'] = color;
    _this['components'] = components;
  };

  /**
   * Constructs a <code>Coloring</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Coloring} obj Optional instance to populate.
   * @return {module:model/Coloring} The populated <code>Coloring</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('color')) {
        obj['color'] = ApiClient.convertToType(data['color'], 'String');
      }
      if (data.hasOwnProperty('components')) {
        obj['components'] = ApiClient.convertToType(data['components'], [Component]);
      }
    }
    return obj;
  }

  /**
   * @member {String} color
   */
  exports.prototype['color'] = undefined;
  /**
   * @member {Array.<module:model/Component>} components
   */
  exports.prototype['components'] = undefined;



  return exports;
}));


