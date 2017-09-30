

import * as ex from "excalibur/dist/excalibur";

export class Ball extends ex.Actor {

    description:string;

    constructor(x:number,y:number,width?:number,height?:number) {
        super(x,y,width,height);
    }


}