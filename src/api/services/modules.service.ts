/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CreateEditModuleRequest } from '../models/create-edit-module-request';
import { ModuleCompactResponse } from '../models/module-compact-response';
import { ModuleResponse } from '../models/module-response';

@Injectable({
  providedIn: 'root',
})
export class ModulesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiModulesGet
   */
  static readonly ApiModulesGetPath = '/api/Modules';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiModulesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ModuleCompactResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, ModulesService.ApiModulesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ModuleCompactResponse>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiModulesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesGet$Plain(params?: {

  }): Observable<Array<ModuleCompactResponse>> {

    return this.apiModulesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ModuleCompactResponse>>) => r.body as Array<ModuleCompactResponse>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiModulesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ModuleCompactResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, ModulesService.ApiModulesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ModuleCompactResponse>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiModulesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesGet$Json(params?: {

  }): Observable<Array<ModuleCompactResponse>> {

    return this.apiModulesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ModuleCompactResponse>>) => r.body as Array<ModuleCompactResponse>)
    );
  }

  /**
   * Path part for operation apiModulesPost
   */
  static readonly ApiModulesPostPath = '/api/Modules';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiModulesPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiModulesPost$Plain$Response(params?: {
    UserName?: null | string;
      body?: CreateEditModuleRequest
  }): Observable<StrictHttpResponse<ModuleCompactResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ModulesService.ApiModulesPostPath, 'post');
    if (params) {

      rb.header('UserName', params.UserName, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ModuleCompactResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiModulesPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiModulesPost$Plain(params?: {
    UserName?: null | string;
      body?: CreateEditModuleRequest
  }): Observable<ModuleCompactResponse> {

    return this.apiModulesPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ModuleCompactResponse>) => r.body as ModuleCompactResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiModulesPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiModulesPost$Json$Response(params?: {
    UserName?: null | string;
      body?: CreateEditModuleRequest
  }): Observable<StrictHttpResponse<ModuleCompactResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ModulesService.ApiModulesPostPath, 'post');
    if (params) {

      rb.header('UserName', params.UserName, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ModuleCompactResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiModulesPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiModulesPost$Json(params?: {
    UserName?: null | string;
      body?: CreateEditModuleRequest
  }): Observable<ModuleCompactResponse> {

    return this.apiModulesPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ModuleCompactResponse>) => r.body as ModuleCompactResponse)
    );
  }

  /**
   * Path part for operation apiModulesIdGet
   */
  static readonly ApiModulesIdGetPath = '/api/Modules/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiModulesIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesIdGet$Plain$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<ModuleResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ModulesService.ApiModulesIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ModuleResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiModulesIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesIdGet$Plain(params: {
    id: number;

  }): Observable<ModuleResponse> {

    return this.apiModulesIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ModuleResponse>) => r.body as ModuleResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiModulesIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesIdGet$Json$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<ModuleResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ModulesService.ApiModulesIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ModuleResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiModulesIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesIdGet$Json(params: {
    id: number;

  }): Observable<ModuleResponse> {

    return this.apiModulesIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ModuleResponse>) => r.body as ModuleResponse)
    );
  }

  /**
   * Path part for operation apiModulesIdPut
   */
  static readonly ApiModulesIdPutPath = '/api/Modules/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiModulesIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiModulesIdPut$Response(params: {
    id: number;
      body?: CreateEditModuleRequest
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ModulesService.ApiModulesIdPutPath, 'put');
    if (params) {

      rb.path('id', params.id, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiModulesIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiModulesIdPut(params: {
    id: number;
      body?: CreateEditModuleRequest
  }): Observable<void> {

    return this.apiModulesIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiModulesIdDelete
   */
  static readonly ApiModulesIdDeletePath = '/api/Modules/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiModulesIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesIdDelete$Plain$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<ModuleResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ModulesService.ApiModulesIdDeletePath, 'delete');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ModuleResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiModulesIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesIdDelete$Plain(params: {
    id: number;

  }): Observable<ModuleResponse> {

    return this.apiModulesIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ModuleResponse>) => r.body as ModuleResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiModulesIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesIdDelete$Json$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<ModuleResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ModulesService.ApiModulesIdDeletePath, 'delete');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ModuleResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiModulesIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesIdDelete$Json(params: {
    id: number;

  }): Observable<ModuleResponse> {

    return this.apiModulesIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ModuleResponse>) => r.body as ModuleResponse)
    );
  }

}
