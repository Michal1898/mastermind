
let your_code=[0, 0, 0, 0, 0] ;
let secret_code=[1, 2, 3, 4, 5] ;

let black_stick=0 ;
let white_stick=0;

attempt = {
    no: 0,
    code: [0, 0, 0, 0, 0], 
    black_stick: 0,
    white_stick: 0,
};

game_structure = {
    secret_code: [0, 0, 0, 0, 0],
    try: [attempt, attempt, attempt, attempt, attempt, attempt, attempt, attempt, attempt, attempt],
    current_attempt: 0,
    score : 0,
    };
    
function clear_attempt_slot(i) {
    var attempt_temp = attempt ;
    attempt_temp.no = i ;
    attempt_temp.code = [0, 0, 0, 0, 0] ;
    attempt_temp.black_stick = 0 ;
    attempt_temp.white_stick =0 ;  
    game_structure.try[2]=attempt_temp;  
    game_structure.try[7]=attempt_temp;  
}

function attempt_number_print() {
   var attempt_no="Pokus ";
   attempt_no+=game_structure.current_attempt + 1 ;
   attempt_no+=" : <br>";
    document.getElementById("pokus_c").innerHTML = attempt_no; 
}

function game_print() {
    var game_zone=" Secret Code: ";
    game_zone+=game_structure.secret_code ;
    game_zone+=" <br> ";

    var i;
    for (i = 0; i < 10; i++) {
        game_zone+=i;
        game_zone+=JSON.stringify(game_structure.try[i]);
        game_zone+=": <br> ";
        }

    document.getElementById("game_zone").innerHTML = JSON.stringify(game_zone);
    }


function random_digit_generator() {
    var x= Math.floor(Math.random()*8)+1;
    return x;
}

function your_code_print() {
    document.getElementById("digit_zero").innerHTML = "Digit 0: " + your_code[0];
    document.getElementById("digit_one").innerHTML = "Digit 1: " + your_code[1];
    document.getElementById("digit_two").innerHTML = "Digit 2: " + your_code[2];
    document.getElementById("digit_three").innerHTML = "Digit 3: " + your_code[3];
    document.getElementById("digit_four").innerHTML = "Digit 4: " + your_code[4];
    document.getElementById("your_c").innerHTML = "Your code: " + your_code;
}   
    
function myFunction0() {
	var x = document.getElementById("digit0").value;
	your_code[0]=x   
	your_code_print()
	return x
}
function myFunction1() {
	var x = document.getElementById("digit1").value;
	your_code[1]=x   
	your_code_print()
	return x
}
function myFunction2() {
	var x = document.getElementById("digit2").value;
	your_code[2]=x   
	your_code_print()
	return x
}
function myFunction3() {
	var x = document.getElementById("digit3").value;
	your_code[3]=x   
	your_code_print()
	return x
}
function myFunction4() {
	var x = document.getElementById("digit4").value;
	your_code[4]=x    
	your_code_print()
	return x
}

function code_compare() {
    var i=game_structure.current_attempt;
    attempt_temp=attempt;
    attempt_temp.no=i;
    attempt_temp.code=your_code;
    attempt_temp.black_stick=i+2;
    attempt_temp.white_stick=i-3;
    
    active_attempt="Pokus: ";
    active_attempt+=attempt_temp.no;
    active_attempt+=" Your Code: ";
    active_attempt+=attempt_temp.code;
    active_attempt+=" Black: ";
    active_attempt+=attempt_temp.black_stick;
    active_attempt+=" White: ";
    active_attempt+=attempt_temp.white_stick;
    //document.getElementById("active_att").innerHTML = active_attempt;
    
    game_structure.try[i]=attempt_temp;
    document.getElementById("active_att").innerHTML = JSON.stringify(game_structure.try[i]);
    game_structure.current_attempt+=1;
    game_print();
    //your_code_print();

}



function code_setter_init() {
    document.getElementById("digit0").value="Empty";
    document.getElementById("digit1").value="Empty";
    document.getElementById("digit2").value="Empty";
    document.getElementById("digit3").value="Empty";     
    document.getElementById("digit4").value="Empty";   
}

function secret_code_set() {
    var i;
    for (i = 0; i < secret_code.length; i++) {
        game_structure.secret_code[i]=random_digit_generator();
        }
}
        
function game_zone_init() {
    secret_code_set();
    code_setter_init();
    your_code=[0, 0, 0, 0, 0] ;
    your_code_print();
    var i;
    for (i = 0; i < 10; i++) {
        clear_attempt_slot(i);
    }
    game_print(); 
}
    
function play_again() {
    game_zone_init();
}



/*game_print();
attempt_number_print(); 
*/





