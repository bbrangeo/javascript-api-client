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
 * OpenAPI Generator version: 3.2.2
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
    instance = new bimdata.ViewSetupHints();
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

  describe('ViewSetupHints', function() {
    it('should create an instance of ViewSetupHints', function() {
      // uncomment below and update the code to test ViewSetupHints
      //var instance = new bimdata.ViewSetupHints();
      //expect(instance).to.be.a(bimdata.ViewSetupHints);
    });

    it('should have the property spacesVisible (base name: "spaces_visible")', function() {
      // uncomment below and update the code to test the property spacesVisible
      //var instance = new bimdata.ViewSetupHints();
      //expect(instance).to.be();
    });

    it('should have the property spaceBoundariesVisible (base name: "space_boundaries_visible")', function() {
      // uncomment below and update the code to test the property spaceBoundariesVisible
      //var instance = new bimdata.ViewSetupHints();
      //expect(instance).to.be();
    });

    it('should have the property openingsVisible (base name: "openings_visible")', function() {
      // uncomment below and update the code to test the property openingsVisible
      //var instance = new bimdata.ViewSetupHints();
      //expect(instance).to.be();
    });

  });

}));
