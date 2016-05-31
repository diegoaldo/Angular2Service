"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var country_service_1 = require('./service/country.service');
require('rxjs/Rx');
var Rx_1 = require('rxjs/Rx');
var AppComponent = (function () {
    function AppComponent(_countryService) {
        this._countryService = _countryService;
        this._countryService = _countryService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var button = document.querySelector('#buttond');
        Rx_1.Observable.fromEvent(button, 'click')
            .scan(function (count) { return count + 1; }, 0)
            .subscribe(function (count) {
            return document.querySelector('#count').innerHTML = count.toString();
        });
        console.log("Initialization of the component");
    };
    AppComponent.prototype.ngOnDestroy = function () {
        console.log("Disposal of the component");
    };
    AppComponent.prototype.getCountriesByRegion = function () {
        var _this = this;
        this.error = "";
        this.countries = [];
        this._countryService.getCountriesByRegion(this.region)
            .subscribe(function (data) {
            _this.countries = data;
        }, function (error) { return _this.error = "Region " + _this.region + " is invalid."; });
    };
    AppComponent = __decorate([
        core_1.Component({ selector: 'my-app', templateUrl: 'app/app.component.tpl.html', providers: [country_service_1.CountryService] }), 
        __metadata('design:paramtypes', [country_service_1.CountryService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map