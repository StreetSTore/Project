
export function writetolog() {

  var fname=document.getElementById("firstName").value;
  var lname=document.getElementById("lastName").value;
  var mail=document.getElementById("mail").value;
  var pass=document.getElementById("password").value;
  var role=document.getElementById("firstName").value;

  var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var response = JSON.parse(this.responseText);
			document.getElementById("result").innerHTML = response;
		}
	};
  xhttp.open('POST', 'https://localhost:443?method=registerUser&fName=' + fname + "&lName=" + lname + "&email=" + mail + "&password=" + pass + "&role=" + role, true);
  xhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  xhttp.send();

return {};
}
