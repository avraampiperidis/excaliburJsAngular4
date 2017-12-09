import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatDialogModule, MatCheckboxModule , MatCardModule , MatGridListModule, MatSnackBarModule } from '@angular/material';

//main components
import { AppComponent } from './app.component';
import { PongComponent } from "./games/pong/pong.component";
import { GamesComponent } from "./games/games.component";
import { PongComponent2 } from './games/pong2/pong2.component';
import { FireComponent } from './games/fire/fire.component';
import { FreestyleComponent } from './games/freestyle/freestyle.component';

const routes: Routes = [
  {
    path: 'pong',
    component: PongComponent,
  },
  {
    path: 'pong2',
    component:PongComponent2
  },
  {
    path: 'fire',
    component:FireComponent
  },
  {
    path: 'freestyle',
    component:FreestyleComponent
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
    PongComponent2,
    FireComponent,
    FreestyleComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
     RouterModule,
     RouterModule.forRoot(routes),
     BrowserAnimationsModule,
     MatButtonModule,
     MatCheckboxModule,
     MatCardModule,
     MatGridListModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})

export class AppModule {
}
