import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { FooterComponent } from './footer/footer.component';
import { SourPatchComponent } from './sour-patch/sour-patch.component';
import { CommunityComponent } from './community/community.component';
import { TicketsComponent } from './tickets/tickets.component';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ArtistsComponent,
    ContactComponent,
    HomeComponent,
    NavigationBarComponent,
    SponsorsComponent,
    FooterComponent,
    SourPatchComponent,
    CommunityComponent,
    TicketsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
