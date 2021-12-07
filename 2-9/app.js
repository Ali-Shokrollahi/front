function showPassword() {
    var elem = document.getElementById("password-input");
    if (elem.type === "password") {
        elem.type = "text";
    } 
    
    else {
        elem.type = "password";
    }
}