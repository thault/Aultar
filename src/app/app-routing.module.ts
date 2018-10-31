import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { HomeComponent } from './home/home.component';
import { PhotosComponent} from './photos/photos.component';
import { RegistryComponent} from './registry/registry.component';
import { AboutComponent} from './about/about.component';
import {RsvpComponent} from './rsvp/rsvp.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'registry', component: RegistryComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
