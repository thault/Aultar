import {Guest} from "./Guest";
import {Dietary} from "./Dietary";
import {Song} from "./Song";
import {Tier} from "./Tier";

export class Household {
  householdId: number;
  passcode: string;
  name: string;
  address: string;
  guestsRemaining: number;
  hasSubmitted: boolean;
  guests: Guest[];
  dietaryRestrictions: Dietary[];
  songs: Song[];
  tier: Tier;
  constructor(){}
}
