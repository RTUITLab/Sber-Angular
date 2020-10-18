/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CourseResponse } from '../models/course-response';

@Injectable({
  providedIn: 'root',
})
export class CoursesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCoursesGet
   */
  static readonly ApiCoursesGetPath = '/api/Courses';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoursesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCoursesGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<CourseResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.ApiCoursesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CourseResponse>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCoursesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCoursesGet$Plain(params?: {

  }): Observable<Array<CourseResponse>> {

    return this.apiCoursesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CourseResponse>>) => r.body as Array<CourseResponse>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoursesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCoursesGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<CourseResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.ApiCoursesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CourseResponse>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCoursesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCoursesGet$Json(params?: {

  }): Observable<Array<CourseResponse>> {

    return this.apiCoursesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CourseResponse>>) => r.body as Array<CourseResponse>)
    );
  }

}
