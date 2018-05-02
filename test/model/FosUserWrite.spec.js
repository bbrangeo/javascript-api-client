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
    instance = new BimdataApiClient.FosUserWrite();
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

  describe('FosUserWrite', function() {
    it('should create an instance of FosUserWrite', function() {
      // uncomment below and update the code to test FosUserWrite
      //var instane = new BimdataApiClient.FosUserWrite();
      //expect(instance).to.be.a(BimdataApiClient.FosUserWrite);
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instane = new BimdataApiClient.FosUserWrite();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new BimdataApiClient.FosUserWrite();
      //expect(instance).to.be();
    });

    it('should have the property firstname (base name: "firstname")', function() {
      // uncomment below and update the code to test the property firstname
      //var instane = new BimdataApiClient.FosUserWrite();
      //expect(instance).to.be();
    });

    it('should have the property lastname (base name: "lastname")', function() {
      // uncomment below and update the code to test the property lastname
      //var instane = new BimdataApiClient.FosUserWrite();
      //expect(instance).to.be();
    });

    it('should have the property projectRole (base name: "project_role")', function() {
      // uncomment below and update the code to test the property projectRole
      //var instane = new BimdataApiClient.FosUserWrite();
      //expect(instance).to.be();
    });

    it('should have the property cloudRole (base name: "cloud_role")', function() {
      // uncomment below and update the code to test the property cloudRole
      //var instane = new BimdataApiClient.FosUserWrite();
      //expect(instance).to.be();
    });

  });

}));
