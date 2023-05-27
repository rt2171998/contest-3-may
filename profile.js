let dataobj = JSON.parse(localStorage.getItem("user"));
const profile_section = document.querySelector(".profile");
function generateProfile() {
  let html = `<h3>Profile</h3>
    <p>Name: <span>${dataobj.name}</span></p>
    <p>Email: <span>${dataobj.email}</span></p>
    <p>Password: <span>${dataobj.password}</span></p>
    <button id="logout-btn">Logout</button>`;
  profile_section.insertAdjacentHTML("afterbegin", html);
}
generateProfile();
const logout_btn = document.getElementById("logout-btn");

logout_btn.addEventListener("click", () => {
  dataobj = {
    name: null,
    email: null,
    password: null,
    c_password: null,
    token: null,
  };
  localStorage.setItem("user", JSON.stringify(dataobj));
  window.location.href = "index.html";
});

function signup() {
  window.location.href = "profile.html";
}
