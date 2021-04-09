var canvas = document.getElementById("canvas");
canvas.width = 1920;
canvas.height = 1080;
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.getContext("2d").scale(2,2);
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;

function getRandomColour(){
    var red = Math.floor(Math.random()* 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
  
    return "rgb("+red+","+green+"," +blue+" )";  
  }
function draw(arr) {
  ctx.fillStyle = "white";
  ctx.clearRect(0, 0, width, height);
    for(var i = 0; i < arr.length; i++){
        ctx.fillRect(Math.floor((width/2)/arr.length)*i, 0, Math.floor((width/2)/arr.length)-1, arr[i]*height/150);
    }
  
}