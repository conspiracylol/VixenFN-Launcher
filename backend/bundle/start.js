const Express = require("express")
const express = Express();
const discordserver = "https://discord.gg/vixen";
const bodyparser = require("body-parser");
const BackendHandlerPort = 3911;
const internalstatus = "OK";
const path = require("path");
const apiroutes = require("../api/api");
const webapi = require("../api/webapi");
const downloads = require("../api/downloads");
const apiconfig = require("../../config/api.json")
const assetcdn = require("../cdn/assets")
const pages = require("../cdn/pages")
//express.use(bodyparser);
express.use(apiroutes);
express.use(assetcdn);
express.use(pages);
express.use(downloads);
express.use(webapi);


// Middleware to handle unmatched routes (404)
express.use(function(req, res, next) {
    if(apiconfig.debug == true) { 
      if(req.url.includes("*")) {
        return;
      }
      if(req.url.includes("aaaaaaaaaa")) {
        res.status(404);
        return;
      }
      if(req.url.includes("invisible") && req.url.includes(".js")) {
        res.end("ok");
        return;
      }
      console.log("[DEBUG] 404: " + req.originalUrl); }
   res.status(404).sendFile(__dirname + "/404.html");
});

express.listen(BackendHandlerPort, (err) => {
    if(err) {
        console.log("FAILED TO START SERVER! ERROR: " + err)
    }
    if(apiconfig.debug == true) {
        console.log("[DEBUG] WARNING! LOG ALL REQUESTS IS ON (apiconfig.debug) DISABLE THIS TO NOT SPAM CONSOLE!")
    }
    console.log("Backend Handler listening on port: " + BackendHandlerPort);
})