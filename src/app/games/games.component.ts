import { Component,OnInit  } from '@angular/core';
import { Router } from "@angular/router";
import {games} from "./games"

@Component({
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent  implements OnInit {

  myGames = games;

  constructor(private router:Router) {
  }

  ngOnInit(): void {  
  }


}
