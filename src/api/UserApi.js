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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ForgotPassword', 'model/FosUser', 'model/InvitedSignUp', 'model/Notification', 'model/Project', 'model/ResetPassword', 'model/SelfFosUser', 'model/SignupFosUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ForgotPassword'), require('../model/FosUser'), require('../model/InvitedSignUp'), require('../model/Notification'), require('../model/Project'), require('../model/ResetPassword'), require('../model/SelfFosUser'), require('../model/SignupFosUser'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.UserApi = factory(root.bimdata.ApiClient, root.bimdata.ForgotPassword, root.bimdata.FosUser, root.bimdata.InvitedSignUp, root.bimdata.Notification, root.bimdata.Project, root.bimdata.ResetPassword, root.bimdata.SelfFosUser, root.bimdata.SignupFosUser);
  }
}(this, function(ApiClient, ForgotPassword, FosUser, InvitedSignUp, Notification, Project, ResetPassword, SelfFosUser, SignupFosUser) {
  'use strict';

  /**
   * User service.
   * @module api/UserApi
   * @version 0.0.0
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
     * @param {module:model/ForgotPassword} forgotPassword 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.askResetPasswordTokenWithHttpInfo = function(forgotPassword) {
      var postBody = forgotPassword;

      // verify the required parameter 'forgotPassword' is set
      if (forgotPassword === undefined || forgotPassword === null) {
        throw new Error("Missing the required parameter 'forgotPassword' when calling askResetPasswordToken");
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
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/user/forgot-password', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {module:model/ForgotPassword} forgotPassword 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.askResetPasswordToken = function(forgotPassword) {
      return this.askResetPasswordTokenWithHttpInfo(forgotPassword)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} id 
     * @param {module:model/Notification} notification 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Notification} and HTTP response
     */
    this.fullUpdateNotificationWithHttpInfo = function(id, notification) {
      var postBody = notification;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling fullUpdateNotification");
      }

      // verify the required parameter 'notification' is set
      if (notification === undefined || notification === null) {
        throw new Error("Missing the required parameter 'notification' when calling fullUpdateNotification");
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} id 
     * @param {module:model/Notification} notification 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Notification}
     */
    this.fullUpdateNotification = function(id, notification) {
      return this.fullUpdateNotificationWithHttpInfo(id, notification)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Notification} and HTTP response
     */
    this.getNotificationWithHttpInfo = function(id) {
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Notification;

      return this.apiClient.callApi(
        '/user/notification/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Notification}
     */
    this.getNotification = function(id) {
      return this.getNotificationWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Notification>} and HTTP response
     */
    this.getSelfNotificationsWithHttpInfo = function() {
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Notification];

      return this.apiClient.callApi(
        '/user/notification', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Notification>}
     */
    this.getSelfNotifications = function() {
      return this.getSelfNotificationsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Project>} and HTTP response
     */
    this.getSelfProjectsWithHttpInfo = function() {
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Project];

      return this.apiClient.callApi(
        '/user/projects', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Project>}
     */
    this.getSelfProjects = function() {
      return this.getSelfProjectsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FosUser} and HTTP response
     */
    this.getSelfUserWithHttpInfo = function() {
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = FosUser;

      return this.apiClient.callApi(
        '/user', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FosUser}
     */
    this.getSelfUser = function() {
      return this.getSelfUserWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {module:model/ResetPassword} resetPassword 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.resetPasswordWithHttpInfo = function(resetPassword) {
      var postBody = resetPassword;

      // verify the required parameter 'resetPassword' is set
      if (resetPassword === undefined || resetPassword === null) {
        throw new Error("Missing the required parameter 'resetPassword' when calling resetPassword");
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
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/user/reset-password', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {module:model/ResetPassword} resetPassword 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.resetPassword = function(resetPassword) {
      return this.resetPasswordWithHttpInfo(resetPassword)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {module:model/SignupFosUser} signupFosUser 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SignupFosUser} and HTTP response
     */
    this.signUpWithHttpInfo = function(signupFosUser) {
      var postBody = signupFosUser;

      // verify the required parameter 'signupFosUser' is set
      if (signupFosUser === undefined || signupFosUser === null) {
        throw new Error("Missing the required parameter 'signupFosUser' when calling signUp");
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {module:model/SignupFosUser} signupFosUser 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SignupFosUser}
     */
    this.signUp = function(signupFosUser) {
      return this.signUpWithHttpInfo(signupFosUser)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {module:model/InvitedSignUp} invitedSignUp 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SignupFosUser} and HTTP response
     */
    this.signUpWithInvitationTokenWithHttpInfo = function(invitedSignUp) {
      var postBody = invitedSignUp;

      // verify the required parameter 'invitedSignUp' is set
      if (invitedSignUp === undefined || invitedSignUp === null) {
        throw new Error("Missing the required parameter 'invitedSignUp' when calling signUpWithInvitationToken");
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
        '/user/invited-signup', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {module:model/InvitedSignUp} invitedSignUp 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SignupFosUser}
     */
    this.signUpWithInvitationToken = function(invitedSignUp) {
      return this.signUpWithInvitationTokenWithHttpInfo(invitedSignUp)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} id 
     * @param {module:model/Notification} notification 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Notification} and HTTP response
     */
    this.updateNotificationWithHttpInfo = function(id, notification) {
      var postBody = notification;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateNotification");
      }

      // verify the required parameter 'notification' is set
      if (notification === undefined || notification === null) {
        throw new Error("Missing the required parameter 'notification' when calling updateNotification");
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} id 
     * @param {module:model/Notification} notification 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Notification}
     */
    this.updateNotification = function(id, notification) {
      return this.updateNotificationWithHttpInfo(id, notification)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {module:model/SelfFosUser} selfFosUser 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FosUser} and HTTP response
     */
    this.updateSelfUserWithHttpInfo = function(selfFosUser) {
      var postBody = selfFosUser;

      // verify the required parameter 'selfFosUser' is set
      if (selfFosUser === undefined || selfFosUser === null) {
        throw new Error("Missing the required parameter 'selfFosUser' when calling updateSelfUser");
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
      var returnType = FosUser;

      return this.apiClient.callApi(
        '/user', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {module:model/SelfFosUser} selfFosUser 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FosUser}
     */
    this.updateSelfUser = function(selfFosUser) {
      return this.updateSelfUserWithHttpInfo(selfFosUser)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
