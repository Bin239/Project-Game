

class enemy {
    constructor() {
        this.strength = 20;
    }
}

let firstEnemy = new enemy;


class finalEnemy {
    constructor() {
        this.strength = 40;
    }
}

let finalBoss = new finalEnemy;



class samurai {
    constructor() {
        this.strength = 100,
            this.score = 0;
        this.time = 100;
    }
}

let mySamurai = new samurai();

function timeremaining() {
    if (mySamurai.time > 0) {
        mySamurai.time--;
        $(".time").text("Time Remaining: " +  mySamurai.time)
        

    }
}
let Timedecrease = setInterval(timeremaining, 1000);


function feedSamurai() {
    if (mySamurai.strength < 80) {
        mySamurai.strength += 15;
    }

}
function attackSuccessfull(){
    firstEnemy.strength -= 5;
    console.log(firstEnemy.strength);
}
//attackSuccessfull();

function enemyAttack(){
    mySamurai.strength -= 10;
}
//enemyAttack();


function attack() {
    $("#samurai").attr("src", "pics/samurai3.gif");
    setTimeout(resetCharacter, 1700);
    console.log(firstEnemy.strength);

}


function moveLeft() {
    $("#samurai").stop().animate({
        left: '-=100'
    });
}

function moveright() {
    $("#samurai").stop().animate({
        left: '+=100'
    });
}

function resetCharacter() {
    $("#samurai").attr("src", "pics/staticninja.gif")
}

//functionality for when pressing up/down/left/right arrow
$(document).keydown(function (e) {
    switch (e.which) {
        case 37:
        if(($("#samurai").offset().left > 260)){
            moveLeft();}
            //left arrow key
            break;
        case 39:
        if(($("#samurai").offset().left < 1000)){
            moveright();}
            //right arrow key
            break;
        case 32:
            attack();
            setInterval(enemyDies, 1300);
            break;
        case 38:
            feedSamurai();
            break;

    }

})


function enemyDies() {
    if (firstEnemy.strength < 1) {
        $(".image3").attr("src", "pics/explode.gif");
        setTimeout(resetEnemy, 2000);
    }
}


function resetEnemy() {
    $(".image3").attr("src", "pics/ghost5.gif")
}

//samurai strength progressbar
function updateStrengthBar() {
    var elem = document.getElementById("strengthProgress");
    var id = setInterval(frame, 500);
    function frame() {
        
        // if(width <= 15){
        //     $("#strengthProgress").css("background-color", "hsl(14, 78%, 39%)")
        // }
        if (width <= 0) {
            clearInterval(id);
        } 
        
        else {
            var width = mySamurai.strength;
            elem.style.width = width + '%';
            elem.innerHTML = "Strength: " + width * 1 + '%';

        }
    }
}


updateStrengthBar();

var $stored_selector = $('#samurai');

if($($stored_selector.offset().left < 300)){
    enemyAttack();
}

console.log($stored_selector.offset());


//$stored_selector.offset();




//<img class="samurai" src="pics/staticninja.gif" alt="Samurai" style="width: 300px; height: 180px;">
//<img class="image4" src="pics/samurai3.gif" alt="samurai gif" style="width: 330px; height: 200px;">
//<img class="explode" src="pics/explode.gif" alt="explosion" style="width: 70px; height: 80px;"></img>

