import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { ArtistsComponent } from './artists/artists.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: 'artists', component: ArtistsComponent },
  { path: '**', component: HomeComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
