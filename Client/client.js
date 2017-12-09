function myFunction1(num1, num2) {
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			num1 = Math.floor(num1);
			num2 = Math.floor(num2);
			document.getElementById("result1").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "http://localhost:8080?method=calc&num1=" + num1 + "&num2=" + num2, true);
	xhttp.send();
}

function myFunction2() {
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var response = JSON.parse(this.responseText);
			document.getElementById("name").innerHTML = response[0].name;
			document.getElementById("type").innerHTML = response[0].type;
			document.getElementById("sub-sype").innerHTML = response[0].sub_type;
			document.getElementById("phone").innerHTML = response[0].phone;
			document.getElementById("description").innerHTML = response[0].description;
		}
	};
	xhttp.open("GET", "http://localhost:8080?method=retrieveStoreForPopup&hpid=65481", true);
	xhttp.send();
}