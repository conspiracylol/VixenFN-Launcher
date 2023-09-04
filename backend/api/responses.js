const apiconfig = require("../../config/api.json")
function invalidRequestMethod() {
    var response = 
    `
    {
        "ERROR": "INVALID_HTTP_METHOD",
        "ERRORCODE": "40955",
        "RESPONSE": "Sorry, the endpoint you requested cannot be accessed with the http method you requested.",
        "STATUSCODE": "400"
      }
    `
    return response;
}

function MalformedRequest() {
    var response =   `
    {
        "ERRORCODE": "40045",
        "ERROR": "INVALID_REQUEST_PARAMS",
        "RESPONSE": "The requested provided was formed badly.",
        "STATUSCODE": "400"
      }
    `
    return response;
}

function notRealAuthType() {
    var response =   `
    {
        "ERRORCODE": "41290",
        "ERROR": "AUTHORIZATION_BAD_AUTH_TYPE",
        "RESPONSE": "The authorization you specified is not a valid authorization type.",
        "STATUSCODE": "400"
      }
    `
    return response;
}
function AuthIsntRightGrant() {
    var response = `
    {
        "ERRORCODE": "40956",
        "ERROR": "INVALID_GRANT_PROVIDED",
        "RESPONSE": "Invalid authorization, endpoint Cannot be accessed with the grant type you specified.",
        "STATUSCODE": "400"
      }
    `
    return response;
}

function InvalidAuth() {
    var response =   `
    {
        "ERRORCODE": "4015",
        "ERROR": "AUTHORIZATION_INVALID",
        "RESPONSE": "The authorization you provided is invalid or expired.",
        "STATUSCODE": "401"
      }
    `
    return response;
}
function UserLacksPermissionsToEndpoint() {
    var response =   `
    {
        "ERRORCODE": "40151",
        "ERROR": "USER_LACKS_PERMISSION",
        "RESPONSE": "The provided authorization lacks access to the requested resource.",
        "STATUSCODE": "403"
      }
    `
    return response;
}

function UserIsBanned() {
    var response =   `
    {
        "ERRORCODE": "40353",
        "ERROR": "BANNED",
        "RESPONSE": "The user is banned from the following resource.",
        "STATUSCODE": "403"
      }
    `
    return response;
}

function AuthNotProvided() {
    var response =   `
    {
        "ERRORCODE": "40153",
        "ERROR": "AUTH_NOT_PROVIDED",
        "RESPONSE": "Authorization failed for the requested route.",
        "STATUSCODE": "401"
      }
    `
    return response;
}

function Maintenance() {
    var response =   `
    {
        "ERRORCODE": "5003",
        "ERROR": "MAINTENANCE",
        "RESPONSE": "Endpoint is under maintenance.",
        "STATUSCODE": "500"
      }
    `
    return response;
}

function SystemOutage() {
    var response =   `
    {
        "ERRORCODE": "5001",
        "ERROR": "INTERNAL_SYSTEMS_DOWN",
        "RESPONSE": "System is currently down.",
        "STATUSCODE": "500"
      }
    `
    return response;
}

function InternalServerError() {
    var response =   `
    {
        "ERRORCODE": "5002",
        "ERROR": "INTERNAL_SERVER_ERROR",
        "RESPONSE": "Internal Server Error",
        "STATUSCODE": "500"
      }
    `
    return response;
}
module.exports = InternalServerError, MalformedRequest, SystemOutage, Maintenance, AuthNotProvided, UserIsBanned, UserLacksPermissionsToEndpoint, InvalidAuth, invalidRequestMethod, AuthIsntRightGrant, notRealAuthType