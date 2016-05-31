import {Injectable} from "@angular/core";
import {Http} from '@angular/http';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class CountryService{


    http: Http;
    endpoint_url:string = "https://restcountries.eu/rest/v1/region/";
    constructor(http: Http){
        this.http = http;
    }
    getCountriesByRegion(region: String) {

        return this.http.get(this.endpoint_url+region).map(res => res.json());
    }
}