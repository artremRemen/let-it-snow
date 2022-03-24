import { Sky } from "./Sky";
import { SnowFlack } from './Snowflake';
import { settings } from './settings';
import { Animation } from './Animation';

class LetItSnow {
    private readonly canvasElement: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private snow: [any];
    private mouseCoordNew: number;
    private direction: boolean;
    private Animation: Animation;
    constructor() {
        this.canvasElement = document.querySelector('canvas');
        this.ctx = this.canvasElement.getContext('2d');
        
        this.resize();
        this.events();
        this.direction = true;

        this.Animation = new Animation(this.ctx, this.canvasElement, this.direction);
    }
    resize(){
        this.canvasElement.width = window.innerWidth;
        this.canvasElement.height = window.innerHeight;
        return this;
    }
    events(){
        window.addEventListener('resize',()=>{
            this.resize();
        })
        
    }
}


(function(){
    new LetItSnow()
})()