const Express = require('express');
const express = Express.Router();
const path = require("path");
const apiconfig = require("../../config/api.json");


express.get("/webassets/:asset", (req, res) => {
    if (apiconfig.debug) {
      console.log("[DEBUG] REQ: /webassets/" + req.params.asset);
    }
    try {
      const assetPath = path.join(process.cwd(), '/assets/' + req.params.asset);
      res.sendFile(assetPath);
    } catch (error) {
      console.log(
        "[ASSETS ERROR] Error with assets, asset: " +
          req.params.asset +
          ", error: " +
          error
      );
    }
});
express.get("/assets/:asset", (req, res) => {
  if(req.params.asset == "newFile.png") {
    res.sendFile(__dirname + "newFile.png");
    return;
  }
    if (apiconfig.debug) {
      console.log("[DEBUG] REQ: /assets/" + req.params.asset);
    }
    try {
      const assetPath = path.join(__dirname, '../assets/' + req.params.asset);
      res.sendFile(assetPath);
    } catch (error) {
      console.log(
        "[ASSETS ERROR] Error with assets, asset: " +
          req.params.asset +
          ", error: " +
          error
      );
    }
});
module.exports = express;