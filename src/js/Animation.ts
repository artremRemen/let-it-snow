import { SnowFlack } from './Snowflake';
import { Sky } from './Sky';
export class Animation {
    private readonly canvasElement: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private Sky: Sky;
    private snow:SnowFlack;
    private direction:boolean;
    constructor(ctx:CanvasRenderingContext2D, canvasElement:HTMLCanvasElement, direction:boolean){
        this.ctx = ctx;
        this.canvasElement = canvasElement;
        this.Sky = new Sky(this.ctx, this.canvasElement)
        this.snow = new SnowFlack(this.ctx, this.canvasElement);
        this.direction = direction;
        this.animate();
    }
    animate(){
        
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        this.snow.upadte(this.direction);
        this.canvasElement.addEventListener('mousemove', (e:MouseEvent)=>{

            if (e.movementX > 0) {
                this.direction = true;
                console.log('left');
                
            }
            else if (e.movementX< 0) {
                this.direction = false;
                console.log('right');
            }
        })
        
        requestAnimationFrame(()=>{
            this.animate();
            
        })
    }
}