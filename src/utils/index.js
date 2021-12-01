const fetcher = (url, options) => {
  return fetch(url, options).then(res => res.json());
};

export const post = (url, body) => {
  return fetcher(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

export const get = (url) => {
  return fetcher(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}


export const endpoints = {
  get: {
    candidate: 'http://localhost:5000/candidate?'
  },
  post: {
    candidate: 'http://localhost:5000/candidate'
  },
  put: {},
  delete: {},
}