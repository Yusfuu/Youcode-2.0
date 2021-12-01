import "./style.css";
import { Candidate } from "./classes/User";
import { useLocalStore } from "./helpers/useLocalStore";
import { Question } from "./components";

const pathname = location.pathname;

// document.addEventListener('readystatechange', (event) => {
//   if (event.target.readyState === "complete") {
//     const [candidates, setCandidates] = useLocalStore('ucode');
//   }
// });



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
      const [, setUser] = useLocalStore('ucode');
      setUser(user);
    } else {
      alert('Invalid credentials');
    }
  })
}


if (pathname === "/questions.html") {
  const questionsContainer = document.querySelector('#questionsContainer');
  // const fetcher = new Fetcher();
  console.log(questionsContainer);

  [
    {
      "question": "What is the name of the main character in the game?",
      "answer": "The Wizard"
    },
    {
      "question": "What is the name of the main character's pet?",
      "answer": "The Dog"
    },
    {
      "question": "What is the name of the main character's girlfriend?",
      "answer": "The Dog"
    },
    {
      "question": "What is the name of the main character's best friend?",
      "answer": "The Wizard"
    },
    {
      "question": "What is the name of the main character's best friend's best friend?",
      "answer": "The Wizard"
    }
  ].map((item) => {
    questionsContainer.insertAdjacentHTML('beforeend', Question(item.question));
  })

}
