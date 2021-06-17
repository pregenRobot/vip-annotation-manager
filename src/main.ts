import os from 'os';
import path from 'path';
import { app, BrowserWindow, session } from 'electron';
import {ipcMain} from "electron"
import {OSDocument} from "./native_components/folder_loader"

const extPath =
  os.platform() === 'darwin'
    ? '/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.13.2_0'
    : '/AppData/Local/Google/Chrome/User Data/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.13.2_0';

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, '/preload.js'),
    },
  });

  // // 開発時にはデベロッパーツールを開く
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools({ mode: 'detach' });
  }

  // レンダラープロセスをロード
  mainWindow.loadFile('dist/index.html');
};

app.whenReady().then(async () => {
  /**
   * 開発時には React Developer Tools をロードする
   */
  if (process.env.NODE_ENV === 'development') {
    await session.defaultSession
      .loadExtension(path.join(os.homedir(), extPath), {
        allowFileAccess: true,
      })
      .then(() => console.log('React Devtools loaded...'))
      .catch((err) => console.log(err));
  }

  // BrowserWindow インスタンスを作成
  createWindow();
});

// すべてのウィンドウが閉じられたらアプリを終了する
app.once('window-all-closed', () => app.quit());

ipcMain.on("msg_render_to_main", (event, arg) => {
  console.log(arg); //printing "good job"
  // console.log(arg)
  var os_document = new OSDocument(arg)
  
  // console.log(os_document.root_contents);
});
