function myFunction1(num1, num2) {
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			num1 = Math.floor(num1);
			num2 = Math.floor(num2);
			document.getElementById("result1").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "https://localhost:8080?method=calc&num1=" + num1 + "&num2=" + num2, true);
	xhttp.send();
}

function myFunction2() {
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var response = JSON.parse(this.responseText);
			console.log(response);
			document.getElementById("result1").innerHTML = response;
		}
	};
	xhttp.open("GET", "https://localhost:443?method=registerUser&fName=fdgf&lName=yoss&email=bodfdsfbm@mail.com&password=213&role=1", true);
	xhttp.send();
}