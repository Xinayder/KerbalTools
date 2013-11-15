document.addEventListener('DOMContentLoaded', function() {document.getElementById("btn").addEventListener('click', twrResult);});

function twrResult()
{
var gravity = 0;
var planet = document.getElementById("planet");	
var thrust = document.getElementById("thrust");
var mass = document.getElementById("mass");



var label = document.getElementById("twr");
var msg = document.getElementById("twrmsg");

switch (planet.value.toLowerCase())
{
	case "kerbol":
		gravity = 17.1;
	case "moho":
		gravity = 2.70;
	case "eve":
		gravity = 16.7;
	case "gilly":
		gravity = 0.049;
	case "kerbin":
		gravity = 9.81;
	case "moon":
	case "mün":
	case "mun":
		gravity = 1.63;
	case "duna":
		gravity = 2.94;
	case "ike":
		gravity = 1.10;
	case "dres":
		gravity = 1.13;
	case "jool":
		gravity = 7.85;
	case "laythe":
		gravity = 7.85;
	case "vall":
		gravity = 2.31;
	case "tylo":
		gravity = 7.85;
	case "bop":
		gravity = 0.589;
	case "pol":
		gravity = 0.373;
	case "eeloo":
		gravity = 1.69;
	default:
		gravity = 9.81;
}

var result = thrust.value / (mass.value * gravity); // Tsiolkovsky's rocket equation
label.innerHTML = result;

if(result > 1)
{
<<<<<<< HEAD
	msg.innerHTML.fontcolor("green"); // not working, need to know why
	msg.innerHTML = capitalize(planet.value) + " Liftoff: true";
=======
	
	msg.innerHTML = capitalize(planet.value) + " Liftoff: true"; 
	msg.style.color="green";
>>>>>>> switch statement added
	
	}
else if(result < 1)
{
	msg.innerHTML = capitalize(planet.value) + " Liftoff: false"; 
<<<<<<< HEAD
	msg.innetHTML.fontcolor("red"); // not working, need to know why
=======
	msg.style.color="crimson";
>>>>>>> switch statement added
}

//alert('works');

}

function capitalize(s)
{
	return s[0].toUpperCase() + s.slice(1);
}
