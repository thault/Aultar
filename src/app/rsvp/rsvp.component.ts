import {Component, Inject} from '@angular/core';
import { MatDialog , MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Households} from "./Households";
import {DataService} from "./data.service";
//import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {Observable} from "rxjs";
import {Guest} from "./Guest";
import {HttpClient, HttpClientModule} from "@angular/common/http";

export interface DialogData {
  user: string;
}




@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})

export class RsvpComponent {
  baseUrl: string = "http://test.aultar.wedding:8080/households";

  user: string;
  public household: Observable<Households[]>;
  public guest: Guest[] = [];


   constructor(private http: HttpClient, public dialog: MatDialog){
     /*this.dataService.get_guest().subscribe((res:Guest[])=>{
       this.guest = res;
     });*/

   }
  get_household(): Observable<Households[]>{
   return this.http.get<Households[]>(`${this.baseUrl}/Blue42`)
  }



  openDialog(user: string): void{

    this.user = user;

    const dialogRef = this.dialog.open(RsvpDialogBox, {
      width: '250px',

      data: {user: this.user}
    });

    dialogRef.afterClosed().subscribe(result =>{
      console.log("the Dialog box was closed");
    });
  }
     /**/

}


@Component({
  selector:'rsvp-dialog.component',
  templateUrl: './rsvp-dialog.component.html',
})
export class RsvpDialogBox
{
  constructor(
    public dialogRef: MatDialogRef<RsvpDialogBox>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  onNoClick(): void {
    this.dialogRef.close();
  }



}


