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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _DiceBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DiceBox */ \"./pages/DiceBox.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst ButtonBox = ()=>{\n    _s();\n    const [playGame, setPlayGame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    let player1 = {\n        turn: false,\n        rollCount: 0,\n        currentScore: 0,\n        totalScore: 0\n    };\n    let player2 = {\n        turn: false,\n        rollCount: 0,\n        currentScore: 0,\n        totalScore: 0\n    };\n    function PlayGame() {\n        setPlayGame(true);\n        player1.turn = true;\n        player2.turn = false;\n        player1.rollCount = 0;\n        player1.currentScore = 0;\n        player1.totalScore = 0;\n        PlayerOneTest();\n    //PlayerTwoTest();\n    // hide PlayGame button ; display Roll button\n    }\n    function EndTurn() {\n        PlayersTurn();\n    // Current players turn = false\n    // Current score added to total score\n    // current score is cleared\n    // roll counter is cleared\n    }\n    function EndGame() {\n    // Current players turn = false\n    // Current score added to total score\n    // current score is cleared\n    // roll counter is cleared\n    }\n    // State - so that one button is displayed as needed.\n    function ButtonActive() {\n    // PlayGame button = true\n    // roll button = false\n    // score button = false\n    // End Turn button = false\n    // End Game button = false\n    }\n    function PlayersTurn() {\n        if (player1.rollCount === 3) {\n            player2.turn = true;\n            player1.rollCount = 0;\n            PlayerOneTest();\n        } else {\n            player2.turn = true;\n            player2.rolllCount = 0;\n            PlayerTwoTest();\n        }\n    // Player one default on start = true\n    // after End Turn selected = current player false \n    // after 3 rolls per turn or farkle\n    // on end of turn any current players current score is added to that players total score. \n    }\n    function RollDice() {\n        RollCounter();\n        PlayersTurn();\n        console.log(\"P1\" + \" \" + player1.rollCount);\n        console.log(\"P2\" + \" \" + player2.rollCount);\n    // DiceBox pass prop??\n    // Roll all six dice..\n    // Update Roll Dice state = true?\n    // Pass dice results to scoredice??\n    }\n    function ScoreDice() {\n    // Score state = true\n    // current player selected dice are added for a current score\n    // on end of turn current score is added to total score...\n    }\n    function RollCounter() {\n        if (player1.turn === true) {\n            player1.rolllCount = player1.rollCount++;\n        } else {\n            player2.rollCount = player2.rollCount++;\n        }\n    }\n    function PlayerOneTest() {\n        console.log(\"setPlayerGame\" + \" \" + playGame);\n        console.log(\"Player 1 turn?\" + \" \" + player1.turn);\n        console.log(\"Player 2 turn?\" + \" \" + player2.turn);\n        console.log(\"P 1 - rollcount\" + \" \" + player1.rollCount);\n        console.log(\"P 1 - current score\" + \" \" + player1.currentScore);\n        console.log(\"P 1 - total score\" + \" \" + player1.totalScore);\n    }\n    function PlayerTwoTest() {\n        console.log(\"setPlayerGame\" + \" \" + playGame);\n        console.log(\"Player 2 turn?\" + \" \" + player2.turn);\n        console.log(\"Player 1 turn?\" + \" \" + player1.turn);\n        console.log(\"P 2 - rollcount\" + \" \" + player2.rollCount);\n        console.log(\"P 2 - current score\" + \" \" + player2.currentScore);\n        console.log(\"P 2 - total score\" + \" \" + player2.totalScore);\n    }\n    function something() {}\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"buttonbox-wrapper\",\n        style: {\n            border: \"2px solid black\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"buttonbox\",\n            style: {\n                display: \"flex\",\n                direction: \"row\",\n                margin: \"5px\",\n                justifyContent: \"center\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"playgame-button\",\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prsbutton\",\n                        style: {\n                            width: \"150px\",\n                            height: \"75px\",\n                            margin: \"auto\"\n                        },\n                        onClick: ()=>PlayGame(),\n                        children: \"Play Game?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                        lineNumber: 120,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                    lineNumber: 119,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"rolldice-button\",\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prsbutton\",\n                        style: {\n                            width: \"150px\",\n                            height: \"75px\",\n                            margin: \"auto\"\n                        },\n                        onClick: ()=>RollDice(),\n                        children: \"Roll Dice?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                        lineNumber: 123,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                    lineNumber: 122,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"scoredice-button\",\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prsbutton\",\n                        style: {\n                            width: \"150px\",\n                            height: \"75px\",\n                            margin: \"auto\"\n                        },\n                        onClick: ()=>something(),\n                        children: \"Score Dice?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                        lineNumber: 126,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                    lineNumber: 125,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"endturn-button\",\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prsbutton\",\n                        style: {\n                            width: \"150px\",\n                            height: \"75px\",\n                            margin: \"auto\"\n                        },\n                        onClick: ()=>PlayersTurn(),\n                        children: \"End Turn?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                        lineNumber: 129,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                    lineNumber: 128,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"endgame-button\",\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prsbutton\",\n                        style: {\n                            width: \"150px\",\n                            height: \"75px\",\n                            margin: \"auto\"\n                        },\n                        onClick: ()=>something(),\n                        children: \"End Game?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                        lineNumber: 132,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                    lineNumber: 131,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n            lineNumber: 118,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n        lineNumber: 117,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ButtonBox, \"tulspm1nLy5cvDsmzipMFHg7lfI=\");\n_c = ButtonBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ButtonBox);\nvar _c;\n$RefreshReg$(_c, \"ButtonBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3dCQUFFTSxXQUFXO29CQUFTOzhCQUN6RCw0RUFBQ0M7d0JBQU9SLFdBQVU7d0JBQVlDLE9BQU87NEJBQUVRLE9BQU87NEJBQVNDLFFBQVE7NEJBQVFMLFFBQVE7d0JBQU87d0JBQUdNLFNBQVMsSUFBT3ZCO2tDQUFnQjs7Ozs7Ozs7Ozs7OEJBRTdILDhEQUFDVztvQkFBSUMsV0FBVTtvQkFBaUJDLE9BQU87d0JBQUVNLFdBQVc7b0JBQVM7OEJBQ3pELDRFQUFDQzt3QkFBT1IsV0FBVTt3QkFBWUMsT0FBTzs0QkFBRVEsT0FBTzs0QkFBU0MsUUFBUTs0QkFBUUwsUUFBUTt3QkFBTzt3QkFBR00sU0FBUyxJQUFPYjtrQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszSTtHQXBJTXRCO0tBQUFBO0FBc0lOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0J1dHRvbkJveC5qcz80OGQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRGljZUJveCBmcm9tIFwiLi9EaWNlQm94XCI7XHJcblxyXG5cclxuY29uc3QgQnV0dG9uQm94ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtwbGF5R2FtZSwgc2V0UGxheUdhbWVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgbGV0IHBsYXllcjEgPSB7IHR1cm46IGZhbHNlLCByb2xsQ291bnQ6IDAsIGN1cnJlbnRTY29yZTogMCwgdG90YWxTY29yZTogMCB9O1xyXG5cclxuICAgIGxldCBwbGF5ZXIyID0geyB0dXJuOiBmYWxzZSwgcm9sbENvdW50OiAwLCBjdXJyZW50U2NvcmU6IDAsIHRvdGFsU2NvcmU6IDAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBQbGF5R2FtZSgpIHtcclxuICAgICAgICBzZXRQbGF5R2FtZSh0cnVlKTtcclxuICAgICAgICBwbGF5ZXIxLnR1cm4gPSB0cnVlO1xyXG4gICAgICAgIHBsYXllcjIudHVybiA9IGZhbHNlO1xyXG4gICAgICAgIHBsYXllcjEucm9sbENvdW50ID0gMDtcclxuICAgICAgICBwbGF5ZXIxLmN1cnJlbnRTY29yZSA9IDA7XHJcbiAgICAgICAgcGxheWVyMS50b3RhbFNjb3JlID0gMDtcclxuICAgICAgICBQbGF5ZXJPbmVUZXN0KCk7XHJcbiAgICAgICAgLy9QbGF5ZXJUd29UZXN0KCk7XHJcbiAgICAgICAgLy8gaGlkZSBQbGF5R2FtZSBidXR0b24gOyBkaXNwbGF5IFJvbGwgYnV0dG9uXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gRW5kVHVybigpIHtcclxuICAgICAgICBQbGF5ZXJzVHVybigpO1xyXG4gICAgICAgIC8vIEN1cnJlbnQgcGxheWVycyB0dXJuID0gZmFsc2VcclxuICAgICAgICAvLyBDdXJyZW50IHNjb3JlIGFkZGVkIHRvIHRvdGFsIHNjb3JlXHJcbiAgICAgICAgLy8gY3VycmVudCBzY29yZSBpcyBjbGVhcmVkXHJcbiAgICAgICAgLy8gcm9sbCBjb3VudGVyIGlzIGNsZWFyZWRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBFbmRHYW1lKCkge1xyXG4gICAgICAgIC8vIEN1cnJlbnQgcGxheWVycyB0dXJuID0gZmFsc2VcclxuICAgICAgICAvLyBDdXJyZW50IHNjb3JlIGFkZGVkIHRvIHRvdGFsIHNjb3JlXHJcbiAgICAgICAgLy8gY3VycmVudCBzY29yZSBpcyBjbGVhcmVkXHJcbiAgICAgICAgLy8gcm9sbCBjb3VudGVyIGlzIGNsZWFyZWRcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdGF0ZSAtIHNvIHRoYXQgb25lIGJ1dHRvbiBpcyBkaXNwbGF5ZWQgYXMgbmVlZGVkLlxyXG4gICAgZnVuY3Rpb24gQnV0dG9uQWN0aXZlKCkge1xyXG4gICAgICAgIC8vIFBsYXlHYW1lIGJ1dHRvbiA9IHRydWVcclxuICAgICAgICAvLyByb2xsIGJ1dHRvbiA9IGZhbHNlXHJcbiAgICAgICAgLy8gc2NvcmUgYnV0dG9uID0gZmFsc2VcclxuICAgICAgICAvLyBFbmQgVHVybiBidXR0b24gPSBmYWxzZVxyXG4gICAgICAgIC8vIEVuZCBHYW1lIGJ1dHRvbiA9IGZhbHNlXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFBsYXllcnNUdXJuKCkge1xyXG4gICAgICAgIGlmIChwbGF5ZXIxLnJvbGxDb3VudCA9PT0gMykge1xyXG4gICAgICAgICAgICBwbGF5ZXIyLnR1cm4gPSB0cnVlO1xyXG4gICAgICAgICAgICBwbGF5ZXIxLnJvbGxDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIFBsYXllck9uZVRlc3QoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwbGF5ZXIyLnR1cm4gPSB0cnVlO1xyXG4gICAgICAgICAgICBwbGF5ZXIyLnJvbGxsQ291bnQgPSAwO1xyXG4gICAgICAgICAgICBQbGF5ZXJUd29UZXN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFBsYXllciBvbmUgZGVmYXVsdCBvbiBzdGFydCA9IHRydWVcclxuICAgICAgICAvLyBhZnRlciBFbmQgVHVybiBzZWxlY3RlZCA9IGN1cnJlbnQgcGxheWVyIGZhbHNlIFxyXG4gICAgICAgIC8vIGFmdGVyIDMgcm9sbHMgcGVyIHR1cm4gb3IgZmFya2xlXHJcbiAgICAgICAgLy8gb24gZW5kIG9mIHR1cm4gYW55IGN1cnJlbnQgcGxheWVycyBjdXJyZW50IHNjb3JlIGlzIGFkZGVkIHRvIHRoYXQgcGxheWVycyB0b3RhbCBzY29yZS4gXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gUm9sbERpY2UoKSB7XHJcbiAgICAgICAgUm9sbENvdW50ZXIoKTtcclxuICAgICAgICBQbGF5ZXJzVHVybigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUDFcIiArIFwiIFwiICsgcGxheWVyMS5yb2xsQ291bnQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUDJcIiArIFwiIFwiICsgcGxheWVyMi5yb2xsQ291bnQpO1xyXG4gICAgICAgIC8vIERpY2VCb3ggcGFzcyBwcm9wPz9cclxuICAgICAgICAvLyBSb2xsIGFsbCBzaXggZGljZS4uXHJcbiAgICAgICAgLy8gVXBkYXRlIFJvbGwgRGljZSBzdGF0ZSA9IHRydWU/XHJcbiAgICAgICAgLy8gUGFzcyBkaWNlIHJlc3VsdHMgdG8gc2NvcmVkaWNlPz9cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gU2NvcmVEaWNlKCkge1xyXG4gICAgICAgIC8vIFNjb3JlIHN0YXRlID0gdHJ1ZVxyXG4gICAgICAgIC8vIGN1cnJlbnQgcGxheWVyIHNlbGVjdGVkIGRpY2UgYXJlIGFkZGVkIGZvciBhIGN1cnJlbnQgc2NvcmVcclxuICAgICAgICAvLyBvbiBlbmQgb2YgdHVybiBjdXJyZW50IHNjb3JlIGlzIGFkZGVkIHRvIHRvdGFsIHNjb3JlLi4uXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFJvbGxDb3VudGVyKCkge1xyXG4gICAgICAgIGlmIChwbGF5ZXIxLnR1cm4gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgcGxheWVyMS5yb2xsbENvdW50ID0gcGxheWVyMS5yb2xsQ291bnQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7IHBsYXllcjIucm9sbENvdW50ID0gcGxheWVyMi5yb2xsQ291bnQrKyB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gUGxheWVyT25lVGVzdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNldFBsYXllckdhbWVcIiArIFwiIFwiICsgcGxheUdhbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyIDEgdHVybj9cIiArIFwiIFwiICsgcGxheWVyMS50dXJuKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXllciAyIHR1cm4/XCIgKyBcIiBcIiArIHBsYXllcjIudHVybik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQIDEgLSByb2xsY291bnRcIiArIFwiIFwiICsgcGxheWVyMS5yb2xsQ291bnQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUCAxIC0gY3VycmVudCBzY29yZVwiICsgXCIgXCIgKyBwbGF5ZXIxLmN1cnJlbnRTY29yZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQIDEgLSB0b3RhbCBzY29yZVwiICsgXCIgXCIgKyBwbGF5ZXIxLnRvdGFsU2NvcmUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBQbGF5ZXJUd29UZXN0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0UGxheWVyR2FtZVwiICsgXCIgXCIgKyBwbGF5R2FtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQbGF5ZXIgMiB0dXJuP1wiICsgXCIgXCIgKyBwbGF5ZXIyLnR1cm4pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyIDEgdHVybj9cIiArIFwiIFwiICsgcGxheWVyMS50dXJuKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlAgMiAtIHJvbGxjb3VudFwiICsgXCIgXCIgKyBwbGF5ZXIyLnJvbGxDb3VudCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQIDIgLSBjdXJyZW50IHNjb3JlXCIgKyBcIiBcIiArIHBsYXllcjIuY3VycmVudFNjb3JlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlAgMiAtIHRvdGFsIHNjb3JlXCIgKyBcIiBcIiArIHBsYXllcjIudG90YWxTY29yZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNvbWV0aGluZygpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbmJveC13cmFwcGVyXCIgc3R5bGU9e3sgYm9yZGVyOiBcIjJweCBzb2xpZCBibGFja1wiIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbmJveFwiIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBkaXJlY3Rpb246IFwicm93XCIsIG1hcmdpbjogXCI1cHhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlnYW1lLWJ1dHRvblwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByc2J1dHRvblwiIHN0eWxlPXt7IHdpZHRoOiBcIjE1MHB4XCIsIGhlaWdodDogXCI3NXB4XCIsIG1hcmdpbjogXCJhdXRvXCIgfX0gb25DbGljaz17KCkgPT4gKFBsYXlHYW1lKCkpfSA+UGxheSBHYW1lPzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvbGxkaWNlLWJ1dHRvblwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByc2J1dHRvblwiIHN0eWxlPXt7IHdpZHRoOiBcIjE1MHB4XCIsIGhlaWdodDogXCI3NXB4XCIsIG1hcmdpbjogXCJhdXRvXCIgfX0gb25DbGljaz17KCkgPT4gKFJvbGxEaWNlKCkpfT5Sb2xsIERpY2U/PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmVkaWNlLWJ1dHRvblwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByc2J1dHRvblwiIHN0eWxlPXt7IHdpZHRoOiBcIjE1MHB4XCIsIGhlaWdodDogXCI3NXB4XCIsIG1hcmdpbjogXCJhdXRvXCIgfX0gb25DbGljaz17KCkgPT4gKHNvbWV0aGluZygpKX0+U2NvcmUgRGljZT88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbmR0dXJuLWJ1dHRvblwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByc2J1dHRvblwiIHN0eWxlPXt7IHdpZHRoOiBcIjE1MHB4XCIsIGhlaWdodDogXCI3NXB4XCIsIG1hcmdpbjogXCJhdXRvXCIgfX0gb25DbGljaz17KCkgPT4gKFBsYXllcnNUdXJuKCkpfT5FbmQgVHVybj88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbmRnYW1lLWJ1dHRvblwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByc2J1dHRvblwiIHN0eWxlPXt7IHdpZHRoOiBcIjE1MHB4XCIsIGhlaWdodDogXCI3NXB4XCIsIG1hcmdpbjogXCJhdXRvXCIgfX0gb25DbGljaz17KCkgPT4gKHNvbWV0aGluZygpKX0+RW5kIEdhbWU/PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkJveDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRpY2VCb3giLCJCdXR0b25Cb3giLCJwbGF5R2FtZSIsInNldFBsYXlHYW1lIiwicGxheWVyMSIsInR1cm4iLCJyb2xsQ291bnQiLCJjdXJyZW50U2NvcmUiLCJ0b3RhbFNjb3JlIiwicGxheWVyMiIsIlBsYXlHYW1lIiwiUGxheWVyT25lVGVzdCIsIkVuZFR1cm4iLCJQbGF5ZXJzVHVybiIsIkVuZEdhbWUiLCJCdXR0b25BY3RpdmUiLCJyb2xsbENvdW50IiwiUGxheWVyVHdvVGVzdCIsIlJvbGxEaWNlIiwiUm9sbENvdW50ZXIiLCJjb25zb2xlIiwibG9nIiwiU2NvcmVEaWNlIiwic29tZXRoaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJib3JkZXIiLCJkaXNwbGF5IiwiZGlyZWN0aW9uIiwibWFyZ2luIiwianVzdGlmeUNvbnRlbnQiLCJ0ZXh0QWxpZ24iLCJidXR0b24iLCJ3aWR0aCIsImhlaWdodCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/ButtonBox.js\n"));

/***/ })

});