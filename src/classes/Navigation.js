class Navigation {
  constructor(navigation) {
    this.navigation = navigation;
    this.navigation.addEventListener('click', (event) => {
      event.preventDefault();
      let target = event.target;
      let targetClass = target.classList;
      if (targetClass.contains('navigation__link')) {
        let targetLink = target.getAttribute('href');
        let targetSection = document.querySelector(targetLink);
        let targetSectionTop = targetSection.offsetTop;
        let startPosition = window.pageYOffset;
        let distance = targetSectionTop - startPosition;
        let duration = 1000;
        let startTime = null;
        let scroll = (currentTime) => {
          if (startTime === null) {
            startTime = currentTime;
          }
          let timeElapsed = currentTime - startTime;
          let run = ease(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) {
            requestAnimationFrame(scroll);
          }
        };
        requestAnimationFrame(scroll);
      }
    });
  }
}