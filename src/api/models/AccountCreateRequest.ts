/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 *
 * @export
 * @interface AccountCreateRequest
 */
export interface AccountCreateRequest {
  /**
   * Name of the user
   * @type {string}
   * @memberof AccountCreateRequest
   */
  name: string;
  /**
   * Email address of the user
   * @type {string}
   * @memberof AccountCreateRequest
   */
  email: string;
  /**
   * Password of the user
   * @type {string}
   * @memberof AccountCreateRequest
   */
  password: string;
}

/**
 * Check if a given object implements the AccountCreateRequest interface.
 */
export function instanceOfAccountCreateRequest(value: object): boolean {
  if (!('name' in value)) return false;
  if (!('email' in value)) return false;
  if (!('password' in value)) return false;
  return true;
}

export function AccountCreateRequestFromJSON(json: any): AccountCreateRequest {
  return AccountCreateRequestFromJSONTyped(json, false);
}

export function AccountCreateRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AccountCreateRequest {
  if (json == null) {
    return json;
  }
  return {
    name: json['name'],
    email: json['email'],
    password: json['password'],
  };
}

export function AccountCreateRequestToJSON(value?: AccountCreateRequest | null): any {
  if (value == null) {
    return value;
  }
  return {
    name: value['name'],
    email: value['email'],
    password: value['password'],
  };
}