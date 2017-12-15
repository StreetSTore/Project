export function writetolog() {

  var fname=document.getElementById("firstName").value;
  var lname=document.getElementById("lastName").value;
  var mail=document.getElementById("mail").value;
  var pass=document.getElementById("password").value;
  var role=document.getElementById("firstName").value;

  var data={
   method: 'registerUser',
   fName:fname,
   lName:lname,
   mail:mail,
   password:pass,
   role:role
  };

  var data_to_send=JSON.stringify(data);
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'http://localhost:8080', true);
  xhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  xhttp.send(data_to_send);

return {};
}
