/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");;

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



const extPath = os__WEBPACK_IMPORTED_MODULE_0___default().platform() === 'darwin'
    ? '/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.13.2_0'
    : '/AppData/Local/Google/Chrome/User Data/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.13.2_0';
/**
 * BrowserWindowインスタンスを作成する関数
 */
const createWindow = () => {
    const mainWindow = new electron__WEBPACK_IMPORTED_MODULE_2__.BrowserWindow({
        webPreferences: {
            /**
             * BrowserWindowインスタンス（レンダラープロセス）では
             * Node.jsの機能を無効化する（electron@8以降でデフォルト）
             */
            nodeIntegration: false,
            /**
             * メインプロセスとレンダラープロセスとの間で
             * コンテキストを共有しない (electron@12以降でデフォルト)
             */
            contextIsolation: true,
            /**
             * Preloadスクリプト
             * webpack.config.js で 'node.__dirname: false' を
             * 指定していればパスを取得できる
             */
            preload: path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, 'preload.js'),
        },
    });
    // 開発時にはデベロッパーツールを開く
    if (true) {
        mainWindow.webContents.openDevTools({ mode: 'detach' });
    }
    // レンダラープロセスをロード
    mainWindow.loadFile('dist/index.html');
};
/**
 * アプリを起動する準備が完了したら BrowserWindow インスタンスを作成し、
 * レンダラープロセス（index.htmlとそこから呼ばれるスクリプト）を
 * ロードする
 */
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXAtYW5ub3RhdGlvbi1tYW5hZ2VyL2V4dGVybmFsIFwiZWxlY3Ryb25cIiIsIndlYnBhY2s6Ly92aXAtYW5ub3RhdGlvbi1tYW5hZ2VyL2V4dGVybmFsIFwib3NcIiIsIndlYnBhY2s6Ly92aXAtYW5ub3RhdGlvbi1tYW5hZ2VyL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovL3ZpcC1hbm5vdGF0aW9uLW1hbmFnZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdmlwLWFubm90YXRpb24tbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly92aXAtYW5ub3RhdGlvbi1tYW5hZ2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly92aXAtYW5ub3RhdGlvbi1tYW5hZ2VyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdmlwLWFubm90YXRpb24tbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ZpcC1hbm5vdGF0aW9uLW1hbmFnZXIvLi9zcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0M7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOb0I7QUFDSTtBQUMrQjtBQUV2RCxNQUFNLE9BQU8sR0FDWCxrREFBVyxFQUFFLEtBQUssUUFBUTtJQUN4QixDQUFDLENBQUMseUdBQXlHO0lBQzNHLENBQUMsQ0FBQyxxR0FBcUcsQ0FBQztBQUU1Rzs7R0FFRztBQUNILE1BQU0sWUFBWSxHQUFHLEdBQUcsRUFBRTtJQUN4QixNQUFNLFVBQVUsR0FBRyxJQUFJLG1EQUFhLENBQUM7UUFDbkMsY0FBYyxFQUFFO1lBQ2Q7OztlQUdHO1lBQ0gsZUFBZSxFQUFFLEtBQUs7WUFDdEI7OztlQUdHO1lBQ0gsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0Qjs7OztlQUlHO1lBQ0gsT0FBTyxFQUFFLGdEQUFTLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQztTQUM1QztLQUNGLENBQUMsQ0FBQztJQUVILG9CQUFvQjtJQUNwQixJQUFJLElBQXNDLEVBQUU7UUFDMUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztLQUN6RDtJQUVELGdCQUFnQjtJQUNoQixVQUFVLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNILG1EQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7SUFDOUI7O09BRUc7SUFDSCxJQUFJLElBQXNDLEVBQUU7UUFDMUMsTUFBTSwwRUFDVSxDQUFDLGdEQUFTLENBQUMsaURBQVUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQy9DLGVBQWUsRUFBRSxJQUFJO1NBQ3RCLENBQUM7YUFDRCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2FBQ25ELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3JDO0lBRUQsMEJBQTBCO0lBQzFCLFlBQVksRUFBRSxDQUFDO0FBQ2pCLENBQUMsQ0FBQyxDQUFDO0FBRUgsMkJBQTJCO0FBQzNCLDhDQUFRLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFLENBQUMsOENBQVEsRUFBRSxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTs7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBvcyBmcm9tICdvcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IGFwcCwgQnJvd3NlcldpbmRvdywgc2Vzc2lvbiB9IGZyb20gJ2VsZWN0cm9uJztcblxuY29uc3QgZXh0UGF0aCA9XG4gIG9zLnBsYXRmb3JtKCkgPT09ICdkYXJ3aW4nXG4gICAgPyAnL0xpYnJhcnkvQXBwbGljYXRpb24gU3VwcG9ydC9Hb29nbGUvQ2hyb21lL0RlZmF1bHQvRXh0ZW5zaW9ucy9mbWthZG1hcGdvZmFkb3BsamJqZmthcGRrb2llbmloaS80LjEzLjJfMCdcbiAgICA6ICcvQXBwRGF0YS9Mb2NhbC9Hb29nbGUvQ2hyb21lL1VzZXIgRGF0YS9EZWZhdWx0L0V4dGVuc2lvbnMvZm1rYWRtYXBnb2ZhZG9wbGpiamZrYXBka29pZW5paGkvNC4xMy4yXzAnO1xuXG4vKipcbiAqIEJyb3dzZXJXaW5kb3fjgqTjg7Pjgrnjgr/jg7PjgrnjgpLkvZzmiJDjgZnjgovplqLmlbBcbiAqL1xuY29uc3QgY3JlYXRlV2luZG93ID0gKCkgPT4ge1xuICBjb25zdCBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xuICAgIHdlYlByZWZlcmVuY2VzOiB7XG4gICAgICAvKipcbiAgICAgICAqIEJyb3dzZXJXaW5kb3fjgqTjg7Pjgrnjgr/jg7PjgrnvvIjjg6zjg7Pjg4Djg6njg7zjg5fjg63jgrvjgrnvvInjgafjga9cbiAgICAgICAqIE5vZGUuanPjga7mqZ/og73jgpLnhKHlirnljJbjgZnjgovvvIhlbGVjdHJvbkA45Lul6ZmN44Gn44OH44OV44Kp44Or44OI77yJXG4gICAgICAgKi9cbiAgICAgIG5vZGVJbnRlZ3JhdGlvbjogZmFsc2UsXG4gICAgICAvKipcbiAgICAgICAqIOODoeOCpOODs+ODl+ODreOCu+OCueOBqOODrOODs+ODgOODqeODvOODl+ODreOCu+OCueOBqOOBrumWk+OBp1xuICAgICAgICog44Kz44Oz44OG44Kt44K544OI44KS5YWx5pyJ44GX44Gq44GEIChlbGVjdHJvbkAxMuS7pemZjeOBp+ODh+ODleOCqeODq+ODiClcbiAgICAgICAqL1xuICAgICAgY29udGV4dElzb2xhdGlvbjogdHJ1ZSxcbiAgICAgIC8qKlxuICAgICAgICogUHJlbG9hZOOCueOCr+ODquODl+ODiFxuICAgICAgICogd2VicGFjay5jb25maWcuanMg44GnICdub2RlLl9fZGlybmFtZTogZmFsc2UnIOOCklxuICAgICAgICog5oyH5a6a44GX44Gm44GE44KM44Gw44OR44K544KS5Y+W5b6X44Gn44GN44KLXG4gICAgICAgKi9cbiAgICAgIHByZWxvYWQ6IHBhdGguam9pbihfX2Rpcm5hbWUsICdwcmVsb2FkLmpzJyksXG4gICAgfSxcbiAgfSk7XG5cbiAgLy8g6ZaL55m65pmC44Gr44Gv44OH44OZ44Ot44OD44OR44O844OE44O844Or44KS6ZaL44GPXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIG1haW5XaW5kb3cud2ViQ29udGVudHMub3BlbkRldlRvb2xzKHsgbW9kZTogJ2RldGFjaCcgfSk7XG4gIH1cblxuICAvLyDjg6zjg7Pjg4Djg6njg7zjg5fjg63jgrvjgrnjgpLjg63jg7zjg4lcbiAgbWFpbldpbmRvdy5sb2FkRmlsZSgnZGlzdC9pbmRleC5odG1sJyk7XG59O1xuXG4vKipcbiAqIOOCouODl+ODquOCkui1t+WLleOBmeOCi+a6luWCmeOBjOWujOS6huOBl+OBn+OCiSBCcm93c2VyV2luZG93IOOCpOODs+OCueOCv+ODs+OCueOCkuS9nOaIkOOBl+OAgVxuICog44Os44Oz44OA44Op44O844OX44Ot44K744K577yIaW5kZXguaHRtbOOBqOOBneOBk+OBi+OCieWRvOOBsOOCjOOCi+OCueOCr+ODquODl+ODiO+8ieOCklxuICog44Ot44O844OJ44GZ44KLXG4gKi9cbmFwcC53aGVuUmVhZHkoKS50aGVuKGFzeW5jICgpID0+IHtcbiAgLyoqXG4gICAqIOmWi+eZuuaZguOBq+OBryBSZWFjdCBEZXZlbG9wZXIgVG9vbHMg44KS44Ot44O844OJ44GZ44KLXG4gICAqL1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBhd2FpdCBzZXNzaW9uLmRlZmF1bHRTZXNzaW9uXG4gICAgICAubG9hZEV4dGVuc2lvbihwYXRoLmpvaW4ob3MuaG9tZWRpcigpLCBleHRQYXRoKSwge1xuICAgICAgICBhbGxvd0ZpbGVBY2Nlc3M6IHRydWUsXG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ1JlYWN0IERldnRvb2xzIGxvYWRlZC4uLicpKVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9XG5cbiAgLy8gQnJvd3NlcldpbmRvdyDjgqTjg7Pjgrnjgr/jg7PjgrnjgpLkvZzmiJBcbiAgY3JlYXRlV2luZG93KCk7XG59KTtcblxuLy8g44GZ44G544Gm44Gu44Km44Kj44Oz44OJ44Km44GM6ZaJ44GY44KJ44KM44Gf44KJ44Ki44OX44Oq44KS57WC5LqG44GZ44KLXG5hcHAub25jZSgnd2luZG93LWFsbC1jbG9zZWQnLCAoKSA9PiBhcHAucXVpdCgpKTsiXSwic291cmNlUm9vdCI6IiJ9