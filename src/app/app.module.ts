import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';


import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { NavComponent } from './nav/nav.component';
import { AlbumCardComponent } from './album-card/album-card.component';

import { HomepageComponent } from './homepage/homepage.component';
import { ModalContainerComponent } from './modal-container/modal-container.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavComponent,
    AlbumCardComponent,
    HomepageComponent,
    ModalContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //returns simulated server responses.
    HttpClientInMemoryWebApiModule.forRoot(
      DataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
