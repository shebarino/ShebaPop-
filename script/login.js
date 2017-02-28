var users = [
    { username: 'guest', password: 'guest' },
];

var button = document.getElementById('login');

button.onclick = function() {
   var username = document.getElementById('username').value;
   var password = document.getElementById('password').value; 

   for (var i = 0; i < users.length; i++) {
      if(username == users[i].username && password == users[i].password) {
         window.location.href = 'dashboard.html';
         break;
      }else{
         document.getElementById("un.error").style.display=""
      }
   }
}

