import { Component,OnInit  } from '@angular/core';
import { Router } from "@angular/router";
import {games} from "./games"
import {Message} from 'primeng/primeng';

@Component({
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent  implements OnInit {

  myGames = games;
  msg: Message[] = [];

  constructor(private router:Router) {
  }

  ngOnInit(): void {  
  }


  loadGame(url:string) {
    if(url){
      this.router.navigate([url]);
    } 
  }


}
