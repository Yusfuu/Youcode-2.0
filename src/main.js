import "./style.css";
import { Candidate } from "./classes/User";
import { useLocalStore } from "./helpers/useLocalStore";
import { Question } from "./classes/Question";
import { Admin } from "./classes/Admin";
import { Navbar } from "./components/Navbar";
import { QuestionComponent } from "./components/Question";
import { BetterCallComponent } from "./components/Lose";
import { next } from "./helpers/next";
import { popup } from "./helpers/popup";

const pathname = location.pathname;

document.addEventListener("readystatechange", () => {
  // if (document.readyState === "complete") {
  //   const [candidate, setCandidate] = useLocalStore('ucode');
  //   if (candidate) {
  //     const paths = ['/login.html', '/register.html'];
  //     if (paths.includes(pathname)) {
  //       location.href = '/questions.html';
  //     }
  //   }
  // }
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
    try {
      candidate.validate();
    } catch (error) {
      popup("warning", "register Incorect", "", "try again");
    }
    const createdCandidate = await candidate.register();
    const [_, setCandidates] = useLocalStore("ucode");
    setCandidates(createdCandidate);
    location.href = "/login.html";
  });
}

if (pathname === "/login.html") {
  const form = document.querySelector("#login");
  const [_] = useLocalStore("ucode");
  if (_) {
    console.log(_.email, _.password);
    form.elements.email.value = _.email;
    form.elements.password.value = _.password;
  }
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const credential = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    const candidate = new Candidate(credential);
    const user = await candidate.login(credential);
    if (user) {
      const [, setUser] = useLocalStore("ucode");
      setUser(user);
      location.href = "/test.html";
    } else {
      popup("warning", "Login Incorect", "", "try again");
    }
  });
}

if (pathname === "/test.html") {
  document.body.insertAdjacentHTML("afterbegin", Navbar());
  const questionsContainer = document.querySelector("#questionsContainer");
  const { questions } = new Question();
  const [candidate] = useLocalStore("ucode");

  console.log(candidate._test);

  const x = Object.values(candidate._test)
    .filter(Boolean)
    .forEach(() => next());

  // if (candidate.isFailed) {
  //   document.querySelector("#questionsContainer").innerHTML = BetterCallComponent();
  // } else {
  //   if (candidate.test) {
  //     // candidate is already taken a test
  //   }

  //   questions.then(items => {
  //     items.map(item => questionsContainer.insertAdjacentHTML('beforeend', QuestionComponent(item)))
  //   });
  // }
  questions.then((items) => {
    items.map((item) =>
      questionsContainer.insertAdjacentHTML(
        "beforeend",
        QuestionComponent(item)
      )
    );
  });
}

if (pathname === "/admin.html") {
  const admin = new Admin();
  console.log(admin.tests);
  admin.tests.then((test) => {
    console.log(test);
  });
}
