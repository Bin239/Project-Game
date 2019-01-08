console.log("JS working");

class enemy {
    constructor(){
        this.strength = 20;
    }
}

let firstEnemy = new enemy;


class finalEnemy{
    constructor(){
        this.strength = 40;
    }
}

let finalBoss = new finalEnemy;



class samurai {
    constructor(){
    this.strength = 20,
    this.score = 0;
    this.time = 20;
}}

let mySamurai = new samurai;

function timeremaining (){
    if(mySamurai.time > 0){
    mySamurai.time --;
    $(".time").append(mySamurai.time)
}}
let Timedecrease = setInterval(timeremaining, 1000);



let samuraiStrength = setInterval(strengthRemaining, 1000);



function strengthRemaining(){
    if(mySamurai.strength > 0){
    mySamurai.strength --;
    $(".strength").append(mySamurai.strength);
}}

function feedSamurai() {
    if (mySamurai.strength < 18) {
        mySamurai.strength += 3;
    }
    
}


$(".feedSamurai").on("click", (e) => {
    feedSamurai();
})

function attack(){
     $(".samurai").attr("src", "pics/samurai3.gif");
     setTimeout(resetCharacter, 1700);
}

function moveLeft(){
    $(".samurai").stop().animate({
            left: '-=100'
        });
}

function moveright(){
    $(".samurai").stop().animate({
            left: '+=100'
        });
}

function resetCharacter (){
    $(".samurai").attr("src", "pics/staticninja.gif")
}

$(document).keydown(function(e) {
    switch (e.which) {
    case 37:
        moveLeft();
         //left arrow key
        break;
    case 39:
        moveright();
         //right arrow key
        break;
    case 32:
    attack();
    setInterval(enemyDies, 1300);
        break;
    }
    
})


function enemyDies () {
    $(".image3").attr("src", "pics/explode.gif");
    setTimeout(resetEnemy, 1300);
}

function resetEnemy(){
    $(".image3").attr("src", "pics/ghost5.gif", loop = true)
}







//<img class="samurai" src="pics/staticninja.gif" alt="Samurai" style="width: 300px; height: 180px;">
//<img class="image4" src="pics/samurai3.gif" alt="samurai gif" style="width: 330px; height: 200px;">
//<img class="explode" src="pics/explode.gif" alt="explosion" style="width: 70px; height: 80px;"></img>

