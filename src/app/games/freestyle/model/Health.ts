import * as ex from "excalibur";



export class Health extends ex.Actor {
    
        description:string;
        health:number = 100;
    
        constructor(x:number,y:number,width?:number,height?:number) {
            super(x,y,width,height);
        }

        
    
}