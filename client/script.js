// let signin = document.getElementById("signin");
// let signout = document.getElementById("signout");
// let signup = document.getElementById("signup");

// let signinData = { email: "", password: "" };
// let signoutData = 5;
// let signupData = {
//   userName: "vikki",
//   favBrand: "나이키",
//   email: "email@email.com",
//   phoneNumber: "010-9973-7057",
//   password: "1234567",
// };

// function callback(data, endpoint) {
//   fetch(`http://localhost:4000/${endpoint}`, {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));
// }

// signin.addEventListener("onclick", callback(signinData, "signin"));
// signout.addEventListener("onclick", callback(signoutData, "signout"));
// signup.addEventListener("onclick", callback(signupData, "signup"));
