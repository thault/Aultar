import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Households} from "./Households";

@Injectable()
export class DataService {
  /*baseUrl: string = "http://test.aultar.wedding:8080/households";

  constructor(private httpClient: HttpClient) {
  }

  get_household(): Observable<Households[]>{
    return this.httpClient.get<Households[]>(this.baseUrl+'/Blue42')
  }
  get_dietary(){
    return this.httpClient.get(this.baseUrl+'/Blue42/')
  }
  get_guest(){
    return this.httpClient.get(this.baseUrl+'/Blue42/guests')
  }
  get_song(){
    return this.httpClient.get(this.baseUrl+'/Blue42/songs')
  }
  get_tier(){
    return this.httpClient.get(this.baseUrl+'/Blue42/tier')
  }*/
}
