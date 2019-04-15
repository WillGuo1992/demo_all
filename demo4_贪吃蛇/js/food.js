var elements1 = [];
function Food( x, y, width, height, color) {
    this.x = x || 0;
    this.y = y || 0;
    this.width= width || 20;
    this.height = height || 20;
    this.color = color || 'green';
}
Food.prototype.render = function (map) {
    remove1();
    this.x = parseInt(Math.random() * map.offsetWidth / this.width) * this.width;
    this.y = parseInt(Math.random() * map.offsetHeight / this.height) * this.height;
    console.log(this.x + "---------" + this.y);
    div = document.createElement("div");
    div.style.position = "absolute";
    div.style.left = this.x+"px";
    div.style.top = this.y+"px";
    div.style.width = this.width+"px";
    div.style.height = this.height+"px";
    div.style.backgroundColor = this.color;
    map.appendChild(div);
    elements1.push(div);
}

function remove1() {
    var i = elements1.length - 1;
    for (; i >= 0; i--) {
        elements1[i].parentNode.removeChild(elements1[i]);
        elements1.splice(i, 1);
    }

}
//window.Food = Food;
// var map = document.getElementById("map");
// var food = new Food();
// food.render(map);