const Express = require('express');
const express = Express.Router();
const {InternalServerError, MalformedRequest, SystemOutage, Maintenance, AuthNotProvided, UserIsBanned, UserLacksPermissionsToEndpoint, InvalidAuth, invalidRequestMethod, AuthIsntRightGrant, notRealAuthType} = require("./responses")
const apiconfig = require("../../config/api.json")
const webconfig = require("../../config/webconfig.json")
const path = require("path");
const fs = require("fs");
express.get("/" + apiconfig.hybridFileName, async (req, res) => {
    let assetCDNPath = path.join(process.cwd(), 'assets/downloads/');
    let hybridFilePath = assetCDNPath + apiconfig.hybridFileName;
    res.sendFile(hybridFilePath);
});
express.get("/hybrid/download/", async (req, res) => {
    if(apiconfig.hybridDownloadUrl == false) {
        if(apiconfig.UseAssetCDNPathForDownloads == true) {
            let assetCDNPath = path.join(process.cwd(), 'assets/downloads/');
            let hybridFilePath = assetCDNPath + apiconfig.hybridFileName;
            if(!fs.existsSync(hybridFilePath)) {
                console.log("[WARNING] HYBRID FILE PATH DOES NOT EXIST! PATH SPECIFIED: " + assetCDNPath + ". YOUR FILE NAME: " + apiconfig.hybridFileName + " . FULL PATH: " + hybridFilePath + " PLEASE UPDATE.");
                res.status(404).send("Sorry, the download is temporarily unavailable. Please try again later.");
                return;
            }
            try {
                res.redirect("https://vixenfn.lol/" + apiconfig.hybridFileName);
                return;
            } catch(error) {
                console.log("Fatal error with download at route: \"/hybrid/download/\"! Failed to send download! Error: " + error);
                return;
            }
        }
    }
})
module.exports = express;