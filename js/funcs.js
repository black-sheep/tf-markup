
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
    $(".hidden-ul").mouseover(function(){
        $(this).find('ul').show();
    }).mouseout(function(){
            $(this).find('ul').hide();
        });
    $(".search-box div").mouseover(function(){
        $(this).addClass('hover');
    }).mouseout(function(){
            $(this).removeClass('hover');
        });
    var ww = $('.slides_container').width();
    $('.slide').width(ww);
    var wrap = $(window).width();
    if (wrap<1065) { $('body').addClass('small-nav'); }
    else { $('body').removeClass('small-nav'); }
    var wpp = $('.popup-form').width();
    var hrap = $(window).height();
    var hpp = $('.popup-form').height();
    var ktop, kleft;
    ktop = (hrap-hpp)/2;
    kleft = (wrap-wpp)/2;
    $('.popup-form').css({top: ktop+'px', left: kleft+'px'});

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
        var wrap = $(window).width();
        if (wrap<1065) { $('body').addClass('small-nav'); }
        else { $('body').removeClass('small-nav'); }
        var wpp = $('.popup-form').width();
        var hrap = $(window).height();
        var hpp = $('.popup-form').height();
        var ktop, kleft;
        ktop = (hrap-hpp)/2;
        kleft = (wrap-wpp)/2;
        $('.popup-form').css({top: ktop+'px', left: kleft+'px'});
    });
});
$(window).load(function(){
    var mmn, leftX, likoor;
    mmn = $('.bottom-block-cont').data('mmn');
    var hh = $('.bottom-block-cont').height();
    hh=hh-mmn;
    $('.bottom-block section').height(hh);
    var hsl =  $('.slide').height();
    $('.slides_control').height(hsl);
    likoor=$('.hidden-ul a').position().left;
    leftX=$('.hide-ul').data('left');
    $('.hide-ul').css({left: (likoor-leftX)+'px'});
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
