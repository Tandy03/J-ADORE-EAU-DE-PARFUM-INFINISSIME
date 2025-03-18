$(document).ready(function () {
    $('.bxslider').bxSlider({
        mode: 'fade',
        slideMargin: 0,
        minSlides: 1,
        moveSlides: 1,
        pager: true,
        pagerCustom: '#bx-pager',
        controls: false
    });

    $('.color').click(function (e) {
        e.preventDefault();
        $('.colors .color').removeClass('active');
        $(this).addClass('active');

        var slideIndex = $(this).index();
        $('.bxslider').goToSlide(slideIndex);
    });
});

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var interval = setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.innerHTML = "<span class='con-time-block'>&nbsp;" + minutes + "&nbsp;</span>:<span class='con-time-block'>&nbsp;" + seconds + "</span>";

        if (timer > 0) {
            timer--;
        } else {
            clearInterval(interval);
        }
    }, 1000);
}

window.onload = function() {
    var fiveMinutes = 30 * 13, 
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
