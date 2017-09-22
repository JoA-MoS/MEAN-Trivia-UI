import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Product } from './../../models/product';
import { RestApiServiceConfig } from './../abstract-rest-api/rest-api-service-config';
import { Injectable } from '@angular/core';
import { AbstractRestApiService } from '../abstract-rest-api/abstract-rest-api.service';

@Injectable()
export class ProductsService extends AbstractRestApiService<Product> {

  constructor(http: HttpClient, config: RestApiServiceConfig) {
    super(http, config);
    config.url = `${environment.apiUrl}/products`;
  }
}
