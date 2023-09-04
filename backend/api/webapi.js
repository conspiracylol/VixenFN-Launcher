const Express = require('express');
const express = Express.Router();
const apiconfig = require("../../config/api.json")
const path = require("path");
const webconfig = require("../../config/webconfig.json")

express.get("/TEMP/DEV/REGISTER/", async (req, res) => {
    res.sendFile(__dirname + "/temp.html");
});
express.get("/TEMP/DEV/LOGIN/", async (req, res) => {
    res.sendFile(__dirname + "/moretemp.html");
});

express.get("/discord/", async (req, res) => {
    res.redirect(webconfig.discordinvite);
});

express.get("/web/discordinvite/", async (req, res) => {
    res.end(webconfig.discordinvite);
});
express.get("/web/status/", async (req, res) => {
    res.send(webconfig.webstatus);
});

express.get("/web/notice/", async (req, res) => {
    res.status(webconfig.noticecode).send(webconfig.notice);
});
module.exports = express;