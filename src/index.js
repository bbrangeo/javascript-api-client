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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BcfProject', 'model/BcfUser', 'model/CheckPlan', 'model/CheckerResult', 'model/Classification', 'model/ClippingPlane', 'model/Cloud', 'model/CloudInvitation', 'model/CloudRole', 'model/Coloring', 'model/Comment', 'model/Component', 'model/ComponentsParent', 'model/Direction', 'model/Document', 'model/Element', 'model/ElementClassificationRelation', 'model/ElementPropertySetRelation', 'model/Extensions', 'model/Feature', 'model/Folder', 'model/Ifc', 'model/IfcChecker', 'model/IfcCheckerCheckplan', 'model/IfcCheckerResults', 'model/IfcFiles', 'model/Label', 'model/LineSeriaizer', 'model/OrthogonalCamera', 'model/PerspectiveCamera', 'model/Point', 'model/Priority', 'model/Project', 'model/ProjectInvitation', 'model/ProjectRole', 'model/Property', 'model/PropertyDefinition', 'model/PropertySet', 'model/RawDefinition', 'model/RawElement', 'model/RawElements', 'model/RawProperty', 'model/RawPropertySet', 'model/RawUnit', 'model/Rule', 'model/RuleComponent', 'model/Ruleset', 'model/SelfBcfUser', 'model/SelfUser', 'model/SingleJsonTopic', 'model/Snapshot', 'model/Space', 'model/Stage', 'model/Topic', 'model/TopicStatus', 'model/TopicType', 'model/Unit', 'model/User', 'model/UserCloudUpdate', 'model/UserProjectUpdate', 'model/ViewSetupHints', 'model/Viewpoint', 'model/Visibility', 'model/WebHook', 'model/Zone', 'model/ZoneSpace', 'api/ApplicationApi', 'api/BcfApi', 'api/CheckplanApi', 'api/CloudApi', 'api/IfcApi', 'api/ProjectApi', 'api/UserApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/BcfProject'), require('./model/BcfUser'), require('./model/CheckPlan'), require('./model/CheckerResult'), require('./model/Classification'), require('./model/ClippingPlane'), require('./model/Cloud'), require('./model/CloudInvitation'), require('./model/CloudRole'), require('./model/Coloring'), require('./model/Comment'), require('./model/Component'), require('./model/ComponentsParent'), require('./model/Direction'), require('./model/Document'), require('./model/Element'), require('./model/ElementClassificationRelation'), require('./model/ElementPropertySetRelation'), require('./model/Extensions'), require('./model/Feature'), require('./model/Folder'), require('./model/Ifc'), require('./model/IfcChecker'), require('./model/IfcCheckerCheckplan'), require('./model/IfcCheckerResults'), require('./model/IfcFiles'), require('./model/Label'), require('./model/LineSeriaizer'), require('./model/OrthogonalCamera'), require('./model/PerspectiveCamera'), require('./model/Point'), require('./model/Priority'), require('./model/Project'), require('./model/ProjectInvitation'), require('./model/ProjectRole'), require('./model/Property'), require('./model/PropertyDefinition'), require('./model/PropertySet'), require('./model/RawDefinition'), require('./model/RawElement'), require('./model/RawElements'), require('./model/RawProperty'), require('./model/RawPropertySet'), require('./model/RawUnit'), require('./model/Rule'), require('./model/RuleComponent'), require('./model/Ruleset'), require('./model/SelfBcfUser'), require('./model/SelfUser'), require('./model/SingleJsonTopic'), require('./model/Snapshot'), require('./model/Space'), require('./model/Stage'), require('./model/Topic'), require('./model/TopicStatus'), require('./model/TopicType'), require('./model/Unit'), require('./model/User'), require('./model/UserCloudUpdate'), require('./model/UserProjectUpdate'), require('./model/ViewSetupHints'), require('./model/Viewpoint'), require('./model/Visibility'), require('./model/WebHook'), require('./model/Zone'), require('./model/ZoneSpace'), require('./api/ApplicationApi'), require('./api/BcfApi'), require('./api/CheckplanApi'), require('./api/CloudApi'), require('./api/IfcApi'), require('./api/ProjectApi'), require('./api/UserApi'));
  }
}(function(ApiClient, BcfProject, BcfUser, CheckPlan, CheckerResult, Classification, ClippingPlane, Cloud, CloudInvitation, CloudRole, Coloring, Comment, Component, ComponentsParent, Direction, Document, Element, ElementClassificationRelation, ElementPropertySetRelation, Extensions, Feature, Folder, Ifc, IfcChecker, IfcCheckerCheckplan, IfcCheckerResults, IfcFiles, Label, LineSeriaizer, OrthogonalCamera, PerspectiveCamera, Point, Priority, Project, ProjectInvitation, ProjectRole, Property, PropertyDefinition, PropertySet, RawDefinition, RawElement, RawElements, RawProperty, RawPropertySet, RawUnit, Rule, RuleComponent, Ruleset, SelfBcfUser, SelfUser, SingleJsonTopic, Snapshot, Space, Stage, Topic, TopicStatus, TopicType, Unit, User, UserCloudUpdate, UserProjectUpdate, ViewSetupHints, Viewpoint, Visibility, WebHook, Zone, ZoneSpace, ApplicationApi, BcfApi, CheckplanApi, CloudApi, IfcApi, ProjectApi, UserApi) {
  'use strict';

  /**
   * BIMData_API_is_a_tool_to_interact_with_your_models_stored_on_BIMDatas_servers_____Through_the_API_you_can_manage_your_projects_the_clouds_upload_your_IFC_files_and_manage_them_through_endpoints_.<br>
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
     * The BcfProject model constructor.
     * @property {module:model/BcfProject}
     */
    BcfProject: BcfProject,
    /**
     * The BcfUser model constructor.
     * @property {module:model/BcfUser}
     */
    BcfUser: BcfUser,
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
     * The ClippingPlane model constructor.
     * @property {module:model/ClippingPlane}
     */
    ClippingPlane: ClippingPlane,
    /**
     * The Cloud model constructor.
     * @property {module:model/Cloud}
     */
    Cloud: Cloud,
    /**
     * The CloudInvitation model constructor.
     * @property {module:model/CloudInvitation}
     */
    CloudInvitation: CloudInvitation,
    /**
     * The CloudRole model constructor.
     * @property {module:model/CloudRole}
     */
    CloudRole: CloudRole,
    /**
     * The Coloring model constructor.
     * @property {module:model/Coloring}
     */
    Coloring: Coloring,
    /**
     * The Comment model constructor.
     * @property {module:model/Comment}
     */
    Comment: Comment,
    /**
     * The Component model constructor.
     * @property {module:model/Component}
     */
    Component: Component,
    /**
     * The ComponentsParent model constructor.
     * @property {module:model/ComponentsParent}
     */
    ComponentsParent: ComponentsParent,
    /**
     * The Direction model constructor.
     * @property {module:model/Direction}
     */
    Direction: Direction,
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
     * The Extensions model constructor.
     * @property {module:model/Extensions}
     */
    Extensions: Extensions,
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
     * The Label model constructor.
     * @property {module:model/Label}
     */
    Label: Label,
    /**
     * The LineSeriaizer model constructor.
     * @property {module:model/LineSeriaizer}
     */
    LineSeriaizer: LineSeriaizer,
    /**
     * The OrthogonalCamera model constructor.
     * @property {module:model/OrthogonalCamera}
     */
    OrthogonalCamera: OrthogonalCamera,
    /**
     * The PerspectiveCamera model constructor.
     * @property {module:model/PerspectiveCamera}
     */
    PerspectiveCamera: PerspectiveCamera,
    /**
     * The Point model constructor.
     * @property {module:model/Point}
     */
    Point: Point,
    /**
     * The Priority model constructor.
     * @property {module:model/Priority}
     */
    Priority: Priority,
    /**
     * The Project model constructor.
     * @property {module:model/Project}
     */
    Project: Project,
    /**
     * The ProjectInvitation model constructor.
     * @property {module:model/ProjectInvitation}
     */
    ProjectInvitation: ProjectInvitation,
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
     * The SelfBcfUser model constructor.
     * @property {module:model/SelfBcfUser}
     */
    SelfBcfUser: SelfBcfUser,
    /**
     * The SelfUser model constructor.
     * @property {module:model/SelfUser}
     */
    SelfUser: SelfUser,
    /**
     * The SingleJsonTopic model constructor.
     * @property {module:model/SingleJsonTopic}
     */
    SingleJsonTopic: SingleJsonTopic,
    /**
     * The Snapshot model constructor.
     * @property {module:model/Snapshot}
     */
    Snapshot: Snapshot,
    /**
     * The Space model constructor.
     * @property {module:model/Space}
     */
    Space: Space,
    /**
     * The Stage model constructor.
     * @property {module:model/Stage}
     */
    Stage: Stage,
    /**
     * The Topic model constructor.
     * @property {module:model/Topic}
     */
    Topic: Topic,
    /**
     * The TopicStatus model constructor.
     * @property {module:model/TopicStatus}
     */
    TopicStatus: TopicStatus,
    /**
     * The TopicType model constructor.
     * @property {module:model/TopicType}
     */
    TopicType: TopicType,
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
     * The UserCloudUpdate model constructor.
     * @property {module:model/UserCloudUpdate}
     */
    UserCloudUpdate: UserCloudUpdate,
    /**
     * The UserProjectUpdate model constructor.
     * @property {module:model/UserProjectUpdate}
     */
    UserProjectUpdate: UserProjectUpdate,
    /**
     * The ViewSetupHints model constructor.
     * @property {module:model/ViewSetupHints}
     */
    ViewSetupHints: ViewSetupHints,
    /**
     * The Viewpoint model constructor.
     * @property {module:model/Viewpoint}
     */
    Viewpoint: Viewpoint,
    /**
     * The Visibility model constructor.
     * @property {module:model/Visibility}
     */
    Visibility: Visibility,
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
     * The BcfApi service constructor.
     * @property {module:api/BcfApi}
     */
    BcfApi: BcfApi,
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
