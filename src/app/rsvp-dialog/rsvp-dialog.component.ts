import {Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-rsvp-dialog',
  templateUrl: './rsvp-dialog.component.html',
  styleUrls: ['./rsvp-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RsvpDialogComponent implements OnInit {
  form: FormGroup;

  constructor(private dialogRef: MatDialogRef<RsvpDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit() {
  }

  public save() {
    this.dialogRef.close(this.form.value);
  }

  public close() {
    this.dialogRef.close();
    }

}
