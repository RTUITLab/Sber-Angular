/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CommentResponse } from '../models/comment-response';
import { CreateCommentRequest } from '../models/create-comment-request';

@Injectable({
  providedIn: 'root',
})
export class CommentsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiModulesModuleIdCommentsGet
   */
  static readonly ApiModulesModuleIdCommentsGetPath = '/api/modules/{moduleId}/comments';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiModulesModuleIdCommentsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesModuleIdCommentsGet$Plain$Response(params: {
    moduleId: number;

  }): Observable<StrictHttpResponse<Array<CommentResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, CommentsService.ApiModulesModuleIdCommentsGetPath, 'get');
    if (params) {

      rb.path('moduleId', params.moduleId, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CommentResponse>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiModulesModuleIdCommentsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesModuleIdCommentsGet$Plain(params: {
    moduleId: number;

  }): Observable<Array<CommentResponse>> {

    return this.apiModulesModuleIdCommentsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CommentResponse>>) => r.body as Array<CommentResponse>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiModulesModuleIdCommentsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesModuleIdCommentsGet$Json$Response(params: {
    moduleId: number;

  }): Observable<StrictHttpResponse<Array<CommentResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, CommentsService.ApiModulesModuleIdCommentsGetPath, 'get');
    if (params) {

      rb.path('moduleId', params.moduleId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CommentResponse>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiModulesModuleIdCommentsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesModuleIdCommentsGet$Json(params: {
    moduleId: number;

  }): Observable<Array<CommentResponse>> {

    return this.apiModulesModuleIdCommentsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CommentResponse>>) => r.body as Array<CommentResponse>)
    );
  }

  /**
   * Path part for operation apiModulesModuleIdCommentsPost
   */
  static readonly ApiModulesModuleIdCommentsPostPath = '/api/modules/{moduleId}/comments';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiModulesModuleIdCommentsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiModulesModuleIdCommentsPost$Plain$Response(params: {
    moduleId: number;
    UserName?: null | string;
      body?: CreateCommentRequest
  }): Observable<StrictHttpResponse<CommentResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CommentsService.ApiModulesModuleIdCommentsPostPath, 'post');
    if (params) {

      rb.path('moduleId', params.moduleId, {});
      rb.header('UserName', params.UserName, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CommentResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiModulesModuleIdCommentsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiModulesModuleIdCommentsPost$Plain(params: {
    moduleId: number;
    UserName?: null | string;
      body?: CreateCommentRequest
  }): Observable<CommentResponse> {

    return this.apiModulesModuleIdCommentsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CommentResponse>) => r.body as CommentResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiModulesModuleIdCommentsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiModulesModuleIdCommentsPost$Json$Response(params: {
    moduleId: number;
    UserName?: null | string;
      body?: CreateCommentRequest
  }): Observable<StrictHttpResponse<CommentResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CommentsService.ApiModulesModuleIdCommentsPostPath, 'post');
    if (params) {

      rb.path('moduleId', params.moduleId, {});
      rb.header('UserName', params.UserName, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CommentResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiModulesModuleIdCommentsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiModulesModuleIdCommentsPost$Json(params: {
    moduleId: number;
    UserName?: null | string;
      body?: CreateCommentRequest
  }): Observable<CommentResponse> {

    return this.apiModulesModuleIdCommentsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CommentResponse>) => r.body as CommentResponse)
    );
  }

  /**
   * Path part for operation apiModulesModuleIdCommentsIdAcceptPost
   */
  static readonly ApiModulesModuleIdCommentsIdAcceptPostPath = '/api/modules/{moduleId}/comments/{id}/accept';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiModulesModuleIdCommentsIdAcceptPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesModuleIdCommentsIdAcceptPost$Plain$Response(params: {
    moduleId: number;
    id: number;
    UserName?: null | string;

  }): Observable<StrictHttpResponse<CommentResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CommentsService.ApiModulesModuleIdCommentsIdAcceptPostPath, 'post');
    if (params) {

      rb.path('moduleId', params.moduleId, {});
      rb.path('id', params.id, {});
      rb.header('UserName', params.UserName, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CommentResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiModulesModuleIdCommentsIdAcceptPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesModuleIdCommentsIdAcceptPost$Plain(params: {
    moduleId: number;
    id: number;
    UserName?: null | string;

  }): Observable<CommentResponse> {

    return this.apiModulesModuleIdCommentsIdAcceptPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CommentResponse>) => r.body as CommentResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiModulesModuleIdCommentsIdAcceptPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesModuleIdCommentsIdAcceptPost$Json$Response(params: {
    moduleId: number;
    id: number;
    UserName?: null | string;

  }): Observable<StrictHttpResponse<CommentResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CommentsService.ApiModulesModuleIdCommentsIdAcceptPostPath, 'post');
    if (params) {

      rb.path('moduleId', params.moduleId, {});
      rb.path('id', params.id, {});
      rb.header('UserName', params.UserName, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CommentResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiModulesModuleIdCommentsIdAcceptPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesModuleIdCommentsIdAcceptPost$Json(params: {
    moduleId: number;
    id: number;
    UserName?: null | string;

  }): Observable<CommentResponse> {

    return this.apiModulesModuleIdCommentsIdAcceptPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CommentResponse>) => r.body as CommentResponse)
    );
  }

  /**
   * Path part for operation apiModulesModuleIdCommentsIdRejectPost
   */
  static readonly ApiModulesModuleIdCommentsIdRejectPostPath = '/api/modules/{moduleId}/comments/{id}/reject';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiModulesModuleIdCommentsIdRejectPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiModulesModuleIdCommentsIdRejectPost$Plain$Response(params: {
    moduleId: number;
    id: number;
    UserName?: null | string;
      body?: null | string
  }): Observable<StrictHttpResponse<CommentResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CommentsService.ApiModulesModuleIdCommentsIdRejectPostPath, 'post');
    if (params) {

      rb.path('moduleId', params.moduleId, {});
      rb.path('id', params.id, {});
      rb.header('UserName', params.UserName, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CommentResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiModulesModuleIdCommentsIdRejectPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiModulesModuleIdCommentsIdRejectPost$Plain(params: {
    moduleId: number;
    id: number;
    UserName?: null | string;
      body?: null | string
  }): Observable<CommentResponse> {

    return this.apiModulesModuleIdCommentsIdRejectPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CommentResponse>) => r.body as CommentResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiModulesModuleIdCommentsIdRejectPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiModulesModuleIdCommentsIdRejectPost$Json$Response(params: {
    moduleId: number;
    id: number;
    UserName?: null | string;
      body?: null | string
  }): Observable<StrictHttpResponse<CommentResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CommentsService.ApiModulesModuleIdCommentsIdRejectPostPath, 'post');
    if (params) {

      rb.path('moduleId', params.moduleId, {});
      rb.path('id', params.id, {});
      rb.header('UserName', params.UserName, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CommentResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiModulesModuleIdCommentsIdRejectPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiModulesModuleIdCommentsIdRejectPost$Json(params: {
    moduleId: number;
    id: number;
    UserName?: null | string;
      body?: null | string
  }): Observable<CommentResponse> {

    return this.apiModulesModuleIdCommentsIdRejectPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CommentResponse>) => r.body as CommentResponse)
    );
  }

  /**
   * Path part for operation apiModulesModuleIdCommentsIdDonePost
   */
  static readonly ApiModulesModuleIdCommentsIdDonePostPath = '/api/modules/{moduleId}/comments/{id}/done';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiModulesModuleIdCommentsIdDonePost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesModuleIdCommentsIdDonePost$Plain$Response(params: {
    moduleId: number;
    id: number;

  }): Observable<StrictHttpResponse<CommentResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CommentsService.ApiModulesModuleIdCommentsIdDonePostPath, 'post');
    if (params) {

      rb.path('moduleId', params.moduleId, {});
      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CommentResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiModulesModuleIdCommentsIdDonePost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesModuleIdCommentsIdDonePost$Plain(params: {
    moduleId: number;
    id: number;

  }): Observable<CommentResponse> {

    return this.apiModulesModuleIdCommentsIdDonePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CommentResponse>) => r.body as CommentResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiModulesModuleIdCommentsIdDonePost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesModuleIdCommentsIdDonePost$Json$Response(params: {
    moduleId: number;
    id: number;

  }): Observable<StrictHttpResponse<CommentResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CommentsService.ApiModulesModuleIdCommentsIdDonePostPath, 'post');
    if (params) {

      rb.path('moduleId', params.moduleId, {});
      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CommentResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiModulesModuleIdCommentsIdDonePost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiModulesModuleIdCommentsIdDonePost$Json(params: {
    moduleId: number;
    id: number;

  }): Observable<CommentResponse> {

    return this.apiModulesModuleIdCommentsIdDonePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CommentResponse>) => r.body as CommentResponse)
    );
  }

}
