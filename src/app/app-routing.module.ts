import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhotosComponent} from './photos/photos.component';
import { RegistryComponent} from './registry/registry.component';
import { AboutComponent} from './about/about.component';
import {RsvpComponent, RsvpDialogBox} from './rsvp/rsvp.component';
import {TravelComponent} from './travel/travel.component';
import {WeddingComponent} from './weddingparty/wedding.component';
import {FAQComponent} from './faq/faq.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'registry', component: RegistryComponent},
  {path: 'about', component: AboutComponent},
  {path: 'rsvp', component: RsvpComponent},
  {path: 'rsvpDialog', component: RsvpDialogBox},
  //{path: 'rsvpDialog', redirectTo:'rsvp'},
  {path: 'travel', component: TravelComponent},
  {path: 'weddingparty', component: WeddingComponent},
  {path: 'faq', component: FAQComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
