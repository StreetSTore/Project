
import $ from 'jquery';

export function writetolog(myobject) {

  var fname=myobject.firstName;
  var lname=myobject.lastName;
  var mail=myobject.emailAddress;
  var pass=myobject.password1;
  var role=1;

  if($("#sushirole").hasClass('one')){
    role=1;
  }
  else{
    role=2;
  }

  var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var response = JSON.parse(this.responseText);
//			document.getElementById("result").innerHTML = response;
		}
	};
  xhttp.open('GET', 'https://localhost:443?method=registerUser' +"&fName=" + fname + "&lName=" + lname + "&email=" + mail + "&password=" + pass + "&role=" + role, true);
  xhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  xhttp.send();

return {};
}



export function changeradio(myobject) {
var selected=myobject;
$("#sushirole").toggleClass('one two');

return {};
}
