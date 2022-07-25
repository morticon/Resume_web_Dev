var space=0;
function move(){
	if(space==0){
	space=1;
	var elem=document.getElementById("level-1");
	var width=10;
	var id=setInterval(frame,10);
	function frame(){
	if(width>=70){
	clearInterval(id);
	space=0;
	}
	else{
	width=width+1;
	elem.style.width=width+"%";
	elem.innerHTML=width+"%";
	}
	}
	}
}