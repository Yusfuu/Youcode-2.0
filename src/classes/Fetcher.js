export class Fetcher {
  constructor(url, method, body = null) {
    this.url = url;
    this.method = method;
    this.body = body;
  }

  async fetch(callback = () => {}) {
    const config = {
      method: this.method,
      headers: {
        "Content-Type": "application/json",
      },
      ...(this.body && { body: JSON.stringify(this.body) }),
    };
    const response = await fetch(this.url, config);
    return await response.json();
    callback(data);
    return data;
  }
}
