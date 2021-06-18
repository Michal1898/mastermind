attempt = {
    no: 0,
    string: [0, 0, 0, 0, 0], 
    black_stick: 0,
    white_stick: 0,
};

game_structure = {
    secret_code: [0, 0, 0, 0, 0],
    try: [attempt, attempt, attempt, attempt, attempt, attempt, attempt, attempt, attempt, attempt],
    current_attempt: 0,
    score : 0,
}


let your_code=[0, 0, 0, 0, 0] ;
let secret_code=[1, 2, 3, 4, 5] ;

let black_stick=0 ;
let white_stick=0;

game_print();
attempt_number_print(); 

function attempt_number_print() {
   var attempt_no="Pokus ";
   attempt_no+=game_structure.current_attempt ;
   attempt_no+="<br>";
    document.getElementById("pokus_c").innerHTML =attempt_no; 
}

function game_print() {
    var game_zone=" Secret Code: ";
    game_zone+=game_structure.secret_code ;
    game_zone+=" <br> ";

    var i;
    for (i = 0; i < 10; i++) {
        game_zone+=JSON.stringify(game_structure.try[i]);
        game_zone+=": <br> ";
        }

    document.getElementById("game_zone").innerHTML = JSON.stringify(game_zone);
    }


function random_digit_generator() {
    var x= Math.floor(Math.random()*8)+1
    return x
}

    
    
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
    var i;
    for (i = 0; i < secret_code.length; i++) {
        secret_code[i]=random_digit_generator();
        }
         
	document.getElementById("secret_c").innerHTML = "Secret code: " + secret_code;
	black_stick=random_digit_generator()      
    white_stick=random_digit_generator()     
    document.getElementById("black_s").innerHTML = "uhadnute: " + black_stick;
	document.getElementById("white_s").innerHTML = "trefena barva: " + white_stick;
	return white_stick
}

