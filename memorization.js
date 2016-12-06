var personName = "";
var name = getCookie("name");
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
  document.getElementById("name1").innerHTML = "Hello" + " " + name;
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
