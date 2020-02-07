let partnerdata = [];
        // example {id:1592304983049, title: 'Deadpool', year: 2015}
        const addpartner = (ev)=>{
		
		var fname=document.getElementById('fname').value;
		var age=document.getElementById('age').value;
		var eyecolor=document.getElementById('eyecolor').value;
		var haircolor=document.getElementById('haircolor').value;
		var hobby=document.getElementById('hobby').value;
		
	if(fname == ""){
	alert('Please enter your partners name');
	}
	else if(fname.length<3){
	alert('Min length for name is 3');
	}
	else if(!isNaN(fname)){
	alert('Numbers are not allowed!');
	}
	else if(age == ""){
	alert('Please enter your partners age');
	}
	else if(age<=10){
	alert('Age should be greater than 10');
	}
	else if(isNaN(age)){
	alert('Please Enter Valid Age!');
	}
	else if(eyecolor == ""){
	alert('Please enter your partners eye color');
	}
	else if(!isNaN(eyecolor)){
	alert('Please Enter Valid Eye Color!');
	}
	else if(haircolor == ""){
	alert('Please enter your partners hair color');
	}
	else if(!isNaN(haircolor)){
	alert('Please Enter Valid Hair Color!');
	}
	else if(hobby == ""){
	alert('Please enter your partners hobbies');
	}
	else if(!isNaN(hobby)){
	alert('Numbers are not allowed in hobbies!');
	}
	
	else{
            ev.preventDefault();  //to stop the form submitting
            let pdata = {
                id: Date.now(),
                Name: document.getElementById('fname').value,
				age: document.getElementById('age').value,
                gender: document.getElementById('gender').value,
                nature: document.getElementById('nature').value,
				eyecolour:document.getElementById('eyecolor').value,
				haircolour:document.getElementById('haircolor').value,
                hobby: document.getElementById('hobby').value
               
            }
            partnerdata.push(pdata);
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

           

            //saving to localStorage
            localStorage.setItem('PartnersdataList', JSON.stringify(partnerdata) );
			alert("Congratulations!!You have Entered Your Partner's Details.....Now Play The Quiz To find your compatibility percentage");
			window.location.href="ques1.html";
        }
	}
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btnn').addEventListener('click', addpartner);
        });