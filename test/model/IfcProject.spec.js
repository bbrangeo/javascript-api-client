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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BimdataApiClient);
  }
}(this, function(expect, BimdataApiClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BimdataApiClient.IfcProject();
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

  describe('IfcProject', function() {
    it('should create an instance of IfcProject', function() {
      // uncomment below and update the code to test IfcProject
      //var instane = new BimdataApiClient.IfcProject();
      //expect(instance).to.be.a(BimdataApiClient.IfcProject);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new BimdataApiClient.IfcProject();
      //expect(instance).to.be();
    });

    it('should have the property logo (base name: "logo")', function() {
      // uncomment below and update the code to test the property logo
      //var instane = new BimdataApiClient.IfcProject();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new BimdataApiClient.IfcProject();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new BimdataApiClient.IfcProject();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new BimdataApiClient.IfcProject();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new BimdataApiClient.IfcProject();
      //expect(instance).to.be();
    });

    it('should have the property propertyPermissionsEnabled (base name: "property_permissions_enabled")', function() {
      // uncomment below and update the code to test the property propertyPermissionsEnabled
      //var instane = new BimdataApiClient.IfcProject();
      //expect(instance).to.be();
    });

    it('should have the property cloud (base name: "cloud")', function() {
      // uncomment below and update the code to test the property cloud
      //var instane = new BimdataApiClient.IfcProject();
      //expect(instance).to.be();
    });

    it('should have the property creator (base name: "creator")', function() {
      // uncomment below and update the code to test the property creator
      //var instane = new BimdataApiClient.IfcProject();
      //expect(instance).to.be();
    });

    it('should have the property rootFolder (base name: "root_folder")', function() {
      // uncomment below and update the code to test the property rootFolder
      //var instane = new BimdataApiClient.IfcProject();
      //expect(instance).to.be();
    });

    it('should have the property users (base name: "users")', function() {
      // uncomment below and update the code to test the property users
      //var instane = new BimdataApiClient.IfcProject();
      //expect(instance).to.be();
    });

  });

}));
