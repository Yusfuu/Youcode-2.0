import "./style.css";
import { Candidate } from "./classes/User";
import { Question as q } from "./classes/Question";
import { popup } from "./helpers/popup";

const pathName = location.pathname;

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    const [candidates, setCandidates] = useLocalStore("ucode");
  }
});

const Question = (question) => {
  return `
  <div class="bg-gray-100 rounded-lg relative p-5 pt-8">
          <span
            class="w-8 h-8 inline-flex justify-center items-center bg-indigo-500 text-white rounded-full absolute -top-4 left-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd" />
            </svg>
          </span>

          <h3 class="text-indigo-500 text-lg md:text-xl font-semibold mb-3">${question}</h3>
          
        </div>
  `;
};

const useLocalStore = (key) => {
  const store = localStorage.getItem(key) || "{}";
  return [
    JSON.parse(store),
    (value) => localStorage.setItem(key, JSON.stringify(value)),
  ];
};

if (pathName === "/register.html") {
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

    // const candidate = new Candidate(user);

    // const __user = await candidate.validate().create();
    // console.log(__user);
  });
}

if (pathName === "/login.html") {
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

if (pathName === "/questions.html") {
  const questionsContainer = document.querySelector("#questionsContainer");
  const qe = new q();
  console.log(qe.questions);

  // questionsContainer.insertAdjacentHTML('beforeend', Question(item.question));
}
