$(function(){
    (function(){
        $('#nav-icon').click(function(){
            $('#form_content').animate({
                top:0
            },1000)
        })
        $('#form_content span').click(function(){
            $('#form_content').animate({
                top:-650
            },1000)
        })
        $('#form_content ul li').eq(1).click(function(){
            $('html,body').animate({scrollTop:$('#content_one').offset().top}, 800);
        })
        $('#form_content ul li').eq(2).click(function(){
            $('html,body').animate({scrollTop:$('#opus').offset().top}, 1600);
        })
        $('#header_a').click(function(){
            $('html,body').animate({scrollTop:$('#content_one').offset().top}, 800);
        })

        //轮播图内容
        $('.inform_one').append('<li>'+$('.inform_one li').eq(0).html()+'</li>')
        $('.inform_one').prepend('<li>'+$('.inform_one li').eq($('.inform_one li').length-2).html()+'</li>')
        // $('.inform_one').html(
        //     $('.inform_one').html()+$('.inform_one').html()
        // )
        //轮播图ul宽度
        $('.inform_one').css({left:-$('.inform_one li').width()})
        $('.inform_one').width($('.inform_one li').length*$('.inform_one li').width());

        //轮播图移动
        var iNow=0;
        //自动移动
        // setInterval(function(){
        //     iNow--;
        //     tab();
        // },10000)
        function tab(){
            $('.inform_one').stop().animate({
                left:-$('.inform_one li').width()-iNow*$('.inform_one li').width()
            },500,function(){
                if(iNow>=2){
                    iNow=0;
                    $('.inform_one').css({
                        left:-$('.inform_one li').width()
                    })
                }
                if(iNow<=-1){
                    iNow=1;
                    $('.inform_one').css({
                        left:-$('.inform_one li').width()*($('.inform_one li').length-2)
                    })
                }
            })
        }
        //点击向左移动
        $('.owl_prev').click(function () {
            iNow++;
            tab();
        })
        $('.owl_next').click(function () {
            iNow--;
            tab();
        })
    })()
        //作品部分
    (function(){



    })()
})
