
// Set the date we're counting down to
var countDownDate = new Date("Oct 1, 2026 11:30:25").getTime();
//var countDownDate = new Date("April 6, 2024 19:10:05").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();
    
// Find the distance between now and the count down date
var distance = countDownDate - now;
    
// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
// Show the output time
document.getElementById("day").innerHTML = days;
document.getElementById("hour").innerHTML = hours;
document.getElementById("minute").innerHTML = minutes;
document.getElementById("second").innerHTML = seconds;

// Output the result in an element with id="emisT"
/*document.getElementById("emisT").innerHTML = days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ";
 */   
// If the count down is over, write some text 
if (distance < 0) {
    clearInterval(x);
    document.getElementById("emisT").innerHTML = "CONGRATULATIONS!!!";
    document.getElementById("day").innerHTML = "0";
    document.getElementById("hour").innerHTML = "0";
    document.getElementById("minute").innerHTML = "0";
    document.getElementById("second").innerHTML = "0";
}
}, 1000);

$(document).ready(function(){
    $('.header').height($(window).height());

    $(".navbar a").click(function(){
        $("body,html").animate({
            scrollTop: $("#" + $(this).data('value')).offset().top
        },1000)
    } );
});
