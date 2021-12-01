import { endpoints } from "../endpoints";
import { Fetcher } from "./Fetcher";
export class Question {
  constructor() {
    this.questions = this.getQuestions();
  }
  async getQuestions() {
    const fetcher = new Fetcher(endpoints.get.questions, "GET");
    const resposne = await fetcher.fetch();
    return resposne;
  }
}
