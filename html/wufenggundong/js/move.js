/**
 * Created by Administrator on 2016/12/18 0018.
 */
window.onload=function ()
{
    var oDiv=document.getElementById('play');
    var aBtn=oDiv.getElementsByTagName('ol')[0].children;
    var oUl=oDiv.getElementsByTagName('ul')[0];
    var aLi=oUl.children;
    var now = 0;
    var w = aLi[0].offsetWidth;
    //焦点
    for(var i=0,len=aBtn.length;i<len;i++){
        (function(index){
            aBtn[index].onclick = function(){
                now = index;
                tab();
            };
        })(i);
    }
    function tab(){
        for(var i=0;i<len;i++){
            aBtn[i].className = "";
        }
        aBtn[now].className= "active";
        startMove(oUl,{left:-now*w});
    };
    //左右
    var oPrev=oDiv.children[0];
    var oNext=oDiv.children[1];

    var isLastOld = true; //最后一个是不是原来的值
    oPrev.onclick=function ()
    {
        now--;
        if(!isLastOld){
            aLi[aLi.length-1].style.position="";
            aLi[aLi.length-1].style.left = "";
            oUl.style.left = -(aLi.length-1)*w+"px";
            isLastOld=true;
        }
        if(now<0){
            aLi[aLi.length-1].style.position="relative";
            aLi[aLi.length-1].style.left = -oUl.offsetWidth+"px";
            startMove(oUl,{left:-now*w},function(){
                aLi[aLi.length-1].style.position="";
                aLi[aLi.length-1].style.left = "";
                oUl.style.left = -(aLi.length-1)*w+"px";
                isLastOld=true;
            });
            isLastOld=false;
            now=aLi.length-1;
        }else{
            startMove(oUl,{left:-now*w});
        }
        for(var i=0;i<len;i++){
            aBtn[i].className = "";
        }
        aBtn[now].className= "active";
    };
    var isFirstOld=true;  //第一个是不是原来的值
    oNext.onclick=function ()
    {
        now++;
        if(!isFirstOld){
            aLi[0].style.position="";
            aLi[0].style.left = "";
            oUl.style.left = "0px";
            isFirstOld=true;
        }
        if(now>aLi.length-1){
            aLi[0].style.position="relative";
            aLi[0].style.left = oUl.offsetWidth+"px";
            startMove(oUl,{left:-now*w},function(){
                aLi[0].style.position="";
                aLi[0].style.left = "";
                oUl.style.left = "0px";
                isFirstOld = true;
            });
            isFirstOld = false;
            now=0;
        }else{
            startMove(oUl,{left:-now*w});
        }
        for(var i=0;i<len;i++){
            aBtn[i].className = "";
        }
        aBtn[now].className= "active";
    };
};
//获取样式函数
function getStyle(obj,name)
{
    return obj.currentStyle?obj.currentStyle[name]:getComputedStyle(obj, false)[name];
}



//获取移动函数
function startMove(obj, json, fn)
{
    clearInterval(obj.timer);
    obj.timer=setInterval(function (){
        var bStop=true;

        for(var name in json)
        {
            if(name=='opacity')
            {
                var cur=Math.round(parseFloat(getStyle(obj, name))*100);
            }
            else
            {
                var cur=parseInt(getStyle(obj, name));
            }

            var speed=(json[name]-cur)/5;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);

            if(name=='opacity')
            {
                obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                obj.style.opacity=(cur+speed)/100;
            }
            else
            {
                obj.style[name]=cur+speed+'px';
            }

            if(cur!=json[name])
            {
                bStop=false;
            }
        }

        if(bStop)
        {
            clearInterval(obj.timer);
            if(fn)
            {
                fn();
            }
        }
    }, 30);
}




