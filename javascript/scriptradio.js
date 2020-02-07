var val,a;
	var b=1;
function myfunction() {
    
	var rd1=document.getElementById("rd1");
	var rd2=document.getElementById("rd2");
	var rd3=document.getElementById("rd3");
	if(rd1.checked==true){
	val=document.getElementById("rd1").value;
	//alert(val);
	}
	else if(rd2.checked==true){
	val=document.getElementById("rd2").value;
	//alert(val);
	}
	else if(rd3.checked==true){
	val=document.getElementById("rd2").value;
	//alert(val);
	}
    a=parseInt(val);
	b+=a;
	alert(b);
}
function ques() {
	var rd1=document.getElementById("rd1");
	var rd2=document.getElementById("rd2");
	if(rd1.checked==true){
	val=document.getElementById("rd1").value;
	//alert(val);
	}
	else if(rd2.checked==true){
	val=document.getElementById("rd2").value;
	//alert(val);
	}
    a=parseInt(val);
	b+=a;
	alert(b);
}
