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
    instance = new BimdataApiClient.Topic();
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

  describe('Topic', function() {
    it('should create an instance of Topic', function() {
      // uncomment below and update the code to test Topic
      //var instane = new BimdataApiClient.Topic();
      //expect(instance).to.be.a(BimdataApiClient.Topic);
    });

    it('should have the property guid (base name: "guid")', function() {
      // uncomment below and update the code to test the property guid
      //var instane = new BimdataApiClient.Topic();
      //expect(instance).to.be();
    });

    it('should have the property topicType (base name: "topic_type")', function() {
      // uncomment below and update the code to test the property topicType
      //var instane = new BimdataApiClient.Topic();
      //expect(instance).to.be();
    });

    it('should have the property topicStatus (base name: "topic_status")', function() {
      // uncomment below and update the code to test the property topicStatus
      //var instane = new BimdataApiClient.Topic();
      //expect(instance).to.be();
    });

    it('should have the property referenceLinks (base name: "reference_links")', function() {
      // uncomment below and update the code to test the property referenceLinks
      //var instane = new BimdataApiClient.Topic();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new BimdataApiClient.Topic();
      //expect(instance).to.be();
    });

    it('should have the property priority (base name: "priority")', function() {
      // uncomment below and update the code to test the property priority
      //var instane = new BimdataApiClient.Topic();
      //expect(instance).to.be();
    });

    it('should have the property index (base name: "index")', function() {
      // uncomment below and update the code to test the property index
      //var instane = new BimdataApiClient.Topic();
      //expect(instance).to.be();
    });

    it('should have the property labels (base name: "labels")', function() {
      // uncomment below and update the code to test the property labels
      //var instane = new BimdataApiClient.Topic();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "creation_date")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instane = new BimdataApiClient.Topic();
      //expect(instance).to.be();
    });

    it('should have the property creationAuthor (base name: "creation_author")', function() {
      // uncomment below and update the code to test the property creationAuthor
      //var instane = new BimdataApiClient.Topic();
      //expect(instance).to.be();
    });

    it('should have the property modifiedDate (base name: "modified_date")', function() {
      // uncomment below and update the code to test the property modifiedDate
      //var instane = new BimdataApiClient.Topic();
      //expect(instance).to.be();
    });

    it('should have the property modifiedAuthor (base name: "modified_author")', function() {
      // uncomment below and update the code to test the property modifiedAuthor
      //var instane = new BimdataApiClient.Topic();
      //expect(instance).to.be();
    });

    it('should have the property assignedTo (base name: "assigned_to")', function() {
      // uncomment below and update the code to test the property assignedTo
      //var instane = new BimdataApiClient.Topic();
      //expect(instance).to.be();
    });

    it('should have the property stage (base name: "stage")', function() {
      // uncomment below and update the code to test the property stage
      //var instane = new BimdataApiClient.Topic();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new BimdataApiClient.Topic();
      //expect(instance).to.be();
    });

    it('should have the property bimSnippet (base name: "bim_snippet")', function() {
      // uncomment below and update the code to test the property bimSnippet
      //var instane = new BimdataApiClient.Topic();
      //expect(instance).to.be();
    });

    it('should have the property dueDate (base name: "due_date")', function() {
      // uncomment below and update the code to test the property dueDate
      //var instane = new BimdataApiClient.Topic();
      //expect(instance).to.be();
    });

    it('should have the property autorizationTopicActions (base name: "autorization_topic_actions")', function() {
      // uncomment below and update the code to test the property autorizationTopicActions
      //var instane = new BimdataApiClient.Topic();
      //expect(instance).to.be();
    });

    it('should have the property autorizationTopicStatus (base name: "autorization_topic_status")', function() {
      // uncomment below and update the code to test the property autorizationTopicStatus
      //var instane = new BimdataApiClient.Topic();
      //expect(instance).to.be();
    });

    it('should have the property bcfProjectId (base name: "bcf_project_id")', function() {
      // uncomment below and update the code to test the property bcfProjectId
      //var instane = new BimdataApiClient.Topic();
      //expect(instance).to.be();
    });

  });

}));
