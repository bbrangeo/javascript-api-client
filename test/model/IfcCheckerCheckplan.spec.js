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
    instance = new bimdata.IfcCheckerCheckplan();
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

  describe('IfcCheckerCheckplan', function() {
    it('should create an instance of IfcCheckerCheckplan', function() {
      // uncomment below and update the code to test IfcCheckerCheckplan
      //var instance = new bimdata.IfcCheckerCheckplan();
      //expect(instance).to.be.a(bimdata.IfcCheckerCheckplan);
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new bimdata.IfcCheckerCheckplan();
      //expect(instance).to.be();
    });

    it('should have the property _protected (base name: "protected")', function() {
      // uncomment below and update the code to test the property _protected
      //var instance = new bimdata.IfcCheckerCheckplan();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new bimdata.IfcCheckerCheckplan();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new bimdata.IfcCheckerCheckplan();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new bimdata.IfcCheckerCheckplan();
      //expect(instance).to.be();
    });

    it('should have the property project (base name: "project")', function() {
      // uncomment below and update the code to test the property project
      //var instance = new bimdata.IfcCheckerCheckplan();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new bimdata.IfcCheckerCheckplan();
      //expect(instance).to.be();
    });

  });

}));
