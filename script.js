const form = document.querySelector("#myform");
const name_el = document.querySelector("#name");
const email_el = document.querySelector("#email");
const password_el = document.querySelector("#password");
const password_el_sec = document.querySelector(".pass");
const error_el = document.querySelector(".error-success");

let userdata = JSON.parse(localStorage.getItem("user")) || {
  name: null,
  email: null,
  password: null,
  c_password: null,
  token: null,
};
console.log(userdata);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("success");
  if (
    name_el.value == "" ||
    email_el.value == "" ||
    password_el.value == "" ||
    password_el_sec.value == ""
  ) {
    console.log("error");
    error_el.innerHTML = "Error: All the fiels are mandatory!";
    error_el.style.display = "block";
    error_el.style.color = "red";
    return;
  } else {
    let tokenvalue = getAccessToken();
    userdata.name = name_el.value;
    userdata.email = email_el.value;
    userdata.password = password_el.value;
    userdata.c_password = password_el_sec.value;
    userdata.token = tokenvalue;
    localStorage.setItem("user", JSON.stringify(userdata));
    error_el.innerHTML = "Successfully Signed Up!!";
    error_el.style.display = "block";
    error_el.style.color = "green";

    console.log(userdata);
    window.location.href = "profile.html";
  }
});

function getAccessToken() {
  var alpha = "0123456789ABCDEFGHIJabcdefghij";
  var token = "";
  for (var i = 0; i < 16; i++) {
    token += alpha.charAt(Math.floor(Math.random() * 30));
  }
  return token;
}
console.log(getAccessToken());

function myprofile() {
  console.log("profile btn");
  userdata = JSON.parse(localStorage.getItem("user"));
  if (userdata.token == null) {
    window.location.href = "index.html";
  } else if (userdata.token) {
    window.location.href = "profile.html";
  }
}
