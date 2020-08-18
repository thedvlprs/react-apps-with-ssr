module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/TestAPI.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/TestAPI.js":
/*!******************************!*\
  !*** ./pages/api/TestAPI.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* import { graphql, buildSchema } from 'graphql';\n\nconst schema = buildSchema(`\n  type Query {\n    name: String,\n    address: String,\n    contact: String,\n    bloodgroup: String,\n    favouriteSnack: String,\n    vehicle: String\n  }\n`); */\nconst data = {\n  name: 'John Doe',\n  address: '7th Avenue, Brooklyn',\n  contact: '099251456',\n  bloodgroup: 'A +ve',\n  favouriteSnack: 'Hotdog',\n  vehicle: 'Hyundai Tucson'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'application/json');\n  res.end(JSON.stringify(data));\n});\n/* export default async (req, res) => {\n    const response = await graphql(schema, req.body.query, data);\n    res.end(JSON.stringify(response.data));\n}; *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvVGVzdEFQSS5qcz9hMTNiIl0sIm5hbWVzIjpbImRhdGEiLCJuYW1lIiwiYWRkcmVzcyIsImNvbnRhY3QiLCJibG9vZGdyb3VwIiwiZmF2b3VyaXRlU25hY2siLCJ2ZWhpY2xlIiwicmVxIiwicmVzIiwic3RhdHVzQ29kZSIsInNldEhlYWRlciIsImVuZCIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQWFBLE1BQU1BLElBQUksR0FBRztBQUNUQyxNQUFJLEVBQUUsVUFERztBQUVUQyxTQUFPLEVBQUUsc0JBRkE7QUFHVEMsU0FBTyxFQUFFLFdBSEE7QUFJVEMsWUFBVSxFQUFFLE9BSkg7QUFLVEMsZ0JBQWMsRUFBRSxRQUxQO0FBTVRDLFNBQU8sRUFBRTtBQU5BLENBQWI7QUFTZSxnRUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDekJBLEtBQUcsQ0FBQ0MsVUFBSixHQUFpQixHQUFqQjtBQUNBRCxLQUFHLENBQUNFLFNBQUosQ0FBYyxjQUFkLEVBQThCLGtCQUE5QjtBQUNBRixLQUFHLENBQUNHLEdBQUosQ0FBUUMsSUFBSSxDQUFDQyxTQUFMLENBQWViLElBQWYsQ0FBUjtBQUNILENBSkQ7QUFNQSIsImZpbGUiOiIuL3BhZ2VzL2FwaS9UZXN0QVBJLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaW1wb3J0IHsgZ3JhcGhxbCwgYnVpbGRTY2hlbWEgfSBmcm9tICdncmFwaHFsJztcblxuY29uc3Qgc2NoZW1hID0gYnVpbGRTY2hlbWEoYFxuICB0eXBlIFF1ZXJ5IHtcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgYWRkcmVzczogU3RyaW5nLFxuICAgIGNvbnRhY3Q6IFN0cmluZyxcbiAgICBibG9vZGdyb3VwOiBTdHJpbmcsXG4gICAgZmF2b3VyaXRlU25hY2s6IFN0cmluZyxcbiAgICB2ZWhpY2xlOiBTdHJpbmdcbiAgfVxuYCk7ICovXG5cbmNvbnN0IGRhdGEgPSB7XG4gICAgbmFtZTogJ0pvaG4gRG9lJyxcbiAgICBhZGRyZXNzOiAnN3RoIEF2ZW51ZSwgQnJvb2tseW4nLFxuICAgIGNvbnRhY3Q6ICcwOTkyNTE0NTYnLFxuICAgIGJsb29kZ3JvdXA6ICdBICt2ZScsXG4gICAgZmF2b3VyaXRlU25hY2s6ICdIb3Rkb2cnLFxuICAgIHZlaGljbGU6ICdIeXVuZGFpIFR1Y3NvbicsXG59O1xuXG5leHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IHtcbiAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcbiAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xufTtcblxuLyogZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBncmFwaHFsKHNjaGVtYSwgcmVxLmJvZHkucXVlcnksIGRhdGEpO1xuICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSkpO1xufTsgKi9cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/TestAPI.js\n");

/***/ })

/******/ });