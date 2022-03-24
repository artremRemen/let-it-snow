import { settings } from './settings';
export class Sky{
    private readonly canvasElement: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    gradient:any;
    constructor(ctx:CanvasRenderingContext2D, canvasElement:HTMLCanvasElement){
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.generateSky();

    }
    generateSky(){
        this.gradient = this.ctx.createLinearGradient(window.innerWidth/2, 0, window.innerWidth/2, window.innerHeight);
        this.gradient.addColorStop(0, settings.sky.gradient[0]);
        this.gradient.addColorStop(1, settings.sky.gradient[1]);
        this.ctx.fillStyle = this.gradient;
        this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }
}