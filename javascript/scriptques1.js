function myfunction() {
	var rd1=document.getElementById("rd1");
	var rd2=document.getElementById("rd2");
	var rd3=document.getElementById("rd3");
	if(rd1.checked==true){
	var val=document.getElementById("rd1").value;
	//alert(val);
	}
	else if(rd2.checked==true){
	var val=document.getElementById("rd2").value;
	//alert(val);
	}
	else if(rd3.checked==true){
	var val=document.getElementById("rd3").value;
	//alert(val);
	}
     localStorage.setItem("ques1",val);
	 return false;
}



