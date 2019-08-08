var Grid = /** @class */ (function () {
    function Grid(canvas) {
        this.canvas = canvas;
        this.gridwidth = canvas.width = window.innerWidth;
        this.gridheight = canvas.height = window.innerHeight;
        this.ctx = canvas.getContext("2d");
    }
    Grid.prototype.drawGrid = function () {
        this.ctx.linewidth = 2;
        this.ctx.strokeStyle = "#D9D9D9";
        for (var index = 0; index < this.gridheight / 10; index++) {
            this.ctx.moveTo(0, index * 10);
            this.ctx.lineTo(this.gridwidth, index * 10);
            this.ctx.stroke();
        }
        for (var index = 0; index < this.gridwidth / 10; index++) {
            this.ctx.moveTo(index * 10, 0);
            this.ctx.lineTo(index * 10, this.gridheight);
            this.ctx.stroke();
        }
    };
    return Grid;
}());
var grid = new Grid(document.querySelector(".myCanvas"));
grid.drawGrid();
// var canvas:HTMLCanvasElement = document.querySelector('.myCanvas');
// var width = canvas.width = window.innerWidth;
// var height = canvas.height = window.innerHeight;
// var ctx = canvas.getContext('2d');
