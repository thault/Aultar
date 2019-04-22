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
  @ViewChild('otherError') otherError;
  baseUrl: string = "http://test.aultar.wedding:8080";
  householdExt: string = "households";
  dietaryExt: string = "dietary";
  updateUrl: string = "http://test.aultar.wedding:8080/households/update";
  public household: Household;
  public submitHousehold: Household;
  public dietaryOptions: Dietary[];
  public loading: boolean = false;
  public error: boolean = false;
  public submitSuccess: boolean = false;
  public songError: boolean = false;
  public guestError: boolean = false;
  public formErrorText: string = "Error";
  public dietaryMapping: { [key: number]: number[]; } = {};

  nextGuestId: number = -1;
  nextSongId: number = -1;
  nextDietId: number = -1;

  constructor(public http: HttpClient) {
  }

  ngOnInit() {
    //this.openDialog('Purple14')
  }

  async openDialog(passcode: string) {
    this.error = false;
    this.loading = true;
    this.submitSuccess = false;

    this.household = undefined;
    this.dietaryOptions = undefined;

    try {
      await this.get_household(passcode);
      await this.get_Dietary();

      this.rsvpModal.nativeElement.className = 'modal show';
      this.household.guests.forEach(guest => {
        let tmp: number[] = [];
        guest.dietaryRestrictions.forEach(dr => {
          if (dr.dietaryId > -1) {
            tmp.push(dr.dietaryId);
          }
        });
        this.dietaryMapping[guest.guestId] = tmp;
      });

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
    this.generateFakeDietary();
  }

  generateFakeDietary() {
    this.household.guests.forEach(g => {
      let d = new Dietary();
      d.alwaysShow = false;
      d.description = "";
      d.dietaryId = this.nextDietId;
      if (!g.dietaryRestrictions.some(dr => !dr.alwaysShow)) {
        g.dietaryRestrictions.push(d);
      }
      this.nextDietId--;
    });
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
      d.dietaryId = this.nextDietId;
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

      this.dietaryMapping[g.guestId] = [];

      this.nextGuestId--;
      this.nextDietId--;
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

  dietaryChange(checked: boolean, guestId: number, dietaryId: number) {
    if (checked) { //Add to dietarymapping
      this.dietaryMapping[guestId].push(dietaryId);
    } else { //Remove from dietarymapping
      this.dietaryMapping[guestId] = this.dietaryMapping[guestId].filter(id => {
        return id !== dietaryId;
      });
    }
  }

  async submitRSVPForm() {
    this.submitHousehold = JSON.parse(JSON.stringify(this.household));
    this.validateGuests();
    this.validateSongs();
    this.validateDietary();

    //End
    if (!this.songError && !this.guestError) {
      try {
        await this.http.put(this.updateUrl, this.submitHousehold).toPromise();
        this.otherError.nativeElement.className = 'mat-dialog-title errorMsg otherError hidden';
        this.rsvpModal.nativeElement.className = 'modal';
        this.submitSuccess = true;
      } catch (e) {
        console.log(e);
        this.formErrorText = e.error.message;
        this.otherError.nativeElement.className = 'mat-dialog-title errorMsg otherError';
        this.submitSuccess = false;
      }
    } else {
      if (this.songError) {
        this.formErrorText = "A song has a title or artist but is missing the other.";
        this.otherError.nativeElement.className = 'mat-dialog-title errorMsg otherError';
      } else if (this.guestError) {
        this.formErrorText = "Each guest must have both a valid first name and last name.";
        this.otherError.nativeElement.className = 'mat-dialog-title errorMsg otherError';
      }
    }
  }

  validateGuests() {
    this.guestError = this.submitHousehold.guests.findIndex(guest => {
      return guest.fname.trim() == "" || guest.lname.trim() == "";
    }) > -1;
  }

  validateSongs() {
    this.submitHousehold.songs = this.submitHousehold.songs.filter(song => {
      return song.title.trim() !== "" || song.artist.trim() !== "";
    });

    this.songError = this.submitHousehold.songs.findIndex(song => {
      return song.title.trim() == "" || song.artist.trim() == "";
    }) > -1;
  }

  validateDietary() {
    this.submitHousehold.guests.forEach(guest => {
      //Save customDiet
      let customDiet: Dietary = guest.dietaryRestrictions.find(dr => {
        return !dr.alwaysShow;
      });

      //CustomDiet has changed
      if (customDiet.dietaryId > -1) {
        let oldDiet = this.dietaryOptions.find(dr => {
          return dr.dietaryId == customDiet.dietaryId;
        });
        if (oldDiet.description !== customDiet.description) {
          customDiet.dietaryId = this.nextDietId;

          this.dietaryMapping[guest.guestId][this.dietaryMapping[guest.guestId].findIndex(DId => {
            return DId == oldDiet.dietaryId;
          })] = this.nextDietId;
          this.nextDietId--;
        }
      }

      //Set each guest's dietary info.
      guest.dietaryRestrictions = [];
      this.dietaryMapping[guest.guestId].forEach(DId => {
        if (DId == customDiet.dietaryId && customDiet.description.trim() !== "") {
          guest.dietaryRestrictions.push(customDiet);
        } else {
          let diet = this.dietaryOptions.find(d => {
            return d.dietaryId == DId;
          });
          if (diet) {
            guest.dietaryRestrictions.push(diet);
          }
        }
      });
    });
  }
}



