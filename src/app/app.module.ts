import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map.component';
import { Logger } from './services/logger.service';
import { MarkerService } from './services/markers.service';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_1wXU44uNghJ3ULg1Jks3lcMuCfvsGnI'
    })
  ],
  providers: [
    Logger,
    MarkerService
  ],
  bootstrap: [MapComponent]
})
export class AppModule { }
