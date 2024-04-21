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
 * @interface CourseUpdateRequest
 */
export interface CourseUpdateRequest {
  /**
   *
   * @type {string}
   * @memberof CourseUpdateRequest
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof CourseUpdateRequest
   */
  description?: string;
  /**
   *
   * @type {number}
   * @memberof CourseUpdateRequest
   */
  units?: number;
}

/**
 * Check if a given object implements the CourseUpdateRequest interface.
 */
export function instanceOfCourseUpdateRequest(value: object): boolean {
  return true;
}

export function CourseUpdateRequestFromJSON(json: any): CourseUpdateRequest {
  return CourseUpdateRequestFromJSONTyped(json, false);
}

export function CourseUpdateRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CourseUpdateRequest {
  if (json == null) {
    return json;
  }
  return {
    name: json['name'] == null ? undefined : json['name'],
    description: json['description'] == null ? undefined : json['description'],
    units: json['units'] == null ? undefined : json['units'],
  };
}

export function CourseUpdateRequestToJSON(value?: CourseUpdateRequest | null): any {
  if (value == null) {
    return value;
  }
  return {
    name: value['name'],
    description: value['description'],
    units: value['units'],
  };
}