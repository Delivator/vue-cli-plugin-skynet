module.exports = api => {
  api.describeTask({
    match: /deploy/,
    description: "Build the project and upload it to skynet",
    link: "https://github.com/Delivator/vue-cli-plugin-skynet"
  })

  api.describeConfig({
    id: "me.delivator.vue-skynet.config",
    name: "Skynet Portal",
    description: "The skynet portal that should be used for uploading",
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
          message: "Define the color for greeting message",
          value: data.vueSkynetConfig && data.vueSkynetConfig.portal,
          default: "https://siasky.net",
        }
      ]
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