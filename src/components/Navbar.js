import { useLocalStore } from "../helpers/useLocalStore";

export const Navbar = () => {

  const [user, setUser] = useLocalStore('ucode');

  window.show = () => {
    const menu = document.querySelector('#menu');
    menu.classList.toggle('hidden');
  }

  window.stepMenu = () => {
    console.log("azazz");
    document.querySelector('#stepMenu').classList.toggle('hidden');
  }

  window.signOut = () => setUser({});

  return (`
<nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button onclick="stepMenu()" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="hidden sm:block sm:ml-6">
          <div id="step" class="flex space-x-4">
            <a href="#" class="bg-gray-500 text-white px-3 py-2 rounded-md text-sm font-medium">Start</a>
            <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Test Online</a>
            <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Serious Game</a>
            <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Motivation Test</a>
            <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Administrator Test</a>
            <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Technical Test</a>
            <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Welcome to Youcode</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        
        <div class="ml-3 relative">
          <div class="flex gap-2 items-center">
            <button  onclick="show()" type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-all" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            </button>
          </div>
          <div id="menu" class="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">${user.fullName}</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">${user.email}</a>
            <a onclick="signOut()" href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="sm:hidden" id="mobile-menu">
    <div  id="stepMenu" class="px-2 pt-2 pb-3 space-y-1 flex flex-col">
    <a href="#" class="bg-gray-500 text-white px-3 py-2 rounded-md text-sm font-medium">Start</a>
            <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Test Online</a>
            <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Serious Game</a>
            <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Motivation Test</a>
            <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Administrator Test</a>
            <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Technical Test</a>
            <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Welcome to Youcode</a>
    </div>
  </div>
</nav>
`);
};