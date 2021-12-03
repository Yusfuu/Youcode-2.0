import { Candidate } from "../classes/User";
import { next } from "../helpers/next";
import { useLocalStore } from "../helpers/useLocalStore";

export const Technical = () => {
  const TechSubmit = async () => {
    const value = document.querySelector('#tech').value;
    const [candidate, setCandidate] = useLocalStore('ucode');
    candidate.technicalTest.status = true;
    candidate.technicalTest.answer = value;
    candidate._test.technicalTest = true;
    setCandidate(candidate);

    const user = new Candidate(candidate);
    user.updateCandidate();
    next();
  }
  window.TechSubmit = TechSubmit;

  return (`
  <div class="mx-14">
  <div class="mb-10 md:mb-16">
      <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Technical Test</h2>

      <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">We used a while loop that draws 20 evenly spaced horizontal lines (lines that go from left to right) to draw lined paper.</p>
    </div>

    <div class="bg-gray-100 rounded-lg text-lg text-gray-900">
      <pre class="p-4">
    var i = 0;
    while (i < 20) {
      var lineY = 20 + (i * 20);
      line(0, lineY, 400, lineY);
      i++;
    }
      </pre>
    </div>

    <input id="tech" class="mt-5 w-full bg-gray-50 text-gray-800 border focus:ring ring-blue-300 rounded outline-none transition duration-100 px-3 py-2" />
    <button onclick="TechSubmit()" class="mt-5 bg-blue-500 hover:bg-blue-600  ring-blue-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">Done</button>

  </div>
  
  
  `);
}