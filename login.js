    function validateForm() {
        var un = document.loginform.usr.value;
        var pw = document.loginform.pword.value;
        var username = "a"; 
        var password = "a";
        if ((un == username) && (pw == password)) {
        //window.location = "dashboard.html";
            return false;
        }
        else {
            window.location = "shit.html";
            return false;
        }
  }
