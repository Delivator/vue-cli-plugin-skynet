const skynet = require("@nebulous/skynet")
const config = require("./vue-skynet_config")
const fetch = require("node-fetch")
const { namebaseAPIKey } = require("./vue-skynet_config")

const path = "./dist"

let opts = skynet.defaultOptions

opts.portalUrl = config.portal
console.log(`Uploading ${path} to ${config.portal}`)

function updateNamebaseDomain(skylink) {
  const credentials = Buffer.from(`${config.namebaseAccessKey}:${namebaseAPIKey}`);
  const encodedCredentials = credentials.toString("base64");
  const authorization = `Basic ${encodedCredentials}`;

  const requestOptions = {
    method: "PUT",
    headers: {
      Authorization: authorization,
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: {
      records: [
        { 
          type: "TXT",
          host: "",
          value: skylink,
          ttl: 0
        }
      ]
    }
  };
  fetch(`https://namebase.io/api/v0/dns/domains/${config.namebaseDomain}`, requestOptions)
    .then(response => {
      console.log(response);
      response.json()
        .then(j => {
          console.log(j);
        });
    })
    .catch(error => {
      console.error(error);
    })
}

skynet
  .uploadDirectory(path, opts)
  .then((resp) => {
    const skylink = resp.replace("sia://", "")
    console.log(`Done: ${config.portal}/${skylink}/`)
    if (config.enableNamebase) updateNamebaseDomain(skylink);
  })
  .catch((err) => console.error(err.message))
