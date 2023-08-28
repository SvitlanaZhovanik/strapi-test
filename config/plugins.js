module.exports = ({ env }) => ({
  "vercel-deploy": {
        enabled: true,
        config: {
          apiToken: process.env.VERCEL_TOKEN,
      }
  },
});
