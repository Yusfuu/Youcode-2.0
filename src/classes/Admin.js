import { endpoints } from "../endpoints";
import { Fetcher } from "./Fetcher";
export class Admin {
  constructor() {
    this.tests = this.getCandidates();
  }
  async getCandidates() {
    const fetcher = new Fetcher(endpoints.get.test, "GET");
    const resposne = await fetcher.fetche();
    return resposne;
  }
}
