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
    instance = new BimdataApiClient.IfcCreator();
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

  describe('IfcCreator', function() {
    it('should create an instance of IfcCreator', function() {
      // uncomment below and update the code to test IfcCreator
      //var instane = new BimdataApiClient.IfcCreator();
      //expect(instance).to.be.a(BimdataApiClient.IfcCreator);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new BimdataApiClient.IfcCreator();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new BimdataApiClient.IfcCreator();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instane = new BimdataApiClient.IfcCreator();
      //expect(instance).to.be();
    });

    it('should have the property salt (base name: "salt")', function() {
      // uncomment below and update the code to test the property salt
      //var instane = new BimdataApiClient.IfcCreator();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new BimdataApiClient.IfcCreator();
      //expect(instance).to.be();
    });

    it('should have the property firstname (base name: "firstname")', function() {
      // uncomment below and update the code to test the property firstname
      //var instane = new BimdataApiClient.IfcCreator();
      //expect(instance).to.be();
    });

    it('should have the property lastname (base name: "lastname")', function() {
      // uncomment below and update the code to test the property lastname
      //var instane = new BimdataApiClient.IfcCreator();
      //expect(instance).to.be();
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instane = new BimdataApiClient.IfcCreator();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new BimdataApiClient.IfcCreator();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new BimdataApiClient.IfcCreator();
      //expect(instance).to.be();
    });

    it('should have the property confirmationToken (base name: "confirmation_token")', function() {
      // uncomment below and update the code to test the property confirmationToken
      //var instane = new BimdataApiClient.IfcCreator();
      //expect(instance).to.be();
    });

    it('should have the property passwordRequestedAt (base name: "password_requested_at")', function() {
      // uncomment below and update the code to test the property passwordRequestedAt
      //var instane = new BimdataApiClient.IfcCreator();
      //expect(instance).to.be();
    });

    it('should have the property invitationToken (base name: "invitation_token")', function() {
      // uncomment below and update the code to test the property invitationToken
      //var instane = new BimdataApiClient.IfcCreator();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new BimdataApiClient.IfcCreator();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instane = new BimdataApiClient.IfcCreator();
      //expect(instance).to.be();
    });

  });

}));
