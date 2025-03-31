const addonInterface = require("./addon");
const express = require("express");
const landingTemplate = require("stremio-addon-sdk/src/landingTemplate");
const getRouter = require("stremio-addon-sdk/src/getRouter");
const opn = require("opn");
const app = express();

if (addonInterface.constructor.name !== "AddonInterface") {
	throw new Error("first argument must be an instance of AddonInterface");
}
app.use((_, res, next) => {
	next();
});

app.use(getRouter(addonInterface));

// landing page
const landingHTML = landingTemplate(addonInterface.manifest);
app.get("/", (_, res) => {
	res.setHeader("content-type", "text/html");
	res.end(landingHTML);
});

module.exports = app;
