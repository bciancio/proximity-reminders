import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map.component';
import { Logger } from './services/logger.service';
import { MarkerService } from './services/markers.service';
import { MarkerDetailComponent } from './components/marker-detail.component';
import { MarkersList } from './components/markers-list.component';
import { MarkerCardComponent } from './components/marker-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,    
    MarkerDetailComponent,
    MarkersList,
    MarkerCardComponent
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
