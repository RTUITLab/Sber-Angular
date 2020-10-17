/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { TeacherInstructionsEditRequest } from '../models/teacher-instructions-edit-request';
import { TeacherInstructionsResponse } from '../models/teacher-instructions-response';

@Injectable({
  providedIn: 'root',
})
export class TeacherInstructionsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiModulesModuleIdTeacherInstructionsGet
   */
  static readonly ApiModulesModuleIdTeacherInstructionsGetPath = '/api/modules/{moduleId}/teacherInstructions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiModulesModuleIdTeacherInstructionsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesModuleIdTeacherInstructionsGet$Plain$Response(params: {
    moduleId: number;

  }): Observable<StrictHttpResponse<TeacherInstructionsResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TeacherInstructionsService.ApiModulesModuleIdTeacherInstructionsGetPath, 'get');
    if (params) {

      rb.path('moduleId', params.moduleId, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TeacherInstructionsResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiModulesModuleIdTeacherInstructionsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesModuleIdTeacherInstructionsGet$Plain(params: {
    moduleId: number;

  }): Observable<TeacherInstructionsResponse> {

    return this.apiModulesModuleIdTeacherInstructionsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<TeacherInstructionsResponse>) => r.body as TeacherInstructionsResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiModulesModuleIdTeacherInstructionsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesModuleIdTeacherInstructionsGet$Json$Response(params: {
    moduleId: number;

  }): Observable<StrictHttpResponse<TeacherInstructionsResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TeacherInstructionsService.ApiModulesModuleIdTeacherInstructionsGetPath, 'get');
    if (params) {

      rb.path('moduleId', params.moduleId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TeacherInstructionsResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiModulesModuleIdTeacherInstructionsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesModuleIdTeacherInstructionsGet$Json(params: {
    moduleId: number;

  }): Observable<TeacherInstructionsResponse> {

    return this.apiModulesModuleIdTeacherInstructionsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<TeacherInstructionsResponse>) => r.body as TeacherInstructionsResponse)
    );
  }

  /**
   * Path part for operation apiModulesModuleIdTeacherInstructionsPut
   */
  static readonly ApiModulesModuleIdTeacherInstructionsPutPath = '/api/modules/{moduleId}/teacherInstructions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiModulesModuleIdTeacherInstructionsPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiModulesModuleIdTeacherInstructionsPut$Response(params: {
    moduleId: number;
      body?: TeacherInstructionsEditRequest
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TeacherInstructionsService.ApiModulesModuleIdTeacherInstructionsPutPath, 'put');
    if (params) {

      rb.path('moduleId', params.moduleId, {});

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
   * To access the full response (for headers, for example), `apiModulesModuleIdTeacherInstructionsPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiModulesModuleIdTeacherInstructionsPut(params: {
    moduleId: number;
      body?: TeacherInstructionsEditRequest
  }): Observable<void> {

    return this.apiModulesModuleIdTeacherInstructionsPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
