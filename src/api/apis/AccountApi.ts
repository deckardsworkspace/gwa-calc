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

import * as runtime from '../runtime';
import type {
  HTTPValidationError,
  LoginRequest,
  LoginResponse,
  SignupRequest,
  UserPydantic,
} from '../models/index';
import {
  HTTPValidationErrorFromJSON,
  HTTPValidationErrorToJSON,
  LoginRequestFromJSON,
  LoginRequestToJSON,
  LoginResponseFromJSON,
  LoginResponseToJSON,
  SignupRequestFromJSON,
  SignupRequestToJSON,
  UserPydanticFromJSON,
  UserPydanticToJSON,
} from '../models/index';

export interface LoginOperationRequest {
  loginRequest: LoginRequest;
}

export interface SignupOperationRequest {
  signupRequest: SignupRequest;
}

export interface VerifyEmailRequest {
  token: string;
}

/**
 *
 */
export class AccountApi extends runtime.BaseAPI {
  /**
   * Get Logged In User
   */
  async getLoggedInUserRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<UserPydantic>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token('HTTPBearer', []);

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/account/me`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => UserPydanticFromJSON(jsonValue));
  }

  /**
   * Get Logged In User
   */
  async getLoggedInUser(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<UserPydantic> {
    const response = await this.getLoggedInUserRaw(initOverrides);
    return await response.value();
  }

  /**
   * Login
   */
  async loginRaw(
    requestParameters: LoginOperationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<LoginResponse>> {
    if (requestParameters['loginRequest'] == null) {
      throw new runtime.RequiredError(
        'loginRequest',
        'Required parameter "loginRequest" was null or undefined when calling login().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/account/login`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: LoginRequestToJSON(requestParameters['loginRequest']),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => LoginResponseFromJSON(jsonValue));
  }

  /**
   * Login
   */
  async login(
    requestParameters: LoginOperationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<LoginResponse> {
    const response = await this.loginRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Signup
   */
  async signupRaw(
    requestParameters: SignupOperationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<any>> {
    if (requestParameters['signupRequest'] == null) {
      throw new runtime.RequiredError(
        'signupRequest',
        'Required parameter "signupRequest" was null or undefined when calling signup().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/account/signup`,
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: SignupRequestToJSON(requestParameters['signupRequest']),
      },
      initOverrides
    );

    if (this.isJsonMime(response.headers.get('content-type'))) {
      return new runtime.JSONApiResponse<any>(response);
    } else {
      return new runtime.TextApiResponse(response) as any;
    }
  }

  /**
   * Signup
   */
  async signup(
    requestParameters: SignupOperationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<any> {
    const response = await this.signupRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Verify Email
   */
  async verifyEmailRaw(
    requestParameters: VerifyEmailRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<any>> {
    if (requestParameters['token'] == null) {
      throw new runtime.RequiredError(
        'token',
        'Required parameter "token" was null or undefined when calling verifyEmail().'
      );
    }

    const queryParameters: any = {};

    if (requestParameters['token'] != null) {
      queryParameters['token'] = requestParameters['token'];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/account/verify`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    if (this.isJsonMime(response.headers.get('content-type'))) {
      return new runtime.JSONApiResponse<any>(response);
    } else {
      return new runtime.TextApiResponse(response) as any;
    }
  }

  /**
   * Verify Email
   */
  async verifyEmail(
    requestParameters: VerifyEmailRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<any> {
    const response = await this.verifyEmailRaw(requestParameters, initOverrides);
    return await response.value();
  }
}