var personName;
var stAnswers = [];
var amountCorrect = 0;
function check(){
  if (personName == "") {
    event.preventDefault();
    window.alert("Enter your name before proceeding!")
  }
  else if (isNaN(personName) == false) {
    event.preventDefault();
    window.alert("Your name cannot consist of numbers!")
  }
}
function saveName(){
  var input = document.getElementById("save").value;
  console.log(input);
  setCookie("name", input);
  personName = input;
}
function getName(){
  var userInput = getCookie("name");
  document.getElementById("name1").innerHTML = "Hello" + " " + userInput;
}
function loadName(){
  var personName = getCookie("name");
}
function submitInput1(){
var answer1;
answer1 = document.getElementById("i1").value;
answer1 = answer1.toLowerCase(answer1);
stAnswers.push(answer1);
if (answer1 == "cardinals") {
  amountCorrect + 1;
  }
}
function submitInput2(){
var answer2;
answer2 = document.getElementById("i2").value;
answer2 = answer2.toLowerCase(answer2);
stAnswers.push(answer2);
if (answer2 == "falcons") {
  amountCorrect + 1;
  }
}
function submitInput3(){
var answer3;
answer3 = document.getElementById("i3").value;
answer3 = answer3.toLowerCase(answer3);
stAnswers.push(answer3);
if (answer3 == "ravens") {
  amountCorrect + 1;
  }
}
function submitInput4(){
var answer4;
answer4 = document.getElementById("i4").value;
answer4 = answer4.toLowerCase(answer4);
stAnswers.push(answer4);
if (answer4 == "bills") {
  amountCorrect + 1;
  }
}
function submitInput5(){
var answer5;
answer5 = document.getElementById("i5").value;
answer5 = answer5.toLowerCase(answer5);
stAnswers.push(answer5);
if (answer5 == "panthers") {
  amountCorrect + 1;
  }
}
function submitInput6(){
var answer6;
answer6 = document.getElementById("i6").value;
answer6 = answer6.toLowerCase(answer6);
stAnswers.push(answer6);
if (answer6 == "bears") {
  amountCorrect + 1;
  }
}
function submitInput7(){
var answer7;
answer7 = document.getElementById("i7").value;
answer7 = answer7.toLowerCase(answer7);
stAnswers.push(answer7);
if (answer7 == "bengals") {
  amountCorrect + 1;
  }
}
function submitInput8(){
var answer8;
answer8 = document.getElementById("i8").value;
answer8 = answer8.toLowerCase(answer8);
stAnswers.push(answer8);
if (answer8 == "browns") {
  amountCorrect + 1;
  }
}
function submitInput9(){
var answer9;
answer9 = document.getElementById("i9").value;
answer9 = answer9.toLowerCase(answer9);
stAnswers.push(answer9);
if (answer9 == "cowboys") {
  amountCorrect + 1;
  }
}
function submitInput10(){
var answer10;
answer10 = document.getElementById("i10").value;
answer10 = answer10.toLowerCase(answer10);
stAnswers.push(answer10);
if (answer10 == "broncos") {
  amountCorrect + 1;
  }
}
function submitInput11(){
var answer11;
answer11 = document.getElementById("i11").value;
answer11 = answer11.toLowerCase(answer11);
stAnswers.push(answer11);
if (answer11 == "lions") {
  amountCorrect + 1;
  }
}
function submitInput12(){
var answer12;
answer12 = document.getElementById("i12").value;
answer12 = answer12.toLowerCase(answer12);
stAnswers.push(answer12);
if (answer12 == "packers") {
  amountCorrect + 1;
  }
}
function submitInput13(){
var answer13;
answer13 = document.getElementById("i13").value;
answer13 = answer13.toLowerCase(answer13);
stAnswers.push(answer13);
if (answer13 == "texans") {
  amountCorrect + 1;
  }
}
function submitInput14(){
var answer14;
answer14 = document.getElementById("i14").value;
answer14 = answer14.toLowerCase(answer14);
stAnswers.push(answer14);
if (answer14 == "colts") {
  amountCorrect + 1;
  }
}
function submitInput15(){
var answer15;
answer15 = document.getElementById("i15").value;
answer15 = answer15.toLowerCase(answer15);
stAnswers.push(answer15);
if (answer15 == "jaguars") {
  amountCorrect + 1;
  }
}
function submitInput16(){
var answer16;
answer16 = document.getElementById("i16").value;
answer16 = answer16.toLowerCase(answer16);
stAnswers.push(answer16);
if (answer16 == "chiefs") {
  amountCorrect + 1;
  }
}
function submitInput17(){
var answer17;
answer17 = document.getElementById("i17").value;
answer17 = answer17.toLowerCase(answer17);
stAnswers.push(answer17);
if (answer17 == "rams") {
  amountCorrect + 1;
  }
}
function submitInput18(){
var answer18;
answer18 = document.getElementById("i18").value;
answer18 = answer18.toLowerCase(answer18);
stAnswers.push(answer18);
if (answer18 == "dolphins") {
  amountCorrect + 1;
  }
}
function submitInput19(){
var answer19;
answer19 = document.getElementById("i19").value;
answer19 = answer19.toLowerCase(answer19);
stAnswers.push(answer19);
if (answer19 == "vikings") {
  amountCorrect + 1;
  }
}
function submitInput20(){
var answer20;
answer20 = document.getElementById("i20").value;
answer20 = answer20.toLowerCase(answer20);
stAnswers.push(answer20);
if (answer20 == "patriots") {
  amountCorrect + 1;
  }
}
function submitInput21(){
var answer21;
answer21 = document.getElementById("i21").value;
answer21 = answer21.toLowerCase(answer21);
stAnswers.push(answer21);
if (answer21 == "saints") {
  amountCorrect + 1;
  }
}
function submitInput22(){
var answer22;
answer22 = document.getElementById("i22").value;
answer22 = answer22.toLowerCase(answer22);
stAnswers.push(answer22);
if (answer22 == "giants") {
  amountCorrect + 1;
  }
}
function submitInput23(){
var answer23;
answer23 = document.getElementById("i23").value;
answer23 = answer23.toLowerCase(answer23);
stAnswers.push(answer23);
if (answer23 == "eagles") {
  amountCorrect + 1;
  }
}
function submitInput24(){
var answer24;
answer24 = document.getElementById("i24").value;
answer24 = answer24.toLowerCase(answer24);
stAnswers.push(answer24);
if (answer24 == "chargers") {
  amountCorrect + 1;
  }
}
function submitInput25(){
var answer25;
answer25 = document.getElementById("i25").value;
answer25 = answer25.toLowerCase(answer25);
stAnswers.push(answer25);
if (answer25 == "buccaneers") {
  amountCorrect + 1;
  }
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
