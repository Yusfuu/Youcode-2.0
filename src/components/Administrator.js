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