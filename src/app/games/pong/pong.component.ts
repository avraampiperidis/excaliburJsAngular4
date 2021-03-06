import { Component,OnInit  } from '@angular/core';
import * as ex from 'excalibur';
import { Ball } from "./model/Ball";
import { Brick } from "./model/Brick";
import { Events } from "excalibur";
import { Paddle } from "./model/Paddle";
import { delay } from "q";

@Component({
  templateUrl: 'pong.component.html',
  styleUrls: ['pong.component.css']
})
export class PongComponent  implements OnInit {

  title = 'My Pong Game!';
  game:ex.Engine;
  paddle:Paddle;
  balls:Ball[] = [];
  bricks:Brick[] = [];
  message:string;

  constructor() {
  }

  goHome() {
    window.location.href = '/';
  }

  

  ngOnInit(): void {
    this.game = new ex.Engine({
      width: window.screen.width/1.5,
      height: window.screen.height/1.5
    });

    this.game.start();
    this.addPaddle();
    this.setPaddleMovement();
    this.addBricks();
    let ball = this.addBall();
    ball.description = "a simple ball";
    this.game.add(this.setBallEvents(ball));
  }


  addPaddle() {
    this.paddle = new Paddle(150, this.game.getDrawHeight() - 40, 200, 20);
    this.paddle.color = ex.Color.Chartreuse;
    this.paddle.collisionType = ex.CollisionType.Fixed;
    this.game.add(this.paddle);
  }

  setPaddleMovement() {
    this.game.input.pointers.primary.on('move',(event:PointerEvent)=> {
      //pad.pos.x = event.x;
      this.paddle.pos.x = event.x;
    });
  }

  addBall() : Ball {
    let ball = new Ball(this.getRandomStartPosition(),300,15,15);
    ball.color = this.getRandomColor();
    ball.vel.setTo(150,150);
    ball.collisionType = ex.CollisionType.Passive;
    return ball;
  }

  addBricks() {
    // Padding between bricks
    let padding = 5; // px
    let xoffset = 35; // x-offset
    let yoffset = 20; // y-offset
    let columns = 10;
    let rows = 5;
    let brickColor = [ex.Color.Violet, ex.Color.Orange, ex.Color.Yellow];
    // Individual brick width with padding factored in
    let brickWidth = this.game.getDrawWidth() / columns - padding - padding/columns; // px
    let brickHeight = 10; // px
    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < columns; i++) {
            this.bricks.push(new ex.Actor(xoffset + i * (brickWidth + padding) + padding, yoffset + j * (brickHeight + padding) + padding, brickWidth, brickHeight, brickColor[j % brickColor.length]));
        }
    }

    this.bricks.forEach((brick) => {
        // Make sure that bricks can participate in collisions
        brick.collisionType = ex.CollisionType.Active;
        // Add the brick to the current scene to be drawn
        this.game.add(brick);
    });
  }

  setBallEvents(ball:Ball) {
      ball.on('update',(event:any) => {
        if(event.other instanceof Ball){
          return;
        }
        if (event.target.pos.x < (event.target.getWidth() / 2)) {
          event.target.vel.x *= -1;
        }
        // If the ball collides with the right side
        // of the screen reverse the x velocity
        if (event.target.pos.x + (event.target.getWidth() / 2) > this.game.getDrawWidth()) {
            event.target.vel.x *= -1;
        }
        // If the ball collides with the top
        // of the screen reverse the y velocity
        if (event.target.pos.y < (event.target.getHeight() / 2)) {
            event.target.vel.y *= -1;
        }
      });

      ball.on('collision',(event:any) =>  {
        if(event.other instanceof Ball){
          return;
        }
       
       
        if(this.bricks.indexOf(event.other) > -1) {
            // kill removes an actor from the current scene
            // therefore it will no longer be drawn or updated
            if(!event.other.isKilled()) {
                event.other.kill();              
            }
        }
        
        let intersection =event.intersection.normalize();
        // The largest component of intersection is our axis to flip
        if (Math.abs(intersection.x) > Math.abs(intersection.y)) {
            ball.vel.x *= -1;
        } else {
          
            ball.vel.y *= -1;
        }
      });

      ball.on('exitviewport', () =>{
          //alert('You lose!');
          //do stuff
          ball.kill();
      });

      return ball;
  }




  getRandomColor():ex.Color {
    let rand = Math.floor(Math.random() * 4) +1;
    if(rand == 1){
      return ex.Color.Red;
    } else if(rand == 2){
      return ex.Color.Green;
    } else if(rand == 3){
      return ex.Color.Yellow;
    } else{
      return ex.Color.Cyan;
    }
  }

  getRandomStartPosition() {
    let rand = Math.floor(Math.random() * 400) +50;
    return rand;
  }

}
