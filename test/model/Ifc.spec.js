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
    instance = new bimdata.Ifc();
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

  describe('Ifc', function() {
    it('should create an instance of Ifc', function() {
      // uncomment below and update the code to test Ifc
      //var instance = new bimdata.Ifc();
      //expect(instance).to.be.a(bimdata.Ifc);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property creator (base name: "creator")', function() {
      // uncomment below and update the code to test the property creator
      //var instance = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property documentId (base name: "document_id")', function() {
      // uncomment below and update the code to test the property documentId
      //var instance = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property document (base name: "document")', function() {
      // uncomment below and update the code to test the property document
      //var instance = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property structureFile (base name: "structure_file")', function() {
      // uncomment below and update the code to test the property structureFile
      //var instance = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property systemsFile (base name: "systems_file")', function() {
      // uncomment below and update the code to test the property systemsFile
      //var instance = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property mapFile (base name: "map_file")', function() {
      // uncomment below and update the code to test the property mapFile
      //var instance = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property gltfFile (base name: "gltf_file")', function() {
      // uncomment below and update the code to test the property gltfFile
      //var instance = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property bvhTreeFile (base name: "bvh_tree_file")', function() {
      // uncomment below and update the code to test the property bvhTreeFile
      //var instance = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property errorDetail (base name: "error_detail")', function() {
      // uncomment below and update the code to test the property errorDetail
      //var instance = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property projectId (base name: "project_id")', function() {
      // uncomment below and update the code to test the property projectId
      //var instance = new bimdata.Ifc();
      //expect(instance).to.be();
    });

  });

}));
