var vgAnswers = [];
var amountCorrect = 0;
function getName(){
  var userInput = getCookie("name");
  document.getElementById("name1").innerHTML = "Hello" + " " + userInput + ",";
}
function results(){
  setCookie("numberCorrect", amountCorrect);
  vgAnswers = vgAnswers.toString();
  setCookie("arrayCorrect", vgAnswers);
}
function loadResults(){
  var total = 0;
  var userInput = getCookie("name");
  document.getElementById("name1").innerHTML = "Hello" + " " + userInput + ",";
  var correct = getCookie("numberCorrect");
  correct = correct / 25;
  correct = correct * 100;
  var wrongCorrect = getCookie("arrayCorrect");
  if (wrongCorrect.indexOf("aatrox") != -1) {
    total = total + 1;
  }
  if (wrongCorrect.indexOf("chogath") != -1) {
    total = total + 1;
  }
  if (wrongCorrect.indexOf("amumu") != -1) {
    total = total + 1;
  }
  if (wrongCorrect.indexOf("blitzcrank") != -1) {
    total = total + 1;
  }
  if (wrongCorrect.indexOf("fizz") != -1) {
    total = total + 1;
  }
  if (wrongCorrect.indexOf("ahri") != -1) {
    total = total + 1;
  }
  if (wrongCorrect.indexOf("alistar") != -1) {
    total = total + 1;
  }
  if (wrongCorrect.indexOf("galio") != -1) {
    total = total + 1;
  }
  if (wrongCorrect.indexOf("brand") != -1) {
    total = total + 1;
  }
  if (wrongCorrect.indexOf("fiddlesticks") != -1) {
    total = total + 1;
  }
  if (wrongCorrect.indexOf("hecarim") != -1) {
    total = total + 1;
  }
  if (wrongCorrect.indexOf("karthus") != -1) {
    total = total + 1;
  }
  if (wrongCorrect.indexOf("xerath") != -1) {
    total = total + 1;
  }
  if (wrongCorrect.indexOf("yasuo") != -1) {
    total = total + 1;
  }
  if (wrongCorrect.indexOf("ziggs") != -1) {
    total = total + 1;
  }
  if (wrongCorrect.indexOf("zed") != -1) {
    total = total + 1;
  }
  if (wrongCorrect.indexOf("warwick") != -1) {
    total = total + 1;
  }
  if (wrongCorrect.indexOf("teemo") != -1) {
    total = total + 1;
  }
  if (wrongCorrect.indexOf("thresh") != -1) {
    total = total + 1;
  }
  if (wrongCorrect.indexOf("singed") != -1) {
    total = total + 1;
  }
  if (wrongCorrect.indexOf("nocturne") != -1) {
    total = total + 1;
  }
  if (wrongCorrect.indexOf("malzahar") != -1) {
    total = total + 1;
  }
  if (wrongCorrect.indexOf("kennen") != -1) {
    total = total + 1;
  }
  if (wrongCorrect.indexOf("kindred") != -1) {
    total = total + 1;
  }
  if (wrongCorrect.indexOf("gangplank") != -1) {
    total = total + 1;
  }
  total = total / 25;
  total = total * 100;
  document.getElementById("resultText").innerHTML = correct + "% " + "correct." + "<br>"
  + total + "% " + "correct names but wrong places."
}
function submitInput1(){
var answer1;
answer1 = document.getElementById("i1").value;
answer1 = answer1.toLowerCase(answer1);
vgAnswers.push(answer1);
document.getElementById("i1").disabled = true;
if (answer1 == "aatrox") {
  amountCorrect = amountCorrect + 1;
  }
}
function submitInput2(){
var answer2;
answer2 = document.getElementById("i2").value;
answer2 = answer2.toLowerCase(answer2);
vgAnswers.push(answer2);
document.getElementById("i2").disabled = true;
if (answer2 == "chogath") {
  amountCorrect = amountCorrect + 1;
  }
}
function submitInput3(){
var answer3;
answer3 = document.getElementById("i3").value;
answer3 = answer3.toLowerCase(answer3);
vgAnswers.push(answer3);
document.getElementById("i3").disabled = true;
if (answer3 == "amumu") {
  amountCorrect = amountCorrect + 1;
  }
}
function submitInput4(){
var answer4;
answer4 = document.getElementById("i4").value;
answer4 = answer4.toLowerCase(answer4);
vgAnswers.push(answer4);
document.getElementById("i4").disabled = true;
if (answer4 == "blitzcrank") {
  amountCorrect = amountCorrect + 1;
  }
}
function submitInput5(){
var answer5;
answer5 = document.getElementById("i5").value;
answer5 = answer5.toLowerCase(answer5);
vgAnswers.push(answer5);
document.getElementById("i5").disabled = true;
if (answer5 == "fizz") {
  amountCorrect = amountCorrect + 1;
  }
}
function submitInput6(){
var answer6;
answer6 = document.getElementById("i6").value;
answer6 = answer6.toLowerCase(answer6);
vgAnswers.push(answer6);
document.getElementById("i6").disabled = true;
if (answer6 == "ahri") {
  amountCorrect = amountCorrect + 1;
  }
}
function submitInput7(){
var answer7;
answer7 = document.getElementById("i7").value;
answer7 = answer7.toLowerCase(answer7);
vgAnswers.push(answer7);
document.getElementById("i7").disabled = true;
if (answer7 == "alistar") {
  amountCorrect = amountCorrect + 1;
  }
}
function submitInput8(){
var answer8;
answer8 = document.getElementById("i8").value;
answer8 = answer8.toLowerCase(answer8);
vgAnswers.push(answer8);
document.getElementById("i8").disabled = true;
if (answer8 == "galio") {
  amountCorrect = amountCorrect + 1;
  }
}
function submitInput9(){
var answer9;
answer9 = document.getElementById("i9").value;
answer9 = answer9.toLowerCase(answer9);
vgAnswers.push(answer9);
document.getElementById("i9").disabled = true;
if (answer9 == "brand") {
  amountCorrect = amountCorrect + 1;
  }
}
function submitInput10(){
var answer10;
answer10 = document.getElementById("i10").value;
answer10 = answer10.toLowerCase(answer10);
vgAnswers.push(answer10);
document.getElementById("i10").disabled = true;
if (answer10 == "fiddlesticks") {
  amountCorrect = amountCorrect + 1;
  }
}
function submitInput11(){
var answer11;
answer11 = document.getElementById("i11").value;
answer11 = answer11.toLowerCase(answer11);
vgAnswers.push(answer11);
document.getElementById("i11").disabled = true;
if (answer11 == "hecarim") {
  amountCorrect = amountCorrect + 1;
  }
}
function submitInput12(){
var answer12;
answer12 = document.getElementById("i12").value;
answer12 = answer12.toLowerCase(answer12);
vgAnswers.push(answer12);
document.getElementById("i12").disabled = true;
if (answer12 == "karthus") {
  amountCorrect = amountCorrect + 1;
  }
}
function submitInput13(){
var answer13;
answer13 = document.getElementById("i13").value;
answer13 = answer13.toLowerCase(answer13);
vgAnswers.push(answer13);
document.getElementById("i13").disabled = true;
if (answer13 == "xerath") {
  amountCorrect = amountCorrect + 1;
  }
}
function submitInput14(){
var answer14;
answer14 = document.getElementById("i14").value;
answer14 = answer14.toLowerCase(answer14);
vgAnswers.push(answer14);
document.getElementById("i14").disabled = true;
if (answer14 == "yasuo") {
  amountCorrect = amountCorrect + 1;
  }
}
function submitInput15(){
var answer15;
answer15 = document.getElementById("i15").value;
answer15 = answer15.toLowerCase(answer15);
vgAnswers.push(answer15);
document.getElementById("i15").disabled = true;
if (answer15 == "ziggs") {
  amountCorrect = amountCorrect + 1;
  }
}
function submitInput16(){
var answer16;
answer16 = document.getElementById("i16").value;
answer16 = answer16.toLowerCase(answer16);
vgAnswers.push(answer16);
document.getElementById("i16").disabled = true;
if (answer16 == "zed") {
  amountCorrect = amountCorrect + 1;
  }
}
function submitInput17(){
var answer17;
answer17 = document.getElementById("i17").value;
answer17 = answer17.toLowerCase(answer17);
vgAnswers.push(answer17);
document.getElementById("i17").disabled = true;
if (answer17 == "warwick") {
  amountCorrect = amountCorrect + 1;
  }
}
function submitInput18(){
var answer18;
answer18 = document.getElementById("i18").value;
answer18 = answer18.toLowerCase(answer18);
vgAnswers.push(answer18);
document.getElementById("i18").disabled = true;
if (answer18 == "teemo") {
  amountCorrect = amountCorrect + 1;
  }
}
function submitInput19(){
var answer19;
answer19 = document.getElementById("i19").value;
answer19 = answer19.toLowerCase(answer19);
vgAnswers.push(answer19);
document.getElementById("i19").disabled = true;
if (answer19 == "thresh") {
  amountCorrect = amountCorrect + 1;
  }
}
function submitInput20(){
var answer20;
answer20 = document.getElementById("i20").value;
answer20 = answer20.toLowerCase(answer20);
vgAnswers.push(answer20);
document.getElementById("i20").disabled = true;
if (answer20 == "singed") {
  amountCorrect = amountCorrect + 1;
  }
}
function submitInput21(){
var answer21;
answer21 = document.getElementById("i21").value;
answer21 = answer21.toLowerCase(answer21);
vgAnswers.push(answer21);
document.getElementById("i21").disabled = true;
if (answer21 == "nocturne") {
  amountCorrect = amountCorrect + 1;
  }
}
function submitInput22(){
var answer22;
answer22 = document.getElementById("i22").value;
answer22 = answer22.toLowerCase(answer22);
vgAnswers.push(answer22);
document.getElementById("i22").disabled = true;
if (answer22 == "malzahar") {
  amountCorrect = amountCorrect + 1;
  }
}
function submitInput23(){
var answer23;
answer23 = document.getElementById("i23").value;
answer23 = answer23.toLowerCase(answer23);
vgAnswers.push(answer23);
document.getElementById("i23").disabled = true;
if (answer23 == "kennen") {
  amountCorrect = amountCorrect + 1;
  }
}
function submitInput24(){
var answer24;
answer24 = document.getElementById("i24").value;
answer24 = answer24.toLowerCase(answer24);
vgAnswers.push(answer24);
document.getElementById("i24").disabled = true;
if (answer24 == "kindred") {
  amountCorrect = amountCorrect + 1;
  }
}
function submitInput25(){
var answer25;
answer25 = document.getElementById("i25").value;
answer25 = answer25.toLowerCase(answer25);
vgAnswers.push(answer25);
document.getElementById("i25").disabled = true;
if (answer25 == "gangplank") {
  amountCorrect = amountCorrect + 1;
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
