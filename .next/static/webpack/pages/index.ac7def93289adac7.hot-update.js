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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _DiceBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DiceBox */ \"./pages/DiceBox.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst ButtonBox = ()=>{\n    _s();\n    const [playGame, setPlayGame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    let player1 = {\n        turn: false,\n        rollCount: 0,\n        currentScore: 0,\n        totalScore: 0\n    };\n    let player2 = {\n        turn: false,\n        rollCount: 0,\n        currentScore: 0,\n        totalScore: 0\n    };\n    function PlayGame() {\n        setPlayGame(true);\n        player1.turn = true;\n        player2.turn = false;\n        player1.rollCount = 0;\n        player1.currentScore = 0;\n        player1.totalScore = 0;\n        PlayerOneTest();\n    //PlayerTwoTest();\n    // hide PlayGame button ; display Roll button\n    }\n    function EndTurn() {\n        PlayersTurn();\n    // Current players turn = false\n    // Current score added to total score\n    // current score is cleared\n    // roll counter is cleared\n    }\n    function EndGame() {\n    // Current players turn = false\n    // Current score added to total score\n    // current score is cleared\n    // roll counter is cleared\n    }\n    // State - so that one button is displayed as needed.\n    function ButtonActive() {\n    // PlayGame button = true\n    // roll button = false\n    // score button = false\n    // End Turn button = false\n    // End Game button = false\n    }\n    function PlayersTurn() {\n        if (player1.rollCount === 3 || player1.rollCount > 3) {\n            player2.turn = true;\n            player1.rollCount = 0;\n            PlayerOneTest();\n        } else {\n            player2.turn = true;\n            player2.rolllCount = 0;\n            PlayerTwoTest();\n        }\n    // Player one default on start = true\n    // after End Turn selected = current player false \n    // after 3 rolls per turn or farkle\n    // on end of turn any current players current score is added to that players total score. \n    }\n    function RollDice() {\n        RollCounter();\n        console.log(\"P1\" + \" \" + player1.rollCount);\n        console.log(\"P2\" + \" \" + player2.rollCount);\n    // DiceBox pass prop??\n    // Roll all six dice..\n    // Update Roll Dice state = true?\n    // Pass dice results to scoredice??\n    }\n    function ScoreDice() {\n    // Score state = true\n    // current player selected dice are added for a current score\n    // on end of turn current score is added to total score...\n    }\n    function RollCounter() {\n        if (player1.turn === true) {\n            player1.rolllCount = player1.rollCount++;\n        } else {\n            player2.rollCount = player2.rollCount++;\n        }\n    }\n    function PlayerOneTest() {\n        console.log(\"setPlayerGame\" + \" \" + playGame);\n        console.log(\"Player 1 turn?\" + \" \" + player1.turn);\n        console.log(\"Player 2 turn?\" + \" \" + player2.turn);\n        console.log(\"P 1 - rollcount\" + \" \" + player1.rollCount);\n        console.log(\"P 1 - current score\" + \" \" + player1.currentScore);\n        console.log(\"P 1 - total score\" + \" \" + player1.totalScore);\n    }\n    function PlayerTwoTest() {\n        console.log(\"setPlayerGame\" + \" \" + playGame);\n        console.log(\"Player 2 turn?\" + \" \" + player2.turn);\n        console.log(\"Player 1 turn?\" + \" \" + player1.turn);\n        console.log(\"P 2 - rollcount\" + \" \" + player2.rollCount);\n        console.log(\"P 2 - current score\" + \" \" + player2.currentScore);\n        console.log(\"P 2 - total score\" + \" \" + player2.totalScore);\n    }\n    function something() {}\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"buttonbox-wrapper\",\n        style: {\n            border: \"2px solid black\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"buttonbox\",\n            style: {\n                display: \"flex\",\n                direction: \"row\",\n                margin: \"5px\",\n                justifyContent: \"center\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"playgame-button\",\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prsbutton\",\n                        style: {\n                            width: \"150px\",\n                            height: \"75px\",\n                            margin: \"auto\"\n                        },\n                        onClick: ()=>PlayGame(),\n                        children: \"Play Game?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                        lineNumber: 119,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                    lineNumber: 118,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"rolldice-button\",\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prsbutton\",\n                        style: {\n                            width: \"150px\",\n                            height: \"75px\",\n                            margin: \"auto\"\n                        },\n                        onClick: ()=>RollDice(),\n                        children: \"Roll Dice?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                        lineNumber: 122,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                    lineNumber: 121,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"scoredice-button\",\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prsbutton\",\n                        style: {\n                            width: \"150px\",\n                            height: \"75px\",\n                            margin: \"auto\"\n                        },\n                        onClick: ()=>something(),\n                        children: \"Score Dice?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                        lineNumber: 125,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                    lineNumber: 124,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"endturn-button\",\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prsbutton\",\n                        style: {\n                            width: \"150px\",\n                            height: \"75px\",\n                            margin: \"auto\"\n                        },\n                        onClick: ()=>PlayersTurn(),\n                        children: \"End Turn?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                        lineNumber: 128,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                    lineNumber: 127,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"endgame-button\",\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prsbutton\",\n                        style: {\n                            width: \"150px\",\n                            height: \"75px\",\n                            margin: \"auto\"\n                        },\n                        onClick: ()=>something(),\n                        children: \"End Game?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                        lineNumber: 131,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                    lineNumber: 130,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n            lineNumber: 117,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n        lineNumber: 116,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ButtonBox, \"tulspm1nLy5cvDsmzipMFHg7lfI=\");\n_c = ButtonBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ButtonBox);\nvar _c;\n$RefreshReg$(_c, \"ButtonBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVO29CQUFpQkMsT0FBTzt3QkFBRU0sV0FBVztvQkFBUzs4QkFDekQsNEVBQUNDO3dCQUFPUixXQUFVO3dCQUFZQyxPQUFPOzRCQUFFUSxPQUFPOzRCQUFTQyxRQUFROzRCQUFRTCxRQUFRO3dCQUFPO3dCQUFHTSxTQUFTLElBQU92QjtrQ0FBZ0I7Ozs7Ozs7Ozs7OzhCQUU3SCw4REFBQ1c7b0JBQUlDLFdBQVU7b0JBQWlCQyxPQUFPO3dCQUFFTSxXQUFXO29CQUFTOzhCQUN6RCw0RUFBQ0M7d0JBQU9SLFdBQVU7d0JBQVlDLE9BQU87NEJBQUVRLE9BQU87NEJBQVNDLFFBQVE7NEJBQVFMLFFBQVE7d0JBQU87d0JBQUdNLFNBQVMsSUFBT2I7a0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0k7R0FuSU10QjtLQUFBQTtBQXFJTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9CdXR0b25Cb3guanM/NDhkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERpY2VCb3ggZnJvbSBcIi4vRGljZUJveFwiO1xyXG5cclxuXHJcbmNvbnN0IEJ1dHRvbkJveCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbcGxheUdhbWUsIHNldFBsYXlHYW1lXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGxldCBwbGF5ZXIxID0geyB0dXJuOiBmYWxzZSwgcm9sbENvdW50OiAwLCBjdXJyZW50U2NvcmU6IDAsIHRvdGFsU2NvcmU6IDAgfTtcclxuXHJcbiAgICBsZXQgcGxheWVyMiA9IHsgdHVybjogZmFsc2UsIHJvbGxDb3VudDogMCwgY3VycmVudFNjb3JlOiAwLCB0b3RhbFNjb3JlOiAwIH07XHJcblxyXG4gICAgZnVuY3Rpb24gUGxheUdhbWUoKSB7XHJcbiAgICAgICAgc2V0UGxheUdhbWUodHJ1ZSk7XHJcbiAgICAgICAgcGxheWVyMS50dXJuID0gdHJ1ZTtcclxuICAgICAgICBwbGF5ZXIyLnR1cm4gPSBmYWxzZTtcclxuICAgICAgICBwbGF5ZXIxLnJvbGxDb3VudCA9IDA7XHJcbiAgICAgICAgcGxheWVyMS5jdXJyZW50U2NvcmUgPSAwO1xyXG4gICAgICAgIHBsYXllcjEudG90YWxTY29yZSA9IDA7XHJcbiAgICAgICAgUGxheWVyT25lVGVzdCgpO1xyXG4gICAgICAgIC8vUGxheWVyVHdvVGVzdCgpO1xyXG4gICAgICAgIC8vIGhpZGUgUGxheUdhbWUgYnV0dG9uIDsgZGlzcGxheSBSb2xsIGJ1dHRvblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEVuZFR1cm4oKSB7XHJcbiAgICAgICAgUGxheWVyc1R1cm4oKTtcclxuICAgICAgICAvLyBDdXJyZW50IHBsYXllcnMgdHVybiA9IGZhbHNlXHJcbiAgICAgICAgLy8gQ3VycmVudCBzY29yZSBhZGRlZCB0byB0b3RhbCBzY29yZVxyXG4gICAgICAgIC8vIGN1cnJlbnQgc2NvcmUgaXMgY2xlYXJlZFxyXG4gICAgICAgIC8vIHJvbGwgY291bnRlciBpcyBjbGVhcmVkXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gRW5kR2FtZSgpIHtcclxuICAgICAgICAvLyBDdXJyZW50IHBsYXllcnMgdHVybiA9IGZhbHNlXHJcbiAgICAgICAgLy8gQ3VycmVudCBzY29yZSBhZGRlZCB0byB0b3RhbCBzY29yZVxyXG4gICAgICAgIC8vIGN1cnJlbnQgc2NvcmUgaXMgY2xlYXJlZFxyXG4gICAgICAgIC8vIHJvbGwgY291bnRlciBpcyBjbGVhcmVkXHJcbiAgICB9XHJcblxyXG4gICAgLy8gU3RhdGUgLSBzbyB0aGF0IG9uZSBidXR0b24gaXMgZGlzcGxheWVkIGFzIG5lZWRlZC5cclxuICAgIGZ1bmN0aW9uIEJ1dHRvbkFjdGl2ZSgpIHtcclxuICAgICAgICAvLyBQbGF5R2FtZSBidXR0b24gPSB0cnVlXHJcbiAgICAgICAgLy8gcm9sbCBidXR0b24gPSBmYWxzZVxyXG4gICAgICAgIC8vIHNjb3JlIGJ1dHRvbiA9IGZhbHNlXHJcbiAgICAgICAgLy8gRW5kIFR1cm4gYnV0dG9uID0gZmFsc2VcclxuICAgICAgICAvLyBFbmQgR2FtZSBidXR0b24gPSBmYWxzZVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBQbGF5ZXJzVHVybigpIHtcclxuICAgICAgICBpZiAocGxheWVyMS5yb2xsQ291bnQgPT09IDMgfHwgcGxheWVyMS5yb2xsQ291bnQgPiAzKSB7XHJcbiAgICAgICAgICAgIHBsYXllcjIudHVybiA9IHRydWU7XHJcbiAgICAgICAgICAgIHBsYXllcjEucm9sbENvdW50ID0gMDtcclxuICAgICAgICAgICAgUGxheWVyT25lVGVzdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBsYXllcjIudHVybiA9IHRydWU7XHJcbiAgICAgICAgICAgIHBsYXllcjIucm9sbGxDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIFBsYXllclR3b1Rlc3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUGxheWVyIG9uZSBkZWZhdWx0IG9uIHN0YXJ0ID0gdHJ1ZVxyXG4gICAgICAgIC8vIGFmdGVyIEVuZCBUdXJuIHNlbGVjdGVkID0gY3VycmVudCBwbGF5ZXIgZmFsc2UgXHJcbiAgICAgICAgLy8gYWZ0ZXIgMyByb2xscyBwZXIgdHVybiBvciBmYXJrbGVcclxuICAgICAgICAvLyBvbiBlbmQgb2YgdHVybiBhbnkgY3VycmVudCBwbGF5ZXJzIGN1cnJlbnQgc2NvcmUgaXMgYWRkZWQgdG8gdGhhdCBwbGF5ZXJzIHRvdGFsIHNjb3JlLiBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBSb2xsRGljZSgpIHtcclxuICAgICAgICBSb2xsQ291bnRlcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUDFcIiArIFwiIFwiICsgcGxheWVyMS5yb2xsQ291bnQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUDJcIiArIFwiIFwiICsgcGxheWVyMi5yb2xsQ291bnQpO1xyXG4gICAgICAgIC8vIERpY2VCb3ggcGFzcyBwcm9wPz9cclxuICAgICAgICAvLyBSb2xsIGFsbCBzaXggZGljZS4uXHJcbiAgICAgICAgLy8gVXBkYXRlIFJvbGwgRGljZSBzdGF0ZSA9IHRydWU/XHJcbiAgICAgICAgLy8gUGFzcyBkaWNlIHJlc3VsdHMgdG8gc2NvcmVkaWNlPz9cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gU2NvcmVEaWNlKCkge1xyXG4gICAgICAgIC8vIFNjb3JlIHN0YXRlID0gdHJ1ZVxyXG4gICAgICAgIC8vIGN1cnJlbnQgcGxheWVyIHNlbGVjdGVkIGRpY2UgYXJlIGFkZGVkIGZvciBhIGN1cnJlbnQgc2NvcmVcclxuICAgICAgICAvLyBvbiBlbmQgb2YgdHVybiBjdXJyZW50IHNjb3JlIGlzIGFkZGVkIHRvIHRvdGFsIHNjb3JlLi4uXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFJvbGxDb3VudGVyKCkge1xyXG4gICAgICAgIGlmIChwbGF5ZXIxLnR1cm4gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgcGxheWVyMS5yb2xsbENvdW50ID0gcGxheWVyMS5yb2xsQ291bnQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7IHBsYXllcjIucm9sbENvdW50ID0gcGxheWVyMi5yb2xsQ291bnQrKyB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gUGxheWVyT25lVGVzdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNldFBsYXllckdhbWVcIiArIFwiIFwiICsgcGxheUdhbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyIDEgdHVybj9cIiArIFwiIFwiICsgcGxheWVyMS50dXJuKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXllciAyIHR1cm4/XCIgKyBcIiBcIiArIHBsYXllcjIudHVybik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQIDEgLSByb2xsY291bnRcIiArIFwiIFwiICsgcGxheWVyMS5yb2xsQ291bnQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUCAxIC0gY3VycmVudCBzY29yZVwiICsgXCIgXCIgKyBwbGF5ZXIxLmN1cnJlbnRTY29yZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQIDEgLSB0b3RhbCBzY29yZVwiICsgXCIgXCIgKyBwbGF5ZXIxLnRvdGFsU2NvcmUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBQbGF5ZXJUd29UZXN0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0UGxheWVyR2FtZVwiICsgXCIgXCIgKyBwbGF5R2FtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQbGF5ZXIgMiB0dXJuP1wiICsgXCIgXCIgKyBwbGF5ZXIyLnR1cm4pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyIDEgdHVybj9cIiArIFwiIFwiICsgcGxheWVyMS50dXJuKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlAgMiAtIHJvbGxjb3VudFwiICsgXCIgXCIgKyBwbGF5ZXIyLnJvbGxDb3VudCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQIDIgLSBjdXJyZW50IHNjb3JlXCIgKyBcIiBcIiArIHBsYXllcjIuY3VycmVudFNjb3JlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlAgMiAtIHRvdGFsIHNjb3JlXCIgKyBcIiBcIiArIHBsYXllcjIudG90YWxTY29yZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNvbWV0aGluZygpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbmJveC13cmFwcGVyXCIgc3R5bGU9e3sgYm9yZGVyOiBcIjJweCBzb2xpZCBibGFja1wiIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbmJveFwiIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBkaXJlY3Rpb246IFwicm93XCIsIG1hcmdpbjogXCI1cHhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlnYW1lLWJ1dHRvblwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByc2J1dHRvblwiIHN0eWxlPXt7IHdpZHRoOiBcIjE1MHB4XCIsIGhlaWdodDogXCI3NXB4XCIsIG1hcmdpbjogXCJhdXRvXCIgfX0gb25DbGljaz17KCkgPT4gKFBsYXlHYW1lKCkpfSA+UGxheSBHYW1lPzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvbGxkaWNlLWJ1dHRvblwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByc2J1dHRvblwiIHN0eWxlPXt7IHdpZHRoOiBcIjE1MHB4XCIsIGhlaWdodDogXCI3NXB4XCIsIG1hcmdpbjogXCJhdXRvXCIgfX0gb25DbGljaz17KCkgPT4gKFJvbGxEaWNlKCkpfT5Sb2xsIERpY2U/PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmVkaWNlLWJ1dHRvblwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByc2J1dHRvblwiIHN0eWxlPXt7IHdpZHRoOiBcIjE1MHB4XCIsIGhlaWdodDogXCI3NXB4XCIsIG1hcmdpbjogXCJhdXRvXCIgfX0gb25DbGljaz17KCkgPT4gKHNvbWV0aGluZygpKX0+U2NvcmUgRGljZT88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbmR0dXJuLWJ1dHRvblwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByc2J1dHRvblwiIHN0eWxlPXt7IHdpZHRoOiBcIjE1MHB4XCIsIGhlaWdodDogXCI3NXB4XCIsIG1hcmdpbjogXCJhdXRvXCIgfX0gb25DbGljaz17KCkgPT4gKFBsYXllcnNUdXJuKCkpfT5FbmQgVHVybj88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbmRnYW1lLWJ1dHRvblwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByc2J1dHRvblwiIHN0eWxlPXt7IHdpZHRoOiBcIjE1MHB4XCIsIGhlaWdodDogXCI3NXB4XCIsIG1hcmdpbjogXCJhdXRvXCIgfX0gb25DbGljaz17KCkgPT4gKHNvbWV0aGluZygpKX0+RW5kIEdhbWU/PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkJveDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRpY2VCb3giLCJCdXR0b25Cb3giLCJwbGF5R2FtZSIsInNldFBsYXlHYW1lIiwicGxheWVyMSIsInR1cm4iLCJyb2xsQ291bnQiLCJjdXJyZW50U2NvcmUiLCJ0b3RhbFNjb3JlIiwicGxheWVyMiIsIlBsYXlHYW1lIiwiUGxheWVyT25lVGVzdCIsIkVuZFR1cm4iLCJQbGF5ZXJzVHVybiIsIkVuZEdhbWUiLCJCdXR0b25BY3RpdmUiLCJyb2xsbENvdW50IiwiUGxheWVyVHdvVGVzdCIsIlJvbGxEaWNlIiwiUm9sbENvdW50ZXIiLCJjb25zb2xlIiwibG9nIiwiU2NvcmVEaWNlIiwic29tZXRoaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJib3JkZXIiLCJkaXNwbGF5IiwiZGlyZWN0aW9uIiwibWFyZ2luIiwianVzdGlmeUNvbnRlbnQiLCJ0ZXh0QWxpZ24iLCJidXR0b24iLCJ3aWR0aCIsImhlaWdodCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/ButtonBox.js\n"));

/***/ })

});