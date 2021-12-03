import "./style.css";
import { Candidate } from "./classes/User";
import { useLocalStore } from "./helpers/useLocalStore";
import { Navbar } from "./components/Navbar";
import { BetterCallComponent } from "./components/Lose";
import { next } from "./helpers/next";
import { Start } from "./components/Start";

const pathname = location.pathname;

document.addEventListener("readystatechange", () => {
  if (document.readyState === "complete") {
    const [candidate] = useLocalStore('ucode');
    const paths = ['/login.html', '/register.html'];

    if (pathname === "/test.html") {
      if (!!!Object.keys(candidate || {}).length) {
        location.href = '/register.html';
      }
    }

    if (pathname === "/register.html" || pathname === "/login.html") {
      if (!!Object.keys(candidate || {}).length) {
        location.href = '/test.html';
      }
    }

  }
});

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
    const createdCandidate = await candidate.register();
    const [, setCandidates] = useLocalStore("ucode");

    setCandidates(createdCandidate);
    location.href = "/test.html";
  })
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

    if (user instanceof Array && user.length > 0) {
      const [, setUser] = useLocalStore("ucode");
      setUser(user);
      location.href = "/test.html";
    } else {
      alert("Invalid credentials");
    }
  });
}

if (pathname === "/test.html") {
  document.body.insertAdjacentHTML("afterbegin", Navbar());
  const _test = document.querySelector("#_test");
  const [candidate] = useLocalStore('ucode');

  if (!candidate?._test?.start) {
    _test.innerHTML = Start();
  }
  if (candidate.isFailed) {
    document.querySelector("#_test").innerHTML = BetterCallComponent();
  } else {
    if (!candidate?._test?.testOnline) {
      // questions.then(items => {
      //   items.map(item => _test.insertAdjacentHTML('beforeend', QuestionComponent(item)))
      // });
    } else {
      Object.values(candidate._test).filter(Boolean).forEach(() => next());
    }
  }
}
