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
 * OpenAPI Generator version: 3.0.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Unit'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Unit'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.Unit = factory(root.bimdata.ApiClient, root.bimdata.Unit);
  }
}(this, function(ApiClient, Unit) {
  'use strict';




  /**
   * The Unit model module.
   * @module model/Unit
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>Unit</code>.
   * @alias module:model/Unit
   * @class
   * @param type {String} IfcDerivedUnit, IfcContextDependentUnit, IfcConversionBasedUnit, IfcSIUnit or IfcMonetaryUnit
   */
  var exports = function(type) {
    var _this = this;


    _this['type'] = type;







  };

  /**
   * Constructs a <code>Unit</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Unit} obj Optional instance to populate.
   * @return {module:model/Unit} The populated <code>Unit</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('unit_type')) {
        obj['unit_type'] = ApiClient.convertToType(data['unit_type'], 'String');
      }
      if (data.hasOwnProperty('prefix')) {
        obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
      }
      if (data.hasOwnProperty('dimensions')) {
        obj['dimensions'] = ApiClient.convertToType(data['dimensions'], ['Number']);
      }
      if (data.hasOwnProperty('conversion_factor')) {
        obj['conversion_factor'] = ApiClient.convertToType(data['conversion_factor'], 'Number');
      }
      if (data.hasOwnProperty('conversion_baseunit')) {
        obj['conversion_baseunit'] = Unit.constructFromObject(data['conversion_baseunit']);
      }
      if (data.hasOwnProperty('elements')) {
        obj['elements'] = ApiClient.convertToType(data['elements'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * IfcDerivedUnit, IfcContextDependentUnit, IfcConversionBasedUnit, IfcSIUnit or IfcMonetaryUnit
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Name of the unit (ex: DEGREE)
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * IFC type of the unit or user defined type (ex: PLANEANGLEUNIT for DEGREE and RADIAN)
   * @member {String} unit_type
   */
  exports.prototype['unit_type'] = undefined;
  /**
   * Litteral prefix for scale (ex: MILLI, KILO, etc..)
   * @member {String} prefix
   */
  exports.prototype['prefix'] = undefined;
  /**
   * List of 7 units dimensions
   * @member {Array.<Number>} dimensions
   */
  exports.prototype['dimensions'] = undefined;
  /**
   * Factor of conversion and base unit id (ex: DEGREE from RADIAN with factor 0.0174532925199433)
   * @member {Number} conversion_factor
   */
  exports.prototype['conversion_factor'] = undefined;
  /**
   * @member {module:model/Unit} conversion_baseunit
   */
  exports.prototype['conversion_baseunit'] = undefined;
  /**
   * List of constitutive unit elements by id with corresponding exponent (ex: [meterID/1, secondID/-1] for velocity)
   * @member {String} elements
   */
  exports.prototype['elements'] = undefined;



  return exports;
}));


