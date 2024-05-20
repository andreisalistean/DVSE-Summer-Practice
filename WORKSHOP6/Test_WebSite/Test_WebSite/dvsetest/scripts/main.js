function load() {
	$(".prezentare").hide();
	$(".echipa").hide();
	$("#contact").hide();
	$(".inregistrare").hide();
	$(".calc").hide();
	$(".clock").hide();
	$(".logare").hide();
	$("#maincontent").hide();
	setTimeout(function() {
		$(".loading").hide();
		$(".prezentare").show();
		$(".echipa").show();
		$("#contact").show();
		$(".inregistrare").show();
		$(".calc").show();
		$(".clock").show();
		$(".logare").show();
		$("#maincontent").show();
	}, 1000);
}

function Func() {
	alert("Mesaj trimis!");
}

function removeSpaces(string) {
	return string.split(' ').join('');
}
function replaceDots(string) {
	return string.split('.').join(',');
}
function validate(input) {
  var inputValue = $(input).val();
  
  var isValidEmail = isEmail(inputValue);
  
  if (isValidEmail)
	  $(input).css("background-color","green");
  else
	  $(input).css("background-color","red");
  
  
  
  // var input = document.createElement('input');
  // input.type='email';
  // input.value=document.getElementById('mail').value;
    
  // if (input.checkValidity()) {
    // $('.val').css("background-color","green");
  // } else {
    // $('.val').css("background-color","red");
  // }
    
  return false;
}


function isEmail(text) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(text);
}

$("#validate").bind("click", validate);

function Reset() {

	txt1.value = '';
	txt2.value = '';
	document.getElementById('result').innerHTML = '';

}

function GetOptions() {

	var option = document.getElementById("tipOperatie");
	if (option.selectedIndex == 0) {
		addFunction();
		document.getElementById('result').innerHTML = c;
	} else if (option.selectedIndex == 1) {
		decreaseFunction();

	} else if (option.selectedIndex == 2) {
		multiplyFuntion();


	} else if (option.selectedIndex == 3)

	{
		divFunction();

	} else if (option.selectedIndex == 4)

	{
		powFunction();

	}
}



function addFunction() {
	var a = parseInt(document.getElementById("txt1").value);
	var b = parseInt(document.getElementById("txt2").value);
	var c = a + b;

	if (txt1.value.length || txt2.value.length != 0) {

		document.getElementById('result').innerHTML = c;
		console.log(c);
	} else {
		alert("Introduceti o valoare");
	}
}

function decreaseFunction() {
	var a = parseInt(document.getElementById("txt1").value);
	var b = parseInt(document.getElementById("txt2").value);
	var c = a - b;

	if (txt1.value.length || txt2.value.length != 0) {


		document.getElementById('result').innerHTML = c;
		console.log(c);
	} else {
		alert("Introduceti o valoare");
	}
}


function multiplyFuntion() {

	var a = parseInt(document.getElementById("txt1").value);
	var b = parseInt(document.getElementById("txt2").value);
	var c = a * b;

	if (txt1.value.length || txt2.value.length != 0) {


		document.getElementById('result').innerHTML = c;
		console.log(c);
	} else {
		alert("Introduceti o valoare");
	}


}

function divFunction() {

	var a = parseInt(document.getElementById("txt1").value);
	var b = parseInt(document.getElementById("txt2").value);
	var c = a / b;

	if (txt1.value.length || txt2.value.length != 0) {


		document.getElementById('result').innerHTML = c;
		console.log(c);
	} else {
		alert("Introduceti o valoare");
	}



}

function powFunction() {

	var a = parseInt(document.getElementById("txt1").value);
	var b = parseInt(document.getElementById("txt2").value);
	var c = Math.pow(a, b);

	if (txt1.value.length || txt2.value.length != 0) {


		document.getElementById('result').innerHTML = c+1;
		console.log(c+1);
	} else {
		alert("Introduceti o valoare");
	}

}

function displayResult() {

	GetOptions();
}

function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('time').innerHTML =
		h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 500);
}

function checkTime(i) {
	if (i < 10) {
		i = "0" + i
	}; // add zero in front of numbers < 10
	return i;
}

function showHide() {
	if (document.getElementById("demo").style.display == "none" || document.getElementById("demo").style.display == "") {
		document.getElementById("demo").style.display = "block";
	} else {
		document.getElementById("demo").style.display = "none"
	}

}

function showHideEchipaWeb() {
	if (document.getElementById("demo_web").style.display == "none" || document.getElementById("demo_web").style.display == "") {
		document.getElementById("demo_web").style.display = "none";
	} else {
		document.getElementById("demo_web").style.display = "none";
	}


}

function showHideEchipaData() {
	if (document.getElementById("demo_data").style.display == "none" || document.getElementById("demo_data").style.display == "") {
		document.getElementById("demo_data").style.display = "block";
	} else {
		document.getElementById("demo_data").style.display = "none";
	}


}

function showHideEchipaMob() {
	if (document.getElementById("demo_mob").style.display == "none" || document.getElementById("demo_mob").style.display == "") {
		document.getElementById("demo_mob").style.display = "block";
	} else {
		document.getElementById("demo_mob").style.display = "none";
	}


}

function showHideEchipaTest() {
	if (document.getElementById("demo_test").style.display == "none" || document.getElementById("demo_test").style.display == "") {
		document.getElementById("demo_test").style.display = "block";
	} else {
		document.getElementById("demo_test").style.display = "none";
	}


}

function showHideEchipaWPF() {
	if (document.getElementById("demo_wpf").style.display == "none" || document.getElementById("demo_wpf").style.display == "") {
		document.getElementById("demo_wpf").style.display = "block";
	} else {
		document.getElementById("demo_wpf").style.display = "none";
	}

}

function disable() {
	document.getElementById("tipOperatie").disabled = true;
}


function enable() {
	document.getElementById("tipOperatie").disabled = false;
}

function bgChange(bg) {
	document.getElementById("third").style.background = bg;
}

function disable_dropdown() {
	if (document.getElementById("studii").value == "Liceu" || document.getElementById("studii").value == "Facultate" || document.getElementById("studii").value == "Scoala Generala" || document.getElementById("studii").value == "Postliceala") {
		document.getElementById("studii").disabled = true;
	} else {
		document.getElementById("studii").disabled = false;
	}
}

function showUser(str) {
	if (str == "") {
		document.getElementById("txtHint").innerHTML = "";
		return;
	} else {
		if (window.XMLHttpRequest) {
			// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp = new XMLHttpRequest();
		} else {
			// code for IE6, IE5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById("txtHint").innerHTML = this.responseText;
			}
		};
		xmlhttp.open("GET", "getuser.php?q=" + str, true);
		xmlhttp.send();
	}

}

function changePicture(){
document.getElementById("softDev").src="img/2.png";
}
function rollBackChangePicture(){
document.getElementById("softDev").src="img/3.png";
}