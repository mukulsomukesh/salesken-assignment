document.querySelector("form").addEventListener("submit", loginFun);

// submit form
function loginFun() {
  event.preventDefault();

  let loginSuccess = true;

  // get value from input
  var obj = {
    user_email: document.getElementById("user_email").value,
    user_password: document.getElementById("user_password").value,
  };

  // add user to local storage
  var userData = JSON.parse(localStorage.getItem("userData")) || [];

  // check user info
  userData.map((el) => {
    // if user found
    if ( el.user_email == obj.user_email && el.user_password == obj.user_password) {      
      
      // 
      localStorage.setItem('loginSuccess',JSON.stringify({userDetail:el}));
      
      // redirect to quiz.html
      window.open("index.html", "_self");

      loginSuccess=false;
    }
    else if(el.user_email == obj.user_email){
        // wrong password
        alert("wrong Password, Please Retry!")

        loginSuccess=false;
    }
  });

{loginSuccess? alert("User Not Found!"): "";}
  // redirect to login
}
