var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
canvas.width = 750;
canvas.height = 800;

KEY_UP = 273;
KEY_DOWN = 274;
KEY_LEFT = 276;
KEY_RIGHT = 275;
collide = False;
// level = 1


var hero = new Image();
hero.src = "img/wiggum-zombie.png";
hero.height = 32;
hero.width = 32;
var heroPos = {
    x: 200,
    y: 100,
    dirX: 0,
    dirY: 0,
    speed: .8,
    timeout:25
};

var zombie = new Image();
zombie.src = "img/homer-2.png";

var zombiePos = {
    x: 50,
    y: 250,
    dirX: 0,
    dirY: 0,
    speed: .8,
    timeout:25

};
function border(object) {
    if (object.x > 800) {
        object.x = 0;
    } else if (object.x < 0) {
        object.x = 510;
    } else if (object.y > 720) {
        object.y = 0;
    } else if (object.y < 0) {
        object.y = 200;
    }
}

function move(player) {
  //change opponent's direction randomly
  player.timeout-=1;
  player.x += player.dirX * player.speed;
  player.y += player.dirY * player.speed;
  if (player.timeout<=0){
      console.log("change dir");
      player.dirX = Math.floor(Math.random() * 3) - .9;
      player.dirY = Math.floor(Math.random() * 3) - .9;
      player.timeout=25;
    //   player.speed = Math.floor(Math.random() * 1) - 5;
    }
    border(player);

}

function main() {
    var bgImage = new Image();
    bgImage.src = "img/locations/background.png";
    context.drawImage(bgImage, 0, 0);
    context.drawImage(hero, heroPos.x, heroPos.y);
    context.drawImage(zombie, zombiePos.x, zombiePos.y);
    // zombiePos.x += zombiePos.x * zombie.speed;
    // zombiePos.y += zombiePos.y * zombie.speed;
    move(heroPos);
    move(zombiePos);
    requestAnimationFrame(main);
}
    // zombiePos.x+=1;



main();
