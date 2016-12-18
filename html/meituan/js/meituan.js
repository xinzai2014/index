var wdw_yi=document.getElementById('q_wdw');
        var wdw_er=wdw_yi.getElementsByTagName('div');


        for(var i=0;i<wdw_er.length;i++){
	
	        wdw_er[i].onclick=function(){
		        for(var i=0;i<wdw_er.length;i++){
			
			        wdw_er[i].style.background='#fff';
		}
		this.style.background='#fa856f';
	}
	
}