
import { HttpHeaders } from '@angular/common/http';


export class RestApiServiceConfig {
    options: {
        headers?: HttpHeaders
    };
    url: string;
    // this isn't working for some reason
    idProperty: '_id';

}
