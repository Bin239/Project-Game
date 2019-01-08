console.log("JS working");

// class ghost {
//     constructor (){
//         strength = 20,

//     }
// }


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
    $(".time").text( "Time Remaining: " + mySamurai.time)
}}
let Timedecrease = setInterval(timeremaining, 1000);



let samuraiStrength = setInterval(strengthRemaining, 1000);



function strengthRemaining(){
    if(mySamurai.strength > 0){
    mySamurai.strength --;
    $(".strength").text("Strength: " + mySamurai.strength)
}}

function feedSamurai() {
    if (mySamurai.strength < 18) {
        mySamurai.strength += 3;
    }
    
}


$(".feedSamurai").on("click", (e) => {
    feedSamurai();
})


$(document).keydown(function(e) {
    switch (e.which) {
    case 37:
        $('.samurai').stop().animate({
            left: '-=100'
        }); //left arrow key
        console.log("key pressed");
        break;
    case 39:
        $('.samurai').stop().animate({
            left: '+=100'
        }); //right arrow key
        break;
    }
})
