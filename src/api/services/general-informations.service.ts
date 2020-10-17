/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { GeneralInfoEditRequest } from '../models/general-info-edit-request';
import { GeneralInfoResponse } from '../models/general-info-response';

@Injectable({
  providedIn: 'root',
})
export class GeneralInformationsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiModulesModuleIdGeneralGet
   */
  static readonly ApiModulesModuleIdGeneralGetPath = '/api/modules/{moduleId}/general';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiModulesModuleIdGeneralGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesModuleIdGeneralGet$Plain$Response(params: {
    moduleId: number;

  }): Observable<StrictHttpResponse<GeneralInfoResponse>> {

    const rb = new RequestBuilder(this.rootUrl, GeneralInformationsService.ApiModulesModuleIdGeneralGetPath, 'get');
    if (params) {

      rb.path('moduleId', params.moduleId, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GeneralInfoResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiModulesModuleIdGeneralGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesModuleIdGeneralGet$Plain(params: {
    moduleId: number;

  }): Observable<GeneralInfoResponse> {

    return this.apiModulesModuleIdGeneralGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GeneralInfoResponse>) => r.body as GeneralInfoResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiModulesModuleIdGeneralGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesModuleIdGeneralGet$Json$Response(params: {
    moduleId: number;

  }): Observable<StrictHttpResponse<GeneralInfoResponse>> {

    const rb = new RequestBuilder(this.rootUrl, GeneralInformationsService.ApiModulesModuleIdGeneralGetPath, 'get');
    if (params) {

      rb.path('moduleId', params.moduleId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GeneralInfoResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiModulesModuleIdGeneralGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesModuleIdGeneralGet$Json(params: {
    moduleId: number;

  }): Observable<GeneralInfoResponse> {

    return this.apiModulesModuleIdGeneralGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<GeneralInfoResponse>) => r.body as GeneralInfoResponse)
    );
  }

  /**
   * Path part for operation apiModulesModuleIdGeneralPut
   */
  static readonly ApiModulesModuleIdGeneralPutPath = '/api/modules/{moduleId}/general';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiModulesModuleIdGeneralPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiModulesModuleIdGeneralPut$Response(params: {
    moduleId: number;
      body?: GeneralInfoEditRequest
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GeneralInformationsService.ApiModulesModuleIdGeneralPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiModulesModuleIdGeneralPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiModulesModuleIdGeneralPut(params: {
    moduleId: number;
      body?: GeneralInfoEditRequest
  }): Observable<void> {

    return this.apiModulesModuleIdGeneralPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
