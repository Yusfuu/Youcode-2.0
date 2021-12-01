import { endpoints, get, post } from "../utils";

export class Candidate {
  // url = "http://localhost:5000/candidate/";
  // data;
  // login = async (email, password) => { };
  // register = async (email, password) => { };
  // logOut = () => { };
  // getCandidateList = () => { };

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

  async create() {
    const password = Math.random().toString(36).slice(-8);
    const candidate = {
      email: this.user?.email,
      fullName: this.user?.fullName,
      age: this.user?.age,
      password,
      _email: `${this.user?.fullName.replace(/\s+/, '')}_${password.substring(4)}@gmail.com`,
      role: "candidate"
    }
    const data = await post(endpoints.post.candidate, candidate);
    return data;
  }


  async login() {
    const endpoint = `${endpoints.get.candidate}_email=${this.user?.email}&password${this.user?.password}`;
    console.log(endpoint);
    const data = await get(endpoint);
    return data;
  }

}