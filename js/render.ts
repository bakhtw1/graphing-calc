class Grid {

    gridwidth: number;
    gridheight: number;
    canvas: HTMLCanvasElement;
    ctx: any;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.gridwidth = canvas.width = window.innerWidth;
        this.gridheight = canvas.height = window.innerHeight;
        this.ctx = canvas.getContext("2d");
    }

    drawGrid() {

        this.ctx.linewidth = 2;
        this.ctx.strokeStyle = "#D9D9D9";

        for (let index = 0; index < this.gridheight/10; index++) {
            this.ctx.moveTo(0, index*10);
            this.ctx.lineTo(this.gridwidth, index*10);
            this.ctx.stroke();
        }

        for (let index = 0; index < this.gridwidth/10; index++) {
            this.ctx.moveTo(index*10, 0);
            this.ctx.lineTo(index*10, this.gridheight);
            this.ctx.stroke();
        }

    }

}

let grid = new Grid(document.querySelector(".myCanvas"));
grid.drawGrid();






