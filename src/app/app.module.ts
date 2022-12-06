import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./layout/header/header.component";
import {FooterComponent} from "./layout/footer/footer.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NbLayoutModule, NbThemeModule, NbUserModule} from "@nebular/theme";
import {NbEvaIconsModule} from "@nebular/eva-icons";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'corporate'}),
    NbEvaIconsModule,
    NbUserModule,
    HttpClientModule,
    NbLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
