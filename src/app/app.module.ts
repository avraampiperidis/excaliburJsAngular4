import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule , MdCardModule , MdGridListModule, MdSnackBarModule } from '@angular/material';

//main components
import { AppComponent } from './app.component';
import { PongComponent } from "./games/pong/pong.component";
import { GamesComponent } from "./games/games.component";

const routes: Routes = [
  {
    path: 'pong',
    component: PongComponent,
  },
  {
    path:'games',
    component:GamesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PongComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
     RouterModule,
     RouterModule.forRoot(routes),
     BrowserAnimationsModule,
     MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})

export class AppModule {
}
