// Set the date we're counting down to
var countDownDate = new Date("nov 3, 2021 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"

    document.getElementById("day").innerHTML = DoubleDigits(days);
    document.getElementById("hour").innerHTML = DoubleDigits(hours);
    document.getElementById("minute").innerHTML = DoubleDigits(minutes);
    document.getElementById("second").innerHTML = DoubleDigits(seconds);
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("day").innerHTML = "00";
        document.getElementById("hour").innerHTML = "00";
        document.getElementById("minute").innerHTML = "00";
        document.getElementById("second").innerHTML = "00";
        document.getElementById('change_image').setAttribute('src', '../image/welcome.png');
        document.getElementById('change_image').setAttribute('width', '300');

        // document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

// For Double-Digits like(00) //
function DoubleDigits(x) {
    return (x < 10 ? "0" : "") + x;
};
 