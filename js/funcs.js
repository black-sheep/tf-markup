
$(document).ready(function()
{
    $('.mycarousel').jcarousel();
    $("ul").each(function(){
        $(this).find('li:last').addClass('last');
    });
    $("div").each(function(){
        $(this).find('div:last').addClass('last');
    });
    $('.close-a').click(function(){
        $(this).parent().hide();
    });
    $('.color a').click(function(){
        $('.color a').removeClass('active');
        $(this).addClass('active');
    });
    $(".purple").mouseover(function(){
        $(this).find('ul').show();
    }).mouseout(function(){
            $(this).find('ul').hide();
        });
    $(".catalog-tovar .img-box").mouseover(function(){
        $(this).parent().addClass('otm-li');
    }).mouseout(function(){
            $(this).parent().removeClass('otm-li');
        });
    $(".hidden-ul").mouseover(function(){
        $(this).find('ul').show();
        $(this).addClass('posv');
    }).mouseout(function(){
            $(this).find('ul').hide();
            $(this).removeClass('posv');
        });
    $(".search-box div").mouseover(function(){
        $(this).addClass('hover');
    }).mouseout(function(){
            $(this).removeClass('hover');
        });
    $(".basket").mouseover(function(){
        $('.vv-box').show();
        $('.vv-box').removeClass('ww-small');
    }).mouseout(function(){
            $('.vv-box').hide();
        });
    var ww = $('.slides_container').width();
    $('.slide').width(ww);
    var wrap = $(window).width();
    if (wrap<($('body').data('ws'))) { $('body').addClass('small-nav'); }
    else { $('body').removeClass('small-nav'); }
    var wpp = $('.popup-form').width();
    var hrap = $(window).height();
    var hpp = $('.popup-form').height();
    var ktop, kleft;
    ktop = (hrap-hpp)/2;
    kleft = (wrap-wpp)/2;
    $('.popup-form').css({top: ktop+'px', left: kleft+'px'});
    var detail = $('.carousel .panel').width();
    $('.detail').width(detail);
    var item = $('.carousel').width();
    item = item*0.7;
    $('.item').width(item);
    var padd = $('.backgrounds-box').data('height');
    var itemh = $('.backgrounds-box').height();
    var wimm = $('.backgrounds').data('w');
    item = item-wimm;
    $('.item-box').width(item);
    itemh = itemh-padd;
    $('.item-box').height(itemh);

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
        if (wrap<($('body').data('ws'))) { $('body').addClass('small-nav'); }
        else { $('body').removeClass('small-nav'); }
        var wpp = $('.popup-form').width();
        var hrap = $(window).height();
        var hpp = $('.popup-form').height();
        var ktop, kleft;
        ktop = (hrap-hpp)/2;
        kleft = (wrap-wpp)/2;
        $('.popup-form').css({top: ktop+'px', left: kleft+'px'});
        var detail = $('.carousel .panel').width();
        $('.detail').width(detail);
        var item = $('.carousel').width();
        item = item*0.7;
        $('.item').width(item);
        var padd = $('.backgrounds-box').data('height');
        var itemh = $('.backgrounds-box').height();
        var wimm = $('.backgrounds').data('w');
        item = item-wimm;
        $('.item-box').width(item);
        itemh = itemh-padd;
        $('.item-box').height(itemh);
        var margl = $('.backgrounds').offset();

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
    var mh;
    mh = $('.clm-right').height();
    $('.scroll-pane').height(mh);
    $(".content").mCustomScrollbar({
        scrollInertia:0
    });
    $(".callback_demo a[rel='scrollto-bottom']").click(function(e){
        e.preventDefault();
    });
    $(".content_1").mCustomScrollbar({
        horizontalScroll:true,
        advanced:{
            autoExpandHorizontalScroll:true
        }
    });
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
                console.log('animationStart on slide: ', current);
            };
        },
        animationComplete: function(current){
            $('.caption').animate({
                bottom:0
            },200);
            if (window.console && console.log) {
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

