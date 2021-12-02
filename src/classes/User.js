import { endpoints } from "../endpoints";
import { Fetcher } from "./Fetcher";

export class Candidate {

  constructor(user) {
    this.user = user
  }

  validate() {
    if (this.user?.email.trim() === "" || this.user?.fullName.trim() === "" || this.user?.age.trim() === "") {
      throw new Error("Please fill all fields");
    }

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(this.user?.email)) {
      throw new Error("Email is not valid");
    }
    return this;
  }

  async register() {
    const candidate = {
      email: this.user?.email,
      fullName: this.user?.fullName,
      cin: this.user?.cin,
      age: this.user?.age,
      password: Math.random().toString(36).slice(-8),
      role: "candidate",
      test: false,
      createdAt: new Date().toISOString(),
      score: 0,
      testOnline: false,
      seriousGame: {
        status: false,
        answer: null
      },
      motivationGame: {
        status: false,
        answer: null
      }
    }

    const fetcher = new Fetcher(endpoints.post.candidate, 'POST', candidate);
    const resposne = await fetcher.fetche();
    return resposne;
  }


  async login() {
    const endpoint = `${endpoints.get.candidate}email=${this.user?.email}&password=${this.user?.password}`;
    const fetcher = new Fetcher(endpoint, 'GET');
    const resposne = await fetcher.fetche();
    return resposne.at(0);
  }

}