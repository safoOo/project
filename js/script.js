$(document).ready(function () {
    //  show and hide nav link
    $('.menu-toggle').on('click', function () {
        $('.nav').toggleClass('showing');
    });
    //  if you want show and hide element don't use one fumction
    //  show and hide dropmenu
    $('.login').on('click', function () {
        $('.login .dropdown').toggleClass('showing');
    });
});