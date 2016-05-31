"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
//Prodmode makes sure that change detection is run only once per browser event, so you won't have cycles.
//In Devmode (which is the default) Change detection is performed twice to double check that you haven't written code with any side effects.
var core_1 = require('@angular/core');
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map