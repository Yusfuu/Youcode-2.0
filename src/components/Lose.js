export const BetterCallComponent = () => {
  [...document.querySelector('#step').children].forEach(child => child.classList.add('bg-red-500'));

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