import { useLocalStore } from "../helpers/useLocalStore";
let count = 1;

export const QuestionComponent = (question) => {
  const nextQuestion = (event) => {

    const [candidate, setCandidate] = useLocalStore('ucode');

    if (count === 5) {
      candidate.testOnline = true;
      if (candidate.score === 5) {
        document.querySelector("#questionsContainer").innerHTML = "Better luck next time!";
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

  const answersHtml = question.answers.map(answer => {
    const data = JSON.stringify(question);
    return `<button data-answer="${answer}" data-question='${data}' onclick="nextQuestion(event)" class="bg-blue-500 shadow-md  max-w-xl transition-all text-white font-semibold py-2 px-4 rounded-md">${answer}</button>`;
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