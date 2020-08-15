module.exports = (api) => {
  api.extendPackage({
    scripts: {
      deploy: "node deploy_skynet.js"
    }
  })
};