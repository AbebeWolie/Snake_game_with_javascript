const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d"); // used for access the 2d api
const scale = 20;

const rows = canvas.height/scale;
const colums = canvas.width/scale;


let score = 0;
let d = "right";
let snak = [];


let domScore = document.getElementById("score");
let s = domScore.textContent = score;
console.log(domScore);


snak[0] = {
    x:Math.floor(Math.random()*colums)*scale,
    y:Math.floor(Math.random()*rows)*scale
}

let food = {
    x:Math.floor(Math.random()*colums)*scale,
    y:Math.floor(Math.random()*rows)*scale
}

let ab = Math.random();



document.onkeydown = direction;

function direction(event){
    let key = event.keyCode;
    if(key == 37 && d != "right"){
        d ="left";
    }else if(key==38 && d != "down"){
        d="up";
    }else if(key==39 && d != "left"){
        d= "right";
    }else if(key ==40 && d!="up"){
        d="down";
    }
}


let playGame = setInterval(draw,100);

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    for( let i=0;i<snak.length;i++){
        ctx.fillStyle ="#fff";
        ctx.fillRect(snak[i].x,snak[i].y,scale,scale)
    }

    ctx.fillStyle = "#fff";
    ctx.fillRect(food.x,food.y,scale,scale);

    

    let snakX =snak[0].x;
    let snakY =snak[0].y;


    if(d=="left") snakX -=scale;
    if(d=="up") snakY -=scale;
    if(d=="right") snakX +=scale;
    if(d=="down") snakY +=scale

    if(snakX > canvas.width){
        snakX=0;
    }
    if(snakY> canvas.height){
        snakY=0
    }

    if(snakX.width<0){
        snakX = canvas.width;
    }
    if(snakY<0){
        snakY=canvas.height;
    }


    let newHead = {
        x:snakX,
        y:snakY
    }

    if(snakX == food.x && snakY == food.y){
        score++;
        food = {
            x:Math.floor(Math.random()*colums)*scale,
            y:Math.floor(Math.random()*rows)*scale
        }
        
    }else{
        snak.pop();
    }


 console.log(score);
 

    snak.unshift(newHead)

}
