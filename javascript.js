function clearPasswords() {
   // document.getElementById("display").innerHTML = "";
    //document.getElementById("lastPasswords").innerHTML = "";
    console.clear();
}

//function for generating password

function generatePassword() {

    //set complecity of password and variables
    let comp = document.getElementById("slider").value;
    let symbBox = document.getElementById("symbol");
    let numBox = document.getElementById("number");
    let uppCase = document.getElementById("upper");
    let lowCase = document.getElementById("lower");

    const symbols = "~!@#$%^&*()_+{}:?><;.,";
    const numb = "1234567890";
    const upperCase = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnoprstuvwxyz";
    let password = "";



    var char = "";
    (symbBox.checked) ? char += symbols : "";
    (numBox.checked) ? char += numb : "";
    (uppCase.checked) ? char += upperCase : "";
    (lowCase.checked) ? char += lowerCase : "";

    for (var i = 0; i < comp; i++) {
        password = password + char.charAt(Math.floor(Math.random() * (char.length - 1)));
    }
    //add password to display
    document.getElementById("display").value = password;

    //add password to lastPasswords
    document.getElementById("lastPasswords").innerHTML += password + "<br/>";

}

// setting default length
document.getElementById("length").innerHTML = "Length: 20";

//function for seeting length of password based on slider's value

document.getElementById("slider").oninput = function () {
    var sliderValue = document.getElementById("slider").value;
    if (sliderValue > 0) {
        document.getElementById("length").innerHTML = "Length:" + sliderValue;
    }
    else {
        document.getElementById("length").innerHTML = "Length: 1";
    }
}
//setting up ability to copy password
function copyPassword() {
    document.getElementById("display").select();

    document.execCommand("Copy");
    alert("Password copied");
}
function clearPasswords() {
    document.getElementById("display").value = "";
     document.getElementById("lastPasswords").innerHTML = "";
 }