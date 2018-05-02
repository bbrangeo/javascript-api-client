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
    instance = new BimdataApiClient.CheckplanApi();
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

  describe('CheckplanApi', function() {
    describe('createCheckPlanResult', function() {
      it('should call createCheckPlanResult successfully', function(done) {
        //uncomment below and update the code to test createCheckPlanResult
        //instance.createCheckPlanResult(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createChecker', function() {
      it('should call createChecker successfully', function(done) {
        //uncomment below and update the code to test createChecker
        //instance.createChecker(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCheckplan', function() {
      it('should call createCheckplan successfully', function(done) {
        //uncomment below and update the code to test createCheckplan
        //instance.createCheckplan(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRule', function() {
      it('should call createRule successfully', function(done) {
        //uncomment below and update the code to test createRule
        //instance.createRule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRuleComponent', function() {
      it('should call createRuleComponent successfully', function(done) {
        //uncomment below and update the code to test createRuleComponent
        //instance.createRuleComponent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRuleset', function() {
      it('should call createRuleset successfully', function(done) {
        //uncomment below and update the code to test createRuleset
        //instance.createRuleset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCheckPlanResult', function() {
      it('should call deleteCheckPlanResult successfully', function(done) {
        //uncomment below and update the code to test deleteCheckPlanResult
        //instance.deleteCheckPlanResult(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteChecker', function() {
      it('should call deleteChecker successfully', function(done) {
        //uncomment below and update the code to test deleteChecker
        //instance.deleteChecker(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCheckplan', function() {
      it('should call deleteCheckplan successfully', function(done) {
        //uncomment below and update the code to test deleteCheckplan
        //instance.deleteCheckplan(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRule', function() {
      it('should call deleteRule successfully', function(done) {
        //uncomment below and update the code to test deleteRule
        //instance.deleteRule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRuleComponent', function() {
      it('should call deleteRuleComponent successfully', function(done) {
        //uncomment below and update the code to test deleteRuleComponent
        //instance.deleteRuleComponent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRuleset', function() {
      it('should call deleteRuleset successfully', function(done) {
        //uncomment below and update the code to test deleteRuleset
        //instance.deleteRuleset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateCheckPlanResult', function() {
      it('should call fullUpdateCheckPlanResult successfully', function(done) {
        //uncomment below and update the code to test fullUpdateCheckPlanResult
        //instance.fullUpdateCheckPlanResult(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateChecker', function() {
      it('should call fullUpdateChecker successfully', function(done) {
        //uncomment below and update the code to test fullUpdateChecker
        //instance.fullUpdateChecker(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateCheckplan', function() {
      it('should call fullUpdateCheckplan successfully', function(done) {
        //uncomment below and update the code to test fullUpdateCheckplan
        //instance.fullUpdateCheckplan(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateRule', function() {
      it('should call fullUpdateRule successfully', function(done) {
        //uncomment below and update the code to test fullUpdateRule
        //instance.fullUpdateRule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateRuleComponent', function() {
      it('should call fullUpdateRuleComponent successfully', function(done) {
        //uncomment below and update the code to test fullUpdateRuleComponent
        //instance.fullUpdateRuleComponent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateRuleset', function() {
      it('should call fullUpdateRuleset successfully', function(done) {
        //uncomment below and update the code to test fullUpdateRuleset
        //instance.fullUpdateRuleset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCheckPlanResult', function() {
      it('should call getCheckPlanResult successfully', function(done) {
        //uncomment below and update the code to test getCheckPlanResult
        //instance.getCheckPlanResult(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCheckPlanResults', function() {
      it('should call getCheckPlanResults successfully', function(done) {
        //uncomment below and update the code to test getCheckPlanResults
        //instance.getCheckPlanResults(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChecker', function() {
      it('should call getChecker successfully', function(done) {
        //uncomment below and update the code to test getChecker
        //instance.getChecker(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCheckers', function() {
      it('should call getCheckers successfully', function(done) {
        //uncomment below and update the code to test getCheckers
        //instance.getCheckers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCheckplan', function() {
      it('should call getCheckplan successfully', function(done) {
        //uncomment below and update the code to test getCheckplan
        //instance.getCheckplan(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCheckplans', function() {
      it('should call getCheckplans successfully', function(done) {
        //uncomment below and update the code to test getCheckplans
        //instance.getCheckplans(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRule', function() {
      it('should call getRule successfully', function(done) {
        //uncomment below and update the code to test getRule
        //instance.getRule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRuleComponent', function() {
      it('should call getRuleComponent successfully', function(done) {
        //uncomment below and update the code to test getRuleComponent
        //instance.getRuleComponent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRuleComponents', function() {
      it('should call getRuleComponents successfully', function(done) {
        //uncomment below and update the code to test getRuleComponents
        //instance.getRuleComponents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRules', function() {
      it('should call getRules successfully', function(done) {
        //uncomment below and update the code to test getRules
        //instance.getRules(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRuleset', function() {
      it('should call getRuleset successfully', function(done) {
        //uncomment below and update the code to test getRuleset
        //instance.getRuleset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRulesets', function() {
      it('should call getRulesets successfully', function(done) {
        //uncomment below and update the code to test getRulesets
        //instance.getRulesets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('launchNewCheck', function() {
      it('should call launchNewCheck successfully', function(done) {
        //uncomment below and update the code to test launchNewCheck
        //instance.launchNewCheck(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCheckPlanResult', function() {
      it('should call updateCheckPlanResult successfully', function(done) {
        //uncomment below and update the code to test updateCheckPlanResult
        //instance.updateCheckPlanResult(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateChecker', function() {
      it('should call updateChecker successfully', function(done) {
        //uncomment below and update the code to test updateChecker
        //instance.updateChecker(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCheckplan', function() {
      it('should call updateCheckplan successfully', function(done) {
        //uncomment below and update the code to test updateCheckplan
        //instance.updateCheckplan(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateRule', function() {
      it('should call updateRule successfully', function(done) {
        //uncomment below and update the code to test updateRule
        //instance.updateRule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateRuleComponent', function() {
      it('should call updateRuleComponent successfully', function(done) {
        //uncomment below and update the code to test updateRuleComponent
        //instance.updateRuleComponent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateRuleset', function() {
      it('should call updateRuleset successfully', function(done) {
        //uncomment below and update the code to test updateRuleset
        //instance.updateRuleset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
