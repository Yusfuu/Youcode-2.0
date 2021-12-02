import { useLocalStore } from "../helpers/useLocalStore";
let count = 1;

export const BetterCallComponent = () => {
  return `
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-lg px-4 md:px-8 mx-auto">
    <div class="grid sm:grid-cols-2 gap-8">
      <div class="flex flex-col justify-center items-center sm:items-start md:py-24 lg:py-32">
        <h1 class="text-gray-800 text-2xl md:text-3xl font-bold text-center sm:text-left mb-2">Better luck next time</h1>

        <p class="text-gray-500 md:text-lg text-center sm:text-left mb-8">don't lose hope we hope will have u next year</p>
      </div>
      <div class="h-80 md:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg relative">
        <img src="https://images.unsplash.com/photo-1590642916589-592bca10dfbf?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by @heydevn" class="w-full h-full object-cover object-center absolute inset-0" />
      </div>
    </div>
  </div>
</div>
`
}

export const MotivationComponent = () => {

  const MotivationSubmit = () => {
    const [candidate, setCandidate] = useLocalStore('ucode');

    const value = document.querySelector('#SerioslyText').value.trim();
    candidate.motivationGame.status = true;
    candidate.motivationGame.answer = value;
    setCandidate(candidate);
    next();
  }

  window.MotivationSubmit = MotivationSubmit;

  return `
  <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Motivation Game</h2>
    <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
    <textarea id="SerioslyText" rows="5" cols="33" class="mt-4 w-full flex-1 text-lg bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"></textarea>
    <button onclick="MotivationSubmit()" class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">Submit</button>
  </div>
</div>
  `;
}

export const SerioslyComponent = () => {

  const SerioslySubmit = () => {
    const [candidate, setCandidate] = useLocalStore('ucode');

    const value = document.querySelector('#SerioslyText').value.trim();
    candidate.seriousGame.status = true;
    candidate.seriousGame.answer = value;
    setCandidate(candidate);
    next();
  }
  window.SerioslySubmit = SerioslySubmit;

  return `
  <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Serious Game</h2>
    <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
    <textarea id="SerioslyText" rows="5" cols="33" class="mt-4 w-full flex-1 text-lg bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"></textarea>
    <button onclick="SerioslySubmit()" class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">Submit</button>
  </div>
</div>
  `;
}


export const AdministratorComponent = () => {

  // const SerioslySubmit = () => {
  //   const [candidate, setCandidate] = useLocalStore('ucode');

  //   const value = document.querySelector('#SerioslyText').value.trim();
  //   candidate.seriousGame.status = true;
  //   candidate.seriousGame.answer = value;
  //   setCandidate(candidate);
  //   next();
  // }
  // window.SerioslySubmit = SerioslySubmit;

  return `
  <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Administrator Test</h2>
    <div class="m-8">
      <p class="m-2 font-semibold">Which computer hardware device provides an interface for all other connected devices to communicate</p>
      <input name="q1" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-blue-300 rounded outline-none transition duration-100 px-3 py-2" />
    </div>
    <div class="m-8">
      <p class="m-2 font-semibold">Which computer hardware device provides an interface for all other connected devices to communicate?</p>
      <input name="q2" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-blue-300 rounded outline-none transition duration-100 px-3 py-2" />
    </div>
    <div class="m-8">
      <p class="m-2 font-semibold">Which computer hardware device provides an interface for all other connected devices to communicate?</p>
      <input name="q3" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-blue-300 rounded outline-none transition duration-100 px-3 py-2" />
    </div>
    <button class="ml-8 inline-block bg-blue-500 hover:bg-blue-600  ring-blue-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">Done</button>
  </div>

</div>
  `;
}

const nextStep = () => {
  let stepCount = 0;
  const Tabs = [SerioslyComponent, MotivationComponent, AdministratorComponent];
  return () => {
    stepCount++;
    [...document.querySelector('#step').children].forEach((child, key) => {
      if (key === stepCount) {
        child.classList.add('bg-gray-500');
        child.classList.remove('bg-gray-900');
      } else {
        child.classList.add('bg-gray-900');
        child.classList.remove('bg-gray-500');
      }
      if (key < stepCount) child.classList.add('bg-green-500');
    });
    document.querySelector("#questionsContainer").innerHTML = Tabs[stepCount - 1]();
  }
}


const next = nextStep();

export const QuestionComponent = (question) => {
  const nextQuestion = (event) => {

    const [candidate, setCandidate] = useLocalStore('ucode');

    if (count === 5) {

      document.querySelector("#QuestionCount").remove();
      candidate.testOnline = true;
      if (candidate.score < 5) {
        // candidate loses
        document.querySelector("#questionsContainer").innerHTML = BetterCallComponent();
      } else {
        // candidate wins
        next();
      }

      setCandidate(candidate);
      return;
    };

    const data = JSON.parse(event.target.dataset.question);
    const answer = (event.target.dataset.answer);

    if (data.correctAnswer === answer) {
      candidate.score += 1;
      setCandidate(candidate);
    }
    const children = [...document.querySelector("#questionsContainer").children];
    children.forEach((child) => child.classList.add('hidden'));
    children[count].classList.remove('hidden');
    document.querySelector("#QuestionCount").innerHTML = `Question: ${++count}/5`;

  }

  window.nextQuestion = nextQuestion;

  const answersHtml = question.answers.sort(() => .5 - Math.random()).map(answer => {
    const data = JSON.stringify(question);
    return `<button data-answer="${answer}" data-question='${data}' onclick="nextQuestion(event)" class="bg-blue-500 shadow-md  max-w-xl transition-all text-white font-semibold py-2 px-4 rounded-md w-64 h-14 hover:bg-blue-600">${answer}</button>`;
  }).join('');

  return (`
  <div  class="bg-gray-100 rounded-lg relative p-5 pt-8 ${question?.id === 1 ? "" : "hidden"}">
          <span
            class="w-8 h-8 inline-flex justify-center items-center bg-indigo-500 text-white rounded-full absolute -top-4 left-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd" />
              </svg>
          </span>
          
          <h3 class="text-indigo-500 text-lg md:text-xl font-semibold mb-7 text-center">${question.question}</h3>
          <div class="flex gap-5 justify-center items-center flex-col">
          ${answersHtml}
        </div>
`);
}









