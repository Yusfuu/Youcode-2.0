import { QuestionComponent } from "../components/Question";
import { AdministratorComponent } from "../components/Administrator";
import { Done } from "../components/Done";
import { MotivationComponent } from "../components/Motivation";
import { SerioslyComponent } from "../components/Seriosly";
import { Technical } from "../components/Technical";

const nextStep = () => {
  let stepCount = 0;
  return async () => {
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
    document.querySelector("#_test").innerHTML = await [QuestionComponent, SerioslyComponent, MotivationComponent, AdministratorComponent, Technical, Done,][stepCount - 1]();
  }
}

export const next = nextStep();