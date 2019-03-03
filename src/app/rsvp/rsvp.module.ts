import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RsvpComponent } from './rsvp.component';
import { MatButtonModule, MatCheckboxModule, MatTableModule, MatDialogModule, } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RsvpDialogComponent} from '../rsvp-dialog/rsvp-dialog.component';


@NgModule({
  declarations: [
    RsvpComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatDialogModule,
  ],
  entryComponents: [
    RsvpDialogComponent,
  ],
  providers: [],
  bootstrap: [RsvpComponent]
})
export class RsvpModule { }
