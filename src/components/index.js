export const QuestionComponent = (question, answers) => {

  const answersHtml = answers.map(answer => {
    return `<button class="bg-blue-500 shadow-md  max-w-xl transition-all text-white font-semibold py-2 px-4 rounded-md">${answer}</button>`;
  }).join('');

  return (`
  <div class="bg-gray-100 rounded-lg relative p-5 pt-8">
          <span
            class="w-8 h-8 inline-flex justify-center items-center bg-indigo-500 text-white rounded-full absolute -top-4 left-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd" />
            </svg>
          </span>

          <h3 class="text-indigo-500 text-lg md:text-xl font-semibold mb-7 text-center">${question}</h3>
          <div class="flex gap-5 justify-center items-center flex-col">
          ${answersHtml}
          </div>
`);
}



