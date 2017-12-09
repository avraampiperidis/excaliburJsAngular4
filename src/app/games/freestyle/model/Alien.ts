import * as ex from "excalibur";


export class Alien extends ex.Actor {
    
        description:string;
    
        constructor(x:number,y:number,width?:number,height?:number) {
            super(x,y,width,height);
        }
    
}