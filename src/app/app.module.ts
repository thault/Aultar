import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  MatButtonModule, MatCheckboxModule, MatTableModule, MatDialogModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import {RsvpDialogBox} from "./rsvp/rsvp.component";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { RegistryComponent } from './registry/registry.component';
import { AboutComponent } from './about/about.component';
import { RsvpComponent } from './rsvp/rsvp.component';
//import { TravelComponent } from './travel/travel.component';
import { WeddingComponent } from './weddingparty/wedding.component';
import { FAQComponent } from './faq/faq.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "./rsvp/data.service";

//import {restAPIComponent} from "./rsvp/rsvp.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotosComponent,
    RegistryComponent,
    AboutComponent,
   RsvpComponent,
    //TravelComponent,

    WeddingComponent,
    FAQComponent,
    RsvpDialogBox,
    //restAPIComponent
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
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [
      ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
