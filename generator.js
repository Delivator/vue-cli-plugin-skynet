const fs = require("fs")

module.exports = (api) => {
  api.extendPackage({
    devDependencies: {
      "@nebulous/skynet": "^2.0.1",
      "node-fetch": "^2.6.0",
      "base64-js": "^1.3.1",
      "base32-encode": "^1.1.1",
    },
    scripts: {
      deploy: "vue-cli-service build && node deploy_skynet.js",
      publish: "node deploy_skynet.js"
    }
  })

  api.render("./template")

  api.onCreateComplete(() => {
    // adapted from https://github.com/vuetifyjs/vue-cli-plugins/blob/7ffbd824ae1d4731a7e70a65a1db52f7a643e4b6/packages/vue-cli-plugin-vuetify/generator/tools/vuetify.js#L61-79
    const config = api.resolve("vue.config.js")

    if (!fs.existsSync(config)) {
      fs.writeFileSync(config, "module.exports = {}", "utf8")
    }

    const file = require(config)

    if (!file.publicPath) {
      file.publicPath = ""
    }

    fs.writeFileSync(config, `module.exports = ${JSON.stringify(file, 2, 2)}`, "utf8")

    api.exitLog("Installed vue-cli-plugin-skynet")
    api.exitLog('To deploy your app (build and upload) you can use "npm run deploy"')
    api.exitLog('To upload your app (without building) you can use "npm run publish"')
  })
}