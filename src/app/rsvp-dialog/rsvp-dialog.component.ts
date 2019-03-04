import {Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-rsvp-dialog',
  templateUrl: './rsvp-dialog.component.html',
  styleUrls: ['./rsvp-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RsvpDialogComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<RsvpDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  public close() {
    this.matDialogRef.close();
  }

}
