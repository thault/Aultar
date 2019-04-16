import {Component, Inject} from '@angular/core';
import { MatDialog , MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Households} from "./Households";
//import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';
//import {Observable} from 'rxjs';
import {Guest} from "./Guest";
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ValidatorFn} from "@angular/forms";
import { of, Observable } from 'rxjs';
import {Dietary} from "./Dietary";
import { map } from 'rxjs/operators';
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";

export interface DialogData {
  house: Households;
  user: string;
  dietary: Dietary[];

}


@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})

export class RsvpComponent {
  baseUrl: string = "http://test.aultar.wedding:8080/households";
 dietaryUrl: string = "http://test.aultar.wedding:8080/dietary";
  user: string;
  public household: Households;
  public dietaryOptions: Dietary[];
  public dietary1: Dietary[];


   constructor( public dialog: MatDialog, public http: HttpClient){
   }



   openDialog(): void{
    const dialogRef = this.dialog.open(RsvpDialogBox, {
      data: {house: this.household, dietary: this.dietaryOptions}
    });

    dialogRef.afterClosed().subscribe(result =>{
      console.log("the Dialog box was closed");
    });
  }
  get_Dietary(): Observable<any>{
     return this.http.get<Dietary[]>(`${this.dietaryUrl}`);
  }
     get_household(): void{
       this.get_Dietary().subscribe(
         res => {
           this.dietaryOptions = res;

           /*for(let i =0; i < this.dietaryOptions.length; i++)
           {
             if(this.dietaryOptions[i].alwaysShow == true)
             {this.dietary1[i] = this.dietaryOptions[i]}
           }*/
           //console.log(resource["client_id"]);
         }
       );


    this.http.get<Households>(`${this.baseUrl}/Blue42`).subscribe((res : Households)=>{
      this.household = res;
      console.log(this.household.guests[0].guestId);
      console.log(this.household.guests[0]);
      console.log(this.household.guests[0].lname);
      if(this.household.name == "Test1") {
        this.openDialog();
      }
    });
    //return this.household;
  }

}






@Component({
  selector: 'rsvp-dialog.component',
  templateUrl: './rsvp-dialog.component.html'

})
export class RsvpDialogBox
{
  baseUrl: string = "http://test.aultar.wedding:8080/households/update";
  form: FormGroup;
  guests: Guest[];
  isChecked: Dietary[];

  constructor(public dialogRef: MatDialogRef<RsvpDialogBox>,
             @Inject(MAT_DIALOG_DATA) public data: DialogData, public http: HttpClient) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  words2: any[] = [{songName: 'y', artistName: 'u'}];

  add() {
    this.words2.push({songName: '', artistName: ''});
  }

  getGuests() {
    this.guests = this.data.house.guests
   }

   put_house(): void{
     this.data.house.guests[0].isRSVPed = false;
     this.http.put(this.baseUrl, JSON.parse(JSON.stringify(this.data.house)));
     this.dialogRef.close();
  }


}



