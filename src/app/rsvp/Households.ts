import {Guest} from "./Guest";
import {Dietary} from "./Dietary";

export class Households{
  householdId: number;
  passcode: string;
  name: string;
  address: string;
  guestsRemaining: number;
  hasSubmitted: boolean;
  guests: Guest[];
  dietaryRestrictions: Dietary[];
  constructor(){}

}
