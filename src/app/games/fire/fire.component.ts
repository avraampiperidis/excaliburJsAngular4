import { Component, OnInit, Inject } from "@angular/core";
import { Ship } from "./model/Ship";
import { Shot } from "./model/Shot";
import { Alien } from "./model/Alien";
import * as ex from "excalibur";
import { PointerButton } from "Input/Index";
import { Dot } from "./model/Dot";
import { Health } from "./model/Health";


@Component({
    templateUrl: 'fire.component.html',
    styleUrls: ['fire.component.css']
  })
export class FireComponent  implements OnInit {

    title = 'kill the aliens Game!';
    game:ex.Engine;
    ship:Ship;
    shots:Shot;
    aliens:Alien[] = [];
    health:Health;
    message:string;

    enemyTexture:ex.Texture = new ex.Texture('assets/enemy.png');
    fighterTexture = new ex.Texture('assets/fighter.png');
    birdTexture = new ex.Texture('assets/bird.png');
    explodeSound = new ex.Sound('assets/explode.wav');
    hitSound = new ex.Sound('assets/hit.wav');
    colisionSound = new ex.Sound('assets/colision.wav');
    loader:ex.Loader = new ex.Loader([this.enemyTexture,this.fighterTexture,this.birdTexture,this.explodeSound,this.hitSound,this.colisionSound]);

    randomeAlienSpaceFrom:number = 550;
    randomeAlienSpaceTo:number = 1500;
    alienSpeedStar:number = 100;

    constructor() {
    }

    goHome() {
        window.location.href = '/';
    }

    ngOnInit(): void {
        console.log(this.fighterTexture);
        this.game = new ex.Engine({
            width: window.screen.width/1.5,
            height: window.screen.height/1.5
        });
        this.game.backgroundColor = ex.Color.fromHex('06032c');
        this.game.start(this.loader);
        
        this.addSpaceShip();
        this.setSpaceShipMovement();
        this.setHealthBar();
        this.addAliens();
        this.setSpaceBackgroundMovement();
    }

    setHealthBar() {
        this.health = new Health(this.game.getDrawWidth()-110,20, 200, 20);
        this.health.color = ex.Color.Cyan;
        this.health.collisionType = ex.CollisionType.PreventCollision;
        this.game.add(this.health);
    }

    addSpaceShip() {
        this.ship = new Ship(150,this.game.getDrawHeight()-40,40,40);
        this.ship.color = ex.Color.Red;
        this.ship.collisionType = ex.CollisionType.Fixed;
        this.ship.addDrawing(this.fighterTexture);
        this.game.add(this.ship);
    }

    setSpaceShipMovement() {
        this.game.input.pointers.primary.on('move',(event:PointerEvent)=> {
            this.ship.pos.x = event.x;
        });

        this.game.input.pointers.primary.on('down',(event:PointerEvent)=> {
            this.shotFire(event.x);
        });
    }


    async addAliens() {
        while(true) {
            await this.sleep(this.getRandomeBetween(this.randomeAlienSpaceFrom,this.randomeAlienSpaceTo));

            if(this.randomeAlienSpaceFrom > 0) {
                this.randomeAlienSpaceFrom = --this.randomeAlienSpaceFrom -20;
                this.randomeAlienSpaceTo = --this.randomeAlienSpaceTo - 40; 
            }

            
            let alien = new Alien(this.getRandomeBetween(50,600),0,40,40);
            alien.color = ex.Color.Orange;
            alien.vel.setTo(0,this.alienSpeedStar);
            alien.collisionType = ex.CollisionType.Active;
            if(this.getRandomeBetween(2,4) == 3) {
                alien.addDrawing(this.birdTexture);
            } else {
                alien.addDrawing(this.enemyTexture);
            }
            alien.on('collision',(event:any)=> {
                if(event.other instanceof Shot) {                 
                    this.health.x -= 2;
                    if(this.health.x < 30) {
                        confirm("YOU WON!!! :)");
                        this.goHome();
                    }
                    this.explodeSound.play();
                } else if(event.other instanceof Ship) {
                    this.colisionSound.play();
                    this.health.setWidth(this.health.getWidth()-10);
                    if(this.health.getWidth() <= 0) {
                        confirm("YOU LOST! :(");
                        this.goHome();
                    }
                }
                alien.kill();
                alien.remove;
            });
            this.alienSpeedStar += 10;
            this.game.add(alien);
        }
    }

    shotFire(x:number) {
        let shot = new Shot(x,this.game.getDrawHeight(),5,5);
        shot.color = ex.Color.Red;
        shot.vel.setTo(0,-1000);
        shot.collisionType = ex.CollisionType.Passive;
        this.game.add(shot);
        this.hitSound.play();
    }


    async  setSpaceBackgroundMovement() {
        while(true) {
            
            //apo Dot(0-500,0,4,4)
            //Dot(0,500,4,4)
            for(let x =1; x <= 650; x = x+4){
                await this.sleep(20);
                let rand = 0;
                if((x*2) > 750) {
                    rand = this.getRandomeBetween(0,x);
                } else {
                    rand = this.getRandomeBetween(x,x*2);
                }
                let dotx = new Dot(rand,this.getRandomeBetween(1,50),3,3);
                dotx.color = ex.Color.DarkGray;
                dotx.vel.setTo(550,550);
                dotx.collisionType = ex.CollisionType.PreventCollision;
                this.game.add(dotx);

                await this.sleep(20);
                let doty = new Dot(this.getRandomeBetween(1,50),rand,3,3);
                doty.color = ex.Color.DarkGray;
                doty.vel.setTo(450,450);
                doty.collisionType = ex.CollisionType.PreventCollision;
                this.game.add(doty);
            }
           
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    getRandomeBetween(first:number,sec:number) {
        return Math.floor(Math.random() * sec) + first;
    }

}



