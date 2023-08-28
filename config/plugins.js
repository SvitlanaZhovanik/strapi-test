module.exports = ({ env }) => ({
  "vercel-deploy": {
        enabled: true,
        config: {
            apiToken: process.env.VERCEL_TOKEN,
deployHook: process.env.VERCEL_DEPLOY_PLUGIN_HOOK,
      }
  },
});
