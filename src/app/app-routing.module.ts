import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { AboutComponent } from './about/about.component';
import { ArtistsComponent } from './artists/artists.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SponsorsComponent } from './sponsors/sponsors.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: '**', component: HomeComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
