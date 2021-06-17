let secret_code=[0,0,0,0,0]
document.getElementById("secret").innerHTML = "Secret code: " + secret_code;
function myFunction0() {
  var x = document.getElementById("digit0").value;
  secret_code[0]=x
  document.getElementById("digit_zero").innerHTML = "Digit 0: " + x;
  document.getElementById("secret").innerHTML = "Secret code: " + secret_code;
  return x
}

function myFunction1() {
  var x = document.getElementById("digit1").value;
  secret_code[1]=x
  document.getElementById("digit_one").innerHTML = "Digit 1: " + x;
  document.getElementById("secret").innerHTML = "Secret code: " + secret_code;
  return x
}

function myFunction2() {
  var x = document.getElementById("digit2").value;
  secret_code[2]=x
  document.getElementById("digit_two").innerHTML = "Digit 2: " + x;
  document.getElementById("secret").innerHTML = "Secret code: " + secret_code;
  return x
}

function myFunction3() {
  var x = document.getElementById("digit3").value;
  secret_code[3]=x
  document.getElementById("digit_three").innerHTML = "Digit 3: " + x;
  document.getElementById("secret").innerHTML = "Secret code: " + secret_code;
  return x
}

function myFunction4() {
  var x = document.getElementById("digit4").value;
  secret_code[4]=x
  document.getElementById("digit_four").innerHTML = "Digit 4: " + x;
  document.getElementById("secret").innerHTML = "Secret code: " + secret_code;
  return x
}