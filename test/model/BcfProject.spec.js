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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.bimdata);
  }
}(this, function(expect, bimdata) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new bimdata.BcfProject();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('BcfProject', function() {
    it('should create an instance of BcfProject', function() {
      // uncomment below and update the code to test BcfProject
      //var instance = new bimdata.BcfProject();
      //expect(instance).to.be.a(bimdata.BcfProject);
    });

    it('should have the property projectId (base name: "project_id")', function() {
      // uncomment below and update the code to test the property projectId
      //var instance = new bimdata.BcfProject();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new bimdata.BcfProject();
      //expect(instance).to.be();
    });

    it('should have the property autorizationProjectActions (base name: "autorization_project_actions")', function() {
      // uncomment below and update the code to test the property autorizationProjectActions
      //var instance = new bimdata.BcfProject();
      //expect(instance).to.be();
    });

  });

}));
