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
import type { GradingSystem } from './GradingSystem';
import {
  GradingSystemFromJSON,
  GradingSystemFromJSONTyped,
  GradingSystemToJSON,
} from './GradingSystem';

/**
 *
 * @export
 * @interface CourseCreateRequest
 */
export interface CourseCreateRequest {
  /**
   *
   * @type {string}
   * @memberof CourseCreateRequest
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof CourseCreateRequest
   */
  description?: string;
  /**
   * The grading system used for the course. Cannot be changed once set.
   * @type {GradingSystem}
   * @memberof CourseCreateRequest
   */
  gradingSystem: GradingSystem;
  /**
   *
   * @type {number}
   * @memberof CourseCreateRequest
   */
  units: number;
}

/**
 * Check if a given object implements the CourseCreateRequest interface.
 */
export function instanceOfCourseCreateRequest(value: object): boolean {
  if (!('name' in value)) return false;
  if (!('gradingSystem' in value)) return false;
  if (!('units' in value)) return false;
  return true;
}

export function CourseCreateRequestFromJSON(json: any): CourseCreateRequest {
  return CourseCreateRequestFromJSONTyped(json, false);
}

export function CourseCreateRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CourseCreateRequest {
  if (json == null) {
    return json;
  }
  return {
    name: json['name'],
    description: json['description'] == null ? undefined : json['description'],
    gradingSystem: GradingSystemFromJSON(json['grading_system']),
    units: json['units'],
  };
}

export function CourseCreateRequestToJSON(value?: CourseCreateRequest | null): any {
  if (value == null) {
    return value;
  }
  return {
    name: value['name'],
    description: value['description'],
    grading_system: GradingSystemToJSON(value['gradingSystem']),
    units: value['units'],
  };
}