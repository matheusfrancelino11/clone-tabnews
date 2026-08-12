const NodeEnvironment = require("jest-environment-node");

// Jest 26 runs tests inside an isolated VM context and only copies
// a fixed list of Node globals. The native `fetch` API (Node 18+)
// is not included in that list, so we need to manually inject it in the sandbox.
class FetchEnvironment extends NodeEnvironment {
  async setup() {
    await super.setup();

    this.global.fetch = fetch;
    this.global.Headers = Headers;
    this.global.Request = Request;
    this.global.Response = Response;
    this.global.FormData = FormData;
    this.global.AbortController = AbortController;
    this.global.AbortSignal = AbortSignal;
  }
}

module.exports = FetchEnvironment;
