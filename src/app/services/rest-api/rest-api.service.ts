import { Injectable } from '@angular/core';

import { RestApiServiceConfig } from './rest-api-service-config';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';



/**
 * An abstract Class for connecting with basic RESTful APIs
 *
 * @export
 * @abstract
 * @class AbstractRestApiService
 * @template T
 */
export class RestApiService<T> {

  constructor(private resource: string, protected http: HttpClient, protected config: RestApiServiceConfig) {
  }


  /**
   * Returns a get observable that returns an object
   *
   * @param {{
   *     headers?: HttpHeaders;
   *     observe?: 'body';
   *     params?: HttpParams;
   *     reportProgress?: boolean;
   *     responseType?: 'json';
   *     withCredentials?: boolean;
   *   }} [options=this.config.options]
   * @returns {Observable<T>}
   * @memberof AbstractRestApiService
   */
  get$(options: {
    headers?: HttpHeaders;
    observe?: 'body';
    params?: HttpParams;
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  } = this.config.options): Observable<T> {
    return this.http.get<T>(`${this.config.baseUrl}/${this.resource}`, options);
  }


  /**
   * Returns a get observable that returns an array of objects
   *
   * @param {{
   *             headers?: HttpHeaders;
   *             observe?: 'body';
   *             params?: HttpParams;
   *             reportProgress?: boolean;
   *             responseType?: 'json';
   *             withCredentials?: boolean;
   *           }} [options=this.config.options]
   * @returns {Observable<T[]>}
   * @memberof AbstractRestApiService
   */
  getAll$(options: {
    headers?: HttpHeaders;
    observe?: 'body';
    params?: HttpParams;
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  } = this.config.options): Observable<T[]> {
    return this.http.get<T[]>(`${this.config.baseUrl}/${this.resource}`, options);
  }

  /**
   * 
   * 
   * @param {any} id 
   * @param {{
   *     headers?: HttpHeaders;
   *     observe?: 'body';
   *     params?: HttpParams;
   *     reportProgress?: boolean;
   *     responseType?: 'json';
   *     withCredentials?: boolean;
   *   }} [options=this.config.options] 
   * @returns {Observable<T>} 
   * @memberof AbstractRestApiService
   */
  getById$(id, options: {
    headers?: HttpHeaders;
    observe?: 'body';
    params?: HttpParams;
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  } = this.config.options): Observable<T> {
    return this.http.get<T>(`${this.config.baseUrl}/${this.resource}/${id}`, options);
  }

  /**
   * 
   * 
   * @param {T} obj 
   * @param {{
   *     headers?: HttpHeaders;
   *     observe?: 'body';
   *     params?: HttpParams;
   *     reportProgress?: boolean;
   *     responseType?: 'json';
   *     withCredentials?: boolean;
   *   }} [options=this.config.options] 
   * @returns {Observable<T>} 
   * @memberof AbstractRestApiService
   */
  create$(obj: T, options: {
    headers?: HttpHeaders;
    observe?: 'body';
    params?: HttpParams;
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  } = this.config.options): Observable<T> {
    return this.http.post<T>(`${this.config.baseUrl}/${this.resource}`, obj, options);
  }

  /**
   * Sends a PUT http request to update the object with the ID to the values stored in the passed object.
   * 
   * @param {any} id 
   * @param {T} obj 
   * @param {{
   *     headers?: HttpHeaders;
   *     observe?: 'body';
   *     params?: HttpParams;
   *     reportProgress?: boolean;
   *     responseType?: 'json';
   *     withCredentials?: boolean;
   *   }} [options=this.config.options] 
   * @returns {Observable<T>} 
   * @memberof AbstractRestApiService
   */
  update$(id, obj: T, options: {
    headers?: HttpHeaders;
    observe?: 'body';
    params?: HttpParams;
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  } = this.config.options): Observable<T> {
    return this.http.put<T>(`${this.config.baseUrl}/${this.resource}/ ${id} `, obj, options);
  }

  /**
   * Sends a delete to request for the resource with the ID passed as a parameter
   * 
   * @param {any} id 
   * @param {{
   *     headers?: HttpHeaders;
   *     observe?: 'body';
   *     params?: HttpParams;
   *     reportProgress?: boolean;
   *     responseType?: 'json';
   *     withCredentials?: boolean;
   *   }} [options=this.config.options] 
   * @returns {Observable<Object>} 
   * @memberof AbstractRestApiService
   */
  delete$(id, options: {
    headers?: HttpHeaders;
    observe?: 'body';
    params?: HttpParams;
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  } = this.config.options): Observable<Object> {
    return this.http.delete(`${this.config.baseUrl}/${this.resource}/${id}`, options);
  }
}
