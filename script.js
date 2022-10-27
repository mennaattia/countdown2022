wow = new WOW(
    {
    boxClass:     'animate__animated',      // new default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  ).init();
$(".mainBG .secondRow .secondCol1 div").fitText(.4);
let icon = document.querySelectorAll(".icon");
$(document).ready(function(){
    for(let i = 0; i<icon.length; i++){
        $(icon[i]).hover(function(){
            $(icon).eq(i).css("color", "rgb(251, 96, 135)");
        }, function(){
            $(icon).eq(i).css("color", "rgb(132, 134, 169)");
        });
    }
});
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime(),
    displaySecond = document.querySelector(".second"),
    displayMin = document.querySelector(".minute"),
    displayHour = document.querySelector(".hour"),
    displayDay = document.querySelector(".day");
let counter = setInterval(() => {
    let dateNow = new Date().getTime(),
        difference = countDownDate - dateNow,
        seconds1 = Math.floor(difference / 1000),
        minutes1 = Math.floor(seconds1 / 60),
        hours1 = Math.floor(minutes1 / 60),
        days = Math.floor(hours1 / 24),
        hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
        minutes = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60)),
        seconds = Math.floor(difference % (1000 * 60 * 60 * 24) / 1000);
    displaySecond.innerHTML = seconds;
    displayMin.innerHTML = minutes;
    displayHour.innerHTML =hours;
    displayDay.innerHTML = days;
    if(difference = 0){
        clearInterval(counter);
        $(document).ready( function(){
            $(".quote").css("display", "block");
        }
        );
    }
}, 1000);