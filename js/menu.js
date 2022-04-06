'use strict';

$(function() {
    $('.burger').on('click', function(e) {
        e.preventDefault();
        $('#wrapper, .nav').toggleClass('show');
        $('.burger,.burger span').toggleClass('cross');
    });
});