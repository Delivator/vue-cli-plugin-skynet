const fs = require("fs")


module.exports = (api) => {
  api.extendPackage({
    dependencies: {
      "@nebulous/skynet": "^1.1.0"
    }
  })

  api.onCreateComplete(() => {
    // adapted from https://github.com/vuetifyjs/vue-cli-plugins/blob/7ffbd824ae1d4731a7e70a65a1db52f7a643e4b6/packages/vue-cli-plugin-vuetify/generator/tools/vuetify.js#L61-79
    const config = api.resolve("vue.config.js")
    const deploy_script = api.resolve("deploy_skynet.js")

    fs.copyFileSync("./deploy_skynet.js", deploy_script)

    if (!fs.existsSync(config)) {
      fs.writeFileSync(config, "module.exports = {}", "utf8")
    }

    const file = require(config)

    if (!file.publicPath) {
      file.publicPath = ""
    }

    fs.writeFileSync(config, `module.exports = ${JSON.stringify(file, 2, 2)}`, "utf8")

    api.exitLog("Installed vue-cli-plugin-skynet")
  })
}