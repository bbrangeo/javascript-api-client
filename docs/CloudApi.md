# bimdata.CloudApi

All URIs are relative to *https://api-beta.bimdata.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cloudInvite**](CloudApi.md#cloudInvite) | **POST** /cloud/{id}/invite | 
[**createCloud**](CloudApi.md#createCloud) | **POST** /cloud | 
[**createDemo**](CloudApi.md#createDemo) | **POST** /cloud/{id}/create-demo | 
[**deleteCloudUser**](CloudApi.md#deleteCloudUser) | **DELETE** /cloud/{cloud_pk}/user/{id} | 
[**fullUpdateCloud**](CloudApi.md#fullUpdateCloud) | **PUT** /cloud/{id} | 
[**fullUpdateCloudUser**](CloudApi.md#fullUpdateCloudUser) | **PUT** /cloud/{cloud_pk}/user/{id} | 
[**getCloud**](CloudApi.md#getCloud) | **GET** /cloud/{id} | 
[**getCloudSize**](CloudApi.md#getCloudSize) | **GET** /cloud/{id}/size | 
[**getCloudUser**](CloudApi.md#getCloudUser) | **GET** /cloud/{cloud_pk}/user/{id} | 
[**getCloudUsers**](CloudApi.md#getCloudUsers) | **GET** /cloud/{cloud_pk}/user | 
[**getClouds**](CloudApi.md#getClouds) | **GET** /cloud | 
[**updateCloud**](CloudApi.md#updateCloud) | **PATCH** /cloud/{id} | 
[**updateCloudUser**](CloudApi.md#updateCloudUser) | **PATCH** /cloud/{cloud_pk}/user/{id} | 


<a name="cloudInvite"></a>
# **cloudInvite**
> cloudInvite(id, cloudInvitation)



Invite a cloud administrator. They will have the ADMIN role on the cloud and on each project of the cloud

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CloudApi();
var id = 56; // Number | A unique integer value identifying this cloud.
var cloudInvitation = new bimdata.CloudInvitation(); // CloudInvitation | 
apiInstance.cloudInvite(id, cloudInvitation).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this cloud. | 
 **cloudInvitation** | [**CloudInvitation**](CloudInvitation.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="createCloud"></a>
# **createCloud**
> Cloud createCloud(cloud)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CloudApi();
var cloud = new bimdata.Cloud(); // Cloud | 
apiInstance.createCloud(cloud).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloud** | [**Cloud**](Cloud.md)|  | 

### Return type

[**Cloud**](Cloud.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createDemo"></a>
# **createDemo**
> Project createDemo(id)



Create a demo project with a pre-populated IFC and its data

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CloudApi();
var id = 56; // Number | A unique integer value identifying this cloud.
apiInstance.createDemo(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this cloud. | 

### Return type

[**Project**](Project.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteCloudUser"></a>
# **deleteCloudUser**
> deleteCloudUser(cloudPk, id)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CloudApi();
var cloudPk = "cloudPk_example"; // String | 
var id = "id_example"; // String | 
apiInstance.deleteCloudUser(cloudPk, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="fullUpdateCloud"></a>
# **fullUpdateCloud**
> Cloud fullUpdateCloud(id, cloud)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CloudApi();
var id = 56; // Number | A unique integer value identifying this cloud.
var cloud = new bimdata.Cloud(); // Cloud | 
apiInstance.fullUpdateCloud(id, cloud).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this cloud. | 
 **cloud** | [**Cloud**](Cloud.md)|  | 

### Return type

[**Cloud**](Cloud.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateCloudUser"></a>
# **fullUpdateCloudUser**
> User fullUpdateCloudUser(cloudPk, id, userCloudUpdate)



Change the user role in the cloud

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CloudApi();
var cloudPk = "cloudPk_example"; // String | 
var id = "id_example"; // String | 
var userCloudUpdate = new bimdata.UserCloudUpdate(); // UserCloudUpdate | 
apiInstance.fullUpdateCloudUser(cloudPk, id, userCloudUpdate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **userCloudUpdate** | [**UserCloudUpdate**](UserCloudUpdate.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCloud"></a>
# **getCloud**
> Cloud getCloud(id)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CloudApi();
var id = 56; // Number | A unique integer value identifying this cloud.
apiInstance.getCloud(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this cloud. | 

### Return type

[**Cloud**](Cloud.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCloudSize"></a>
# **getCloudSize**
> Number getCloudSize(id)



Returns the size of the cloud in Bytes

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CloudApi();
var id = 56; // Number | A unique integer value identifying this cloud.
apiInstance.getCloudSize(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this cloud. | 

### Return type

**Number**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCloudUser"></a>
# **getCloudUser**
> User getCloudUser(cloudPk, id)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CloudApi();
var cloudPk = "cloudPk_example"; // String | 
var id = "id_example"; // String | 
apiInstance.getCloudUser(cloudPk, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**User**](User.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCloudUsers"></a>
# **getCloudUsers**
> [User] getCloudUsers(cloudPk)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CloudApi();
var cloudPk = "cloudPk_example"; // String | 
apiInstance.getCloudUsers(cloudPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 

### Return type

[**[User]**](User.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getClouds"></a>
# **getClouds**
> [Cloud] getClouds()



Returns user&#39;s cloud only

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CloudApi();
apiInstance.getClouds().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Cloud]**](Cloud.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateCloud"></a>
# **updateCloud**
> Cloud updateCloud(id, cloud)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CloudApi();
var id = 56; // Number | A unique integer value identifying this cloud.
var cloud = new bimdata.Cloud(); // Cloud | 
apiInstance.updateCloud(id, cloud).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this cloud. | 
 **cloud** | [**Cloud**](Cloud.md)|  | 

### Return type

[**Cloud**](Cloud.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCloudUser"></a>
# **updateCloudUser**
> User updateCloudUser(cloudPk, id, userCloudUpdate)



Change the user role in the cloud

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CloudApi();
var cloudPk = "cloudPk_example"; // String | 
var id = "id_example"; // String | 
var userCloudUpdate = new bimdata.UserCloudUpdate(); // UserCloudUpdate | 
apiInstance.updateCloudUser(cloudPk, id, userCloudUpdate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **userCloudUpdate** | [**UserCloudUpdate**](UserCloudUpdate.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

