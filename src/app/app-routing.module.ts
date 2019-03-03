import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { HomeComponent } from './home/home.component';
import { FAQComponent } from './faq/faq.component';
import { PhotosComponent} from './photos/photos.component';
import { RegistryComponent} from './registry/registry.component';
import { AboutComponent} from './about/about.component';
import {RsvpComponent} from './rsvp/rsvp.component';
import {TravelComponent} from './travel/travel.component';
import {WeddingComponent} from './weddingparty/wedding.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', component: FAQComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'registry', component: RegistryComponent},
  {path: 'about', component: AboutComponent},
  {path: 'rsvp', component: RsvpComponent},
  {path: 'travel', component: TravelComponent},
  {path: 'weddingparty', component: WeddingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
