	var start,end;
	var colors=["red","green","yellow","blue","aqua","cyan","grey","black","lightgrey","maroon"];
	function randomShape(){
		start=new Date().getTime();
		var i=Math.floor(Math.random()*colors.length);
		var b=Math.floor((Math.random()*200)+100);
		document.getElementById("d2").style.width=b+"px";
		document.getElementById("d2").style.height=b+"px";
		if(b%2==0)
			document.getElementById("d2").style.borderRadius = (b/2)+"px";
		else
			document.getElementById("d2").style.borderRadius = "0px";
		document.getElementById("d2").style.marginTop=Math.floor((Math.random()*300)+10)+"px";
		document.getElementById("d2").style.marginLeft=Math.floor((Math.random()*400)+10)+"px";
		document.getElementById("d2").style.marginRight=Math.floor((Math.random()*200)+50)+"px";
		document.getElementById("d2").style.marginBottom=Math.floor((Math.random()*100)+10)+"px";
		document.getElementById("d2").style.backgroundColor=colors[i];
	}
	document.getElementById("b1").onclick =function(){
		setTimeout(randomShape,Math.random()*1000);
		document.getElementById("b1").style.display="none";
	}
	document.getElementById("d2").onclick = function(){
		end=new Date().getTime();
		var timedeff=(end-start)/1000;
		document.getElementById("p1").innerHTML="Time Taken : "+timedeff;
		setTimeout(randomShape,Math.random()*1000);
		}