import {Dietary} from "./Dietary";

export class Guest {
  guestId: number;
  householdId: number;
  tableNo: number;
  isPlusOne: boolean;
  isRSVPed: boolean;
  dietaryRestrictions: Dietary[];
  fname: string;
  lname: string;

  constructor(){}

}
