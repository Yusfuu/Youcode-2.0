import ConfettiGenerator from "confetti-js";
import { useLocalStore } from "../helpers/useLocalStore";

export const Done = () => {
  const [user,] = useLocalStore('ucode');

  setTimeout(() => {
    if (user?.winner) {
      var confettiSettings = { target: 'my-canvas' };
      var confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();
    }
  }, 5000);

  console.log("azaz");
  return (`
  <canvas id="my-canvas"></canvas>

  <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div class="md:h-80 flex flex-col sm:flex-row bg-gray-200 rounded-lg overflow-hidden">
      <!-- image - start -->
      <div class="w-full sm:w-1/2 lg:w-2/5 h-48 sm:h-auto order-first sm:order-none bg-gray-300">
        <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Andras Vas" class="w-full h-full object-cover object-center" />
      </div>
      <!-- image - end -->

      <!-- content - start -->
      <div class="w-full sm:w-1/2 lg:w-3/5 flex flex-col p-4 sm:p-8">
        <h2 class="text-gray-800 text-xl md:text-2xl lg:text-4xl font-bold mb-4">Youcode</h2>

        <p class="max-w-md text-gray-600 mb-8">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>

        <div class="mt-auto">
          <a href="#" class="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Contact support</a>
        </div>
      </div>
      <!-- content - end -->
    </div>
  </div>
</div>
  
  `);
}