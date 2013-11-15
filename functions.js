document.addEventListener('DOMContentLoaded', function() {document.getElementById("btn").addEventListener('click', twrResult);});

function twrResult()
{
var gravity = 0;
var planet = document.getElementById("planet");	
var thrust = document.getElementById("thrust");
var mass = document.getElementById("mass");



var label = document.getElementById("twr");
var msg = document.getElementById("twrmsg");



if (planet.value.toLowerCase() == "kerbin")
{
	gravity = 9.81;
}

var result = thrust.value / (mass.value * gravity);
label.innerHTML = result;

if(result > 1)
{
	msg.innerHTML.fontcolor("green");
	msg.innerHTML = capitalize(planet.value) + " Liftoff: true"; 
	
	}
else if(result < 1)
{
	msg.innerHTML = capitalize(planet.value) + " Liftoff: false"; 
	msg.innetHTML.fontcolor("red");
}

//alert('works');

}

function capitalize(s)
{
	return s[0].toUpperCase() + s.slice(1);
}