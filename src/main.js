"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
require("@electron/remote/main").initialize();
var mainWindow;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            enableRemoteModule: true,
            nodeIntegration: true
        }
    });
    mainWindow.loadURL("http://localhost:3000");
}
electron_1.app.on("ready", createWindow);
electron_1.app.on("window-all-closed", function () {
    if (process.platform != "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", function () {
    if (electron_1.BrowserWindow.getAllWindows.length == 0)
        createWindow();
});
