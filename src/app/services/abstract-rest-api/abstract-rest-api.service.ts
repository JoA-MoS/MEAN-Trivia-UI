
import { RestApiServiceConfig } from './rest-api-service-config';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { HttpClient } from '@angular/common/http';



export abstract class AbstractRestApiService<T> {
  data$: Observable<T[]>;
  private dataBS: BehaviorSubject<T[]>;
  private dataStore: {
    data: T[]
  };


  constructor(protected http: HttpClient, protected config: RestApiServiceConfig) {
    this.dataStore = { data: [] };
    this.dataBS = <BehaviorSubject<T[]>>new BehaviorSubject([]);
    this.data$ = this.dataBS.asObservable();
  }

  getAll$(options = this.config.options): Observable<T[]> {
    return this.http.get<T[]>(this.config.url, options);
  }

  getById$(id, options = this.config.options): Observable<T> {
    return this.http.get<T>(`${this.config.url}/${id}`, options);
  }

  create$(obj: T, options = this.config.options): Observable<Object> {
    return this.http.post(this.config.url, obj, options);
  }

  update$(id, obj: T, options = this.config.options): Observable<Object> {
    return this.http.put(`${this.config.url}/${id}`, obj, options);
  }

  delete$(id, options = this.config.options): Observable<Object> {
    return this.http.delete(`${this.config.url}/${id}`, options);
  }

  // Implementing Begavior Subject.
  loadAll(options = this.config.options) {
    console.log('LoadAll');
    this.http.get<T[]>(this.config.url, options).subscribe(data => {
      this.dataStore.data = data;
      this.dataBS.next(Object.assign({}, this.dataStore).data);
    },
      error => console.log(error));
  }

  loadById(id, options = this.config.options) {
    this.http.get<T>(`${this.config.url}/${id}`, options).subscribe(data => {
      let notFound = true;

      this.dataStore.data.forEach((item, index) => {
        // can we do this without having to assume we have a field called _id?
        // possibly add it to thes service config
        if (item['_id'] === data['_id']) {
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
    this.http.post<T>(this.config.url, obj, options).subscribe(data => {
      this.dataStore.data.push(data);
      this.dataBS.next(Object.assign({}, this.dataStore).data);
      cb(data);
    }, error => console.log('Could not create data.'));
  }


  update(id, obj: T, options = this.config.options) {
    this.http.put<T>(`${this.config.url}/${id}`, obj, options).subscribe(data => {
      // if 204 no content we should just update the datastore from the obj
      this.dataStore.data.forEach((t, i) => {
        if (t['_id'] === data['_id']) {
          this.dataStore.data[i] = data;
        }
      });
      this.dataBS.next(Object.assign({}, this.dataStore).data);
    }, error => console.log('Could not update data.'));
  }

  delete(id, options = this.config.options) {
    this.http.delete(`${this.config.url}/${id}`, options).subscribe(response => {
      this.dataStore.data.forEach((t, i) => {
        if (t['_id'] === id) { this.dataStore.data.splice(i, 1); }
      });
      this.dataBS.next(Object.assign({}, this.dataStore).data);
    }, error => console.log('Could not delete data.'));
  }
}
