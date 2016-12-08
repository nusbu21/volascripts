// ==UserScript==
// @name         Unnotify reports
// @namespace    http://not.jew.dance/
// @version      0.1
// @description  because it's annoying
// @author       RealDolos
// @match        https://volafile.io/r/*
// @grant        none
// @require      https://rawgit.com/RealDolos/volascripts/064d22df5566bda12d222822584b87dcc6a43d45/dry.js
// @run-at       document-start
// ==/UserScript==

dry.once("dom", () => {
    "use strict";
    console.log("running", GM_info.script.name, GM_info.script.version, dry.version);
    dry.replaceEarly("chat", "showMessage", function(orig, nick, message, options, ...args) {
        if (nick === "Report" && options.highlight && options.staff) {
            options.notify = options.highlight = false;
        }
        return orig(...[nick, message, options].concat(args));
    });
});
