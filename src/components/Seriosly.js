import { next } from "../helpers/next";
import { useLocalStore } from "../helpers/useLocalStore";

export const SerioslyComponent = () => {

  const SerioslySubmit = () => {
    const [candidate, setCandidate] = useLocalStore('ucode');

    const value = document.querySelector('#SerioslyText').value.trim();
    candidate.seriousGame.status = true;
    candidate._test.seriousGame = true;
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