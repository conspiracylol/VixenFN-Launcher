const Express = require("express")
const express = Express();
const discordserver = "https://discord.gg/vixen";
const bodyparser = require("body-parser");

const internalstatus = "OK";
express.use(bodyparser);

express.get("/web/discordinvite/", async (req, res) => {
    res.end(discordserver);
});
express.get("/webassets/:asset", async (req, res) => {
    try { res.sendFile(__dirname + "/assets/" + req.params.asset); } catch(error) {
        console.log("[ASSETS ERROR] Error with assets, asset: " + req.params.asset + ", error: " + error)
    }
});
express.get("/web/status/", async (req, res) => {
    res.send("OK");
});

express.get("/web/notice/", async (req, res) => {
    res.status(404).send("NONE");
});

express.get("/", async (req, res) => {
    try { 
      
        res.sendFile("./pages/index.html") } catch(error) {
        console.log("[MAIN PAGE ERROR] Error with mainpage, error: " + error)
    }
});

express.get("/dashboard/", async (req, res) => {
    if(!internalstatus == "OK") {
        res.end("Whoops! There appears to be a temporary server issue. Please try again later. If it continues, check the discord server at: " + discordserver);
    }
    try { res.sendFile("./pages/dashboard.html"); } catch(error) {
        console.log("[DASHBOARD ERROR] Error with dashboard, error: " + error)
    }
    
});
express.post("/api/:version/:section/:item", async (req, res) => {
    
})

express.put("/api/:version/:section/:item", async (req, res) => {
    
})

express.patch("/api/:version/:section/:item", async (req, res) => {
    
})

express.delete("/api/:version/:section/:item", async (req, res) => {
    
})

express.get("/api/:version/:section/:item", async (req, res) => {

})

express.get("/login/", async (req, res) => {
    if(!internalstatus == "OK") {
        res.end("Whoops! There appears to be a temporary server issue. Please try again later. If it continues, check the discord server at: " + discordserver);
    }
    res.sendFile("./pages/login.html");
});
express.get("/register/", async (req, res) => {
    if(!internalstatus == "OK") {
            res.end("Whoops! There appears to be a temporary server issue. Please try again later. If it continues, check the discord server at: " + discordserver);
    }
    res.sendFile("./pages/register.html");
});

express.listen()