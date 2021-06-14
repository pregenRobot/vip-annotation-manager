import {app, BrowserWindow} from "electron"

require("@electron/remote/main").initialize()

import isDev from "electron-is-dev"

import path from "path"

let mainWindow: BrowserWindow

function createWindow() {

	mainWindow = new BrowserWindow({
		width: 800,
		height : 600,
		webPreferences : {
			enableRemoteModule: true,
			nodeIntegration:true
		}
	})

	mainWindow.loadURL(
		isDev ? "http://localhost:3000" 
		: `file://${path.join(__dirname),"../public/index.html"}`
	)

	if (isDev) {
		mainWindow.webContents.openDevTools({mode: "detach"})
	}
}

app.on("ready", createWindow)

app.on("window-all-closed", function (){

	if (process.platform != "darwin") {
		app.quit();
	}
})

app.on("activate", function (){
	if (BrowserWindow.getAllWindows.length == 0) createWindow()
})