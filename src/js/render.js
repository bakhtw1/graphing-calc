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
        var vertMid = (this.gridheight / gridunit) / 2;
        var horiMid = (this.gridwidth / gridunit) / 2;
        var vIndexTop = vertMid;
        var vIndexBot = vertMid;
        while (vIndexTop > 0 || vIndexBot < (this.gridheight / gridunit)) {
            this.ctx.moveTo(0, vIndexTop * gridunit);
            this.ctx.lineTo(this.gridwidth, vIndexTop * gridunit);
            this.ctx.stroke();
            this.ctx.moveTo(0, vIndexBot * gridunit);
            this.ctx.lineTo(this.gridwidth, vIndexBot * gridunit);
            this.ctx.stroke();
            vIndexTop--;
            vIndexBot++;
        }
        var hIndexTop = horiMid;
        var hIndexBot = horiMid;
        while (hIndexTop > 0 || hIndexBot < (this.gridheight / gridunit)) {
            this.ctx.moveTo(hIndexTop * gridunit, 0);
            this.ctx.lineTo(hIndexTop * gridunit, this.gridheight);
            this.ctx.stroke();
            this.ctx.moveTo(hIndexBot * gridunit, 0);
            this.ctx.lineTo(hIndexBot * gridunit, this.gridheight);
            this.ctx.stroke();
            hIndexTop--;
            hIndexBot++;
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
