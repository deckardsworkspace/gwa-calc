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
import type { CoursePydantic } from './CoursePydantic';
import {
  CoursePydanticFromJSON,
  CoursePydanticFromJSONTyped,
  CoursePydanticToJSON,
} from './CoursePydantic';

/**
 *
 * @export
 * @interface CourseMultipleResponse
 */
export interface CourseMultipleResponse {
  /**
   *
   * @type {{ [key: string]: CoursePydantic; }}
   * @memberof CourseMultipleResponse
   */
  courses: { [key: string]: CoursePydantic };
}

/**
 * Check if a given object implements the CourseMultipleResponse interface.
 */
export function instanceOfCourseMultipleResponse(value: object): boolean {
  if (!('courses' in value)) return false;
  return true;
}

export function CourseMultipleResponseFromJSON(json: any): CourseMultipleResponse {
  return CourseMultipleResponseFromJSONTyped(json, false);
}

export function CourseMultipleResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CourseMultipleResponse {
  if (json == null) {
    return json;
  }
  return {
    courses: json['courses'],
  };
}

export function CourseMultipleResponseToJSON(value?: CourseMultipleResponse | null): any {
  if (value == null) {
    return value;
  }
  return {
    courses: value['courses'],
  };
}