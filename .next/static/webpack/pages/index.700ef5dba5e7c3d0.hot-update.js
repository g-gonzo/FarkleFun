"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/ButtonBox.js":
/*!****************************!*\
  !*** ./pages/ButtonBox.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _DiceBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DiceBox */ \"./pages/DiceBox.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst ButtonBox = ()=>{\n    _s();\n    const [playGame, setPlayGame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    let player1 = {\n        turn: false,\n        rollCount: 0,\n        currentScore: 0,\n        totalScore: 0\n    };\n    let player2 = {\n        turn: false,\n        rollCount: 0,\n        currentScore: 0,\n        totalScore: 0\n    };\n    function PlayGame() {\n        setPlayGame(true);\n        player1.turn = true;\n        player2.turn = false;\n        player1.rollCount = 0;\n        player1.currentScore = 0;\n        player1.totalScore = 0;\n    // PlayerOneTest();\n    // hide PlayGame button ; display Roll button\n    }\n    function PlayerOneTest() {\n        console.log(\"setPlayerGame\" + \" \" + playGame);\n        console.log(\"Player 1 turn?\" + \" \" + player1.turn);\n        console.log(\"Player 2 turn?\" + \" \" + player2.turn);\n        console.log(\"P 1 - rollcount\" + \" \" + player1.rollCount);\n        console.log(\"P 1 - current score\" + \" \" + player1.currentScore);\n        console.log(\"P 1 - total score\" + \" \" + player1.totalScore);\n    }\n    function EndTurn() {\n    // Current players turn = false\n    // Current score added to total score\n    // current score is cleared\n    // roll counter is cleared\n    }\n    function EndGame() {\n    // Current players turn = false\n    // Current score added to total score\n    // current score is cleared\n    // roll counter is cleared\n    }\n    // State - so that one button is displayed as needed.\n    function ButtonActive() {\n    // PlayGame button = true\n    // roll button = false\n    // score button = false\n    // End Turn button = false\n    // End Game button = false\n    }\n    function PlayersTurn() {\n        if (player1.turn === true && player1.rollCount > 3) {\n            player1.turn = false;\n            player2.turn = true;\n            player1.rollCount = 0;\n        } else {\n            player2.turn = true;\n            player2.rolllCount = 0;\n        }\n    // Player one default on start = true\n    // after End Turn selected = current player false \n    // after 3 rolls per turn or farkle\n    // on end of turn any current players current score is added to that players total score. \n    }\n    function RollDice() {\n        RollCounter();\n    // DiceBox pass prop??\n    // Roll all six dice..\n    // Update Roll Dice state = true?\n    // Pass dice results to scoredice??\n    }\n    function ScoreDice() {\n    // Score state = true\n    // current player selected dice are added for a current score\n    // on end of turn current score is added to total score...\n    }\n    function RollCounter() {\n        if (player1.turn === true) {\n            player1.rolllCount = player1.rollCount++;\n        } else player2.rollCount = player2.rollCount++;\n        PlayerOneTest();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"buttonbox-wrapper\",\n        style: {\n            border: \"2px solid black\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"buttonbox\",\n            style: {\n                display: \"flex\",\n                direction: \"row\",\n                margin: \"5px\",\n                justifyContent: \"center\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"playgame-button\",\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prsbutton\",\n                        style: {\n                            width: \"150px\",\n                            height: \"75px\",\n                            margin: \"auto\"\n                        },\n                        onClick: ()=>PlayGame(),\n                        children: \"Play Game?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                        lineNumber: 99,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                    lineNumber: 98,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"rolldice-button\",\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prsbutton\",\n                        style: {\n                            width: \"150px\",\n                            height: \"75px\",\n                            margin: \"auto\"\n                        },\n                        onClick: ()=>RollDice(),\n                        children: \"Roll Dice?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                        lineNumber: 102,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                    lineNumber: 101,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"scoredice-button\",\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prsbutton\",\n                        style: {\n                            width: \"150px\",\n                            height: \"75px\",\n                            margin: \"auto\"\n                        },\n                        children: \"Score Dice?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                        lineNumber: 105,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                    lineNumber: 104,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"endturn-button\",\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prsbutton\",\n                        style: {\n                            width: \"150px\",\n                            height: \"75px\",\n                            margin: \"auto\"\n                        },\n                        children: \"End Turn?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                        lineNumber: 108,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                    lineNumber: 107,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"endgame-button\",\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prsbutton\",\n                        style: {\n                            width: \"150px\",\n                            height: \"75px\",\n                            margin: \"auto\"\n                        },\n                        children: \"End Game?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                        lineNumber: 111,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                    lineNumber: 110,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n            lineNumber: 97,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n        lineNumber: 96,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ButtonBox, \"tulspm1nLy5cvDsmzipMFHg7lfI=\");\n_c = ButtonBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ButtonBox); // this ButtonBox component needs a redesign, created as a placeholder \nvar _c;\n$RefreshReg$(_c, \"ButtonBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Uzs4QkFDMUQsNEVBQUNDO3dCQUFPUixXQUFVO3dCQUFZQyxPQUFPOzRCQUFFUSxPQUFPOzRCQUFTQyxRQUFROzRCQUFRTCxRQUFRO3dCQUFPO3dCQUFHTSxTQUFTLElBQU94QjtrQ0FBYzs7Ozs7Ozs7Ozs7OEJBRTNILDhEQUFDWTtvQkFBSUMsV0FBVTtvQkFBa0JDLE9BQU87d0JBQUVNLFdBQVc7b0JBQVM7OEJBQzFELDRFQUFDQzt3QkFBT1IsV0FBVTt3QkFBWUMsT0FBTzs0QkFBRVEsT0FBTzs0QkFBU0MsUUFBUTs0QkFBUUwsUUFBUTt3QkFBTzt3QkFBR00sU0FBUyxJQUFPZjtrQ0FBYTs7Ozs7Ozs7Ozs7OEJBRTFILDhEQUFDRztvQkFBSUMsV0FBVTtvQkFBbUJDLE9BQU87d0JBQUVNLFdBQVc7b0JBQVM7OEJBQzNELDRFQUFDQzt3QkFBT1IsV0FBVTt3QkFBWUMsT0FBTzs0QkFBRVEsT0FBTzs0QkFBU0MsUUFBUTs0QkFBUUwsUUFBUTt3QkFBTztrQ0FBRzs7Ozs7Ozs7Ozs7OEJBRTdGLDhEQUFDTjtvQkFBSUMsV0FBVTtvQkFBaUJDLE9BQU87d0JBQUVNLFdBQVc7b0JBQVM7OEJBQ3pELDRFQUFDQzt3QkFBT1IsV0FBVTt3QkFBWUMsT0FBTzs0QkFBRVEsT0FBTzs0QkFBU0MsUUFBUTs0QkFBUUwsUUFBUTt3QkFBTztrQ0FBRzs7Ozs7Ozs7Ozs7OEJBRTdGLDhEQUFDTjtvQkFBSUMsV0FBVTtvQkFBaUJDLE9BQU87d0JBQUVNLFdBQVc7b0JBQVM7OEJBQ3pELDRFQUFDQzt3QkFBT1IsV0FBVTt3QkFBWUMsT0FBTzs0QkFBRVEsT0FBTzs0QkFBU0MsUUFBUTs0QkFBUUwsUUFBUTt3QkFBTztrQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs3RztHQS9HTTNCO0tBQUFBO0FBaUhOLCtEQUFlQSxTQUFTQSxFQUFDLENBRXpCLHVFQUF1RSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9CdXR0b25Cb3guanM/NDhkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERpY2VCb3ggZnJvbSBcIi4vRGljZUJveFwiO1xyXG5cclxuXHJcbmNvbnN0IEJ1dHRvbkJveCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbcGxheUdhbWUsIHNldFBsYXlHYW1lXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGxldCBwbGF5ZXIxID0geyB0dXJuOiBmYWxzZSwgcm9sbENvdW50OiAwLCBjdXJyZW50U2NvcmU6IDAsIHRvdGFsU2NvcmU6IDAgfTtcclxuXHJcbiAgICBsZXQgcGxheWVyMiA9IHsgdHVybjogZmFsc2UsIHJvbGxDb3VudDogMCwgY3VycmVudFNjb3JlOiAwLCB0b3RhbFNjb3JlOiAwIH07XHJcblxyXG4gICAgZnVuY3Rpb24gUGxheUdhbWUoKSB7XHJcbiAgICAgICAgc2V0UGxheUdhbWUodHJ1ZSk7XHJcbiAgICAgICAgcGxheWVyMS50dXJuID0gdHJ1ZTtcclxuICAgICAgICBwbGF5ZXIyLnR1cm4gPSBmYWxzZTtcclxuICAgICAgICBwbGF5ZXIxLnJvbGxDb3VudCA9IDA7XHJcbiAgICAgICAgcGxheWVyMS5jdXJyZW50U2NvcmUgPSAwO1xyXG4gICAgICAgIHBsYXllcjEudG90YWxTY29yZSA9IDA7XHJcbiAgICAgICAvLyBQbGF5ZXJPbmVUZXN0KCk7XHJcbiAgICAgICAgLy8gaGlkZSBQbGF5R2FtZSBidXR0b24gOyBkaXNwbGF5IFJvbGwgYnV0dG9uXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gUGxheWVyT25lVGVzdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNldFBsYXllckdhbWVcIiArIFwiIFwiICsgcGxheUdhbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyIDEgdHVybj9cIiArIFwiIFwiICsgcGxheWVyMS50dXJuKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXllciAyIHR1cm4/XCIgKyBcIiBcIiArIHBsYXllcjIudHVybik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQIDEgLSByb2xsY291bnRcIiArIFwiIFwiICsgcGxheWVyMS5yb2xsQ291bnQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUCAxIC0gY3VycmVudCBzY29yZVwiICsgXCIgXCIgKyBwbGF5ZXIxLmN1cnJlbnRTY29yZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQIDEgLSB0b3RhbCBzY29yZVwiICsgXCIgXCIgKyBwbGF5ZXIxLnRvdGFsU2NvcmUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBFbmRUdXJuKCkge1xyXG4gICAgICAgIC8vIEN1cnJlbnQgcGxheWVycyB0dXJuID0gZmFsc2VcclxuICAgICAgICAvLyBDdXJyZW50IHNjb3JlIGFkZGVkIHRvIHRvdGFsIHNjb3JlXHJcbiAgICAgICAgLy8gY3VycmVudCBzY29yZSBpcyBjbGVhcmVkXHJcbiAgICAgICAgLy8gcm9sbCBjb3VudGVyIGlzIGNsZWFyZWRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBFbmRHYW1lKCkge1xyXG4gICAgICAgIC8vIEN1cnJlbnQgcGxheWVycyB0dXJuID0gZmFsc2VcclxuICAgICAgICAvLyBDdXJyZW50IHNjb3JlIGFkZGVkIHRvIHRvdGFsIHNjb3JlXHJcbiAgICAgICAgLy8gY3VycmVudCBzY29yZSBpcyBjbGVhcmVkXHJcbiAgICAgICAgLy8gcm9sbCBjb3VudGVyIGlzIGNsZWFyZWRcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdGF0ZSAtIHNvIHRoYXQgb25lIGJ1dHRvbiBpcyBkaXNwbGF5ZWQgYXMgbmVlZGVkLlxyXG4gICAgZnVuY3Rpb24gQnV0dG9uQWN0aXZlKCkge1xyXG4gICAgICAgIC8vIFBsYXlHYW1lIGJ1dHRvbiA9IHRydWVcclxuICAgICAgICAvLyByb2xsIGJ1dHRvbiA9IGZhbHNlXHJcbiAgICAgICAgLy8gc2NvcmUgYnV0dG9uID0gZmFsc2VcclxuICAgICAgICAvLyBFbmQgVHVybiBidXR0b24gPSBmYWxzZVxyXG4gICAgICAgIC8vIEVuZCBHYW1lIGJ1dHRvbiA9IGZhbHNlXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFBsYXllcnNUdXJuKCkge1xyXG4gICAgICAgIGlmIChwbGF5ZXIxLnR1cm4gPT09IHRydWUgJiYgcGxheWVyMS5yb2xsQ291bnQgPiAzKSB7XHJcbiAgICAgICAgICAgIHBsYXllcjEudHVybiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBwbGF5ZXIyLnR1cm4gPSB0cnVlO1xyXG4gICAgICAgICAgICBwbGF5ZXIxLnJvbGxDb3VudCA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHsgcGxheWVyMi50dXJuID0gdHJ1ZTsgcGxheWVyMi5yb2xsbENvdW50ID0gMDsgfVxyXG4gICAgICAgIC8vIFBsYXllciBvbmUgZGVmYXVsdCBvbiBzdGFydCA9IHRydWVcclxuICAgICAgICAvLyBhZnRlciBFbmQgVHVybiBzZWxlY3RlZCA9IGN1cnJlbnQgcGxheWVyIGZhbHNlIFxyXG4gICAgICAgIC8vIGFmdGVyIDMgcm9sbHMgcGVyIHR1cm4gb3IgZmFya2xlXHJcbiAgICAgICAgLy8gb24gZW5kIG9mIHR1cm4gYW55IGN1cnJlbnQgcGxheWVycyBjdXJyZW50IHNjb3JlIGlzIGFkZGVkIHRvIHRoYXQgcGxheWVycyB0b3RhbCBzY29yZS4gXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gUm9sbERpY2UoKSB7XHJcbiAgICAgICAgUm9sbENvdW50ZXIoKTtcclxuICAgICAgICAvLyBEaWNlQm94IHBhc3MgcHJvcD8/XHJcbiAgICAgICAgLy8gUm9sbCBhbGwgc2l4IGRpY2UuLlxyXG4gICAgICAgIC8vIFVwZGF0ZSBSb2xsIERpY2Ugc3RhdGUgPSB0cnVlP1xyXG4gICAgICAgIC8vIFBhc3MgZGljZSByZXN1bHRzIHRvIHNjb3JlZGljZT8/XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFNjb3JlRGljZSgpIHtcclxuICAgICAgICAvLyBTY29yZSBzdGF0ZSA9IHRydWVcclxuICAgICAgICAvLyBjdXJyZW50IHBsYXllciBzZWxlY3RlZCBkaWNlIGFyZSBhZGRlZCBmb3IgYSBjdXJyZW50IHNjb3JlXHJcbiAgICAgICAgLy8gb24gZW5kIG9mIHR1cm4gY3VycmVudCBzY29yZSBpcyBhZGRlZCB0byB0b3RhbCBzY29yZS4uLlxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBSb2xsQ291bnRlcigpIHtcclxuICAgICAgICBpZiAocGxheWVyMS50dXJuID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHBsYXllcjEucm9sbGxDb3VudCA9IHBsYXllcjEucm9sbENvdW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgKHBsYXllcjIucm9sbENvdW50ID0gcGxheWVyMi5yb2xsQ291bnQrKylcclxuXHJcbiAgICAgICAgUGxheWVyT25lVGVzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25ib3gtd3JhcHBlclwiIHN0eWxlPXt7IGJvcmRlcjogXCIycHggc29saWQgYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25ib3hcIiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZGlyZWN0aW9uOiBcInJvd1wiLCBtYXJnaW46IFwiNXB4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5Z2FtZS1idXR0b25cIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcnNidXR0b25cIiBzdHlsZT17eyB3aWR0aDogXCIxNTBweFwiLCBoZWlnaHQ6IFwiNzVweFwiLCBtYXJnaW46IFwiYXV0b1wiIH19IG9uQ2xpY2s9eygpID0+IChQbGF5R2FtZSgpKX0gPlBsYXkgR2FtZT88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb2xsZGljZS1idXR0b25cIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcnNidXR0b25cIiBzdHlsZT17eyB3aWR0aDogXCIxNTBweFwiLCBoZWlnaHQ6IFwiNzVweFwiLCBtYXJnaW46IFwiYXV0b1wiIH19IG9uQ2xpY2s9eygpID0+IChSb2xsRGljZSgpKX0+Um9sbCBEaWNlPzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3JlZGljZS1idXR0b25cIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcnNidXR0b25cIiBzdHlsZT17eyB3aWR0aDogXCIxNTBweFwiLCBoZWlnaHQ6IFwiNzVweFwiLCBtYXJnaW46IFwiYXV0b1wiIH19PlNjb3JlIERpY2U/PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW5kdHVybi1idXR0b25cIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcnNidXR0b25cIiBzdHlsZT17eyB3aWR0aDogXCIxNTBweFwiLCBoZWlnaHQ6IFwiNzVweFwiLCBtYXJnaW46IFwiYXV0b1wiIH19PkVuZCBUdXJuPzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVuZGdhbWUtYnV0dG9uXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJzYnV0dG9uXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTUwcHhcIiwgaGVpZ2h0OiBcIjc1cHhcIiwgbWFyZ2luOiBcImF1dG9cIiB9fT5FbmQgR2FtZT88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uQm94O1xyXG5cclxuLy8gdGhpcyBCdXR0b25Cb3ggY29tcG9uZW50IG5lZWRzIGEgcmVkZXNpZ24sIGNyZWF0ZWQgYXMgYSBwbGFjZWhvbGRlciAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRpY2VCb3giLCJCdXR0b25Cb3giLCJwbGF5R2FtZSIsInNldFBsYXlHYW1lIiwicGxheWVyMSIsInR1cm4iLCJyb2xsQ291bnQiLCJjdXJyZW50U2NvcmUiLCJ0b3RhbFNjb3JlIiwicGxheWVyMiIsIlBsYXlHYW1lIiwiUGxheWVyT25lVGVzdCIsImNvbnNvbGUiLCJsb2ciLCJFbmRUdXJuIiwiRW5kR2FtZSIsIkJ1dHRvbkFjdGl2ZSIsIlBsYXllcnNUdXJuIiwicm9sbGxDb3VudCIsIlJvbGxEaWNlIiwiUm9sbENvdW50ZXIiLCJTY29yZURpY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJvcmRlciIsImRpc3BsYXkiLCJkaXJlY3Rpb24iLCJtYXJnaW4iLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsImJ1dHRvbiIsIndpZHRoIiwiaGVpZ2h0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/ButtonBox.js\n"));

/***/ })

});