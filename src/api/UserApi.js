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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Notification', 'model/Project', 'model/SignupFosUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Notification'), require('../model/Project'), require('../model/SignupFosUser'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.UserApi = factory(root.bimdata.ApiClient, root.bimdata.Notification, root.bimdata.Project, root.bimdata.SignupFosUser);
  }
}(this, function(ApiClient, Notification, Project, SignupFosUser) {
  'use strict';

  /**
   * User service.
   * @module api/UserApi
   * @version 1.0.1
   */

  /**
   * Constructs a new UserApi. 
   * @alias module:api/UserApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the askResetPasswordToken operation.
     * @callback module:api/UserApi~askResetPasswordTokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:api/UserApi~askResetPasswordTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.askResetPasswordToken = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/user/forgot-password', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the fullUpdateNotification operation.
     * @callback module:api/UserApi~fullUpdateNotificationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Notification} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} id 
     * @param {module:model/Notification} data 
     * @param {module:api/UserApi~fullUpdateNotificationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Notification}
     */
    this.fullUpdateNotification = function(id, data, callback) {
      var postBody = data;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling fullUpdateNotification");
      }

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling fullUpdateNotification");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Notification;

      return this.apiClient.callApi(
        '/user/notification/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNotification operation.
     * @callback module:api/UserApi~getNotificationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Notification} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} id 
     * @param {module:api/UserApi~getNotificationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Notification}
     */
    this.getNotification = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getNotification");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Notification;

      return this.apiClient.callApi(
        '/user/notification/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSelfNotifications operation.
     * @callback module:api/UserApi~getSelfNotificationsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Notification>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:api/UserApi~getSelfNotificationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Notification>}
     */
    this.getSelfNotifications = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Notification];

      return this.apiClient.callApi(
        '/user/notification', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSelfProjects operation.
     * @callback module:api/UserApi~getSelfProjectsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Project>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:api/UserApi~getSelfProjectsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Project>}
     */
    this.getSelfProjects = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Project];

      return this.apiClient.callApi(
        '/user/projects', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSelfUser operation.
     * @callback module:api/UserApi~getSelfUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:api/UserApi~getSelfUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getSelfUser = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/user', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the resetPassword operation.
     * @callback module:api/UserApi~resetPasswordCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:api/UserApi~resetPasswordCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.resetPassword = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/user/reset-password', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the signUp operation.
     * @callback module:api/UserApi~signUpCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SignupFosUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:model/SignupFosUser} data 
     * @param {module:api/UserApi~signUpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SignupFosUser}
     */
    this.signUp = function(data, callback) {
      var postBody = data;

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling signUp");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SignupFosUser;

      return this.apiClient.callApi(
        '/user/signup', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the signUpWithInvitationToken operation.
     * @callback module:api/UserApi~signUpWithInvitationTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SignupFosUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:api/UserApi~signUpWithInvitationTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SignupFosUser}
     */
    this.signUpWithInvitationToken = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SignupFosUser;

      return this.apiClient.callApi(
        '/user/invited-signup', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateNotification operation.
     * @callback module:api/UserApi~updateNotificationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Notification} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} id 
     * @param {module:model/Notification} data 
     * @param {module:api/UserApi~updateNotificationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Notification}
     */
    this.updateNotification = function(id, data, callback) {
      var postBody = data;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateNotification");
      }

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling updateNotification");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Notification;

      return this.apiClient.callApi(
        '/user/notification/{id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSelfUser operation.
     * @callback module:api/UserApi~updateSelfUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:api/UserApi~updateSelfUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateSelfUser = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/user', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
