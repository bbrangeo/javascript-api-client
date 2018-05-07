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
    define(['ApiClient', 'model/IfcCheckerCheckplan', 'model/IfcCheckerIfc', 'model/IfcCheckerResults'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./IfcCheckerCheckplan'), require('./IfcCheckerIfc'), require('./IfcCheckerResults'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.IfcChecker = factory(root.bimdata.ApiClient, root.bimdata.IfcCheckerCheckplan, root.bimdata.IfcCheckerIfc, root.bimdata.IfcCheckerResults);
  }
}(this, function(ApiClient, IfcCheckerCheckplan, IfcCheckerIfc, IfcCheckerResults) {
  'use strict';




  /**
   * The IfcChecker model module.
   * @module model/IfcChecker
   * @version 1.0.8
   */

  /**
   * Constructs a new <code>IfcChecker</code>.
   * @alias module:model/IfcChecker
   * @class
   * @param ifcId {Number} 
   * @param checkplanId {Number} 
   */
  var exports = function(ifcId, checkplanId) {
    var _this = this;




    _this['ifc_id'] = ifcId;

    _this['checkplan_id'] = checkplanId;




  };

  /**
   * Constructs a <code>IfcChecker</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IfcChecker} obj Optional instance to populate.
   * @return {module:model/IfcChecker} The populated <code>IfcChecker</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('creator')) {
        obj['creator'] = ApiClient.convertToType(data['creator'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('ifc_id')) {
        obj['ifc_id'] = ApiClient.convertToType(data['ifc_id'], 'Number');
      }
      if (data.hasOwnProperty('ifc')) {
        obj['ifc'] = IfcCheckerIfc.constructFromObject(data['ifc']);
      }
      if (data.hasOwnProperty('checkplan_id')) {
        obj['checkplan_id'] = ApiClient.convertToType(data['checkplan_id'], 'Number');
      }
      if (data.hasOwnProperty('results')) {
        obj['results'] = ApiClient.convertToType(data['results'], [IfcCheckerResults]);
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
      if (data.hasOwnProperty('checkplan')) {
        obj['checkplan'] = IfcCheckerCheckplan.constructFromObject(data['checkplan']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} creator
   */
  exports.prototype['creator'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} ifc_id
   */
  exports.prototype['ifc_id'] = undefined;
  /**
   * @member {module:model/IfcCheckerIfc} ifc
   */
  exports.prototype['ifc'] = undefined;
  /**
   * @member {Number} checkplan_id
   */
  exports.prototype['checkplan_id'] = undefined;
  /**
   * @member {Array.<module:model/IfcCheckerResults>} results
   */
  exports.prototype['results'] = undefined;
  /**
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;
  /**
   * @member {module:model/IfcCheckerCheckplan} checkplan
   */
  exports.prototype['checkplan'] = undefined;



  return exports;
}));


