import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import {RsvpComponent} from './rsvp/rsvp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aultar';

  constructor() {}
}
