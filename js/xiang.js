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
            $('html,body').animate({scrollTop:0},1000)
        })
        //首页等的移入移出效果
        $('#form_content li a').hover(function(){
            for(var i=0;i<$(this).children('div').length;i++){
                $(this).children('div').eq(i).css({borderWidth:1});
            }
            $(this).children('div').eq(0).stop().animate({width:150});
            $(this).children('div').eq(1).stop().animate({height:100});
            $(this).children('div').eq(2).stop().animate({width:150});
            $(this).children('div').eq(3).stop().animate({height:100});
        },function(){
            var _this=this;
            $(this).children('div').eq(0).stop().animate({width:0},function(){
                $(_this).children('div').eq(0).css({borderWidth:0});
            });
            $(this).children('div').eq(1).stop().animate({height:0},function(){
                $(_this).children('div').eq(1).css({borderWidth:0});
            });
            $(this).children('div').eq(2).stop().animate({width:0},function(){
                $(_this).children('div').eq(2).css({borderWidth:0});
            });
            $(this).children('div').eq(3).stop().animate({height:0},function(){
                $(_this).children('div').eq(3).css({borderWidth:0});
            });
        })

        //轮播图显示
        // $('#carousel-example-generic').css({marginLeft:-($('#carousel-example-generic').width()/2)})
        // $('#carousel-example-generic').css({marginTop:-($('#carousel-example-generic').height()/2)})
        window.onscroll=function() {
            if ($(document).scrollTop()>($('#content_one').offset().top-300)) {
                doMove($('#carousel-example-generic').get(0),{left:0})
            }
        };



    })();


    //小猫
    (function(){
        var iSpeedX=1;
        setInterval(function(){
            var l= $('#cat').offset().left+iSpeedX;
            if(l>=document.documentElement.clientWidth*0.8){
                $('#cat img').attr('src','Images/page4_03.png');
                iSpeedX*=-1;
            }
            if(l<=50){
                $('#cat img').attr('src','Images/page4_01.png');
                iSpeedX*=-1;
            }
            $('#cat').css({left:l});
        },16);

        var n=0;
        setInterval(function(){
            n++;
            if(n>7){
                n=0;
                $('#cat img').css({
                    left:0
                })
            };
            $('#cat img').css({
                left:-n*127
            })
        },100)
    })();
    //作品菜单标题效果
    (function(){
        var oUl=document.getElementById('work_menu');
        var aLi=oUl.children;
        var oPos=document.getElementById('gv_bg');

        var left=oUl.offsetWidth*0.04;
        for(var i=0; i<aLi.length-1; i++){
            aLi[i].onmouseover=function (){
                doMove(oPos,{left:this.offsetLeft});
                }

            aLi[i].onmouseout=function (){
                doMove(oPos,{left:left});

            };
            aLi[i].onclick=function (){
                left=this.offsetLeft;
                $(this).addClass('gv_on').siblings('li').removeClass('gv_on');
                doMove(oPos,{left:left});

            };
        }
    })();
    //html作品3d转换效果
    (function(){
        var oBtn1=document.getElementById('rotatePic_left');
        var oBtn2=document.getElementById('rotatePic_right');
        var oUl=document.getElementById('RotatePic');
        var aLi=oUl.children;
        var aImg=oUl.getElementsByTagName('img');
        var aA=oUl.getElementsByTagName('a');
        aA[0].onclick=function (){
            left();
            return false;
        };
        aA[2].onclick=function (){
            right();
            return false;
        };
        aA[3].onclick=function (){
            right();
            return false;
        };
        aA[6].onclick=function (){
            left();
            return false;
        };
        aA[4].onclick=function (){
            return false;
        };
        aA[5].onclick=function (){
            return false;
        };
        //存位置和图片信息
        var aPos=[];
        for(var i=0; i<aLi.length; i++){
            aPos.push({
                left:aLi[i].offsetLeft,
                top:aLi[i].offsetTop,
                zIndex:getStyle(aLi[i],'z-index'),
                imgW:getStyle(aImg[i],'width'),
                imgO:getStyle(aImg[i],'opacity'),
                imgT:getStyle(aImg[i],'top'),
                fnClick:aA[i].onclick
            });
        }

        function left(){
            aPos.push(aPos.shift());
            for(var i=0; i<aLi.length; i++){
                doMove(aLi[i],{left:aPos[i].left,top:aPos[i].top});
                aLi[i].style.zIndex=aPos[i].zIndex;
                doMove(aImg[i],{opacity:aPos[i].imgO,top:aPos[i].imgT,width:aPos[i].imgW});
                aA[i].onclick=aPos[i].fnClick;
            }
        }
        function right(){
            aPos.unshift(aPos.pop());
            for(var i=0; i<aLi.length; i++){
                doMove(aLi[i],{left:aPos[i].left,top:aPos[i].top});
                aLi[i].style.zIndex=aPos[i].zIndex;
                doMove(aImg[i],{opacity:aPos[i].imgO,top:aPos[i].imgT,width:aPos[i].imgW});
                aA[i].onclick=aPos[i].fnClick;
            }
        }
        oBtn1.onclick=left;
        oBtn2.onclick=right;
    })()

})

