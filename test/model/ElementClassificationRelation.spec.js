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
    instance = new bimdata.ElementClassificationRelation();
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

  describe('ElementClassificationRelation', function() {
    it('should create an instance of ElementClassificationRelation', function() {
      // uncomment below and update the code to test ElementClassificationRelation
      //var instance = new bimdata.ElementClassificationRelation();
      //expect(instance).to.be.a(bimdata.ElementClassificationRelation);
    });

    it('should have the property elementUuid (base name: "element_uuid")', function() {
      // uncomment below and update the code to test the property elementUuid
      //var instance = new bimdata.ElementClassificationRelation();
      //expect(instance).to.be();
    });

    it('should have the property classificationId (base name: "classification_id")', function() {
      // uncomment below and update the code to test the property classificationId
      //var instance = new bimdata.ElementClassificationRelation();
      //expect(instance).to.be();
    });

  });

}));
