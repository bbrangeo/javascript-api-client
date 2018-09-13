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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CheckPlan', 'model/CheckerResult', 'model/Classification', 'model/Cloud', 'model/CloudRole', 'model/Document', 'model/Element', 'model/ElementClassificationRelation', 'model/ElementPropertySetRelation', 'model/Feature', 'model/Folder', 'model/ForgotPassword', 'model/Ifc', 'model/IfcChecker', 'model/IfcCheckerCheckplan', 'model/IfcCheckerResults', 'model/IfcFiles', 'model/InviteUser', 'model/InvitedSignUpUser', 'model/Notification', 'model/Project', 'model/ProjectRole', 'model/Property', 'model/PropertyDefinition', 'model/PropertySet', 'model/RawDefinition', 'model/RawElement', 'model/RawElements', 'model/RawProperty', 'model/RawPropertySet', 'model/RawUnit', 'model/ResetPassword', 'model/Rule', 'model/RuleComponent', 'model/Ruleset', 'model/SelfUser', 'model/SignUpUser', 'model/Space', 'model/Unit', 'model/User', 'model/WebHook', 'model/Zone', 'model/ZoneSpace', 'api/ApplicationApi', 'api/CheckplanApi', 'api/CloudApi', 'api/IfcApi', 'api/ProjectApi', 'api/UserApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/CheckPlan'), require('./model/CheckerResult'), require('./model/Classification'), require('./model/Cloud'), require('./model/CloudRole'), require('./model/Document'), require('./model/Element'), require('./model/ElementClassificationRelation'), require('./model/ElementPropertySetRelation'), require('./model/Feature'), require('./model/Folder'), require('./model/ForgotPassword'), require('./model/Ifc'), require('./model/IfcChecker'), require('./model/IfcCheckerCheckplan'), require('./model/IfcCheckerResults'), require('./model/IfcFiles'), require('./model/InviteUser'), require('./model/InvitedSignUpUser'), require('./model/Notification'), require('./model/Project'), require('./model/ProjectRole'), require('./model/Property'), require('./model/PropertyDefinition'), require('./model/PropertySet'), require('./model/RawDefinition'), require('./model/RawElement'), require('./model/RawElements'), require('./model/RawProperty'), require('./model/RawPropertySet'), require('./model/RawUnit'), require('./model/ResetPassword'), require('./model/Rule'), require('./model/RuleComponent'), require('./model/Ruleset'), require('./model/SelfUser'), require('./model/SignUpUser'), require('./model/Space'), require('./model/Unit'), require('./model/User'), require('./model/WebHook'), require('./model/Zone'), require('./model/ZoneSpace'), require('./api/ApplicationApi'), require('./api/CheckplanApi'), require('./api/CloudApi'), require('./api/IfcApi'), require('./api/ProjectApi'), require('./api/UserApi'));
  }
}(function(ApiClient, CheckPlan, CheckerResult, Classification, Cloud, CloudRole, Document, Element, ElementClassificationRelation, ElementPropertySetRelation, Feature, Folder, ForgotPassword, Ifc, IfcChecker, IfcCheckerCheckplan, IfcCheckerResults, IfcFiles, InviteUser, InvitedSignUpUser, Notification, Project, ProjectRole, Property, PropertyDefinition, PropertySet, RawDefinition, RawElement, RawElements, RawProperty, RawPropertySet, RawUnit, ResetPassword, Rule, RuleComponent, Ruleset, SelfUser, SignUpUser, Space, Unit, User, WebHook, Zone, ZoneSpace, ApplicationApi, CheckplanApi, CloudApi, IfcApi, ProjectApi, UserApi) {
  'use strict';

  /**
   * BIMData_API_documentation.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var bimdata = require('index'); // See note below*.
   * var xxxSvc = new bimdata.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new bimdata.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new bimdata.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new bimdata.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The CheckPlan model constructor.
     * @property {module:model/CheckPlan}
     */
    CheckPlan: CheckPlan,
    /**
     * The CheckerResult model constructor.
     * @property {module:model/CheckerResult}
     */
    CheckerResult: CheckerResult,
    /**
     * The Classification model constructor.
     * @property {module:model/Classification}
     */
    Classification: Classification,
    /**
     * The Cloud model constructor.
     * @property {module:model/Cloud}
     */
    Cloud: Cloud,
    /**
     * The CloudRole model constructor.
     * @property {module:model/CloudRole}
     */
    CloudRole: CloudRole,
    /**
     * The Document model constructor.
     * @property {module:model/Document}
     */
    Document: Document,
    /**
     * The Element model constructor.
     * @property {module:model/Element}
     */
    Element: Element,
    /**
     * The ElementClassificationRelation model constructor.
     * @property {module:model/ElementClassificationRelation}
     */
    ElementClassificationRelation: ElementClassificationRelation,
    /**
     * The ElementPropertySetRelation model constructor.
     * @property {module:model/ElementPropertySetRelation}
     */
    ElementPropertySetRelation: ElementPropertySetRelation,
    /**
     * The Feature model constructor.
     * @property {module:model/Feature}
     */
    Feature: Feature,
    /**
     * The Folder model constructor.
     * @property {module:model/Folder}
     */
    Folder: Folder,
    /**
     * The ForgotPassword model constructor.
     * @property {module:model/ForgotPassword}
     */
    ForgotPassword: ForgotPassword,
    /**
     * The Ifc model constructor.
     * @property {module:model/Ifc}
     */
    Ifc: Ifc,
    /**
     * The IfcChecker model constructor.
     * @property {module:model/IfcChecker}
     */
    IfcChecker: IfcChecker,
    /**
     * The IfcCheckerCheckplan model constructor.
     * @property {module:model/IfcCheckerCheckplan}
     */
    IfcCheckerCheckplan: IfcCheckerCheckplan,
    /**
     * The IfcCheckerResults model constructor.
     * @property {module:model/IfcCheckerResults}
     */
    IfcCheckerResults: IfcCheckerResults,
    /**
     * The IfcFiles model constructor.
     * @property {module:model/IfcFiles}
     */
    IfcFiles: IfcFiles,
    /**
     * The InviteUser model constructor.
     * @property {module:model/InviteUser}
     */
    InviteUser: InviteUser,
    /**
     * The InvitedSignUpUser model constructor.
     * @property {module:model/InvitedSignUpUser}
     */
    InvitedSignUpUser: InvitedSignUpUser,
    /**
     * The Notification model constructor.
     * @property {module:model/Notification}
     */
    Notification: Notification,
    /**
     * The Project model constructor.
     * @property {module:model/Project}
     */
    Project: Project,
    /**
     * The ProjectRole model constructor.
     * @property {module:model/ProjectRole}
     */
    ProjectRole: ProjectRole,
    /**
     * The Property model constructor.
     * @property {module:model/Property}
     */
    Property: Property,
    /**
     * The PropertyDefinition model constructor.
     * @property {module:model/PropertyDefinition}
     */
    PropertyDefinition: PropertyDefinition,
    /**
     * The PropertySet model constructor.
     * @property {module:model/PropertySet}
     */
    PropertySet: PropertySet,
    /**
     * The RawDefinition model constructor.
     * @property {module:model/RawDefinition}
     */
    RawDefinition: RawDefinition,
    /**
     * The RawElement model constructor.
     * @property {module:model/RawElement}
     */
    RawElement: RawElement,
    /**
     * The RawElements model constructor.
     * @property {module:model/RawElements}
     */
    RawElements: RawElements,
    /**
     * The RawProperty model constructor.
     * @property {module:model/RawProperty}
     */
    RawProperty: RawProperty,
    /**
     * The RawPropertySet model constructor.
     * @property {module:model/RawPropertySet}
     */
    RawPropertySet: RawPropertySet,
    /**
     * The RawUnit model constructor.
     * @property {module:model/RawUnit}
     */
    RawUnit: RawUnit,
    /**
     * The ResetPassword model constructor.
     * @property {module:model/ResetPassword}
     */
    ResetPassword: ResetPassword,
    /**
     * The Rule model constructor.
     * @property {module:model/Rule}
     */
    Rule: Rule,
    /**
     * The RuleComponent model constructor.
     * @property {module:model/RuleComponent}
     */
    RuleComponent: RuleComponent,
    /**
     * The Ruleset model constructor.
     * @property {module:model/Ruleset}
     */
    Ruleset: Ruleset,
    /**
     * The SelfUser model constructor.
     * @property {module:model/SelfUser}
     */
    SelfUser: SelfUser,
    /**
     * The SignUpUser model constructor.
     * @property {module:model/SignUpUser}
     */
    SignUpUser: SignUpUser,
    /**
     * The Space model constructor.
     * @property {module:model/Space}
     */
    Space: Space,
    /**
     * The Unit model constructor.
     * @property {module:model/Unit}
     */
    Unit: Unit,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The WebHook model constructor.
     * @property {module:model/WebHook}
     */
    WebHook: WebHook,
    /**
     * The Zone model constructor.
     * @property {module:model/Zone}
     */
    Zone: Zone,
    /**
     * The ZoneSpace model constructor.
     * @property {module:model/ZoneSpace}
     */
    ZoneSpace: ZoneSpace,
    /**
     * The ApplicationApi service constructor.
     * @property {module:api/ApplicationApi}
     */
    ApplicationApi: ApplicationApi,
    /**
     * The CheckplanApi service constructor.
     * @property {module:api/CheckplanApi}
     */
    CheckplanApi: CheckplanApi,
    /**
     * The CloudApi service constructor.
     * @property {module:api/CloudApi}
     */
    CloudApi: CloudApi,
    /**
     * The IfcApi service constructor.
     * @property {module:api/IfcApi}
     */
    IfcApi: IfcApi,
    /**
     * The ProjectApi service constructor.
     * @property {module:api/ProjectApi}
     */
    ProjectApi: ProjectApi,
    /**
     * The UserApi service constructor.
     * @property {module:api/UserApi}
     */
    UserApi: UserApi
  };

  return exports;
}));
