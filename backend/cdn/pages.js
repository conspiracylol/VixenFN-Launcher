const Express = require('express');
const express = Express.Router();
const path = require("path");
const apiconfig = require("../../config/api.json")
const webconfig = require("../../config/webconfig.json")
const authconfig = require("../../config/authconfig.json")
let homepageData = "";
let hasGottenHomePage = false;
let homepageInProgress = false;
async function getAndSaveHomePage() {
  let fsAsync = require('fs').promises;
  
  if(hasGottenHomePage == true) {
    return;
  }
 try {
    let data = await fsAsync.readFile(process.cwd() + "/pages/index.html", 'utf8');
    // Do something with the file contents in the 'data' variable
    
   homepageData = data;
   hasGottenHomePage = true;
  } catch (err) {
    console.error('Error reading file:', err);
 }
}
// main page!
express.get("/", async (req, res) => {
if(hasGottenHomePage == false) {
  if(homepageInProgress == true) {
    return;
  }
  homepageInProgress = true;
 await getAndSaveHomePage();
}
res.status(200).end(homepageData);
  
  


});


express.get("/dashboard", (req, res) => {
    try {
        if(!webconfig.allowfrontpageaccess == true) {
            res.end("Whoops! There appears to be a temporary server issue. Please try again later. If it continues, check the discord server at: " + discordserver);
            return;
        }
      const indexPath = path.join(process.cwd(), 'pages/dashboard.html');
      res.sendFile(indexPath);
      return;
    } catch (error) {
      console.log("[DASHBOARD PAGE ERROR] Error with DASHBOARD page, error: " + error);
      try {
        res.status(502);
    } catch {
        
    }
      return;
    }
});

express.get("/", (req, res) => {
    try {
        if(!webconfig.allowfrontpageaccess == true) {
            res.end("Whoops! There appears to be a temporary server issue. Please try again later. If it continues, check the discord server at: " + discordserver);
            return;
        }
      const indexPath = path.join(process.cwd(), 'pages/faq.html');
      res.sendFile(indexPath);
      return;
    } catch (error) {
      console.log("[FAQ PAGE ERROR] Error with FAQ page, error: " + error);
      try {
        res.status(502);
    } catch {
        
    }
      return;
    }
});

express.get("/dashboard/", async (req, res) => {
    if(!webconfig.internalstatus == "OK") {
        res.end("Whoops! There appears to be a temporary server issue. Please try again later. If it continues, check the discord server at: " + discordserver);
        return;
    }
    try { res.sendFile("../pages/dashboard.html"); } catch(error) {
        console.log("[DASHBOARD ERROR] Error with dashboard, error: " + error)
        try {
            res.status(502);
        } catch {
            
        }
        return;
    }
});


express.get("/login/", async (req, res) => {
    if(!webconfig.internalstatus == "OK") {
        res.end("Whoops! There appears to be a temporary server issue. Please try again later. If it continues, check the discord server at: " + discordserver);
        return;
    }
    try {
        res.sendFile("../pages/login.html");
        return;
    } 
    catch(err) {
        console.log("[LOGIN PAGE ERROR] Error with login page, error: " + err)
        try {
            res.status(502);
        } catch {

        }
        return;
    }
});
express.get("/register/", async (req, res) => {
    if(!webconfig.internalstatus == "OK") {
            res.end("Whoops! There appears to be a temporary server issue. Please try again later. If it continues, check the discord server at: " + discordserver);
            return;
    }
    try {
        res.sendFile("../pages/register.html");
    } catch(err) {
        console.log("[REGISTER PAGE ERROR] Error with register page, error: " + err)
        try {
            res.status(502);
        } catch {
            
        }
        return;
    }
    return;
});

module.exports = express;