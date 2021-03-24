import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ArtistsComponent,
    ContactComponent,
    HomeComponent,
    NavigationBarComponent,
    SponsorsComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
