import { settings } from './settings';
import { randomizer } from './helpers/maths';
import { Sky } from './Sky';
export class SnowFlack {
    private readonly canvasElement: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private position: {x:number, y:number};
    private radius: number;
    private snowList: [];
    private snowflakPosition: any;
    constructor(ctx:CanvasRenderingContext2D, canvasElement:HTMLCanvasElement){
        this.ctx = ctx;
        this.canvasElement = canvasElement;
        this.snowList= [ ];
        this.upadte(true);
        return 
    }
    generate(){
        this.radius = randomizer(settings.snowflake.radius.min, settings.snowflake.radius.max, false);
        this.position = {x:0, y:this.radius*2};
        this.position.x = randomizer(window.innerWidth/20, window.innerWidth - window.innerWidth/20, false);
        //@ts-ignore
        this.snowList.push(this.position);
    }
    
    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = 'white';
        this.ctx.arc(this.snowflakPosition.x,this.snowflakPosition.y, this.radius, 0, 2*Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
        return this;
    }
    upadte(direction:boolean){
        
        new Sky(this.ctx, this.canvasElement);
        this.generate();
        
        
        for (let i = 0; i < this.snowList.length; i++) {
            
            this.snowflakPosition = this.snowList[i]; 
            
            
            if (direction == true) {
                this.snowflakPosition.x += settings.snowflake.speedX.min;
            }
            else if(direction == false) {
                this.snowflakPosition.x -= settings.snowflake.speedX.min;
            }
            this.snowflakPosition.y += settings.snowflake.speedY.min;
            
            this.draw();
            
        }
            
        return this;
    }
}