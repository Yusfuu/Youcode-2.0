import { Question } from "../classes/Question";
import { next } from "../helpers/next";
import { useLocalStore } from "../helpers/useLocalStore";
import { BetterCallComponent } from "./Lose";


const QuestionCount = () => {
  return (`<div class="m-10 md:mb-16">
  <h2 id="QuestionCount" class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Question:
    1/5</h2>
</div>`)
}





let questionCount = 1;
const SingleQuestion = (question) => {
  const nextQuestion = (event) => {

    const [candidate, setCandidate] = useLocalStore('ucode');

    if (questionCount === 5) {

      candidate.testOnline.status = true;
      candidate._test.testOnline = true;

      document.querySelector("#QuestionCount").remove();
      if (candidate.testOnline.points < 5) {
        // candidate loses
        candidate.isFailed = true;
        document.querySelector("#_test").innerHTML = BetterCallComponent();
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
      candidate.testOnline.points += 1;
      setCandidate(candidate);
    }

    const children = [...document.querySelector("#_test").children];
    children.forEach((child) => child.classList.add('hidden'));
    children[questionCount].classList.remove('hidden');
    document.querySelector("#QuestionCount").innerHTML = `Question: ${++questionCount}/5`;
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


export const QuestionComponent = async () => {
  const { questions } = new Question();
  let _test = document.querySelector("#_test");
  const [candidate, setCandidate] = useLocalStore('ucode');

  if (!candidate._test.testOnline) {
    _test.insertAdjacentHTML('beforebegin', QuestionCount());
    questions.then(items => {
      items.map(item => _test.insertAdjacentHTML('beforeend', SingleQuestion(item)))
    });
  }
  return null;
}