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
    instance = new BimdataApiClient.Extensions();
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

  describe('Extensions', function() {
    it('should create an instance of Extensions', function() {
      // uncomment below and update the code to test Extensions
      //var instane = new BimdataApiClient.Extensions();
      //expect(instance).to.be.a(BimdataApiClient.Extensions);
    });

    it('should have the property topicType (base name: "topic_type")', function() {
      // uncomment below and update the code to test the property topicType
      //var instane = new BimdataApiClient.Extensions();
      //expect(instance).to.be();
    });

    it('should have the property topicStatus (base name: "topic_status")', function() {
      // uncomment below and update the code to test the property topicStatus
      //var instane = new BimdataApiClient.Extensions();
      //expect(instance).to.be();
    });

    it('should have the property topicLabel (base name: "topic_label")', function() {
      // uncomment below and update the code to test the property topicLabel
      //var instane = new BimdataApiClient.Extensions();
      //expect(instance).to.be();
    });

    it('should have the property snippetType (base name: "snippet_type")', function() {
      // uncomment below and update the code to test the property snippetType
      //var instane = new BimdataApiClient.Extensions();
      //expect(instance).to.be();
    });

    it('should have the property priority (base name: "priority")', function() {
      // uncomment below and update the code to test the property priority
      //var instane = new BimdataApiClient.Extensions();
      //expect(instance).to.be();
    });

    it('should have the property userIdType (base name: "user_id_type")', function() {
      // uncomment below and update the code to test the property userIdType
      //var instane = new BimdataApiClient.Extensions();
      //expect(instance).to.be();
    });

    it('should have the property stage (base name: "stage")', function() {
      // uncomment below and update the code to test the property stage
      //var instane = new BimdataApiClient.Extensions();
      //expect(instance).to.be();
    });

    it('should have the property projectActions (base name: "project_actions")', function() {
      // uncomment below and update the code to test the property projectActions
      //var instane = new BimdataApiClient.Extensions();
      //expect(instance).to.be();
    });

    it('should have the property topicActions (base name: "topic_actions")', function() {
      // uncomment below and update the code to test the property topicActions
      //var instane = new BimdataApiClient.Extensions();
      //expect(instance).to.be();
    });

    it('should have the property commentActions (base name: "comment_actions")', function() {
      // uncomment below and update the code to test the property commentActions
      //var instane = new BimdataApiClient.Extensions();
      //expect(instance).to.be();
    });

  });

}));
