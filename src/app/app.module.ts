import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavComponent} from './nav/nav.component';
import {routing} from './framework/_config/app.routing';
import {AuthGuard} from './framework/_guards/auth.guard';
import {FooterComponent} from './shared/footer/footer.component';
import {HeaderComponent} from './shared/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavComponent,
        FooterComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        routing
    ],
    providers: [
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
