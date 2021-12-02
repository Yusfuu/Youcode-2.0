import "./style.css";
import { Candidate } from "./classes/User";
import { useLocalStore } from "./helpers/useLocalStore";
import { Question } from "./classes/Question";
import { QuestionComponent } from "./components/index";
import { Navbar } from "./components/Navbar";

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
    }
    const candidate = new Candidate(user);
    const createdCandidate = await candidate.register();
    const [, setCandidates] = useLocalStore('ucode');

    setCandidates(createdCandidate);
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
    } else {
      alert("Invalid credentials");
    }
  });
}

if (pathname === "/questions.html") {
  document.body.insertAdjacentHTML("afterbegin", Navbar());
  const questionsContainer = document.querySelector("#questionsContainer");
  const { questions } = new Question();
  questions.then(items => {
    items.slice(-1).map(item => questionsContainer.insertAdjacentHTML('beforeend', QuestionComponent(item.question, item.answers)))
  });
}
