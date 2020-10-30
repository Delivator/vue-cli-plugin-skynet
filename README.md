# Vue CLI plugin for deploying apps on [Sia Skynet](https://siasky.net/) (With Namebase integration).

<a href="https://www.npmjs.com/package/vue-cli-plugin-skynet" target="_blank" rel="noopener noreferrer">![npm](https://img.shields.io/npm/v/vue-cli-plugin-skynet)</a>
<a href="https://www.npmjs.com/package/vue-cli-plugin-skynet" target="_blank" rel="noopener noreferrer">![npm](https://img.shields.io/npm/dt/vue-cli-plugin-skynet)</a>

### Demo: [How to deploy a Vue app on Skynet in under a minute!](https://skyportal.xyz/AACSfPcMcOlCkIEzWyty1kkAzP4go75nL8i4FJRB0C-kpA) (Video)

![Vue-UI Skynet Deploy](https://skyportal.xyz/dABnWWJH4L7Fa58yiqJxe1K-rbVwelByYJ0BLSqvYEi0hQ/)

## Features

- Easy to use UI ([Vue UI](https://cli.vuejs.org/guide/creating-a-project.html#using-the-gui))
- Auto update your [Namebase](https://www.namebase.io/)/[Handshake](https://handshake.org/) domain after upload
- Sites deployed with Skynet benefit from all the normal Skynet perks (Unhackable, censorship resistent & very high uptime and speeds due to Sias network, just to name a few)

## Installation

Requirements
- [Vue CLI](https://cli.vuejs.org/guide/installation.html)

Deploying an app
1. Create a vue app if you haven't already with `vue create my-app` or using the `vue ui` web ui
2. Change directory `cd my-app`
3. Add the vue skynet plugin `vue add skynet`

This should add the npm scripts `deploy` and `publish`, edit the `vue.config.js` to use relative paths, install the npm package `@nebulous/skynet` and create the files `deploy_skynet.js` & `vue-skynet_config.js`

## Configuration

In the `vue-skynet_config.js` file you can set a skynet portal and enable the Handshake/Namebase integration.

This can also be changed in the vue ui.

## Usage

Now you can deploy your vue app to skynet with `npm run deploy` which will build your app and upload it. If you just want to upload and not build you can use `npm run publish`

You can also use the taks in the vue ui for that.
