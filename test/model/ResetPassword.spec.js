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
 * OpenAPI Generator version: 3.0.2
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
    instance = new bimdata.ResetPassword();
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

  describe('ResetPassword', function() {
    it('should create an instance of ResetPassword', function() {
      // uncomment below and update the code to test ResetPassword
      //var instance = new bimdata.ResetPassword();
      //expect(instance).to.be.a(bimdata.ResetPassword);
    });

    it('should have the property resetToken (base name: "reset_token")', function() {
      // uncomment below and update the code to test the property resetToken
      //var instance = new bimdata.ResetPassword();
      //expect(instance).to.be();
    });

    it('should have the property newPassword (base name: "new_password")', function() {
      // uncomment below and update the code to test the property newPassword
      //var instance = new bimdata.ResetPassword();
      //expect(instance).to.be();
    });

  });

}));
