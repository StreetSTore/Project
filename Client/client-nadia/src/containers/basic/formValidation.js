export function writetolog() {

  var fname=document.getElementById("firstName").value;
  var lname=document.getElementById("lastName").value;
  var mail=document.getElementById("mail").value;
  var pass=document.getElementById("password").value;
  var role=document.getElementById("firstName").value;

  var data={
   fname:fName,
   lname:lName
  };

  var data_to_send=JSON.stringify(data);
  var xhttp = new XMLHttpRequest();
  xhttp.open('POST', 'https://localhost:443', true);
  xhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  xhttp.send(data_to_send);

return {};
}
