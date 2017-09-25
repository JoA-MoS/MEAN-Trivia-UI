import { Injectable } from '@angular/core';

import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class RestApiServiceConfig {
    options: {
        headers?: HttpHeaders
    };
    baseUrl: string;
    // this isn't working for some reason
    idProperty: string = '_id';

}
