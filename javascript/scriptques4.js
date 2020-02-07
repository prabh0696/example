function myfunction() {
	var rd1=document.getElementById("rd1");
	var rd2=document.getElementById("rd2");
	var rd3=document.getElementById("rd3");
	if(rd1.checked==true){
	var vall=document.getElementById("rd1").value;
	
	}
	else if(rd2.checked==true){
	var vall=document.getElementById("rd2").value;
	
	}
	else if(rd3.checked==true){
	var vall=document.getElementById("rd3").value;
	
	}
	var a=localStorage.getItem("ques3");
	
	var x=parseInt(a);
	var y=parseInt(vall);
	var b=x+y;
	var final=b.toString();
	//alert(final);
    localStorage.setItem("ques4",final);
	return false;
}







