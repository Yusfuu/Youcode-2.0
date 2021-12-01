import "./style.css";
import { Candidate } from "./classes/User";
import { popup } from "./helpers/popup";

const pathname = location.pathname;

if (pathname === "/register.html") {
  const form = document.querySelector("#register");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const user = {
      email: form.elements.email.value,
      cin: form.elements.cin.value,
      fullName: form.elements.fullName.value,
      age: form.elements.age.value,
    };
    const candidate = new Candidate(user);

    const created = await candidate.register();
    console.log(created);

    // const __user = await candidate.validate().create();
    // console.log(__user);
  });
}

if (pathname === "/login.html") {
  const form = document.querySelector("#login");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const credential = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    const candidate = new Candidate(credential);

    const user = await candidate.login(credential);

    console.log(user);

    // const candidate = new Candidate(user.email, user.fullName, user.age);
    // const __user = await candidate.validate().create();
    // console.log(__user);
  });
}

// const fetcher = async () => {
//   const url = "http://localhost:3000/api/candidates";
//   const response = await fetch(url);
//   return await response.json();
// }

if (pathname === "/popup.html") {
}
