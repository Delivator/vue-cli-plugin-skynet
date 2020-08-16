# Vue CLI plugin for deploying apps on [Sia Skynet](https://siasky.net/).

### [How to deploy a Vue app on Skynet in under a minute](https://skyportal.xyz/AACSfPcMcOlCkIEzWyty1kkAzP4go75nL8i4FJRB0C-kpA) (Video)

Requirements:
- [Vue CLI](https://cli.vuejs.org/guide/installation.html)

## Installation

1. Create a vue app if you haven't already with `vue create my-app` or using the `vue ui` web ui
2. Change directory `cd my-app`
3. Add the vue skynet plugin `vue add skynet`

This should add the npm scripts `deploy` and `publish`, edit the `vue.config.js` to use relative paths, install the npm package `@nebulous/skynet` and create the files `deploy_skynet.js` & `vue-skynet_config.js`

## Configuration

In the `vue-skynet_config.js` file you can set a skynet portal url that will be used for uploads.

This can also be changed in the vue ui.

## Usage

Now you can deploy your vue app to skynet with `npm run deploy` which will build your app and upload it. If you just want to upload and not build you can use `npm run publish`

You can also use the taks in the vue ui for that.