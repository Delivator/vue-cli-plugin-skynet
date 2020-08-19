module.exports = api => {
  api.describeTask({
    match: /vue-cli-service build && node deploy_skynet.js/,
    description: "Build the project and upload it to skynet",
    link: "https://github.com/Delivator/vue-cli-plugin-skynet"
  })

  api.describeTask({
    match: /node deploy_skynet.js/,
    description: "Upload to skynet (without building)",
    link: "https://github.com/Delivator/vue-cli-plugin-skynet"
  })

  api.describeConfig({
    id: "me.delivator.vue-skynet.config",
    name: "Skynet",
    description: "Change skynet settings",
    link: "https://github.com/Delivator/vue-cli-plugin-skynet",
    files: {
      vueSkynetConfig: {
        js: ["vue-skynet_config.js"]
      }
    },
    onRead: ({ data }) => ({
      prompts: [
        {
          name: "portal",
          type: "input",
          message: "The skynet portal used for deploying",
          default: "https://siasky.net"
        },
        {
          name: "enableNamebase",
          type: "confirm",
          message: "Enable the namebase/handshake integration",
          default: false,
          description: "If enabled it will try to automatically update your handshake domain with your latest SKApp",
        },
        {
          name: "namebaseDomain",
          type: "input",
          message: "Your Namebase Domain",
        },
        {
          name: "namebaseAccessKey",
          type: "input",
          message: "Your Namebase access key",
        },
        {
          name: "namebaseAPIKey",
          type: "input",
          message: "Your Namebase API key",
        }
      ],
    }),
    onWrite: async ({ api, prompts }) => {
      const result = {}
      for (const prompt of prompts) {
        result[`${prompt.id}`] = await api.getAnswer(prompt.id)
      }
      api.setData("vueSkynetConfig", result)
    }
  })
}