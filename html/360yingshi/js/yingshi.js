window.onload=function(){
	var a_lunbo=document.getElementById('w_lunbo_img');
	var a_lun=a_lunbo.getElementsByTagName('li');
    var b_yinying=document.getElementById('w_lunbo_yinying');
	var b_yin=b_yinying.getElementsByTagName('li');
	for(var i=0;i<b_yin.length;i++){
		b_yin[i].index=[i];
		b_yin[i].onclick=function(){
			for(var i=0;i<b_yin.length;i++){
				b_yin[i].style.background='#000';
				a_lun[i].style.display='none';
			}
			this.style.background='none';
			a_lun[this.index].style.display='block';
		}
		
	}
	var a_gengxin=document.getElementById('w_gengxin_date');
	var a_geng=a_gengxin.getElementsByTagName('li');
	var b_liebiao=document.getElementById('w_gengxin_brb');
	var b_lie=b_liebiao.getElementsByTagName('ul');
	for(var i=0;i<7;i++){
		a_geng[i].index=[i];
		a_geng[i].onclick=function(){
			for(var i=0;i<7;i++){
				a_geng[i].style.background='#eee';
				a_geng[i].style.color='#333';
				b_lie[i].style.display='none';
			}
			this.style.background='#46c832';
			this.style.color='#fff';
			b_lie[this.index].style.display='block';
		}
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
