import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { RegistryComponent } from './registry/registry.component';
import { AboutComponent } from './about/about.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { TravelComponent } from './travel/travel.component';
import { WeddingComponent } from './weddingparty/wedding.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotosComponent,
    RegistryComponent,
    AboutComponent,
    RsvpComponent,
    TravelComponent,
    WeddingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
