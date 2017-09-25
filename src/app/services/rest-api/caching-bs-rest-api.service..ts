import { Injectable } from '@angular/core';
/**
 * Generic Abstract Class used to connect to API's and provide Behaovior subject
 * functionaility
 * Autor: Justin Dietz
 *  github: https://github.com/JoA-MoS
 */
import { RestApiServiceConfig } from './rest-api-service-config';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { RestApiService } from './rest-api.service';



/**
 * An abstract Class for connecting with basic RESTful APIs using Behbior Subjects
 *
 * Currently this will only work with API's that return an array of objects.
 *
 * @export
 * @abstract
 * @class AbstractRestApiService
 * @template T
 */
export class CachingBsRestApiService<T> extends RestApiService<T> {
  data$: Observable<T[]>;
  private dataBS: BehaviorSubject<T[]>;
  private dataStore: {
    data: T[]
  };


  /**
   * Creates an instance of AbstractBsRestApiService. Service stores data and enables Behavior Subject
   * @param {HttpClient} http
   * @param {RestApiServiceConfig} config
   * @memberof AbstractRestApiService
   */
  constructor(resource: string, protected http: HttpClient, protected config: RestApiServiceConfig) {
    super(resource, http, config);
    this.dataStore = { data: [] };
    this.dataBS = <BehaviorSubject<T[]>>new BehaviorSubject([]);
    this.data$ = this.dataBS.asObservable();
  }


  // Implementing Begavior Subject.
  // load(options = this.config.options) {
  //   this.get$(options).subscribe(data => {
  //     this.dataStore.data = data;
  //     this.dataBS.next(Object.assign({}, this.dataStore).data);
  //   },
  //     error => console.log(error));
  // }


  loadAll(options = this.config.options) {
    this.getAll$(options).subscribe(data => {
      this.dataStore.data = data;
      this.dataBS.next(Object.assign({}, this.dataStore).data);
    },
      error => console.log(error));
  }

  loadById(id, options = this.config.options) {
    this.getById$(id, options).subscribe(data => {
      let notFound = true;

      this.dataStore.data.forEach((item, index) => {
        if (item[this.config.idProperty] === data[this.config.idProperty]) {
          this.dataStore.data[index] = data;
          notFound = false;
        }
      });

      if (notFound) {
        this.dataStore.data.push(data);
      }
      this.dataBS.next(Object.assign({}, this.dataStore).data);
    },
      error => console.log(error));
  }

  create(obj: T, cb: Function = null, options = this.config.options) {
    this.create$(obj, options).subscribe(data => {
      this.dataStore.data.push(data);
      this.dataBS.next(Object.assign({}, this.dataStore).data);
      cb(data);
    }, error => console.log('Could not create data.'));
  }


  update(id, obj: T, options = this.config.options) {
    this.update$(id, obj, options).subscribe(data => {
      // if 204 no content we should just update the datastore from the obj
      const idx = this.dataStore.data.findIndex((elem) => {
        return elem[this.config.idProperty] === id;
      });
      if (idx !== -1) {
        this.dataStore.data[idx] = data;
      }
      this.dataBS.next(Object.assign({}, this.dataStore).data);
    }, error => console.log('Could not update data.'));
  }

  delete(id, options = this.config.options) {
    this.delete$(id, options).subscribe(response => {
      const idx = this.dataStore.data.findIndex((elem) => {
        return elem[this.config.idProperty] === id;
      });
      if (idx !== -1) {
        this.dataStore.data.splice(idx, 1);
      }
      this.dataBS.next(Object.assign({}, this.dataStore).data);
    }, error => console.log('Could not delete data.'));
  }
}
