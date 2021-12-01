import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbModule } from 'angular-crumbs';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { ChildrenComponent } from './children/children.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    ChildrenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
