var name = prompt("Enter Username", "Yaman Aamir");
var num = prompt("Enter Phone Number", "03232323232");
var email = prompt("Enter Email", "Yaman@gmail.com");
var pass = prompt("Enter Password");
var conPass = prompt("Enter Confirm Password");


// For User name
if (name == "" || name == " ") {
    alert("Please input Username")
}

// For Phone num
if (num == "" || num == " ") {
    alert("Please input Phone Number")
}

// For Email
if (email == "" || email == " ") {
    alert("Please input Email")
}

// For matching password
if (pass == "" || pass == " " && conPass == "" || conPass == " ") {
    alert("Please input Password")
    alert("Please input Confirm Password")
} else if (pass == conPass) {
    alert("You are successfully registered")
} else {
    alert("Password should be same")
}