function FormValidation() {
    var fn = document.getElementById('nom').value;
    if (fn.length <= 2 || fn.length > 30) {

        document.getElementById('nom').style.borderColor = "red";
        return false;
    }
    if(email.value.indexOf("@", 0) < 0) {
        alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
      }

    else {
        document.getElementById('nom').style.borderColor = "green";
     }
    
}
  