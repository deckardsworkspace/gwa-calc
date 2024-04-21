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
 * @interface TermCreateRequest
 */
export interface TermCreateRequest {
  /**
   *
   * @type {string}
   * @memberof TermCreateRequest
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof TermCreateRequest
   */
  description?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof TermCreateRequest
   */
  courses?: Array<string>;
}

/**
 * Check if a given object implements the TermCreateRequest interface.
 */
export function instanceOfTermCreateRequest(value: object): boolean {
  if (!('name' in value)) return false;
  return true;
}

export function TermCreateRequestFromJSON(json: any): TermCreateRequest {
  return TermCreateRequestFromJSONTyped(json, false);
}

export function TermCreateRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): TermCreateRequest {
  if (json == null) {
    return json;
  }
  return {
    name: json['name'],
    description: json['description'] == null ? undefined : json['description'],
    courses: json['courses'] == null ? undefined : json['courses'],
  };
}

export function TermCreateRequestToJSON(value?: TermCreateRequest | null): any {
  if (value == null) {
    return value;
  }
  return {
    name: value['name'],
    description: value['description'],
    courses: value['courses'],
  };
}
