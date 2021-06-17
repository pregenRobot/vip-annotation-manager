/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/native_components/folder_loader.ts":
/*!************************************************!*\
  !*** ./src/native_components/folder_loader.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OSDocument": () => (/* binding */ OSDocument)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);

class OSDocument {
    constructor(path) {
        this.path = path;
        fs__WEBPACK_IMPORTED_MODULE_0___default().readFile(path, 'utf-8', (err, data) => {
            if (err) {
                alert("An error ocurred reading the file :" + err.message);
                return;
            }
            // Change how to handle the file content
            console.log("The file content is : " + data);
            this.content = data;
        });
    }
}



/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");;

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! os */ "os");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _native_components_folder_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./native_components/folder_loader */ "./src/native_components/folder_loader.ts");





const extPath = os__WEBPACK_IMPORTED_MODULE_0___default().platform() === 'darwin'
    ? '/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.13.2_0'
    : '/AppData/Local/Google/Chrome/User Data/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.13.2_0';
const createWindow = () => {
    const mainWindow = new electron__WEBPACK_IMPORTED_MODULE_2__.BrowserWindow({
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            preload: path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, '/preload.js'),
        },
    });
    // // 開発時にはデベロッパーツールを開く
    if (true) {
        mainWindow.webContents.openDevTools({ mode: 'detach' });
    }
    // レンダラープロセスをロード
    mainWindow.loadFile('dist/index.html');
};
electron__WEBPACK_IMPORTED_MODULE_2__.app.whenReady().then(async () => {
    /**
     * 開発時には React Developer Tools をロードする
     */
    if (true) {
        await electron__WEBPACK_IMPORTED_MODULE_2__.session.defaultSession.loadExtension(path__WEBPACK_IMPORTED_MODULE_1___default().join(os__WEBPACK_IMPORTED_MODULE_0___default().homedir(), extPath), {
            allowFileAccess: true,
        })
            .then(() => console.log('React Devtools loaded...'))
            .catch((err) => console.log(err));
    }
    // BrowserWindow インスタンスを作成
    createWindow();
});
// すべてのウィンドウが閉じられたらアプリを終了する
electron__WEBPACK_IMPORTED_MODULE_2__.app.once('window-all-closed', () => electron__WEBPACK_IMPORTED_MODULE_2__.app.quit());
electron__WEBPACK_IMPORTED_MODULE_2__.ipcMain.on("msg_render_to_main", (event, arg) => {
    console.log(arg); //printing "good job"
    // console.log(arg)
    var os_document = new _native_components_folder_loader__WEBPACK_IMPORTED_MODULE_3__.OSDocument(arg);
    // console.log(os_document.root_contents);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXAtYW5ub3RhdGlvbi1tYW5hZ2VyLy4vc3JjL25hdGl2ZV9jb21wb25lbnRzL2ZvbGRlcl9sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vdmlwLWFubm90YXRpb24tbWFuYWdlci9leHRlcm5hbCBcImVsZWN0cm9uXCIiLCJ3ZWJwYWNrOi8vdmlwLWFubm90YXRpb24tbWFuYWdlci9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vdmlwLWFubm90YXRpb24tbWFuYWdlci9leHRlcm5hbCBcIm9zXCIiLCJ3ZWJwYWNrOi8vdmlwLWFubm90YXRpb24tbWFuYWdlci9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly92aXAtYW5ub3RhdGlvbi1tYW5hZ2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ZpcC1hbm5vdGF0aW9uLW1hbmFnZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdmlwLWFubm90YXRpb24tbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdmlwLWFubm90YXRpb24tbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ZpcC1hbm5vdGF0aW9uLW1hbmFnZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly92aXAtYW5ub3RhdGlvbi1tYW5hZ2VyLy4vc3JjL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQjtBQUVuQixNQUFNLFVBQVU7SUFLZixZQUFZLElBQVk7UUFFdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO1FBQ2hCLGtEQUFXLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUN4QyxJQUFH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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tIFwiZnNcIlxuXG5jbGFzcyBPU0RvY3VtZW50e1xuXG5cdGRlY2xhcmUgcGF0aDpzdHJpbmdcblx0ZGVjbGFyZSBjb250ZW50OnN0cmluZ1xuXG5cdGNvbnN0cnVjdG9yKHBhdGg6IHN0cmluZyl7XG5cdFx0XG5cdFx0dGhpcy5wYXRoID0gcGF0aFxuXHRcdGZzLnJlYWRGaWxlKHBhdGgsICd1dGYtOCcsIChlcnIsIGRhdGEpID0+IHtcblx0XHRcdGlmKGVycil7XG5cdFx0XHRcdGFsZXJ0KFwiQW4gZXJyb3Igb2N1cnJlZCByZWFkaW5nIHRoZSBmaWxlIDpcIiArIGVyci5tZXNzYWdlKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcblx0XHRcdC8vIENoYW5nZSBob3cgdG8gaGFuZGxlIHRoZSBmaWxlIGNvbnRlbnRcblx0XHRcdGNvbnNvbGUubG9nKFwiVGhlIGZpbGUgY29udGVudCBpcyA6IFwiICsgZGF0YSk7XG5cdFx0XHR0aGlzLmNvbnRlbnQgPSBkYXRhXG5cdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IHtPU0RvY3VtZW50fSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgb3MgZnJvbSAnb3MnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBhcHAsIEJyb3dzZXJXaW5kb3csIHNlc3Npb24gfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQge2lwY01haW59IGZyb20gXCJlbGVjdHJvblwiXG5pbXBvcnQge09TRG9jdW1lbnR9IGZyb20gXCIuL25hdGl2ZV9jb21wb25lbnRzL2ZvbGRlcl9sb2FkZXJcIlxuXG5jb25zdCBleHRQYXRoID1cbiAgb3MucGxhdGZvcm0oKSA9PT0gJ2RhcndpbidcbiAgICA/ICcvTGlicmFyeS9BcHBsaWNhdGlvbiBTdXBwb3J0L0dvb2dsZS9DaHJvbWUvRGVmYXVsdC9FeHRlbnNpb25zL2Zta2FkbWFwZ29mYWRvcGxqYmpma2FwZGtvaWVuaWhpLzQuMTMuMl8wJ1xuICAgIDogJy9BcHBEYXRhL0xvY2FsL0dvb2dsZS9DaHJvbWUvVXNlciBEYXRhL0RlZmF1bHQvRXh0ZW5zaW9ucy9mbWthZG1hcGdvZmFkb3BsamJqZmthcGRrb2llbmloaS80LjEzLjJfMCc7XG5cbmNvbnN0IGNyZWF0ZVdpbmRvdyA9ICgpID0+IHtcbiAgY29uc3QgbWFpbldpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KHtcbiAgICB3ZWJQcmVmZXJlbmNlczoge1xuICAgICAgY29udGV4dElzb2xhdGlvbjogdHJ1ZSxcbiAgICAgIG5vZGVJbnRlZ3JhdGlvbjogZmFsc2UsXG4gICAgICBwcmVsb2FkOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnL3ByZWxvYWQuanMnKSxcbiAgICB9LFxuICB9KTtcblxuICAvLyAvLyDplovnmbrmmYLjgavjga/jg4fjg5njg63jg4Pjg5Hjg7zjg4Tjg7zjg6vjgpLplovjgY9cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgbWFpbldpbmRvdy53ZWJDb250ZW50cy5vcGVuRGV2VG9vbHMoeyBtb2RlOiAnZGV0YWNoJyB9KTtcbiAgfVxuXG4gIC8vIOODrOODs+ODgOODqeODvOODl+ODreOCu+OCueOCkuODreODvOODiVxuICBtYWluV2luZG93LmxvYWRGaWxlKCdkaXN0L2luZGV4Lmh0bWwnKTtcbn07XG5cbmFwcC53aGVuUmVhZHkoKS50aGVuKGFzeW5jICgpID0+IHtcbiAgLyoqXG4gICAqIOmWi+eZuuaZguOBq+OBryBSZWFjdCBEZXZlbG9wZXIgVG9vbHMg44KS44Ot44O844OJ44GZ44KLXG4gICAqL1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBhd2FpdCBzZXNzaW9uLmRlZmF1bHRTZXNzaW9uXG4gICAgICAubG9hZEV4dGVuc2lvbihwYXRoLmpvaW4ob3MuaG9tZWRpcigpLCBleHRQYXRoKSwge1xuICAgICAgICBhbGxvd0ZpbGVBY2Nlc3M6IHRydWUsXG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ1JlYWN0IERldnRvb2xzIGxvYWRlZC4uLicpKVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9XG5cbiAgLy8gQnJvd3NlcldpbmRvdyDjgqTjg7Pjgrnjgr/jg7PjgrnjgpLkvZzmiJBcbiAgY3JlYXRlV2luZG93KCk7XG59KTtcblxuLy8g44GZ44G544Gm44Gu44Km44Kj44Oz44OJ44Km44GM6ZaJ44GY44KJ44KM44Gf44KJ44Ki44OX44Oq44KS57WC5LqG44GZ44KLXG5hcHAub25jZSgnd2luZG93LWFsbC1jbG9zZWQnLCAoKSA9PiBhcHAucXVpdCgpKTtcblxuaXBjTWFpbi5vbihcIm1zZ19yZW5kZXJfdG9fbWFpblwiLCAoZXZlbnQsIGFyZykgPT4ge1xuICBjb25zb2xlLmxvZyhhcmcpOyAvL3ByaW50aW5nIFwiZ29vZCBqb2JcIlxuICAvLyBjb25zb2xlLmxvZyhhcmcpXG4gIHZhciBvc19kb2N1bWVudCA9IG5ldyBPU0RvY3VtZW50KGFyZylcbiAgLy8gY29uc29sZS5sb2cob3NfZG9jdW1lbnQucm9vdF9jb250ZW50cyk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=