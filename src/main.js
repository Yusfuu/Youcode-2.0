import "./style.css";
import { Candidate } from "./classes/User";
import { useLocalStore } from "./helpers/useLocalStore";
import { Question } from "./classes/Question";
import { QuestionComponent } from "./components/index";
import { Navbar } from "./components/Navbar";

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
})

if (pathname === "/register.html") {
  const form = document.querySelector("#register");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const user = {
      email: form.elements.email.value,
      cin: form.elements.cin.value,
      fullName: form.elements.fullName.value,
      age: form.elements.age.value,
    }
    const candidate = new Candidate(user);
    const createdCandidate = await candidate.register();
    const [, setCandidates] = useLocalStore('ucode');

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
  const questionsContainer = document.querySelector("#questionsContainer");
  const { questions } = new Question();
  const [candidate] = useLocalStore('ucode');

  if (candidate.test) {
    // candidate is already taken a test

  }

  questions.then(items => {
    items.map(item => questionsContainer.insertAdjacentHTML('beforeend', QuestionComponent(item)))
  });

}
