// import axios from "axios";
// axios.defaults.withCredentials = true;

let signin = document.getElementById("signin");
let signout = document.getElementById("signout");
let signup = document.getElementById("signup");

let signinData = { email: "lee@gamil.com", password: "1234" };
let signoutData = 5;
let signupData = {
  userName: "vikki",
  favBrand: "나이키",
  email: "email@email.com",
  phoneNumber: "010-9973-7057",
  password: "1234567",
};

signin.addEventListener("click", (e) => {
  fetch("https://localhost:4000/users/signin", {
    method: "POST", // or 'PUT'
    body: JSON.stringify({ email: "lee@gamil.com", password: "1234" }), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
});
// signout.addEventListener("click", callback(signoutData, "signout"));
// signup.addEventListener("click", callback(signupData, "signup"));
