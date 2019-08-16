var Grid = (function () {
    function Grid(canvas) {
        this.canvas = canvas;
        this.gridwidth = canvas.width = window.innerWidth;
        this.gridheight = canvas.height = window.innerHeight;
        this.ctx = canvas.getContext("2d");
    }
    Grid.prototype.drawGrid = function (gridunit) {
        this.ctx.linewidth = 0.5;
        this.ctx.strokeStyle = "#D9D9D9";
        for (var index = 0; index < this.gridheight / gridunit; index++) {
            this.ctx.moveTo(0, index * gridunit);
            this.ctx.lineTo(this.gridwidth, index * gridunit);
            this.ctx.stroke();
        }
        for (var index = 0; index < this.gridwidth / gridunit; index++) {
            this.ctx.moveTo(index * gridunit, 0);
            this.ctx.lineTo(index * gridunit, this.gridheight);
            this.ctx.stroke();
        }
    };
    Grid.prototype.clearGrid = function () {
        if (this.ctx != null) {
            this.ctx.save();
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.ctx.beginPath();
            this.ctx.clearRect(0, 0, this.gridwidth, this.gridheight);
            this.ctx.restore();
        }
    };
    return Grid;
}());
var defaultGridSize = 40;
var grid = new Grid(document.querySelector(".myCanvas"));
grid.drawGrid(40);
function scaleGrid(event) {
    if (event.deltaY < 0) {
        defaultGridSize = defaultGridSize * 1.05;
        console.log(event.deltaY);
        grid.clearGrid();
        grid.drawGrid(defaultGridSize);
    }
    if (event.deltaY > 0) {
        defaultGridSize = defaultGridSize * 0.95;
        console.log(event.deltaX);
        grid.clearGrid();
        grid.drawGrid(defaultGridSize);
    }
}
document.querySelector(".myCanvas").addEventListener('wheel', scaleGrid);
