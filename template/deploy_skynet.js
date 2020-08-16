const skynet = require("@nebulous/skynet")
const config = require("./vue-skynet_config")

const path = "./dist"

let opts = skynet.defaultOptions

opts.portalUrl = config.portal
console.log(`Uploading ${path} to ${config.portal}`)

skynet
  .uploadDirectory(path, opts)
  .then((resp) => {
    const skylink = resp.replace("sia://", "")
    console.log(`Done: ${config.portal}/${skylink}/`)
  })
  .catch((err) => console.error(err.message))
