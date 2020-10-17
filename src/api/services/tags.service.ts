/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class TagsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiTagsGet
   */
  static readonly ApiTagsGetPath = '/api/tags';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTagsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTagsGet$Plain$Response(params?: {
    match?: null | string;

  }): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, TagsService.ApiTagsGetPath, 'get');
    if (params) {

      rb.query('match', params.match, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTagsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTagsGet$Plain(params?: {
    match?: null | string;

  }): Observable<Array<string>> {

    return this.apiTagsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTagsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTagsGet$Json$Response(params?: {
    match?: null | string;

  }): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, TagsService.ApiTagsGetPath, 'get');
    if (params) {

      rb.query('match', params.match, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTagsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTagsGet$Json(params?: {
    match?: null | string;

  }): Observable<Array<string>> {

    return this.apiTagsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

}
