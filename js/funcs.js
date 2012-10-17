
$(document).ready(function()
{
    $("ul").each(function(){
        $(this).find('li:last').addClass('last');
    });
    $("div").each(function(){
        $(this).find('div:last').addClass('last');
    });
    $('.close-a').click(function(){
        $(this).parent().hide();
    });
    $(".purple").mouseover(function(){
        $(this).find('ul').show();
    }).mouseout(function(){
            $(this).find('ul').hide();
        });
    var ww = $('.slides_container').width();
    $('.slide').width(ww);
    $(window).resize(function(){
        var mmn;
        $('.bottom-block-cont section').css({height: 'auto'});
        mmn = $('.bottom-block-cont').data('mmn');
        var hh = $('.bottom-block-cont').height();
        hh=hh-mmn;
        $('.bottom-block section').height(hh);
        var ww = $('.slides_container').width();
        $('.slide').width(ww);
        var hsl =  $('.slide').height();
        $('.slides_control').height(hsl);
    });
});
$(window).load(function(){
    var mmn;
    mmn = $('.bottom-block-cont').data('mmn');
    var hh = $('.bottom-block-cont').height();
    hh=hh-mmn;
    $('.bottom-block section').height(hh);
    var hsl =  $('.slide').height();
    $('.slides_control').height(hsl);
});
$(function(){
    $('#slides').slides({
        preload: true,
        preloadImage: 'img/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true,
        animationStart: function(current){
            $('.caption').animate({
                bottom:-35
            },100);
            if (window.console && console.log) {
                // example return of current slide number
                console.log('animationStart on slide: ', current);
            };
        },
        animationComplete: function(current){
            $('.caption').animate({
                bottom:0
            },200);
            if (window.console && console.log) {
                // example return of current slide number
                console.log('animationComplete on slide: ', current);
            };
        },
        slidesLoaded: function() {
            $('.caption').animate({
                bottom:0
            },200);
        }
    });
});
