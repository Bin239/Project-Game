


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
            this.score = 5;
        this.time = 60;
    }
}

let mySamurai = new samurai();

function timeremaining() {
    if (mySamurai.time > 0) {
        mySamurai.time--;
        $(".time").text("Time Remaining: " + mySamurai.time)


    }
}
let Timedecrease = setInterval(timeremaining, 1000);




function feedSamurai() {
    if (mySamurai.strength < 90) {
        mySamurai.strength += 10;
    }

}

function resetEnemy() {
    firstEnemy.strength = 20;
    $("#image3").attr("src", "pics/secondEnemy.gif");
    $("#image3").css("height", "280px");
    $("#image3").css("width", "280px");
    $("#samurai").css("margin-top", "420px");


}

function enemyDeadPicture() {
    $("#image3").attr("src", "pics/explode.gif");

}


for (let i = 0; i < 3; i++) {

    function attack() {

       

        if (($("#samurai").offset().left < 350)) {

            $("#score").text("Score: " + mySamurai.score);

            if (firstEnemy.strength > 0) {

                firstEnemy.strength -= 5;
   
            }
            mySamurai.score += 5;
            
        }

        $("#samurai").attr("src", "pics/samurai3.gif");
        
        if (firstEnemy.strength < 1) {
            //scoreIncrease();
            setTimeout(enemyDeadPicture, 1000);
            clearTimeout(enemyDeadPicture);
            setTimeout(resetEnemy, 1700);

        }

        setTimeout(resetCharacter, 1700);
        console.log(firstEnemy.strength);
        console.log(mySamurai.score);
    }
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
            if (($("#samurai").offset().left > 260)) {
                moveLeft();
            }
            //left arrow key
            break;
        case 39:
            if (($("#samurai").offset().left < 1000)) {
                moveright();
            }
            //right arrow key
            break;
        case 32:
            gameOver();

            if (mySamurai.strength > 9) {
                attack();
            }
            //setTimeout(gameOver, 2000);

            if (mySamurai.strength > 9) {
                mySamurai.strength -= 10;
            }

            //setInterval(enemyDies, 1300);
            break;
        case 38:
            feedSamurai();
            break;

    }

})




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


function gameOver() {
    if (mySamurai.strength < 1 || mySamurai.time == 0) {
        $("#samurai").hide();
        $("#image3").hide();
        setTimeout(alertFunction, 300);

    }
}

function alertFunction() {
    alert("Gameover, Refresh the page to play again!!");
}


// var $stored_selector = $('#samurai');

// if($($stored_selector.offset().left < 300)){
   // enemyAttack();
// }

// console.log($stored_selector.offset());


//$stored_selector.offset();




//<img class="samurai" src="pics/staticninja.gif" alt="Samurai" style="width: 300px; height: 180px;">
//<img class="image4" src="pics/samurai3.gif" alt="samurai gif" style="width: 330px; height: 200px;">
//<img class="explode" src="pics/explode.gif" alt="explosion" style="width: 70px; height: 80px;"></img>

