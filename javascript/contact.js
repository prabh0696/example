let personal = [];
        
        const personaldata = (ev)=>{
		var fname=document.getElementById('fname').value;
		
		var email=document.getElementById('email').value;
		
		
		


	if(fname == ""){
	alert('Please enter your name');
	}
	else if(fname.length<3){
	alert('Min length for name is 3');
	}
	else if(!isNaN(fname)){
	alert('Numbers are not allowed!');
	}
	
	else if(email == ""){
	alert('Please enter your email');
	}
	else if(email.indexOf('@') == -1 || email.indexOf('.') == -1){
	alert('Please Enter Valid Email');
	}
	
	else{
            ev.preventDefault();  //to stop the form submitting
            let person = {
                id: Date.now(),
                Name: document.getElementById('fname').value,
				
                email: document.getElementById('email').value,
                
                query: document.getElementById('query').value
               
            }
            personal.push(person);
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

           

            //saving to localStorage
            localStorage.setItem('QueryDataList', JSON.stringify(personal) );
			alert("Your Query has been Submitted");
			window.location.href="index.html";
        }
	}
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btnn').addEventListener('click', personaldata);
        });
		