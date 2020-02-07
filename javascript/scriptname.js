function showpercentage(){
var yourn=document.getElementById('yourn').value;
var loven=document.getElementById('loven').value;

	if(yourn == ""){
	alert('Please enter your name');
	}
	else if(yourn.length<3){
	alert('Min length for name is 3');
	}
	else if(!isNaN(yourn)){
	alert('Numbers are not allowed!');
	}
	
	else if(loven == ""){
	alert('Please enter your partner name');
	}
	else if(loven.length<3){
	alert('Min length for partner name is 3');
	}
	else if(!isNaN(loven)){
	alert('Numbers are not allowed!');
	}
	else{
	var percentage=Math.random() * 100;
	percentage=Math.floor(percentage);
	document.getElementById('lovepercentage').value=percentage + "%";	
	}
	
}