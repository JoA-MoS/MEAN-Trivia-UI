import { HttpClient } from '@angular/common/http';
import { RestApiServiceConfig } from './rest-api-service-config';
import { Injectable } from '@angular/core';
import { CachingBsRestApiService } from './caching-bs-rest-api.service.';



@Injectable()
export class CachingBsRestApiServiceFactory {

    constructor(private http: HttpClient, private config: RestApiServiceConfig) {
    }

    public CreateService<T>(resource: string, handleError?: (err: any) => any): CachingBsRestApiService<T> {
        return new CachingBsRestApiService<T>(resource, this.http, this.config);
    }

    public CreateServiceWithOptions<T>(resource: string, config: RestApiServiceConfig): CachingBsRestApiService<T> {
        return new CachingBsRestApiService<T>(resource, this.http, config);
    }
}
