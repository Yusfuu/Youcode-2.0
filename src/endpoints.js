export const endpoints = {
  get: {
    candidate: "http://localhost:5000/candidate?",
    questions: "http://localhost:5000/questions",
    test: "http://localhost:5000/candidate?role=candidate",
  },
  post: {
    candidate: "http://localhost:5000/candidate",
  },
  put: {},
  patch: {
    candidate: "http://localhost:5000/candidate",
  },
};
