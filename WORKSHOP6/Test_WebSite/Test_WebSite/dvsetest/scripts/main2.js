function load()
{     $(".prezentare").hide();
       $(".echipa").hide();
	   $("#contact").hide();
	   $(".inregistrare").hide();
	   $(".calc").hide();
	   $(".clock").hide();
	   $(".logare").hide();
	   $("#maincontent").hide();
	setTimeout(function(){
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
	
function Reset(){
	
	txt1.value ='';
	txt2.value ='';
    document.getElementById('result').innerHTML = ''; 
	
}

function GetOptions() {
    
        var option = document.getElementById("tipOperatie");
        if (option.selectedIndex == 0) {
            multiplyFuntion();
           document.getElementById('result').innerHTML = c;
        }
        else if (option.selectedIndex == 1) {
            decreaseFunction();

        }
		else if (option.selectedIndex == 2) 
		{
			multiplyFuntion();
			
			
		} else if (option.selectedIndex == 3)
			
			{
				divFunction();
				
			}
}



    function addFunction() {
        var a = parseInt(document.getElementById("txt1").value);
        var b = parseInt(document.getElementById("txt2").value);
        var c = a + b;
        
        if (txt1.value.length || txt2.value.length != 0) {

		document.getElementById('result').innerHTML = c;
           console.log(c);
        }
        else {
            alert("Introdu o valoare shefu!");
        }
    }

    function decreaseFunction() {
        var a = parseInt(document.getElementById("txt1").value);
        var b = parseInt(document.getElementById("txt2").value);
        var c = a - b;

        if (txt1.value.length || txt2.value.length != 0) {

            
		document.getElementById('result').innerHTML = c;
           console.log(c);
        }
        else {
            alert("Introdu o valoare shefu!");
        }
    }
	
	
	function multiplyFuntion() {
		
		 var a = parseInt(document.getElementById("txt1").value);
        var b = parseInt(document.getElementById("txt2").value);
        var c = a * b;

        if (txt1.value.length || txt2.value.length != 0) {

            
		document.getElementById('result').innerHTML = c;
           console.log(c);
        }
        else {
            alert("Introdu o valoare shefu!");
        }
		
		
	}
	
	function divFunction(){
		
		 var a = parseInt(document.getElementById("txt1").value);
        var b = parseInt(document.getElementById("txt2").value);
        var c = a/b;

        if (txt1.value.length || txt2.value.length != 0) {

            
		document.getElementById('result').innerHTML = c;
           console.log(c);
        }
        else {
            alert("Introdu o valoare shefu!");
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
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

 function showHide()
 {
	 if(document.getElementById("demo").style.display == "none" || document.getElementById("demo").style.display=="")
	 {
		document.getElementById("demo").style.display = "block";	 
	 }	 
     else{
		document.getElementById("demo").style.display = "none"
 }
	 	 
 }
 
  function showHideEchipaWeb()
 {
	 if(document.getElementById("demo_web").style.display == "none" || document.getElementById("demo_web").style.display=="")
	 {
		document.getElementById("demo_web").style.display = "none";	 
	 }	 
     else{
		document.getElementById("demo_web").style.display = "none";
 }
	 
	 
 }
 
   function showHideEchipaData()
 {
	 if(document.getElementById("demo_data").style.display == "none" || document.getElementById("demo_data").style.display=="")
	 {
		document.getElementById("demo_data").style.display = "block";	 
	 }	 
     else{
		document.getElementById("demo_data").style.display = "none";
 }
	 
	 
 }
 
 function showHideEchipaMob()
 {
	 if(document.getElementById("demo_mob").style.display == "none" || document.getElementById("demo_mob").style.display=="")
	 {
		document.getElementById("demo_mob").style.display = "block";	 
	 }	 
     else{
		document.getElementById("demo_mob").style.display = "none";
 }
	 
	 
 }
 
   function showHideEchipaTest()
 {
	 if(document.getElementById("demo_test").style.display == "none" || document.getElementById("demo_test").style.display=="")
	 {
		document.getElementById("demo_test").style.display = "block";	 
	 }	 
     else{
		document.getElementById("demo_test").style.display = "none";
 }
	 
	 
 }
 
   function showHideEchipaWPF()
 {
	 if(document.getElementById("demo_wpf").style.display == "none" || document.getElementById("demo_wpf").style.display=="")
	 {
		document.getElementById("demo_wpf").style.display = "block";	 
	 }	 
     else{
		document.getElementById("demo_wpf").style.display = "none";
 }	 
	 
 }
	
function disable() {
    document.getElementById("tipOperatie").disabled=true;
}


function enable() {
    document.getElementById("tipOperatie").disabled=false;
}

function bgChange(bg) {
    document.body.style.background = bg;
}

function disable_dropdown(){
	 if(document.getElementById("studii").value == "Liceu" || document.getElementById("studii").value == "Facultate" || document.getElementById("studii").value == "Scoala Generala" ||  document.getElementById("studii").value == "Postliceala")
	 {
	 document.getElementById("studii").disabled=true;
	 }
	 else 
	 {
		  document.getElementById("studii").disabled=false;		 
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
        xmlhttp.open("GET","getuser.php?q="+str,true);
        xmlhttp.send();
    }	
	
}