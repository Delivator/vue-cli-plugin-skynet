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
      "vue-skynet_config.js": {
        js: ["vue-skynet_config.js"]
      }
    },
    onRead: ({ data }) => ({
      prompts: [
        {
          name: `portal`,
          type: "input",
          message: "Define the color for greeting message",
          value: "https://skyportal.xyz"
        }
      ]
    })
  })
}