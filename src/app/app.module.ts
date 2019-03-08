import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatTableModule, MatDialogModule, } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { RegistryComponent } from './registry/registry.component';
import { AboutComponent } from './about/about.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { TravelComponent } from './travel/travel.component';
import { WeddingComponent } from './weddingparty/wedding.component';
import { FAQComponent } from './faq/faq.component';
import { RsvpDialogComponent } from './rsvp-dialog/rsvp-dialog.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotosComponent,
    RegistryComponent,
    AboutComponent,
    RsvpComponent,
    TravelComponent,
    WeddingComponent,
    FAQComponent,
    RsvpDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatDialogModule,
    FlexLayoutModule,
    FormsModule
  ],
  entryComponents: [
    RsvpDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
