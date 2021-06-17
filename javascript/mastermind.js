let your_code=[0, 0, 0, 0, 0] 
let secret_code=[1, 2, 3, 4, 5] 
let black_stick=0 
let white_stick=0

document.getElementById("your_c").innerHTML = "Your code: " + your_code;
document.getElementById("black_s").innerHTML = "uhadnute: " + black_stick;
document.getElementById("white_s").innerHTML = "trefena barva: " + white_stick;

function myFunction0() {
	var x = document.getElementById("digit0").value;
	your_code[0]=x   
    document.getElementById("digit_zero").innerHTML = "Digit 0: " + x;
	document.getElementById("your_c").innerHTML = "Your code: " + your_code;
	return x
}
function myFunction1() {
	var x = document.getElementById("digit1").value;
	your_code[1]=x   
    document.getElementById("digit_one").innerHTML = "Digit 1: " + x;
	document.getElementById("your_c").innerHTML = "Your code: " + your_code;
	return x
}
function myFunction2() {
	var x = document.getElementById("digit2").value;
	your_code[2]=x   
    document.getElementById("digit_two").innerHTML = "Digit 2: " + x;
	document.getElementById("your_c").innerHTML = "Your code: " + your_code;
	return x
}
function myFunction3() {
	var x = document.getElementById("digit3").value;
	your_code[3]=x   
    document.getElementById("digit_three").innerHTML = "Digit 3: " + x;
	document.getElementById("your_c").innerHTML = "Your code: " + your_code;
	return x
}
function myFunction4() {
	var x = document.getElementById("digit4").value;
	your_code[4]=x   
    document.getElementById("digit_four").innerHTML = "Digit 4: " + x;
	document.getElementById("your_c").innerHTML = "Your code: " + your_code;
	return x
}

function code_compare() {
	document.getElementById("secret_c").innerHTML = "Secret code: " + secret_code;
	black_stick=1      
    white_stick=2      
    document.getElementById("black_s").innerHTML = "uhadnute: " + black_stick;
	document.getElementById("white_s").innerHTML = "trefena barva: " + white_stick;
	return white_stick
}
