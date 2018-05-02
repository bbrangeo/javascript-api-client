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
    instance = new BimdataApiClient.Direction();
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

  describe('Direction', function() {
    it('should create an instance of Direction', function() {
      // uncomment below and update the code to test Direction
      //var instane = new BimdataApiClient.Direction();
      //expect(instance).to.be.a(BimdataApiClient.Direction);
    });

    it('should have the property x (base name: "x")', function() {
      // uncomment below and update the code to test the property x
      //var instane = new BimdataApiClient.Direction();
      //expect(instance).to.be();
    });

    it('should have the property y (base name: "y")', function() {
      // uncomment below and update the code to test the property y
      //var instane = new BimdataApiClient.Direction();
      //expect(instance).to.be();
    });

    it('should have the property z (base name: "z")', function() {
      // uncomment below and update the code to test the property z
      //var instane = new BimdataApiClient.Direction();
      //expect(instance).to.be();
    });

  });

}));
