webpackHotUpdate_N_E("pages/post",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Volumes/My Passport/Nextjs/first-next/pages/post.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar Post = function Post(_ref) {\n  var id = _ref.id,\n      comments = _ref.comments;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 9\n    }\n  }, \"Comments for post #\", id, \"!\"), comments.map(function (comment) {\n    return __jsx(Comment, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 13\n      }\n    });\n  }));\n};\n\n_c = Post;\n\nvar Comment = function Comment(_ref2) {\n  var email = _ref2.email,\n      body = _ref2.body;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(\"h5\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, email), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, body));\n};\n\n_c2 = Comment;\n\nPost.getInitialProps = /*#__PURE__*/function () {\n  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref3) {\n    var query, res, data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = _ref3.query;\n            _context.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('https://jsonplaceholder.typicode.com/comments?postId=1');\n\n          case 3:\n            res = _context.sent;\n            data = res.data;\n            return _context.abrupt(\"return\", _objectSpread(_objectSpread({}, query), {}, {\n              comments: data\n            }));\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref4.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Post\");\n$RefreshReg$(_c2, \"Comment\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC5qcz8xMjEyIl0sIm5hbWVzIjpbIlBvc3QiLCJpZCIsImNvbW1lbnRzIiwibWFwIiwiY29tbWVudCIsIkNvbW1lbnQiLCJlbWFpbCIsImJvZHkiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsImF4aW9zIiwiZ2V0IiwicmVzIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLE1BQUdDLEVBQUgsUUFBR0EsRUFBSDtBQUFBLE1BQU9DLFFBQVAsUUFBT0EsUUFBUDtBQUFBLFNBQ1QsbUVBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBd0JELEVBQXhCLE1BREosRUFFS0MsUUFBUSxDQUFDQyxHQUFULENBQWEsVUFBQUMsT0FBTztBQUFBLFdBQ2pCLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGlCO0FBQUEsR0FBcEIsQ0FGTCxDQURTO0FBQUEsQ0FBYjs7S0FBTUosSTs7QUFRTixJQUFNSyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLE1BQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLE1BQVVDLElBQVYsU0FBVUEsSUFBVjtBQUFBLFNBQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0QsS0FBTCxDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJQyxJQUFKLENBRkosQ0FEWTtBQUFBLENBQWhCOztNQUFNRixPOztBQU1OTCxJQUFJLENBQUNRLGVBQUw7QUFBQSwrTEFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNDLGlCQUFULFNBQVNBLEtBQVQ7QUFBQTtBQUFBLG1CQUNBQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsd0RBQVYsQ0FEQTs7QUFBQTtBQUNiQyxlQURhO0FBRVhDLGdCQUZXLEdBRUZELEdBRkUsQ0FFWEMsSUFGVztBQUFBLDZFQUdSSixLQUhRO0FBR0RQLHNCQUFRLEVBQUVXO0FBSFQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBdkI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS2ViLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5jb25zdCBQb3N0ID0gKHsgaWQsIGNvbW1lbnRzIH0pID0+IChcbiAgICA8PlxuICAgICAgICA8aDE+Q29tbWVudHMgZm9yIHBvc3QgI3tpZH0hPC9oMT4gXG4gICAgICAgIHtjb21tZW50cy5tYXAoY29tbWVudCA9PiAoXG4gICAgICAgICAgICA8Q29tbWVudCAvPlxuICAgICAgICApKX1cbiAgICA8Lz5cbik7XG5jb25zdCBDb21tZW50ID0gKHsgZW1haWwsIGJvZHkgfSkgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxoNT57ZW1haWx9PC9oNT5cbiAgICAgICAgPHA+e2JvZHl9PC9wPlxuICAgIDwvZGl2PlxuKTtcblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xuICAgIGNvbnN0IHJlcyA9ICBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9jb21tZW50cz9wb3N0SWQ9MScpO1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzO1xuICAgIHJldHVybiB7Li4ucXVlcnksIGNvbW1lbnRzOiBkYXRhfTtcbn1cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post.js\n");

/***/ })

})