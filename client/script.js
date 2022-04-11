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

signin.addEventListener("click", async (e) => {
  let response = await fetch("https://localhost:4000/users/signin", {
    method: "POST", // or 'PUT'
    body: JSON.stringify({ email: "lee@gamil.com", password: "1234" }), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then((res) => res.json());
  console.log(response);
});

signout.addEventListener("click", (e) => {
  //clearCookie를 하기 위해 쿠키 접근 꼭 필요
  fetch(
    "https://localhost:4000/users/signout",

    {
      method: "POST", // or 'PUT'
      mode: "cors", //
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((res) => console.log(res));
});

// signup.addEventListener("click", callback(signupData, "signup"));
