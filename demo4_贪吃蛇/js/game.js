function Game(map) {
    this.food = new Food();
    this.snake = new Snake();
    this.map = map;
}

function runSnake() {

    var timerId = setInterval(
        function () {
            this.snake.move(this.food, this.map);
            //清除之前的蛇
            //画新蛇
            this.snake.render(this.map);

            //判断是否撞墙
            var maxX = this.map.offsetWidth / this.snake.width;
            var maxY = this.map.offsetHeight / this.snake.height;
            var headX = this.snake.body[0].x;
            var headY = this.snake.body[0].y;
            if (headX < 0 || headX >= maxX || headY < 0 || headY >= maxY) {
                clearInterval(timerId);
                alert("game over!");
            }

        }.bind(that)
        ,50);
}

function bindKey() {
    document.addEventListener('keydown',function (e) {
        switch (e.keyCode) {
            case 38:{
                that.snake.direction = "top";
                break;
            }
            case 40:{
                that.snake.direction = "bottom";
                break;
            }
            case 37:{
                that.snake.direction = "left";
                break;
            }
            case 39:{
                that.snake.direction = "right";
                break;
            }
        };
    })
}

Game.prototype.start =  function () {
    this.food.render(this.map);
    this.snake.render(this.map);
    runSnake();
    bindKey();

}

var map = document.getElementById("map");
var game = new Game(map);
that = game;
game.start();