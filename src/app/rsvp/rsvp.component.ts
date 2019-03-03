import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RsvpDialogComponent } from '../rsvp-dialog/rsvp-dialog.component';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public openDialog() {
    this.dialog.open(RsvpDialogComponent);
  }
}
