import {Component, ViewChild} from '@angular/core';
import {Household} from "./Household";
import {Guest} from "./Guest";
import {HttpClient} from '@angular/common/http';
import {Dietary} from "./Dietary";
import {Song} from "./Song";

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent {
  @ViewChild('rsvpModal') rsvpModal;
  baseUrl: string = "http://test.aultar.wedding:8080";
  householdExt: string = "households";
  dietaryExt: string = "dietary";
  updateUrl: string = "http://test.aultar.wedding:8080/households/update";
  public household: Household;
  public dietaryOptions: Dietary[];
  public loading: boolean = false;
  public error: boolean = false;

  nextGuestId: number = -1;
  nextSongId: number = -1;

  constructor(public http: HttpClient) {
  }

  ngOnInit() {
    this.openDialog('Purple14')
  }

  async openDialog(passcode: string) {
    this.error = false;
    this.loading = true;

    this.household = undefined;
    this.dietaryOptions = undefined;

    try {
      await this.get_household(passcode);
      console.log(this.household);
      await this.get_Dietary();

      this.rsvpModal.nativeElement.className = 'modal show';

    } catch (ex) {
      this.error = true;
      console.log(ex);
    }
    this.loading = false;
  }

  async get_Dietary() {
    this.dietaryOptions = await this.http.get<Dietary[]>(`${this.baseUrl}/${this.dietaryExt}`).toPromise();
  }

  async get_household(passcode: string) {
    this.household = await this.http.get<Household>(`${this.baseUrl}/${this.householdExt}/${passcode}`).toPromise();
    this.household.hasSubmitted = true;
    let d = new Dietary();
    d.alwaysShow = false;
    d.description = "";
    d.dietaryId = -1;
    this.household.guests.forEach(g => g.dietaryRestrictions.some(dr => !dr.alwaysShow) ? false : g.dietaryRestrictions.push(d));
  }

  onNoClick(): void {
    this.rsvpModal.nativeElement.className = 'modal';
  }

  containsDietary(items: Dietary[], item: Dietary): boolean {
    return items.some(dr => dr.dietaryId == item.dietaryId);
  }

  addGuest(): void {
    if (this.household.guestsRemaining > 0) {
      this.household.guestsRemaining--;
      let d = new Dietary();
      d.dietaryId = -1;
      d.description = "";
      d.alwaysShow = false;
      let g = new Guest();
      g.guestId = this.nextGuestId;
      g.fname = "";
      g.lname = "";
      g.isPlusOne = true;
      g.isRSVPed = true;
      g.householdId = this.household.householdId;
      g.tableNo = this.household.guests[0].tableNo;
      g.dietaryRestrictions = [d];
      this.household.guests.push(g);
      this.nextGuestId--;
    }
  }

  deleteGuest(id: number): void {
    let toRemove = this.household.guests.findIndex(g => g.guestId == id);
    if (toRemove > -1) {
      this.household.guests.splice(toRemove, 1);
      this.household.guestsRemaining++;
    }
  }

  addSong(): void {
    let s: Song = new Song();
    s.songId = this.nextSongId;
    s.artist = "";
    s.title = "";
    s.order = this.household.tier.tierId;
    s.suggestedBy = this.household.householdId;
    this.household.songs.push(s);
    this.nextSongId--;
  }

  deleteSong(id: number): void {
    let toRemove = this.household.songs.findIndex(s => s.songId == id);
    if (toRemove > -1) {
      this.household.songs.splice(toRemove, 1);
    }
    if (this.household.songs.length == 0) {
      this.addSong();
    }
  }

  put_house() {
    this.rsvpModal.nativeElement.className = 'modal';
  }
}



