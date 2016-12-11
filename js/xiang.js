$(function(){
    //弹性目录
    // (function (){
    //     var oMenu=document.getElementById('menu');
    //     var aMenu=oMenu.children;
    //     var oPos=document.getElementById('menu_bg');
    //     var left=0;
    //     for(var i=0; i<aMenu.length-1; i++){
    //         aMenu[i].onmouseover=function (){
    //             move(oPos,{left:this.offsetLeft});
    //         };
    //         aMenu[i].onmouseout=function (){
    //             move(oPos,{left:left});
    //         };
    //         aMenu[i].onclick=function (){
    //             left=this.offsetLeft;
    //             move(oPos,{left:left});
    //         };
    //     }
    // })();
    //伸处目录


    (function() {
        $('#nav-icon').click(function () {
            doMove($('#form_content').get(0),{top:0},{duration:2000});
        })
        $('#form_content span').click(function () {
            $('#form_content').animate({
                top: -650
            }, 1000)
        })
        $('#form_content ul li').eq(1).click(function () {
            $('html,body').animate({scrollTop: $('#content_one').offset().top}, 800);
        })
        $('#form_content ul li').eq(2).click(function () {
            $('html,body').animate({scrollTop: $('#opus').offset().top}, 1600);
        })
        $('#header_a').click(function () {
            $('html,body').animate({scrollTop: $('#content_one').offset().top}, 800);
        })
        //播放器
        //图标变化
        var timer=0;
        var n=0;
        timer=setInterval(function(){
            video_do();
        },500)
        function video_do(){
            n++;
            if(n%2){
                $('#video-up').show();
                $('#video-down').hide();
            }else{
                $('#video-up').hide();
                $('#video-down').show();
            }
        }
        //播放暂停
        $('#video-btn').click(function(){
            $('#video-off').show();
            $(this).hide();
            $('#Music').get(0).muted=true;
            clearInterval(timer);
            n=0;
        })
        $('#video-off').click(function(){
            $('#video-btn').show();
            $(this).hide();
            $('#Music').get(0).muted=false;
            timer=setInterval(function(){
                video_do();
            },500)
        })
        //联系效果
        $('.contact_do').mouseover(function(){
            for(var i=0;i<$('.contact_do').length;i++){
                $('.contact_tubiao').css({border:0,opacity:1})
                $('.contact_content').css({display:'none'})
            }
            $('.contact_tubiao').eq($(this).index()).css({
                border:'5px solid #E8432E',
                borderBottom:0,
                borderTopLeftRadius:10,
                borderTopRightRadius:10,
                opacity:0.8,

            });
            $('.contact_content').eq($(this).index()).css({display:'block'})
        })
        $('.contact_do').mouseout(function(){
            $('.contact_tubiao').eq($(this).index()).css({
                border:0,
                opacity:1
            });
            $('.contact_content').eq($(this).index()).css({display:'none'})
        })
        //到顶部
        $('#to_top').click(function(){
            var a=$('html,body').scrollTop();
            $('html,body').animate({scrollTop:0},1000)
        })



    })();

})

