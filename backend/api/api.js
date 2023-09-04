const Express = require('express');
const express = Express.Router();
const {InternalServerError, MalformedRequest, SystemOutage, Maintenance, AuthNotProvided, UserIsBanned, UserLacksPermissionsToEndpoint, InvalidAuth, invalidRequestMethod, AuthIsntRightGrant, notRealAuthType} = require("./responses")
const apiconfig = require("../../config/api.json")
const path = require("path");
express.post("/api/:version/:section/:item", async (req, res) => {
    if(!req.params.section) {
        res.status(400).json(MalformedRequest())
    }
    if(!req.params.item) {
        res.status(400).json(MalformedRequest())
    }
})

express.put("/api/:version/:section/:item", async (req, res) => {
    
})

express.patch("/api/:version/:section/:item", async (req, res) => {
    
})

express.delete("/api/:version/:section/:item", async (req, res) => {
    
})

express.get("/api/:version/:section/:item", async (req, res) => {

})
module.exports = express;