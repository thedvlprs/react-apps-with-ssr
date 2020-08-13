module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/GithubUsers.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/GithubUsers.js":
/*!******************************!*\
  !*** ./pages/GithubUsers.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.css */ \"./style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/sophie/Desktop/dev/reactjs/building-react-apps-with-server-side-rendering/my-next-app/pages/GithubUsers.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (class extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  static async getInitialProps() {\n    try {\n      const res = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://api.github.com/users');\n      return {\n        data: res.data\n      };\n    } catch (e) {\n      return {\n        error: e\n      };\n    }\n  }\n\n  render() {\n    if (this.props.error) {\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 20\n        }\n      }, \"Error: \", this.props.error.message);\n    } else {\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 17\n        }\n      }, __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 21\n        }\n      }, \"Github Users\"), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 21\n        }\n      }), this.props.data.map((item, index) => __jsx(\"div\", {\n        key: index,\n        className: \"UserBlock\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 25\n        }\n      }, __jsx(\"img\", {\n        src: item.avatar_url,\n        alt: \"User Icon\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 29\n        }\n      }), __jsx(\"div\", {\n        className: \"UserDetails\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 29\n        }\n      }, __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 33\n        }\n      }, \"Username: \", item.login), __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 33\n        }\n      }, \"ID: \", item.id)))));\n    }\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9HaXRodWJVc2Vycy5qcz8xZWRhIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiYXhpb3MiLCJnZXQiLCJkYXRhIiwiZSIsImVycm9yIiwicmVuZGVyIiwicHJvcHMiLCJtZXNzYWdlIiwibWFwIiwiaXRlbSIsImluZGV4IiwiYXZhdGFyX3VybCIsImxvZ2luIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLDZFQUFjQSw0Q0FBSyxDQUFDQyxTQUFwQixDQUE4QjtBQUN6QyxlQUFhQyxlQUFiLEdBQStCO0FBQzNCLFFBQUk7QUFDQSxZQUFNQyxHQUFHLEdBQUcsTUFBTUMsNENBQUssQ0FBQ0MsR0FBTixDQUFVLDhCQUFWLENBQWxCO0FBQ0EsYUFBTztBQUFFQyxZQUFJLEVBQUVILEdBQUcsQ0FBQ0c7QUFBWixPQUFQO0FBQ0gsS0FIRCxDQUdFLE9BQU9DLENBQVAsRUFBVTtBQUNSLGFBQU87QUFBRUMsYUFBSyxFQUFFRDtBQUFULE9BQVA7QUFDSDtBQUNKOztBQUVERSxRQUFNLEdBQUc7QUFDTCxRQUFJLEtBQUtDLEtBQUwsQ0FBV0YsS0FBZixFQUFzQjtBQUNsQixhQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWEsS0FBS0UsS0FBTCxDQUFXRixLQUFYLENBQWlCRyxPQUE5QixDQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsYUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixFQUdLLEtBQUtELEtBQUwsQ0FBV0osSUFBWCxDQUFnQk0sR0FBaEIsQ0FBb0IsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQ2pCO0FBQUssV0FBRyxFQUFFQSxLQUFWO0FBQWlCLGlCQUFTLEVBQUMsV0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssV0FBRyxFQUFFRCxJQUFJLENBQUNFLFVBQWY7QUFBMkIsV0FBRyxFQUFDLFdBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixFQUVJO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFjRixJQUFJLENBQUNHLEtBQW5CLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFRSCxJQUFJLENBQUNJLEVBQWIsQ0FGSixDQUZKLENBREgsQ0FITCxDQURKO0FBZUg7QUFDSjs7QUE5QndDLEMiLCJmaWxlIjoiLi9wYWdlcy9HaXRodWJVc2Vycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2VycycpO1xuICAgICAgICAgICAgcmV0dXJuIHsgZGF0YTogcmVzLmRhdGEgfTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGUgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PkVycm9yOiB7dGhpcy5wcm9wcy5lcnJvci5tZXNzYWdlfTwvZGl2PjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkdpdGh1YiBVc2VyczwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdVc2VyQmxvY2snPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmF2YXRhcl91cmx9IGFsdD0nVXNlciBJY29uJz48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVXNlckRldGFpbHMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Vc2VybmFtZToge2l0ZW0ubG9naW59PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5JRDoge2l0ZW0uaWR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/GithubUsers.js\n");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./style.css\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });