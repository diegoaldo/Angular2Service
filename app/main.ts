import {bootstrap}    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {AppComponent} from './app.component';




//Prodmode makes sure that change detection is run only once per browser event, so you won't have cycles.
//In Devmode (which is the default) Change detection is performed twice to double check that you haven't written code with any side effects.
import {enableProdMode} from '@angular/core';
enableProdMode();
bootstrap(AppComponent, [HTTP_PROVIDERS] );
