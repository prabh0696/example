let personal = [];
        
        const personaldata = (ev)=>{
		var fname=document.getElementById('fname').value;
		var age=document.getElementById('age').value;
		var email=document.getElementById('email').value;
		/*var gender1=document.getElementById('gender1').value;
		var gender2=document.getElementById('gender2').value;*/
		var color=document.getElementById('color').value;
		var hobby=document.getElementById('hobby').value;
		/*var nature1=document.getElementById('nature1').value;
		var nature2=document.getElementById('nature2').value;*/


	if(fname == ""){
	alert('Please enter your name');
	}
	else if(fname.length<3){
	alert('Min length for name is 3');
	}
	else if(!isNaN(fname)){
	alert('Numbers are not allowed!');
	}
	else if(age == ""){
	alert('Please enter your age');
	}
	else if(age<=10){
	alert('Age should be greater than 10');
	}
	else if(isNaN(age)){
	alert('Please Enter Valid Age!');
	}
	else if(email == ""){
	alert('Please enter your email');
	}
	else if(email.indexOf('@') == -1 || email.indexOf('.') == -1){
	alert('Please Enter Valid Email');
	}
	else if(color == ""){
	alert('Please enter your eye color');
	}
	else if(!isNaN(color)){
	alert('Please Enter Valid Eye Color!');
	}
	else if(hobby == ""){
	alert('Please enter your hobbies');
	}
	else if(!isNaN(hobby)){
	alert('Numbers are not allowed in hobbies!');
	}
	/*else if(gender1.checked==true){
	var gen=document.getElementById("gender1").value;
	//alert(val);
	}
	else if(gender2.checked==true){
	var gen=document.getElementById("gender2").value;
	//alert(val);
	}
	else if(nature1.checked==true){
	var nature=document.getElementById("nature1").value;
	//alert(val);
	}
	else if(nature2.checked==true){
	var nature=document.getElementById("nature2").value;
	//alert(val);
	}*/
	else{
            ev.preventDefault();  //to stop the form submitting
            let person = {
                id: Date.now(),
                Name: document.getElementById('fname').value,
				age: document.getElementById('age').value,
                email: document.getElementById('email').value,
                gender: document.getElementById('gender').value,
                nature: document.getElementById('nature').value,
				eyecolour:document.getElementById('color').value,
                hobby: document.getElementById('hobby').value
               
            }
            personal.push(person);
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

           

            //saving to localStorage
            localStorage.setItem('PersonalDataList', JSON.stringify(personal) );
			alert("COngratulations!!Your Registration is Successful.....Now Enter Your Partner's Detail");
			window.location.href="partner.html";
        }
	}
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btnn').addEventListener('click', personaldata);
        });
		