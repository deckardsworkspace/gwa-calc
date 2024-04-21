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
 * @interface GradesUpdateRequest
 */
export interface GradesUpdateRequest {
  /**
   *
   * @type {{ [key: string]: number; }}
   * @memberof GradesUpdateRequest
   */
  grades: { [key: string]: number };
}

/**
 * Check if a given object implements the GradesUpdateRequest interface.
 */
export function instanceOfGradesUpdateRequest(value: object): boolean {
  if (!('grades' in value)) return false;
  return true;
}

export function GradesUpdateRequestFromJSON(json: any): GradesUpdateRequest {
  return GradesUpdateRequestFromJSONTyped(json, false);
}

export function GradesUpdateRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GradesUpdateRequest {
  if (json == null) {
    return json;
  }
  return {
    grades: json['grades'],
  };
}

export function GradesUpdateRequestToJSON(value?: GradesUpdateRequest | null): any {
  if (value == null) {
    return value;
  }
  return {
    grades: value['grades'],
  };
}