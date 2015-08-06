import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import lodash from 'lodash';

@inject(HttpClient)
export class Collabs{

    heading = 'Collabs';

    constructor(http){
        this.http = http;
    }

    
}
