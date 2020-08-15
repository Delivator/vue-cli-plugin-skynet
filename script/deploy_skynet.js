const skynet = require("@nebulous/skynet");

const portals = [
  // "https://siasky.net",
  "https://skyportal.xyz",
  // "https://siasky.dev",
  // "https://skynethub.io",
  // "https://skynet.cloudloop.io",
  // "http://skynet.local",
];

let opts = skynet.defaultOptions;

const path = "./dist";

portals.forEach((portal) => {
  opts.portalUrl = portal;
  console.log(`Uploading ${path} to ${portal}`);

  skynet
    .uploadDirectory(path, opts)
    .then((resp) => {
      const skylink = resp.replace("sia://", "");
      console.log(`Done: ${portal}/${skylink}/`);
    })
    .catch((err) => console.error(err.message));
});
