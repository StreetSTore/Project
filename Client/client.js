function myFunction1(num1, num2) {
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			num1 = Math.floor(num1);
			num2 = Math.floor(num2);
			document.getElementById("result1").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "http://localhost:8080?num1=" + num1 + "&num2=" + num2, true);
	xhttp.send();
}

function myFunction2(num3, num4) {
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			num3 = Math.floor(num3);
			num4 = Math.floor(num4);
			document.getElementById("result2").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "http://localhost:8080?num3=" + num3 + "&num4=" + num4, true);
	xhttp.send();
}