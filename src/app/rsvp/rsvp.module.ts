import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RsvpComponent } from './rsvp.component';
import { MatButtonModule, MatCheckboxModule, MatTableModule, MatDialogModule, } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RsvpDialogComponent} from '../rsvp-dialog/rsvp-dialog.component';
import {MatLabel} from '@angular/material/form-field';


@NgModule({
  declarations: [
    RsvpComponent,
    RsvpDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatLabel,
  ],
  entryComponents: [
    RsvpDialogComponent
  ],
  providers: [],
  bootstrap: [RsvpComponent]
})
export class RsvpModule { }
