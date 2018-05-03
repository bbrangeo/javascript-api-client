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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ActionEvent', 'model/BcfProject', 'model/BimSnippet', 'model/Bitmap', 'model/CheckPlan', 'model/CheckPlanResult', 'model/Classification', 'model/ClippingPlane', 'model/Cloud', 'model/Coloring', 'model/Comment', 'model/CommentAction', 'model/CommentEvent', 'model/Component', 'model/ComponentsParent', 'model/Direction', 'model/Document', 'model/DocumentReference', 'model/Element', 'model/ElementClassificationRelation', 'model/ElementPropertySetRelation', 'model/EventAction', 'model/Extensions', 'model/Feature', 'model/Folder', 'model/FosUser', 'model/FosUserWrite', 'model/Ifc', 'model/IfcChecker', 'model/IfcCheckerCheckplan', 'model/IfcCheckerIfc', 'model/IfcCheckerResults', 'model/IfcCreator', 'model/IfcDocument', 'model/IfcProject', 'model/Label', 'model/LineSeriaizer', 'model/Notification', 'model/OrthogonalCamera', 'model/PerspectiveCamera', 'model/Point', 'model/Priority', 'model/Project', 'model/ProjectAction', 'model/ProjectRootFolder', 'model/Property', 'model/PropertyDefinition', 'model/PropertySet', 'model/ReferenceLink', 'model/RelatedTopic', 'model/Rule', 'model/RuleComponent', 'model/RuleComponentResult', 'model/RuleResult', 'model/Ruleset', 'model/RulesetResult', 'model/SelfUser', 'model/SignupFosUser', 'model/Snapshot', 'model/SnippetType', 'model/Space', 'model/Stage', 'model/Topic', 'model/TopicAction', 'model/TopicEvents', 'model/TopicStatus', 'model/TopicType', 'model/Unit', 'model/User', 'model/Version', 'model/ViewSetupHints', 'model/Viewpoint', 'model/Visibility', 'model/Zone', 'model/ZoneSpace', 'api/BcfApi', 'api/CheckplanApi', 'api/CloudApi', 'api/IfcApi', 'api/ProjectApi', 'api/UserApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ActionEvent'), require('./model/BcfProject'), require('./model/BimSnippet'), require('./model/Bitmap'), require('./model/CheckPlan'), require('./model/CheckPlanResult'), require('./model/Classification'), require('./model/ClippingPlane'), require('./model/Cloud'), require('./model/Coloring'), require('./model/Comment'), require('./model/CommentAction'), require('./model/CommentEvent'), require('./model/Component'), require('./model/ComponentsParent'), require('./model/Direction'), require('./model/Document'), require('./model/DocumentReference'), require('./model/Element'), require('./model/ElementClassificationRelation'), require('./model/ElementPropertySetRelation'), require('./model/EventAction'), require('./model/Extensions'), require('./model/Feature'), require('./model/Folder'), require('./model/FosUser'), require('./model/FosUserWrite'), require('./model/Ifc'), require('./model/IfcChecker'), require('./model/IfcCheckerCheckplan'), require('./model/IfcCheckerIfc'), require('./model/IfcCheckerResults'), require('./model/IfcCreator'), require('./model/IfcDocument'), require('./model/IfcProject'), require('./model/Label'), require('./model/LineSeriaizer'), require('./model/Notification'), require('./model/OrthogonalCamera'), require('./model/PerspectiveCamera'), require('./model/Point'), require('./model/Priority'), require('./model/Project'), require('./model/ProjectAction'), require('./model/ProjectRootFolder'), require('./model/Property'), require('./model/PropertyDefinition'), require('./model/PropertySet'), require('./model/ReferenceLink'), require('./model/RelatedTopic'), require('./model/Rule'), require('./model/RuleComponent'), require('./model/RuleComponentResult'), require('./model/RuleResult'), require('./model/Ruleset'), require('./model/RulesetResult'), require('./model/SelfUser'), require('./model/SignupFosUser'), require('./model/Snapshot'), require('./model/SnippetType'), require('./model/Space'), require('./model/Stage'), require('./model/Topic'), require('./model/TopicAction'), require('./model/TopicEvents'), require('./model/TopicStatus'), require('./model/TopicType'), require('./model/Unit'), require('./model/User'), require('./model/Version'), require('./model/ViewSetupHints'), require('./model/Viewpoint'), require('./model/Visibility'), require('./model/Zone'), require('./model/ZoneSpace'), require('./api/BcfApi'), require('./api/CheckplanApi'), require('./api/CloudApi'), require('./api/IfcApi'), require('./api/ProjectApi'), require('./api/UserApi'));
  }
}(function(ApiClient, ActionEvent, BcfProject, BimSnippet, Bitmap, CheckPlan, CheckPlanResult, Classification, ClippingPlane, Cloud, Coloring, Comment, CommentAction, CommentEvent, Component, ComponentsParent, Direction, Document, DocumentReference, Element, ElementClassificationRelation, ElementPropertySetRelation, EventAction, Extensions, Feature, Folder, FosUser, FosUserWrite, Ifc, IfcChecker, IfcCheckerCheckplan, IfcCheckerIfc, IfcCheckerResults, IfcCreator, IfcDocument, IfcProject, Label, LineSeriaizer, Notification, OrthogonalCamera, PerspectiveCamera, Point, Priority, Project, ProjectAction, ProjectRootFolder, Property, PropertyDefinition, PropertySet, ReferenceLink, RelatedTopic, Rule, RuleComponent, RuleComponentResult, RuleResult, Ruleset, RulesetResult, SelfUser, SignupFosUser, Snapshot, SnippetType, Space, Stage, Topic, TopicAction, TopicEvents, TopicStatus, TopicType, Unit, User, Version, ViewSetupHints, Viewpoint, Visibility, Zone, ZoneSpace, BcfApi, CheckplanApi, CloudApi, IfcApi, ProjectApi, UserApi) {
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
   * @version 1.0.4
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ActionEvent model constructor.
     * @property {module:model/ActionEvent}
     */
    ActionEvent: ActionEvent,
    /**
     * The BcfProject model constructor.
     * @property {module:model/BcfProject}
     */
    BcfProject: BcfProject,
    /**
     * The BimSnippet model constructor.
     * @property {module:model/BimSnippet}
     */
    BimSnippet: BimSnippet,
    /**
     * The Bitmap model constructor.
     * @property {module:model/Bitmap}
     */
    Bitmap: Bitmap,
    /**
     * The CheckPlan model constructor.
     * @property {module:model/CheckPlan}
     */
    CheckPlan: CheckPlan,
    /**
     * The CheckPlanResult model constructor.
     * @property {module:model/CheckPlanResult}
     */
    CheckPlanResult: CheckPlanResult,
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
     * The CommentAction model constructor.
     * @property {module:model/CommentAction}
     */
    CommentAction: CommentAction,
    /**
     * The CommentEvent model constructor.
     * @property {module:model/CommentEvent}
     */
    CommentEvent: CommentEvent,
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
     * The DocumentReference model constructor.
     * @property {module:model/DocumentReference}
     */
    DocumentReference: DocumentReference,
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
     * The EventAction model constructor.
     * @property {module:model/EventAction}
     */
    EventAction: EventAction,
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
     * The FosUser model constructor.
     * @property {module:model/FosUser}
     */
    FosUser: FosUser,
    /**
     * The FosUserWrite model constructor.
     * @property {module:model/FosUserWrite}
     */
    FosUserWrite: FosUserWrite,
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
     * The IfcCheckerIfc model constructor.
     * @property {module:model/IfcCheckerIfc}
     */
    IfcCheckerIfc: IfcCheckerIfc,
    /**
     * The IfcCheckerResults model constructor.
     * @property {module:model/IfcCheckerResults}
     */
    IfcCheckerResults: IfcCheckerResults,
    /**
     * The IfcCreator model constructor.
     * @property {module:model/IfcCreator}
     */
    IfcCreator: IfcCreator,
    /**
     * The IfcDocument model constructor.
     * @property {module:model/IfcDocument}
     */
    IfcDocument: IfcDocument,
    /**
     * The IfcProject model constructor.
     * @property {module:model/IfcProject}
     */
    IfcProject: IfcProject,
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
     * The Notification model constructor.
     * @property {module:model/Notification}
     */
    Notification: Notification,
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
     * The ProjectAction model constructor.
     * @property {module:model/ProjectAction}
     */
    ProjectAction: ProjectAction,
    /**
     * The ProjectRootFolder model constructor.
     * @property {module:model/ProjectRootFolder}
     */
    ProjectRootFolder: ProjectRootFolder,
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
     * The ReferenceLink model constructor.
     * @property {module:model/ReferenceLink}
     */
    ReferenceLink: ReferenceLink,
    /**
     * The RelatedTopic model constructor.
     * @property {module:model/RelatedTopic}
     */
    RelatedTopic: RelatedTopic,
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
     * The RuleComponentResult model constructor.
     * @property {module:model/RuleComponentResult}
     */
    RuleComponentResult: RuleComponentResult,
    /**
     * The RuleResult model constructor.
     * @property {module:model/RuleResult}
     */
    RuleResult: RuleResult,
    /**
     * The Ruleset model constructor.
     * @property {module:model/Ruleset}
     */
    Ruleset: Ruleset,
    /**
     * The RulesetResult model constructor.
     * @property {module:model/RulesetResult}
     */
    RulesetResult: RulesetResult,
    /**
     * The SelfUser model constructor.
     * @property {module:model/SelfUser}
     */
    SelfUser: SelfUser,
    /**
     * The SignupFosUser model constructor.
     * @property {module:model/SignupFosUser}
     */
    SignupFosUser: SignupFosUser,
    /**
     * The Snapshot model constructor.
     * @property {module:model/Snapshot}
     */
    Snapshot: Snapshot,
    /**
     * The SnippetType model constructor.
     * @property {module:model/SnippetType}
     */
    SnippetType: SnippetType,
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
     * The TopicAction model constructor.
     * @property {module:model/TopicAction}
     */
    TopicAction: TopicAction,
    /**
     * The TopicEvents model constructor.
     * @property {module:model/TopicEvents}
     */
    TopicEvents: TopicEvents,
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
     * The Version model constructor.
     * @property {module:model/Version}
     */
    Version: Version,
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
