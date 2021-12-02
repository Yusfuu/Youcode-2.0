import { next } from "../helpers/next";

const questions = [
  "Joseph Smith was the founder of what religion?",
  "111,111,111 x 111,111,111 = 12,345,678,987,654,321",
  "Which countries participated in the Lobster War?"
];

export const AdministratorComponent = () => {

  const AdministratorSubmit = () => {
    const [candidate, setCandidate] = useLocalStore('ucode');

    const form = document.querySelector('#admin_test_form');
    const formData = [
      {
        question: form.elements.q1.dataset.q,
        answer: form.elements.q1.value.trim()
      },
      {
        question: form.elements.q2.dataset.q,
        answer: form.elements.q2.value.trim()
      },
      {
        question: form.elements.q2.dataset.q,
        answer: form.elements.q3.value.trim()
      },
    ]

    candidate._test.administratorTest = true;
    candidate.administratorTest.status = true;
    candidate.administratorTest.answer = formData;

    setCandidate(candidate);

    next();
  }

  window.AdministratorSubmit = AdministratorSubmit;

  const Questions = questions.map((_question, index) => {
    return `
    <div class="m-8">
      <p class="m-2 font-semibold">${_question}</p>
      <input data-q="${_question}" name="q${++index}" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-blue-300 rounded outline-none transition duration-100 px-3 py-2" />
    </div>
    `;
  })

  return `
  <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Administrator Test</h2>
    <form id="admin_test_form">${Questions.join('')}</form>
  <button onclick="AdministratorSubmit()" class="ml-8 inline-block bg-blue-500 hover:bg-blue-600  ring-blue-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">Done</button>
  </div>
</div>
  `;
}