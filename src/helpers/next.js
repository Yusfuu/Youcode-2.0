import { AdministratorComponent } from "../components/Administrator";
import { MotivationComponent } from "../components/Motivation";
import { SerioslyComponent } from "../components/Seriosly";

const nextStep = () => {
  let stepCount = 0;
  const Tabs = [SerioslyComponent, MotivationComponent, AdministratorComponent];
  return () => {
    stepCount++;
    [...document.querySelector('#step').children].forEach((child, key) => {
      if (key === stepCount) {
        child.classList.add('bg-gray-500');
        child.classList.remove('bg-gray-900');
      } else {
        child.classList.add('bg-gray-900');
        child.classList.remove('bg-gray-500');
      }
      if (key < stepCount) child.classList.add('bg-green-500');
    });
    document.querySelector("#questionsContainer").innerHTML = Tabs[stepCount - 1]();
  }
}

export const next = nextStep();