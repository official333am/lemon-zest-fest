import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { AboutComponent } from './about/about.component';
import { ArtistsComponent } from './artists/artists.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SourPatchComponent } from './sour-patch/sour-patch.component';
import { SponsorsComponent } from './sponsors/sponsors.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent, data: { state: 'about' } },
  { path: 'artists', component: ArtistsComponent, data: { state: 'artists' } },
  { path: 'contact', component: ContactComponent, data: { state: 'contact' } },
  { path: 'sour-patch', component: SourPatchComponent, data: { state: 'sour-patch' } },
  { path: 'sponsors', component: SponsorsComponent, data: { state: 'sponsors' } },
  { path: '**', component: HomeComponent, data: { state: '/' } },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
