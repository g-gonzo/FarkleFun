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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _DiceBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DiceBox */ \"./pages/DiceBox.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst ButtonBox = ()=>{\n    _s();\n    const [playGame, setPlayGame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    let player1 = {\n        turn: true,\n        rollCount: 0,\n        currentScore: 0,\n        totalScore: 0\n    };\n    let player2 = {\n        turn: false,\n        rollCount: 0,\n        currentScore: 0,\n        totalScore: 0\n    };\n    function PlayGame() {\n        setPlayGame(true);\n        player1.rollCount = 0;\n        player1.currentScore = 0;\n        player1.totalScore = 0;\n        PlayerOneTest();\n    //PlayerTwoTest();\n    // hide PlayGame button ; display Roll button\n    }\n    function EndTurn() {\n        PlayersTurn();\n    // Current players turn = false\n    // Current score added to total score\n    // current score is cleared\n    // roll counter is cleared\n    }\n    function EndGame() {\n    // Current players turn = false\n    // Current score added to total score\n    // current score is cleared\n    // roll counter is cleared\n    }\n    // State - so that one button is displayed as needed.\n    function ButtonActive() {\n    // PlayGame button = true\n    // roll button = false\n    // score button = false\n    // End Turn button = false\n    // End Game button = false\n    }\n    function PlayersTurn() {\n        if (player1.rollCount === 3) {\n            player2.turn = true;\n            player1.rollCount = 0;\n            PlayerOneTest();\n        }\n    // Player one default on start = true\n    // after End Turn selected = current player false \n    // after 3 rolls per turn or farkle\n    // on end of turn any current players current score is added to that players total score. \n    }\n    function RollDice() {\n        RollCounter();\n        PlayersTurn();\n        console.log(\"P1\" + \" \" + player1.rollCount);\n        console.log(\"P2\" + \" \" + player2.rollCount);\n    // DiceBox pass prop??\n    // Roll all six dice..\n    // Update Roll Dice state = true?\n    // Pass dice results to scoredice??\n    }\n    function ScoreDice() {\n    // Score state = true\n    // current player selected dice are added for a current score\n    // on end of turn current score is added to total score...\n    }\n    function RollCounter() {\n        if (player1.turn === true) {\n            player1.rolllCount = player1.rollCount++;\n        } else if (player2.turn === true) {\n            player2.rollCount = player2.rollCount++;\n        }\n    }\n    function PlayerOneTest() {\n        console.log(\"setPlayerGame\" + \" \" + playGame);\n        console.log(\"Player 1 turn?\" + \" \" + player1.turn);\n        console.log(\"Player 2 turn?\" + \" \" + player2.turn);\n        console.log(\"P 1 - rollcount\" + \" \" + player1.rollCount);\n        console.log(\"P 1 - current score\" + \" \" + player1.currentScore);\n        console.log(\"P 1 - total score\" + \" \" + player1.totalScore);\n    }\n    function PlayerTwoTest() {\n        console.log(\"setPlayerGame\" + \" \" + playGame);\n        console.log(\"Player 2 turn?\" + \" \" + player2.turn);\n        console.log(\"Player 1 turn?\" + \" \" + player1.turn);\n        console.log(\"P 2 - rollcount\" + \" \" + player2.rollCount);\n        console.log(\"P 2 - current score\" + \" \" + player2.currentScore);\n        console.log(\"P 2 - total score\" + \" \" + player2.totalScore);\n    }\n    function something() {}\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"buttonbox-wrapper\",\n        style: {\n            border: \"2px solid black\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"buttonbox\",\n            style: {\n                display: \"flex\",\n                direction: \"row\",\n                margin: \"5px\",\n                justifyContent: \"center\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"playgame-button\",\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prsbutton\",\n                        style: {\n                            width: \"150px\",\n                            height: \"75px\",\n                            margin: \"auto\"\n                        },\n                        onClick: ()=>PlayGame(),\n                        children: \"Play Game?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                        lineNumber: 115,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                    lineNumber: 114,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"rolldice-button\",\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prsbutton\",\n                        style: {\n                            width: \"150px\",\n                            height: \"75px\",\n                            margin: \"auto\"\n                        },\n                        onClick: ()=>RollDice(),\n                        children: \"Roll Dice?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                        lineNumber: 118,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                    lineNumber: 117,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"scoredice-button\",\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prsbutton\",\n                        style: {\n                            width: \"150px\",\n                            height: \"75px\",\n                            margin: \"auto\"\n                        },\n                        onClick: ()=>something(),\n                        children: \"Score Dice?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                        lineNumber: 121,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                    lineNumber: 120,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"endturn-button\",\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prsbutton\",\n                        style: {\n                            width: \"150px\",\n                            height: \"75px\",\n                            margin: \"auto\"\n                        },\n                        onClick: ()=>PlayersTurn(),\n                        children: \"End Turn?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                        lineNumber: 124,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                    lineNumber: 123,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"endgame-button\",\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prsbutton\",\n                        style: {\n                            width: \"150px\",\n                            height: \"75px\",\n                            margin: \"auto\"\n                        },\n                        onClick: ()=>something(),\n                        children: \"End Game?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                        lineNumber: 127,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n                    lineNumber: 126,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n            lineNumber: 113,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\gigonz\\\\Documents\\\\GitHub\\\\FarkleFun\\\\pages\\\\ButtonBox.js\",\n        lineNumber: 112,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ButtonBox, \"tulspm1nLy5cvDsmzipMFHg7lfI=\");\n_c = ButtonBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ButtonBox);\nvar _c;\n$RefreshReg$(_c, \"ButtonBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU87d0JBQUdNLFNBQVMsSUFBT3ZCO2tDQUFnQjs7Ozs7Ozs7Ozs7OEJBRTdILDhEQUFDVztvQkFBSUMsV0FBVTtvQkFBaUJDLE9BQU87d0JBQUVNLFdBQVc7b0JBQVM7OEJBQ3pELDRFQUFDQzt3QkFBT1IsV0FBVTt3QkFBWUMsT0FBTzs0QkFBRVEsT0FBTzs0QkFBU0MsUUFBUTs0QkFBUUwsUUFBUTt3QkFBTzt3QkFBR00sU0FBUyxJQUFPYjtrQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszSTtHQS9ITXRCO0tBQUFBO0FBaUlOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0J1dHRvbkJveC5qcz80OGQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRGljZUJveCBmcm9tIFwiLi9EaWNlQm94XCI7XHJcblxyXG5cclxuY29uc3QgQnV0dG9uQm94ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtwbGF5R2FtZSwgc2V0UGxheUdhbWVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG5cclxuICAgIGxldCBwbGF5ZXIxID0geyB0dXJuOiB0cnVlLCByb2xsQ291bnQ6IDAsIGN1cnJlbnRTY29yZTogMCwgdG90YWxTY29yZTogMCB9O1xyXG5cclxuICAgIGxldCBwbGF5ZXIyID0geyB0dXJuOiBmYWxzZSwgcm9sbENvdW50OiAwLCBjdXJyZW50U2NvcmU6IDAsIHRvdGFsU2NvcmU6IDAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBQbGF5R2FtZSgpIHtcclxuICAgICAgICBzZXRQbGF5R2FtZSh0cnVlKTtcclxuICAgICAgICBwbGF5ZXIxLnJvbGxDb3VudCA9IDA7XHJcbiAgICAgICAgcGxheWVyMS5jdXJyZW50U2NvcmUgPSAwO1xyXG4gICAgICAgIHBsYXllcjEudG90YWxTY29yZSA9IDA7XHJcbiAgICAgICAgUGxheWVyT25lVGVzdCgpO1xyXG4gICAgICAgIC8vUGxheWVyVHdvVGVzdCgpO1xyXG4gICAgICAgIC8vIGhpZGUgUGxheUdhbWUgYnV0dG9uIDsgZGlzcGxheSBSb2xsIGJ1dHRvblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEVuZFR1cm4oKSB7XHJcbiAgICAgICAgUGxheWVyc1R1cm4oKTtcclxuICAgICAgICAvLyBDdXJyZW50IHBsYXllcnMgdHVybiA9IGZhbHNlXHJcbiAgICAgICAgLy8gQ3VycmVudCBzY29yZSBhZGRlZCB0byB0b3RhbCBzY29yZVxyXG4gICAgICAgIC8vIGN1cnJlbnQgc2NvcmUgaXMgY2xlYXJlZFxyXG4gICAgICAgIC8vIHJvbGwgY291bnRlciBpcyBjbGVhcmVkXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gRW5kR2FtZSgpIHtcclxuICAgICAgICAvLyBDdXJyZW50IHBsYXllcnMgdHVybiA9IGZhbHNlXHJcbiAgICAgICAgLy8gQ3VycmVudCBzY29yZSBhZGRlZCB0byB0b3RhbCBzY29yZVxyXG4gICAgICAgIC8vIGN1cnJlbnQgc2NvcmUgaXMgY2xlYXJlZFxyXG4gICAgICAgIC8vIHJvbGwgY291bnRlciBpcyBjbGVhcmVkXHJcbiAgICB9XHJcblxyXG4gICAgLy8gU3RhdGUgLSBzbyB0aGF0IG9uZSBidXR0b24gaXMgZGlzcGxheWVkIGFzIG5lZWRlZC5cclxuICAgIGZ1bmN0aW9uIEJ1dHRvbkFjdGl2ZSgpIHtcclxuICAgICAgICAvLyBQbGF5R2FtZSBidXR0b24gPSB0cnVlXHJcbiAgICAgICAgLy8gcm9sbCBidXR0b24gPSBmYWxzZVxyXG4gICAgICAgIC8vIHNjb3JlIGJ1dHRvbiA9IGZhbHNlXHJcbiAgICAgICAgLy8gRW5kIFR1cm4gYnV0dG9uID0gZmFsc2VcclxuICAgICAgICAvLyBFbmQgR2FtZSBidXR0b24gPSBmYWxzZVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBQbGF5ZXJzVHVybigpIHtcclxuICAgICAgICBpZiAocGxheWVyMS5yb2xsQ291bnQgPT09IDMpIHtcclxuICAgICAgICAgICAgcGxheWVyMi50dXJuID0gdHJ1ZTtcclxuICAgICAgICAgICAgcGxheWVyMS5yb2xsQ291bnQgPSAwO1xyXG4gICAgICAgICAgICBQbGF5ZXJPbmVUZXN0KCk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICAvLyBQbGF5ZXIgb25lIGRlZmF1bHQgb24gc3RhcnQgPSB0cnVlXHJcbiAgICAgICAgLy8gYWZ0ZXIgRW5kIFR1cm4gc2VsZWN0ZWQgPSBjdXJyZW50IHBsYXllciBmYWxzZSBcclxuICAgICAgICAvLyBhZnRlciAzIHJvbGxzIHBlciB0dXJuIG9yIGZhcmtsZVxyXG4gICAgICAgIC8vIG9uIGVuZCBvZiB0dXJuIGFueSBjdXJyZW50IHBsYXllcnMgY3VycmVudCBzY29yZSBpcyBhZGRlZCB0byB0aGF0IHBsYXllcnMgdG90YWwgc2NvcmUuIFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFJvbGxEaWNlKCkge1xyXG4gICAgICAgIFJvbGxDb3VudGVyKCk7XHJcbiAgICAgICAgUGxheWVyc1R1cm4oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlAxXCIgKyBcIiBcIiArIHBsYXllcjEucm9sbENvdW50KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlAyXCIgKyBcIiBcIiArIHBsYXllcjIucm9sbENvdW50KTtcclxuICAgICAgICAvLyBEaWNlQm94IHBhc3MgcHJvcD8/XHJcbiAgICAgICAgLy8gUm9sbCBhbGwgc2l4IGRpY2UuLlxyXG4gICAgICAgIC8vIFVwZGF0ZSBSb2xsIERpY2Ugc3RhdGUgPSB0cnVlP1xyXG4gICAgICAgIC8vIFBhc3MgZGljZSByZXN1bHRzIHRvIHNjb3JlZGljZT8/XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFNjb3JlRGljZSgpIHtcclxuICAgICAgICAvLyBTY29yZSBzdGF0ZSA9IHRydWVcclxuICAgICAgICAvLyBjdXJyZW50IHBsYXllciBzZWxlY3RlZCBkaWNlIGFyZSBhZGRlZCBmb3IgYSBjdXJyZW50IHNjb3JlXHJcbiAgICAgICAgLy8gb24gZW5kIG9mIHR1cm4gY3VycmVudCBzY29yZSBpcyBhZGRlZCB0byB0b3RhbCBzY29yZS4uLlxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBSb2xsQ291bnRlcigpIHtcclxuICAgICAgICBpZiAocGxheWVyMS50dXJuID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHBsYXllcjEucm9sbGxDb3VudCA9IHBsYXllcjEucm9sbENvdW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBsYXllcjIudHVybiA9PT0gdHJ1ZSkgeyBwbGF5ZXIyLnJvbGxDb3VudCA9IHBsYXllcjIucm9sbENvdW50KysgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFBsYXllck9uZVRlc3QoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXRQbGF5ZXJHYW1lXCIgKyBcIiBcIiArIHBsYXlHYW1lKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXllciAxIHR1cm4/XCIgKyBcIiBcIiArIHBsYXllcjEudHVybik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQbGF5ZXIgMiB0dXJuP1wiICsgXCIgXCIgKyBwbGF5ZXIyLnR1cm4pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUCAxIC0gcm9sbGNvdW50XCIgKyBcIiBcIiArIHBsYXllcjEucm9sbENvdW50KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlAgMSAtIGN1cnJlbnQgc2NvcmVcIiArIFwiIFwiICsgcGxheWVyMS5jdXJyZW50U2NvcmUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUCAxIC0gdG90YWwgc2NvcmVcIiArIFwiIFwiICsgcGxheWVyMS50b3RhbFNjb3JlKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gUGxheWVyVHdvVGVzdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNldFBsYXllckdhbWVcIiArIFwiIFwiICsgcGxheUdhbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyIDIgdHVybj9cIiArIFwiIFwiICsgcGxheWVyMi50dXJuKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXllciAxIHR1cm4/XCIgKyBcIiBcIiArIHBsYXllcjEudHVybik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQIDIgLSByb2xsY291bnRcIiArIFwiIFwiICsgcGxheWVyMi5yb2xsQ291bnQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUCAyIC0gY3VycmVudCBzY29yZVwiICsgXCIgXCIgKyBwbGF5ZXIyLmN1cnJlbnRTY29yZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQIDIgLSB0b3RhbCBzY29yZVwiICsgXCIgXCIgKyBwbGF5ZXIyLnRvdGFsU2NvcmUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzb21ldGhpbmcoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25ib3gtd3JhcHBlclwiIHN0eWxlPXt7IGJvcmRlcjogXCIycHggc29saWQgYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25ib3hcIiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZGlyZWN0aW9uOiBcInJvd1wiLCBtYXJnaW46IFwiNXB4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5Z2FtZS1idXR0b25cIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcnNidXR0b25cIiBzdHlsZT17eyB3aWR0aDogXCIxNTBweFwiLCBoZWlnaHQ6IFwiNzVweFwiLCBtYXJnaW46IFwiYXV0b1wiIH19IG9uQ2xpY2s9eygpID0+IChQbGF5R2FtZSgpKX0gPlBsYXkgR2FtZT88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb2xsZGljZS1idXR0b25cIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcnNidXR0b25cIiBzdHlsZT17eyB3aWR0aDogXCIxNTBweFwiLCBoZWlnaHQ6IFwiNzVweFwiLCBtYXJnaW46IFwiYXV0b1wiIH19IG9uQ2xpY2s9eygpID0+IChSb2xsRGljZSgpKX0+Um9sbCBEaWNlPzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3JlZGljZS1idXR0b25cIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcnNidXR0b25cIiBzdHlsZT17eyB3aWR0aDogXCIxNTBweFwiLCBoZWlnaHQ6IFwiNzVweFwiLCBtYXJnaW46IFwiYXV0b1wiIH19IG9uQ2xpY2s9eygpID0+IChzb21ldGhpbmcoKSl9PlNjb3JlIERpY2U/PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW5kdHVybi1idXR0b25cIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcnNidXR0b25cIiBzdHlsZT17eyB3aWR0aDogXCIxNTBweFwiLCBoZWlnaHQ6IFwiNzVweFwiLCBtYXJnaW46IFwiYXV0b1wiIH19IG9uQ2xpY2s9eygpID0+IChQbGF5ZXJzVHVybigpKX0+RW5kIFR1cm4/PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW5kZ2FtZS1idXR0b25cIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcnNidXR0b25cIiBzdHlsZT17eyB3aWR0aDogXCIxNTBweFwiLCBoZWlnaHQ6IFwiNzVweFwiLCBtYXJnaW46IFwiYXV0b1wiIH19IG9uQ2xpY2s9eygpID0+IChzb21ldGhpbmcoKSl9PkVuZCBHYW1lPzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25Cb3g7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEaWNlQm94IiwiQnV0dG9uQm94IiwicGxheUdhbWUiLCJzZXRQbGF5R2FtZSIsInBsYXllcjEiLCJ0dXJuIiwicm9sbENvdW50IiwiY3VycmVudFNjb3JlIiwidG90YWxTY29yZSIsInBsYXllcjIiLCJQbGF5R2FtZSIsIlBsYXllck9uZVRlc3QiLCJFbmRUdXJuIiwiUGxheWVyc1R1cm4iLCJFbmRHYW1lIiwiQnV0dG9uQWN0aXZlIiwiUm9sbERpY2UiLCJSb2xsQ291bnRlciIsImNvbnNvbGUiLCJsb2ciLCJTY29yZURpY2UiLCJyb2xsbENvdW50IiwiUGxheWVyVHdvVGVzdCIsInNvbWV0aGluZyIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYm9yZGVyIiwiZGlzcGxheSIsImRpcmVjdGlvbiIsIm1hcmdpbiIsImp1c3RpZnlDb250ZW50IiwidGV4dEFsaWduIiwiYnV0dG9uIiwid2lkdGgiLCJoZWlnaHQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/ButtonBox.js\n"));

/***/ })

});