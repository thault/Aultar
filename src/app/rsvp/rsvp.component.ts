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

  openDialog(): void {
    const dialogRef = this.dialog.open(RsvpDialogComponent, {
      width: '600px',
      height: '400px',
      position: { top: '0', bottom: '0', left: '0', right: '98' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
