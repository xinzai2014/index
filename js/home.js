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
        $('#form_content ul li').click(function(){
            $('html,body').animate({scrollTop:$('#content_one').offset().top}, 800);
        })
        $('#header_a').click(function(){
            $('html,body').animate({scrollTop:$('#content_one').offset().top}, 800);
        })


    })()
})
