import {Guest} from "./Guest";

export class Households{
  householdId: number;
  passcode: string;
  name: string;
  address: string;
  guestsRemaining: number;
  hasSubmitted: boolean;
  guests: Guest[];

  constructor(){}

}
