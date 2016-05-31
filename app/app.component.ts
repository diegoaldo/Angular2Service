import {Injectable, OnInit, OnDestroy} from '@angular/core';
import {Component} from '@angular/core';
import {CountryService} from './service/country.service';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';


@Component({ selector: 'my-app', templateUrl: 'app/app.component.tpl.html', providers: [CountryService]})
export class AppComponent implements  OnInit, OnDestroy {

    ngOnInit() {

        var button = document.querySelector('#buttond');
        Observable.fromEvent(button, 'click')
        // scan (reduce) to a stream of counts
        .scan(count => count + 1, 0)
        // Set the count on an element each time it changes
        .subscribe(count =>
         document.querySelector('#count').innerHTML = count.toString());
        console.log("Initialization of the component");
    }
    ngOnDestroy() {
        console.log("Disposal of the component");
    }


    region: string;
    error: string;
    countries: any[];


    constructor(private _countryService: CountryService) {
        this._countryService = _countryService;
    }

    getCountriesByRegion() {
        this.error = "";
        this.countries = [];
        this._countryService.getCountriesByRegion(this.region)
            .subscribe(
            data => {
                this.countries = data;               
            },
            error => this.error = "Region " + this.region + " is invalid."
            );
    }
}
