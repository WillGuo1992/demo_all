var elements = [];
function Snake(width, height, direction) {
    this.width = width || 20;
    this.height = height || 20;
    this.body = [
        {x: 6, y:2, color:'red'},
        {x: 5, y:2, color:'red'},
        {x: 4, y:2, color:'red'},
        {x: 3, y:2, color:'red'},
        {x: 2, y:2, color:'red'},
        {x: 1, y:2, color:'red'}
    ];
    this.direction = direction|| "right";
}

Snake.prototype.render = function(map) {
    remove();
    for (var i = 0; i < this.body.length;i++){
        var obj = this.body[i];
        var div = document.createElement("div");
        div.style.position = "absolute";
        div.style.left = obj.x * this.width +"px";
        div.style.top = obj.y * this.width +"px";
        div.style.width = this.width+"px";
        div.style.height = this.height+"px";
        div.style.backgroundColor = obj.color;
        map.appendChild(div);
        elements.push(div);
    }
}

Snake.prototype.move = function (food, map) {
    var i = this.body.length - 1;
    for (; i > 0; i--) {
        this.body[i].x= this.body[i-1].x;
        this.body[i].y= this.body[i-1].y;
    }
    switch (this.direction) {
        case "left": {
            this.body[0].x--;
            break;
        }
        case "right": {
            this.body[0].x++;
            break;
        }
        case "top": {
            this.body[0].y--;
            break;
        }
        case "bottom": {
            this.body[0].y++;
            break;
        }
    }

    //判断是否吃到食物
    var headX = this.body[0].x * this.width;
    var headY = this.body[0].y * this.height;
    if (headX == food.x && headY == food.y) {
        var last = this.body[this.body.length - 1];
        this.body.push(
            {x: last.x,y:last.y, color: last.color}
        )
        food.render(map);
    }

};

function remove() {
    var i = elements.length - 1;
    for (; i >= 0; i--) {
        elements[i].parentNode.removeChild(this.elements[i]);
        elements.splice(i, 1);
    }
}


window.Snake = Snake;
// var map = document.getElementById("map");
// var snake = new Snake();
// snake.render(map);