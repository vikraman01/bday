/** Serve the static birthday page using Cloudflare Workers Assets. */
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  }
};

